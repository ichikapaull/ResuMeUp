"use client"

import { useWizard } from "@/contexts/wizard-context"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { useState, useEffect } from "react"
import OptimizedImage from "@/components/optimized-image"
import { images } from "@/lib/image-assets"

// Template options with real images
const templates = [
  {
    id: "professional",
    name: "Professional",
    description: "A clean, traditional layout perfect for most industries",
    image: images.templates.professional,
  },
  {
    id: "modern",
    name: "Modern",
    description: "A contemporary design with a fresh look",
    image: images.templates.modern,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "A simple, straightforward layout that focuses on content",
    image: images.templates.minimal,
  },
  {
    id: "executive",
    name: "Executive",
    description: "An elegant design for senior positions",
    image: images.templates.executive,
  },
]

export default function TemplateSelection() {
  const { resumeData, updateResumeData } = useWizard()
  const [selectedTemplate, setSelectedTemplate] = useState(resumeData.template)

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId)
    updateResumeData({ template: templateId })
  }

  useEffect(() => {
    if (resumeData.template) {
      setSelectedTemplate(resumeData.template)
    }
  }, [resumeData.template])

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Choose a Template</h2>
        <p className="text-muted-foreground">Select an ATS-friendly template for your resume</p>
      </div>

      <RadioGroup
        value={selectedTemplate}
        onValueChange={handleTemplateChange}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {templates.map((template) => (
          <div key={template.id} className="relative">
            <RadioGroupItem value={template.id} id={template.id} className="sr-only" />
            <Label htmlFor={template.id} className="cursor-pointer">
              <Card
                className={`overflow-hidden transition-all ${
                  selectedTemplate === template.id ? "ring-2 ring-brand-600" : "hover:border-gray-300"
                }`}
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative">
                    <OptimizedImage
                      src={template.image}
                      alt={`${template.name} template preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {selectedTemplate === template.id && (
                      <div className="absolute inset-0 bg-brand-600/10 flex items-center justify-center">
                        <div className="bg-brand-600 text-white text-xs px-2 py-1 rounded-full">Selected</div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground mb-2">Already have a resume? Upload it to get started faster</p>
        <Button variant="outline" className="flex items-center">
          <Upload className="mr-2 h-4 w-4" />
          Upload Existing Resume
        </Button>
      </div>
    </div>
  )
}
