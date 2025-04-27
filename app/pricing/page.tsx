import type { Metadata } from "next"
import PricingSection from "@/components/pricing-section"
import PricingFAQ from "@/components/pricing-faq"
import PricingComparison from "@/components/pricing-comparison"
import PricingTestimonials from "@/components/pricing-testimonials"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing | ResuMeUp",
  description:
    "Choose the perfect plan for your resume building needs. Affordable options for job seekers at every stage.",
  keywords: "resume pricing, resume builder cost, professional resume pricing, ResuMeUp plans",
}

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">Pricing</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-500 max-w-[700px]">
              Choose the perfect plan for your career stage. All plans include ATS-friendly templates and professional
              designs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="#comparison">Compare Plans</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#faq">Pricing FAQ</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <PricingSection />
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section id="comparison" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Detailed Plan Comparison</h2>
            <p className="text-xl text-gray-500 max-w-[700px]">
              See exactly what features are included in each plan to make the best choice for your needs.
            </p>
          </div>
          <PricingComparison />
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <PricingTestimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-500 max-w-[700px]">
              Find answers to common questions about our pricing and plans.
            </p>
          </div>
          <PricingFAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-brand-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Build Your Perfect Resume?</h2>
            <p className="text-xl text-gray-600">
              Join thousands of job seekers who have successfully used ResuMeUp to land their dream jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Need help choosing?{" "}
              <Link href="/contact" className="text-brand-600 hover:underline">
                Talk to our team
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
