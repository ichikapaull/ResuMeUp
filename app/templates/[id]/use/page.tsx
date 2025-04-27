import type { Metadata } from "next"
import { templates } from "@/lib/template-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface UseTemplatePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: UseTemplatePageProps): Promise<Metadata> {
  const template = templates.find((t) => t.id === params.id)

  if (!template) {
    return {
      title: "Template Not Found | ResuMeUp",
    }
  }

  return {
    title: `Use ${template.name} Template | ResuMeUp`,
    description: `Start creating your resume with the ${template.name} template. ATS score: ${template.atsScore}%.`,
  }
}

export default function UseTemplatePage({ params }: UseTemplatePageProps) {
  const template = templates.find((t) => t.id === params.id)

  if (!template) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="mb-6">
          <Link
            href={`/templates/${params.id}`}
            className="flex items-center text-brand-600 hover:text-brand-700 gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Template Details</span>
          </Link>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Start Creating Your Resume</h1>
          <p className="text-gray-600 mb-8">
            You've selected the {template.name} template. Continue to our resume builder to customize your resume.
          </p>

          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href={`/resume-wizard?template=${params.id}`}>Continue to Resume Builder</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
