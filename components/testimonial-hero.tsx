import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"

export default function TestimonialHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">Success Stories</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Real Results from Real People</h1>
          <p className="text-xl text-gray-500 max-w-[700px]">
            Discover how job seekers like you have transformed their careers with ResuMeUp.
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-xl font-bold">4.9/5</span>
            <span className="ml-2 text-gray-500">based on 2,500+ reviews</span>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="font-bold text-gray-500">G2</span>
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">G2 Crowd</div>
                <div className="text-xs text-gray-500">4.8/5 (500+ reviews)</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="font-bold text-gray-500">TC</span>
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">TrustCrowd</div>
                <div className="text-xs text-gray-500">4.9/5 (1,200+ reviews)</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="font-bold text-gray-500">CR</span>
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">CareerReviews</div>
                <div className="text-xs text-gray-500">4.7/5 (800+ reviews)</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link href="/signup">Try ResuMeUp Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#testimonials">Read Testimonials</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
