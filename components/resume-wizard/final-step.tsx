"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { generateResumeHTML, ResumeData } from "@/lib/gemini"

interface FinalStepProps {
  resumeData: ResumeData
  onComplete: () => void
}

export function FinalStep({ resumeData, onComplete }: FinalStepProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGeneratePDF = async () => {
    setIsGenerating(true)
    setError(null)

    try {
      // 1. Generate HTML using Gemini
      const html = await generateResumeHTML(resumeData)

      // 2. Convert HTML to PDF
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html }),
      })

      if (!response.ok) throw new Error('PDF generation failed')

      // 3. Download the PDF
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'resume.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

      // 4. Complete the wizard
      onComplete()
    } catch (error) {
      console.error('Error generating resume:', error)
      setError('Failed to generate PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Generate Your Resume</h2>
      <p className="text-muted-foreground">
        Click the button below to generate your professional resume in PDF format.
      </p>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button
        onClick={handleGeneratePDF}
        disabled={isGenerating}
        className="w-full"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating PDF...
          </>
        ) : (
          'Generate PDF Resume'
        )}
      </Button>
    </div>
  )
} 