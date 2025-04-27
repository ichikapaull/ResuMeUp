import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TestimonialCTA() {
  return (
    <section className="w-full py-12 md:py-24 bg-brand-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-600">
            Join thousands of job seekers who have successfully used ResuMeUp to land their dream jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link href="/signup">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/templates">Browse Templates</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
