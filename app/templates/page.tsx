import type { Metadata } from "next"
import TemplateHero from "@/components/templates/template-hero"
import TemplateFilters from "@/components/templates/template-filters"
import TemplateGrid from "@/components/templates/template-grid"
import TemplateCTA from "@/components/templates/template-cta"

export const metadata: Metadata = {
  title: "Resume Templates | ResuMeUp",
  description:
    "Browse our collection of professional, ATS-optimized resume templates for every industry and career level.",
}

export default function TemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TemplateHero />
      <TemplateFilters />
      <TemplateGrid />
      <TemplateCTA />
    </div>
  )
}
