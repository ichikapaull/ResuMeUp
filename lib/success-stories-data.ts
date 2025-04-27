export interface SuccessStory {
  id: string
  name: string
  role: string
  company: string
  companyLogo?: string
  image: string
  shortTestimonial: string
  fullTestimonial: string
  industry: string
  achievement: string
  timeToJob: string
  slug: string
  resumeTemplate: string
  beforeImage?: string
  afterImage?: string
  jobApplications: number
  interviews: number
  featured: boolean
  stats: {
    label: string
    value: string
  }[]
  challenges: string[]
  solutions: string[]
  quote?: string
  videoTestimonial?: string
}

export const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Alex Morgan",
    role: "Senior Product Manager",
    company: "TechVision Inc.",
    companyLogo: "/images/success-stories/companies/techvision.png",
    image: "/images/success-stories/alex-morgan.png",
    shortTestimonial:
      "ResuMeUp transformed my job search. I went from zero callbacks to multiple interviews in just two weeks.",
    fullTestimonial:
      "After six months of job searching with no success, I was ready to give up. My old resume wasn't getting through ATS systems, and I rarely heard back from companies. A friend recommended ResuMeUp, and it changed everything. The ATS-optimized templates and AI suggestions helped me highlight achievements I hadn't even thought to include. Within two weeks of using my new resume, I received callbacks from 8 companies, had 5 interviews, and landed my dream job at TechVision with a 30% salary increase from my previous role. The investment in ResuMeUp paid for itself hundreds of times over.",
    industry: "Technology",
    achievement: "30% salary increase",
    timeToJob: "3 weeks",
    slug: "alex-morgan-product-manager",
    resumeTemplate: "Professional",
    beforeImage: "/images/success-stories/before-after/alex-before.png",
    afterImage: "/images/success-stories/before-after/alex-after.png",
    jobApplications: 15,
    interviews: 5,
    featured: true,
    stats: [
      { label: "Applications Before", value: "45" },
      { label: "Interviews Before", value: "0" },
      { label: "Applications After", value: "15" },
      { label: "Interviews After", value: "5" },
      { label: "Time to Hire", value: "21 days" },
    ],
    challenges: [
      "Resume not passing ATS systems",
      "Difficulty showcasing relevant achievements",
      "Outdated formatting and structure",
      "No clear career progression visible",
    ],
    solutions: [
      "ATS-optimized template with proper keyword integration",
      "Achievement-focused bullet points with quantifiable results",
      "Modern, clean design with clear hierarchy",
      "Strategic organization of experience to show growth",
    ],
    quote:
      "The difference between my old resume and my ResuMeUp resume was night and day. It wasn't just about looks—it was about strategy.",
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Financial Analyst",
    company: "Global Investments",
    companyLogo: "/images/success-stories/companies/global-investments.png",
    image: "/images/success-stories/priya-sharma.png",
    shortTestimonial:
      "ResuMeUp helped me transition industries seamlessly. The targeted templates made all the difference.",
    fullTestimonial:
      "Changing industries from retail management to finance seemed impossible. I had the skills and education, but couldn't get my foot in the door. ResuMeUp's industry-specific templates and skill highlighting features helped me translate my retail experience into valuable financial skills. The resume analyzer pointed out gaps in my resume that I was able to address. Within a month, I secured a position at Global Investments, successfully making the career transition I had been attempting for over a year.",
    industry: "Finance",
    achievement: "Career transition",
    timeToJob: "1 month",
    slug: "priya-sharma-financial-analyst",
    resumeTemplate: "Executive",
    jobApplications: 12,
    interviews: 3,
    featured: true,
    stats: [
      { label: "Applications Before", value: "30+" },
      { label: "Career Change Success", value: "100%" },
      { label: "Time Saved", value: "11 months" },
    ],
    challenges: [
      "Transitioning between unrelated industries",
      "Lack of direct experience in target field",
      "Difficulty translating transferable skills",
    ],
    solutions: [
      "Industry-specific template highlighting transferable skills",
      "Strategic organization emphasizing relevant experience",
      "Skills section optimized for finance industry keywords",
    ],
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "Senior Software Engineer",
    company: "InnovateTech",
    companyLogo: "/images/success-stories/companies/innovatetech.png",
    image: "/images/success-stories/marcus-johnson.png",
    shortTestimonial:
      "As a developer, I was skeptical about resume tools, but ResuMeUp's technical focus impressed me.",
    fullTestimonial:
      "I've always created my own resumes, believing that as a developer I knew best how to present my skills. After being passed over for several positions I was qualified for, I decided to try ResuMeUp. The technical resume templates were impressive, with smart ways to showcase projects and skills that I hadn't considered. The ATS optimization was eye-opening—I discovered my previous resume was being filtered out due to formatting issues. With my ResuMeUp resume, I landed a senior position at InnovateTech with a compensation package exceeding my expectations by 25%.",
    industry: "Software Development",
    achievement: "25% higher offer",
    timeToJob: "2 weeks",
    slug: "marcus-johnson-software-engineer",
    resumeTemplate: "Technical",
    videoTestimonial: "https://www.youtube.com/embed/example",
    jobApplications: 8,
    interviews: 4,
    featured: true,
    stats: [
      { label: "Response Rate Before", value: "15%" },
      { label: "Response Rate After", value: "75%" },
      { label: "Salary Increase", value: "25%" },
    ],
    challenges: [
      "Technical skills not properly highlighted",
      "Portfolio projects buried in resume",
      "ATS formatting issues with custom resume",
    ],
    solutions: [
      "Technical template with prominent skills section",
      "Project showcase with results and technologies used",
      "ATS-friendly format while maintaining technical focus",
    ],
  },
  {
    id: "4",
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "Brand Elevate",
    companyLogo: "/images/success-stories/companies/brand-elevate.png",
    image: "/images/success-stories/emma-wilson.png",
    shortTestimonial:
      "After 15 years at one company, I needed help showcasing my experience. ResuMeUp made me look current and qualified.",
    fullTestimonial:
      "Having been with the same company for 15 years, I was worried my resume would appear stagnant. ResuMeUp helped me structure my extensive experience to highlight growth, leadership, and evolving responsibilities. The modern templates made my experience look current rather than dated. The resume analyzer identified areas where I needed to quantify my achievements, which made a huge difference. I received compliments on my resume in every interview, and secured a director-level position that represented a significant step up in my career.",
    industry: "Marketing",
    achievement: "Director promotion",
    timeToJob: "6 weeks",
    slug: "emma-wilson-marketing-director",
    resumeTemplate: "Modern",
    jobApplications: 10,
    interviews: 6,
    featured: false,
    stats: [
      { label: "Years at Previous Job", value: "15" },
      { label: "Interview Success Rate", value: "60%" },
      { label: "Career Level Jump", value: "2 levels" },
    ],
    challenges: [
      "Long tenure at one company appearing stagnant",
      "Outdated resume format and style",
      "Difficulty showing career progression within same company",
    ],
    solutions: [
      "Modern template with fresh, current design",
      "Strategic organization showing internal promotions and growth",
      "Achievement-focused content with measurable results",
    ],
  },
  {
    id: "5",
    name: "David Chen",
    role: "Recent Graduate",
    company: "HealthTech Solutions",
    companyLogo: "/images/success-stories/companies/healthtech.png",
    image: "/images/success-stories/david-chen.png",
    shortTestimonial:
      "As a recent graduate with limited experience, ResuMeUp helped me stand out in a competitive job market.",
    fullTestimonial:
      "Graduating during a pandemic made an already competitive job market even tougher. With limited professional experience, I struggled to create a resume that would get noticed. ResuMeUp's entry-level templates and suggestions helped me highlight relevant coursework, projects, and internships in a professional way. The AI content suggestions gave me ideas for better describing my limited experience. After using ResuMeUp, I started getting responses and landed a great entry-level position at HealthTech Solutions within two months of graduating.",
    industry: "Healthcare Technology",
    achievement: "First job after college",
    timeToJob: "2 months",
    slug: "david-chen-recent-graduate",
    resumeTemplate: "Entry-Level",
    jobApplications: 25,
    interviews: 3,
    featured: false,
    stats: [
      { label: "Applications Before", value: "40+" },
      { label: "Response Rate Before", value: "5%" },
      { label: "Response Rate After", value: "32%" },
    ],
    challenges: [
      "Limited professional experience",
      "Highly competitive entry-level market",
      "Difficulty standing out among graduates",
    ],
    solutions: [
      "Entry-level template emphasizing education and projects",
      "Strategic highlighting of internships and relevant coursework",
      "Skills section optimized for industry-specific requirements",
    ],
  },
]

export function getFeaturedSuccessStories() {
  return successStories.filter((story) => story.featured)
}

export function getSuccessStoryBySlug(slug: string) {
  return successStories.find((story) => story.slug === slug)
}

export function getSuccessStoriesByIndustry(industry: string) {
  return successStories.filter((story) => story.industry === industry)
}
