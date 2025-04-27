export type TemplateCategory = "All" | "Professional" | "Creative" | "Modern" | "Simple" | "ATS-Optimized"
export type TemplateIndustry =
  | "All Industries"
  | "Technology"
  | "Business"
  | "Healthcare"
  | "Creative"
  | "Sales"
  | "Finance"
  | "HR"

export interface Template {
  id: string
  name: string
  description: string
  image: string
  category: TemplateCategory
  industry: TemplateIndustry
  atsScore: number
  popular?: boolean
  new?: boolean
  featured?: boolean
}

export const templates: Template[] = [
  {
    id: "general-ats98",
    name: "ATS Professional",
    description:
      "Our highest-rated ATS-optimized template with a 98% pass rate. Perfect for all industries and experience levels.",
    image: "/images/templates/general-ats98.png",
    category: "ATS-Optimized",
    industry: "All Industries",
    atsScore: 98,
    featured: true,
    popular: true,
  },
  {
    id: "clean-modern",
    name: "Clean Modern",
    description: "A clean, modern template with a minimalist design. Ideal for tech professionals and executives.",
    image: "/images/templates/clean-modern.png",
    category: "Modern",
    industry: "Technology",
    atsScore: 95,
  },
  {
    id: "highlight",
    name: "Executive Highlight",
    description: "A professional template with strategic highlights for senior positions and management roles.",
    image: "/images/templates/highlight.png",
    category: "Professional",
    industry: "Business",
    atsScore: 92,
  },
  {
    id: "skill-based",
    name: "Skill Showcase",
    description: "A visually appealing template that puts your skills front and center with a modern sidebar design.",
    image: "/images/templates/skill-based.png",
    category: "Creative",
    industry: "Sales",
    atsScore: 90,
    new: true,
  },
  {
    id: "modern-two-column",
    name: "Modern Two-Column",
    description: "A balanced two-column layout that maximizes space while maintaining readability.",
    image: "/images/templates/modern-two-column.png",
    category: "Modern",
    industry: "Technology",
    atsScore: 94,
  },
  {
    id: "traditional",
    name: "Traditional Professional",
    description: "A classic resume format trusted by hiring managers across all industries.",
    image: "/images/templates/traditional.png",
    category: "Professional",
    industry: "Finance",
    atsScore: 96,
    popular: true,
  },
  {
    id: "tech",
    name: "Tech Specialist",
    description: "Designed specifically for tech roles with sections for technical skills and projects.",
    image: "/images/templates/tech.png",
    category: "Modern",
    industry: "Technology",
    atsScore: 93,
  },
  {
    id: "professional",
    name: "Creative Professional",
    description: "A perfect balance of creativity and professionalism for creative industry roles.",
    image: "/images/templates/professional.png",
    category: "Creative",
    industry: "Creative",
    atsScore: 91,
  },
]

export const categories: TemplateCategory[] = ["All", "Professional", "Creative", "Modern", "Simple", "ATS-Optimized"]
export const industries: TemplateIndustry[] = [
  "All Industries",
  "Technology",
  "Business",
  "Healthcare",
  "Creative",
  "Sales",
  "Finance",
  "HR",
]
