"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"
import Link from "next/link"

// Sample template data
const templates = [
  {
    id: 1,
    name: "Professional",
    category: "Corporate",
    thumbnail: "/placeholder.svg?height=400&width=300",
    popularity: "Most Popular",
  },
  {
    id: 2,
    name: "Modern",
    category: "Creative",
    thumbnail: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Minimalist",
    category: "Simple",
    thumbnail: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Executive",
    category: "Corporate",
    thumbnail: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    name: "Creative",
    category: "Design",
    thumbnail: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    name: "Technical",
    category: "IT",
    thumbnail: "/placeholder.svg?height=400&width=300",
  },
]

export default function TemplateShowcase() {
  const [currentPage, setCurrentPage] = useState(0)
  const templatesPerPage = 3
  const totalPages = Math.ceil(templates.length / templatesPerPage)

  const visibleTemplates = templates.slice(currentPage * templatesPerPage, (currentPage + 1) * templatesPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleTemplates.map((template) => (
          <Card key={template.id} className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
            <div className="relative">
              <img
                src={template.thumbnail || "/placeholder.svg"}
                alt={`${template.name} template preview`}
                className="w-full h-auto object-cover aspect-[3/4]"
                width={300}
                height={400}
              />
              {template.popularity && (
                <div className="absolute top-2 right-2 bg-brand-600 text-white text-xs px-2 py-1 rounded-full">
                  {template.popularity}
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" size="sm" className="gap-1" asChild>
                  <Link href={`/templates/${template.id}`}>
                    <Eye className="h-4 w-4" />
                    Preview
                  </Link>
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{template.name}</h3>
                  <p className="text-sm text-gray-500">{template.category}</p>
                </div>
                <Button variant="outline" size="sm" className="text-brand-600 border-brand-600" asChild>
                  <Link href={`/templates/${template.id}/use`}>Use</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <Button variant="outline" size="icon" onClick={prevPage} aria-label="Previous page">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm">
          Page {currentPage + 1} of {totalPages}
        </span>
        <Button variant="outline" size="icon" onClick={nextPage} aria-label="Next page">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
