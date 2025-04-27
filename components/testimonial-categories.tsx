"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TestimonialCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Testimonials" },
    { id: "recent-grads", name: "Recent Graduates" },
    { id: "career-changers", name: "Career Changers" },
    { id: "executives", name: "Executives" },
    { id: "tech", name: "Tech Industry" },
    { id: "finance", name: "Finance" },
    { id: "healthcare", name: "Healthcare" },
    { id: "creative", name: "Creative Fields" },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center">Browse by Category</h2>

      {/* Desktop view: Tabs */}
      <div className="hidden md:block">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Mobile view: Scrollable buttons */}
      <div className="md:hidden overflow-x-auto pb-4">
        <div className="flex space-x-2 min-w-max">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
