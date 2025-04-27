import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TemplateHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Professional Resume Templates
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose from our collection of ATS-optimized templates designed to help you land your dream job.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link href="/resume-wizard">Create Your Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
