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
    professional: "/images/templates/professional.png",
    modern: "/images/templates/modern.png",
    minimal: "/images/templates/minimal.png",
    executive: "/images/templates/executive.png",
    creative: "/images/templates/creative.png",
    technical: "/images/templates/technical.png",
  },

  // Feature illustrations
  features: {
    atsOptimization: "/images/features/ats-optimization.png",
    aiTools: "/images/features/ai-tools.png",
    customization: "/images/features/customization.png",
    analytics: "/images/features/analytics.png",
    templates: "/images/features/templates-showcase.png",
  },

  // User testimonial avatars
  testimonials: {
    user1: "/images/testimonials/user1.jpg",
    user2: "/images/testimonials/user2.jpg",
    user3: "/images/testimonials/user3.jpg",
    user4: "/images/testimonials/user4.jpg",
    user5: "/images/testimonials/user5.jpg",
  },

  // Resume examples for preview
  examples: {
    professional: "/images/examples/professional-resume.png",
    modern: "/images/examples/modern-resume.png",
    minimal: "/images/examples/minimal-resume.png",
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

// Helper function to get placeholder image
export function getPlaceholderImage(width: number, height: number): string {
  return `https://via.placeholder.com/${width}x${height}?text=ResuMeUp`
}
