"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"

export default function PricingTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      plan: "Professional",
      avatar: "/images/testimonials/user1.jpg",
      quote:
        "The Professional plan was perfect for my needs. I created multiple resumes tailored to different job applications, and the AI suggestions helped me highlight achievements I wouldn't have thought to include.",
      highlight: "Landed job in 3 weeks",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      plan: "Professional",
      avatar: "/images/testimonials/user2.jpg",
      quote:
        "As a developer, I was skeptical about using a resume builder, but the technical templates and ATS optimization were worth every penny. The ability to export in multiple formats was also extremely useful.",
      highlight: "25% higher salary offer",
    },
    {
      name: "Emily Rodriguez",
      role: "HR Director",
      plan: "Enterprise",
      avatar: "/images/testimonials/user3.jpg",
      quote:
        "We implemented ResuMeUp across our entire career services department. The team management features and custom branding options have been invaluable, and our students are seeing much better results with their job applications.",
      highlight: "Improved placement rates by 40%",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">What Our Customers Say</h2>
        <p className="text-xl text-gray-500 max-w-[700px] mx-auto">
          Hear from people who have successfully used our plans to advance their careers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Badge variant="outline" className="bg-brand-50 text-brand-700 border-brand-200">
                  {testimonial.plan} Plan
                </Badge>
              </div>

              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>

              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                {testimonial.highlight}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
