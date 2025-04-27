import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TemplateCTA() {
  return (
    <section className="w-full py-12 md:py-24 bg-brand-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Create Your Resume?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose your favorite template and start building your professional resume today.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link href="/resume-wizard">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
