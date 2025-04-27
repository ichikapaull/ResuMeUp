"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SuccessStoryCard from "@/components/success-story-card"
import { getFeaturedSuccessStories } from "@/lib/success-stories-data"
import Link from "next/link"

export default function SuccessStoriesSection() {
  const featuredStories = getFeaturedSuccessStories()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }

    // Initial update
    updateVisibleCount()

    // Add event listener for window resize
    window.addEventListener('resize', updateVisibleCount)

    // Cleanup
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const maxIndex = Math.max(0, featuredStories.length - visibleCount)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const visibleStories = featuredStories.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">Success Stories</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Real Results, Real Careers</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how job seekers like you transformed their careers with ResuMeUp.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Navigation controls for larger screens */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white"
              aria-label="Previous success story"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white"
              aria-label="Next success story"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Success stories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleStories.map((story) => (
              <SuccessStoryCard key={story.id} {...story} />
            ))}
          </div>

          {/* Navigation controls for mobile */}
          <div className="flex justify-center mt-8 gap-4 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous success story"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              aria-label="Next success story"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-brand-600 hover:bg-brand-700" asChild>
            <Link href="/success-stories">View All Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
