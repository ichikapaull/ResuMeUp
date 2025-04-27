"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"
import { images } from "@/lib/image-assets"
import Link from "next/link"

// Sample testimonial data with updated image references
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Manager",
    company: "TechCorp",
    avatar: images.testimonials.user1,
    quote:
      "ResuMeUp helped me land my dream job! The templates are professional and the AI suggestions made my resume stand out from the competition.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Software Engineer",
    company: "InnovateTech",
    avatar: images.testimonials.user2,
    quote:
      "As a developer, I was skeptical about using a resume builder, but ResuMeUp's technical templates were perfect for showcasing my skills and projects.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "HR Director",
    company: "Global Enterprises",
    avatar: images.testimonials.user3,
    quote:
      "From the HR perspective, I can confirm that resumes created with ResuMeUp consistently pass our ATS and catch our recruiters' attention.",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Recent Graduate",
    company: "University of Technology",
    avatar: images.testimonials.user4 || "/images/testimonials/user4.jpg",
    quote:
      "As a recent graduate with limited experience, I was worried about my resume. ResuMeUp helped me highlight my skills and education effectively.",
  },
  {
    id: 5,
    name: "Priya Patel",
    position: "Financial Analyst",
    company: "Investment Partners",
    avatar: images.testimonials.user5 || "/images/testimonials/user5.jpg",
    quote:
      "ResuMeUp's professional templates and industry-specific suggestions helped me transition to a new role in finance with confidence.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Number of testimonials to show at once based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
      return 1
    }
    return 1
  }

  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, currentIndex, visibleCount])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - visibleCount + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length - visibleCount + 1) % (testimonials.length - visibleCount + 1),
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from people who have successfully landed their dream jobs using ResuMeUp.
            </p>
          </div>
        </div>

        <div className="mt-12 relative">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 text-brand-600">
                      <Quote className="h-8 w-8" />
                    </div>
                    <p className="text-gray-700 flex-grow mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="mr-4 relative h-12 w-12 rounded-full overflow-hidden">
                        <OptimizedImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - visibleCount}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* More testimonials button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-brand-600 hover:bg-brand-700" asChild>
            <Link href="/testimonials">More Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
