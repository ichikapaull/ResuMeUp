"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { categories, industries } from "@/lib/template-data"

export default function TemplateFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")

  return (
    <section className="w-full py-8 border-b">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-lg font-medium mb-2">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-brand-600 hover:bg-brand-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Industries</h2>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className={selectedIndustry === industry ? "bg-brand-600 hover:bg-brand-700" : ""}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
