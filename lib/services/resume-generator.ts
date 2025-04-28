import { html2pdf } from 'html2pdf.js';
import { openai } from '@/lib/openai';

export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
  }>;
  skills: string[];
  projects?: Array<{
    name: string;
    description: string;
    technologies: string[];
  }>;
}

export class ResumeGenerator {
  private template: string;
  private data: ResumeData;

  constructor(template: string, data: ResumeData) {
    this.template = template;
    this.data = data;
  }

  private async enhanceWithAI(content: string): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a professional resume writer. Enhance the following content to make it more impactful and professional while maintaining the original meaning."
          },
          {
            role: "user",
            content: content
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      });

      return response.choices[0].message.content || content;
    } catch (error) {
      console.error('Error enhancing content with AI:', error);
      return content;
    }
  }

  private async fillTemplate(): Promise<string> {
    let filledTemplate = this.template;

    // Fill personal info
    filledTemplate = filledTemplate.replace('{{name}}', this.data.personalInfo.name);
    filledTemplate = filledTemplate.replace('{{email}}', this.data.personalInfo.email);
    filledTemplate = filledTemplate.replace('{{phone}}', this.data.personalInfo.phone);
    filledTemplate = filledTemplate.replace('{{location}}', this.data.personalInfo.location);
    filledTemplate = filledTemplate.replace('{{linkedin}}', this.data.personalInfo.linkedin || '');
    filledTemplate = filledTemplate.replace('{{website}}', this.data.personalInfo.website || '');

    // Fill summary
    const enhancedSummary = await this.enhanceWithAI(this.data.summary);
    filledTemplate = filledTemplate.replace('{{summary}}', enhancedSummary);

    // Fill experience
    let experienceHtml = '';
    for (const exp of this.data.experience) {
      const enhancedDescription = await Promise.all(
        exp.description.map(desc => this.enhanceWithAI(desc))
      );
      experienceHtml += `
        <div class="experience-item">
          <h3>${exp.title}</h3>
          <div class="company">${exp.company} | ${exp.location}</div>
          <div class="date">${exp.startDate} - ${exp.endDate}</div>
          <ul>
            ${enhancedDescription.map(desc => `<li>${desc}</li>`).join('')}
          </ul>
        </div>
      `;
    }
    filledTemplate = filledTemplate.replace('{{experience}}', experienceHtml);

    // Fill education
    let educationHtml = '';
    for (const edu of this.data.education) {
      educationHtml += `
        <div class="education-item">
          <h3>${edu.degree}</h3>
          <div class="school">${edu.school} | ${edu.location}</div>
          <div class="date">${edu.startDate} - ${edu.endDate}</div>
          ${edu.description ? `<p>${edu.description}</p>` : ''}
        </div>
      `;
    }
    filledTemplate = filledTemplate.replace('{{education}}', educationHtml);

    // Fill skills
    const skillsHtml = this.data.skills.map(skill => `<span class="skill">${skill}</span>`).join('');
    filledTemplate = filledTemplate.replace('{{skills}}', skillsHtml);

    // Fill projects if they exist
    if (this.data.projects) {
      let projectsHtml = '';
      for (const project of this.data.projects) {
        const enhancedDescription = await this.enhanceWithAI(project.description);
        projectsHtml += `
          <div class="project-item">
            <h3>${project.name}</h3>
            <p>${enhancedDescription}</p>
            <div class="technologies">
              ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
            </div>
          </div>
        `;
      }
      filledTemplate = filledTemplate.replace('{{projects}}', projectsHtml);
    }

    return filledTemplate;
  }

  public async generatePDF(): Promise<Blob> {
    const filledTemplate = await this.fillTemplate();
    
    const element = document.createElement('div');
    element.innerHTML = filledTemplate;
    document.body.appendChild(element);

    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const pdf = await html2pdf().set(opt).from(element).output('blob');
    document.body.removeChild(element);

    return pdf;
  }
} 