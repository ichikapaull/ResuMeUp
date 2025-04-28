"use client"

import { useWizard } from "@/contexts/wizard-context"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Save, Download, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState, useEffect } from "react"

interface WizardActionsProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrev: () => void
  formData: any
  setFormData: (data: any) => void
}

export function WizardActions({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  formData,
  setFormData,
}: WizardActionsProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard navigation when not in an input, textarea, or button
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement ||
        document.activeElement instanceof HTMLButtonElement
      ) {
        return
      }

      // Arrow right or Alt+Right to go to next step
      if ((e.key === "ArrowRight" && e.altKey) || e.key === "PageDown") {
        if (currentStep < totalSteps - 1) {
          e.preventDefault()
          onNext()
        }
      }

      // Arrow left or Alt+Left to go to previous step
      if ((e.key === "ArrowLeft" && e.altKey) || e.key === "PageUp") {
        if (currentStep > 0) {
          e.preventDefault()
          onPrev()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentStep, totalSteps, onNext, onPrev])

  const handleSaveAndExit = () => {
    // In a real app, this would save the current state to the server or local storage
    toast({
      title: "Progress saved",
      description: "Your resume progress has been saved. You can continue later.",
    })
  }

  const handleCompleteWithAI = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/ai-complete-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userData: formData }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'AI completion failed')
      }

      if (data.error) {
        throw new Error(data.error)
      }

      // Merge AI results with existing form data
      setFormData({ ...formData, ...data.aiResult })
      
      toast({
        title: "Success",
        description: "Your resume has been enhanced with AI suggestions",
      })
    } catch (error) {
      console.error('AI completion error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to complete resume with AI. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center gap-2">
        {currentStep > 0 && (
          <Button variant="outline" onClick={onPrev}>
            Previous
          </Button>
        )}
        <Button
          variant="outline"
          onClick={handleCompleteWithAI}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              AI is Enhancing...
            </>
          ) : (
            "Enhance with AI"
          )}
        </Button>
      </div>
      <Button
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
      >
        {currentStep === totalSteps - 1 ? "Finish" : "Next"}
      </Button>
    </div>
  )
}
