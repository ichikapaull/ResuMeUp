import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TestimonialGrid from "@/components/testimonial-grid"
import TestimonialHero from "@/components/testimonial-hero"
import TestimonialCategories from "@/components/testimonial-categories"
import TestimonialCTA from "@/components/testimonial-cta"

export const metadata: Metadata = {
  title: "Testimonials | ResuMeUp",
  description: "Read success stories from job seekers who found their dream jobs using ResuMeUp.",
  keywords: "resume testimonials, job seeker success stories, resume builder reviews, ResuMeUp testimonials",
}

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <TestimonialHero />

      {/* Categories/Filter Section */}
      <section className="w-full py-8 md:py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <TestimonialCategories />
        </div>
      </section>

      {/* Main Testimonials Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <TestimonialGrid />
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Video Testimonials</h2>
            <p className="text-xl text-gray-500 max-w-[700px]">
              Watch our customers share their experiences with ResuMeUp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Sarah's Journey to Success</h3>
                  <p className="text-sm text-gray-500">Marketing Manager at TechCorp</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="https://www.youtube.com/channel/example" target="_blank" rel="noopener noreferrer">
                View More on YouTube
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <TestimonialCTA />
    </div>
  )
}
