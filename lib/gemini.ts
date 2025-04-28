import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate?: string;
    gpa?: string;
  }>;
  skills: string[];
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  languages?: Array<{
    language: string;
    proficiency: string;
  }>;
}

export async function generateResumeHTML(resumeData: ResumeData) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    Create a professional HTML resume using the following data:
    ${JSON.stringify(resumeData, null, 2)}
    
    Requirements:
    - Use semantic HTML5
    - Include clean, professional CSS styles inline
    - Make it print-friendly
    - Ensure proper spacing and typography
    - Make it ATS-friendly
    - Use a modern, professional design
    - Include proper meta tags
    - Make it responsive
    - Use a clean color scheme
    - Include proper section headings
    - Format dates consistently
    - Use bullet points for lists
    - Include proper spacing between sections
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating resume HTML:', error);
    throw new Error('Failed to generate resume HTML');
  }
} 