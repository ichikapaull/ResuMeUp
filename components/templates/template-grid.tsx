"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Download, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { templates, type TemplateCategory, type TemplateIndustry } from "@/lib/template-data"
import { motion } from "framer-motion"

export default function TemplateGrid() {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>("All")
  const [selectedIndustry, setSelectedIndustry] = useState<TemplateIndustry>("All Industries")
  const [filteredTemplates, setFilteredTemplates] = useState(templates)

  useEffect(() => {
    let filtered = templates

    if (selectedCategory !== "All") {
      filtered = filtered.filter((template) => template.category === selectedCategory)
    }

    if (selectedIndustry !== "All Industries") {
      filtered = filtered.filter((template) => template.industry === selectedIndustry)
    }

    setFilteredTemplates(filtered)
  }, [selectedCategory, selectedIndustry])

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl h-full flex flex-col">
                <div className="relative">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={`${template.name} resume template preview`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {template.popular && <Badge className="bg-brand-600 hover:bg-brand-700">Popular</Badge>}
                    {template.new && <Badge className="bg-green-600 hover:bg-green-700">New</Badge>}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex flex-col gap-3">
                      <Button variant="secondary" size="sm" className="gap-1" asChild>
                        <Link href={`/templates/${template.id}`}>
                          <Eye className="h-4 w-4" />
                          Preview
                        </Link>
                      </Button>
                      <Button variant="secondary" size="sm" className="gap-1" asChild>
                        <Link href={`/resume-wizard?template=${template.id}`}>
                          <Download className="h-4 w-4" />
                          Use Template
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{template.name}</h3>
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                      <Star className="h-3 w-3 fill-green-500 text-green-500" />
                      <span>ATS {template.atsScore}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 flex-grow">{template.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                    <Button variant="outline" size="sm" className="text-brand-600 border-brand-600" asChild>
                      <Link href={`/resume-wizard?template=${template.id}`}>Use</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
