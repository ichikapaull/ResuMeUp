import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowLeft, Download, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { templates } from "@/lib/template-data"
import { notFound } from "next/navigation"

interface TemplateDetailPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: TemplateDetailPageProps): Promise<Metadata> {
  const template = templates.find((t) => t.id === params.id)

  if (!template) {
    return {
      title: "Template Not Found | ResuMeUp",
    }
  }

  return {
    title: `${template.name} Resume Template | ResuMeUp`,
    description: template.description,
  }
}

export default function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const template = templates.find((t) => t.id === params.id)

  if (!template) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 mb-8">
            <Link href="/templates" className="flex items-center gap-2 text-brand-600 hover:text-brand-700">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Templates</span>
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{template.name}</h1>
            <p className="text-gray-500 md:text-xl">{template.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-xl shadow-xl">
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={`${template.name} resume template preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute top-4 right-4">
                {template.popular && <Badge className="bg-brand-600 hover:bg-brand-700">Popular</Badge>}
                {template.new && <Badge className="bg-green-600 hover:bg-green-700">New</Badge>}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Template Details</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-2 rounded-md text-sm font-medium">
                    <Star className="h-4 w-4 fill-green-500 text-green-500" />
                    <span>ATS Score: {template.atsScore}%</span>
                  </div>
                  <Badge variant="outline">{template.category}</Badge>
                  <Badge variant="outline">{template.industry}</Badge>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>ATS-Optimized Structure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Professional Layout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Easy to Customize</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Multiple Export Options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Recruiter-Approved Design</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 gap-2" asChild>
                  <Link href={`/resume-wizard?template=${template.id}`}>
                    <Download className="h-5 w-5" />
                    Use This Template
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Create Your Resume?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start building your professional resume with this template today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700" asChild>
                <Link href={`/resume-wizard?template=${template.id}`}>Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/templates">View Other Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
