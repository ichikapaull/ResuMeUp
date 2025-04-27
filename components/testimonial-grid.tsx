"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"

export default function TestimonialGrid() {
  const [visibleCount, setVisibleCount] = useState(9)

  // This would typically come from your data source
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "TechCorp",
      avatar: "/images/testimonials/user1.jpg",
      quote:
        "ResuMeUp helped me land my dream job! The templates are professional and the AI suggestions made my resume stand out from the competition.",
      category: "tech",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      company: "InnovateTech",
      avatar: "/images/testimonials/user2.jpg",
      quote:
        "As a developer, I was skeptical about using a resume builder, but ResuMeUp's technical templates were perfect for showcasing my skills and projects.",
      category: "tech",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "HR Director",
      company: "Global Enterprises",
      avatar: "/images/testimonials/user3.jpg",
      quote:
        "From the HR perspective, I can confirm that resumes created with ResuMeUp consistently pass our ATS and catch our recruiters' attention.",
      category: "executives",
      rating: 4,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Recent Graduate",
      company: "University of Technology",
      avatar: "/images/testimonials/user4.jpg",
      quote:
        "As a recent graduate with limited experience, I was worried about my resume. ResuMeUp helped me highlight my skills and education effectively.",
      category: "recent-grads",
      rating: 5,
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Financial Analyst",
      company: "Investment Partners",
      avatar: "/images/testimonials/user5.jpg",
      quote:
        "ResuMeUp's professional templates and industry-specific suggestions helped me transition to a new role in finance with confidence.",
      category: "finance",
      rating: 5,
    },
    {
      id: 6,
      name: "James Thompson",
      role: "Nurse Practitioner",
      company: "City Hospital",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "The healthcare-specific templates helped me showcase my clinical experience and certifications in a clean, professional format.",
      category: "healthcare",
      rating: 4,
    },
    {
      id: 7,
      name: "Sophia Martinez",
      role: "Graphic Designer",
      company: "Creative Studios",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "I needed a resume that showed my creativity while still being ATS-friendly. ResuMeUp delivered exactly what I needed!",
      category: "creative",
      rating: 5,
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "Career Changer",
      company: "Tech Innovations",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "Transitioning from finance to tech was challenging, but ResuMeUp helped me highlight my transferable skills and land interviews in my new field.",
      category: "career-changers",
      rating: 5,
    },
    {
      id: 9,
      name: "Olivia Johnson",
      role: "Executive Assistant",
      company: "Executive Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "The clean, professional templates helped me present my administrative skills in a way that impressed hiring managers.",
      category: "executives",
      rating: 4,
    },
    {
      id: 10,
      name: "Daniel Garcia",
      role: "Sales Manager",
      company: "Global Sales Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "I was able to quantify my achievements and present them in a compelling way. Received three job offers within two weeks!",
      category: "executives",
      rating: 5,
    },
    {
      id: 11,
      name: "Emma Wilson",
      role: "UX Designer",
      company: "Design Forward",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "As a designer, I appreciated the clean layouts and typography. My resume looked professional while still showcasing my creative background.",
      category: "creative",
      rating: 5,
    },
    {
      id: 12,
      name: "Thomas Lee",
      role: "Recent MBA Graduate",
      company: "Business School",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "The AI suggestions helped me translate my academic achievements into business value. Landed a management role right out of my MBA program!",
      category: "recent-grads",
      rating: 5,
    },
    {
      id: 13,
      name: "Aisha Patel",
      role: "Pharmacist",
      company: "Community Health",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "The healthcare templates were perfect for showcasing my clinical experience and certifications. Very impressed with the results!",
      category: "healthcare",
      rating: 4,
    },
    {
      id: 14,
      name: "Carlos Rodriguez",
      role: "Financial Planner",
      company: "Wealth Management",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "The professional templates helped me present my credentials and experience in a trustworthy, polished format.",
      category: "finance",
      rating: 5,
    },
    {
      id: 15,
      name: "Natalie Wong",
      role: "Career Changer",
      company: "Digital Marketing Agency",
      avatar: "/placeholder.svg?height=100&width=100",
      quote:
        "Switching from teaching to marketing was daunting, but ResuMeUp helped me highlight my transferable skills effectively.",
      category: "career-changers",
      rating: 5,
    },
  ]

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, testimonials.length))
  }

  return (
    <div id="testimonials">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What Our Users Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, visibleCount).map((testimonial) => (
          <Card key={testimonial.id} className="overflow-hidden border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <Badge variant="outline" className="bg-gray-50 text-gray-700">
                  {testimonial.category.replace("-", " ")}
                </Badge>
              </div>

              <div className="mb-4 text-brand-600">
                <Quote className="h-6 w-6" />
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleCount < testimonials.length && (
        <div className="flex justify-center mt-8">
          <Button onClick={loadMore} variant="outline" size="lg">
            Load More Testimonials
          </Button>
        </div>
      )}
    </div>
  )
}
