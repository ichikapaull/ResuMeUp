// Central repository for all image assets used in the application
// This makes it easier to manage and update images across the site

export const images = {
  // Hero section images
  hero: {
    main: "/images/hero-resume.jpg",
    background: "/images/hero-background.jpg",
  },

  // Resume templates
  templates: {
    professional: "/images/templates/professional.jpg",
    modern: "/images/templates/modern.jpg",
    minimal: "/images/templates/minimal.jpg",
    executive: "/images/templates/executive.jpg",
    creative: "/images/templates/creative.jpg",
    technical: "/images/templates/technical.jpg",
  },

  // Feature illustrations
  features: {
    atsOptimization: "/images/features/ats-optimization.jpg",
    aiTools: "/images/features/ai-tools.jpg",
    customization: "/images/features/customization.jpg",
    analytics: "/images/features/analytics.jpg",
    templates: "/images/features/templates-showcase.jpg",
  },

  // User testimonial avatars
  testimonials: {
    user1: "/images/testimonials/user1.jpg",
    user2: "/images/testimonials/user2.jpg",
    user3: "/images/testimonials/user3.jpg",
    user4: "/images/testimonials/user4.jpg",
    user5: "/images/testimonials/user5.jpg",
  },

  // Resume wizard illustrations
  wizard: {
    templateSelection: "/images/wizard/template-selection.jpg",
    personalInfo: "/images/wizard/personal-info.jpg",
    experience: "/images/wizard/experience.jpg",
    education: "/images/wizard/education.jpg",
    skills: "/images/wizard/skills.jpg",
    preview: "/images/wizard/preview.jpg",
  },

  // Resume examples for preview
  examples: {
    professional: "/images/examples/professional-resume.jpg",
    modern: "/images/examples/modern-resume.jpg",
    minimal: "/images/examples/minimal-resume.jpg",
  },

  // Brand and UI elements
  brand: {
    logo: "/images/brand/logo.svg",
    logomark: "/images/brand/logomark.svg",
    pattern: "/images/brand/pattern.svg",
  },

  // Icons and illustrations
  icons: {
    atsCheck: "/images/icons/ats-check.svg",
    aiSuggestion: "/images/icons/ai-suggestion.svg",
    customization: "/images/icons/customization.svg",
    download: "/images/icons/download.svg",
    privacy: "/images/icons/privacy.svg",
  },
}

// Helper function to get responsive image sizes
export function getResponsiveSizes(mobile: string, tablet: string, desktop: string): string {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`
}
