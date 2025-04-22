"use client"

import { useWizard } from "@/contexts/wizard-context"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Save, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState, useEffect } from "react"

export default function WizardActions() {
  const { currentStep, nextStep, prevStep, isStepComplete, resumeData } = useWizard()
  const { toast } = useToast()
  const [canContinue, setCanContinue] = useState(isStepComplete(currentStep))

  // Update canContinue whenever resumeData or currentStep changes
  useEffect(() => {
    // Force a re-check of step completion status
    const isComplete = isStepComplete(currentStep)
    setCanContinue(isComplete)

    // Set up an interval to check completion status (helps with dynamic form updates)
    const checkInterval = setInterval(() => {
      const currentIsComplete = isStepComplete(currentStep)
      if (currentIsComplete !== canContinue) {
        setCanContinue(currentIsComplete)
      }
    }, 500) // Check every 500ms

    return () => clearInterval(checkInterval)
  }, [currentStep, isStepComplete, resumeData, canContinue])

  const handleSaveAndExit = () => {
    // In a real app, this would save the current state to the server or local storage
    toast({
      title: "Progress saved",
      description: "Your resume progress has been saved. You can continue later.",
    })
  }

  const handleFinish = () => {
    // In a real app, this would finalize the resume and redirect to the dashboard
    toast({
      title: "Resume created!",
      description: "Your resume has been successfully created.",
    })
    // Redirect to dashboard or download page
    window.location.href = "/dashboard"
  }

  return (
    <div className="flex justify-between">
      <div>
        {currentStep > 1 && (
          <Button variant="outline" onClick={prevStep} className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        )}
      </div>

      <div className="flex space-x-3">
        <Button variant="outline" onClick={handleSaveAndExit} className="flex items-center">
          <Save className="mr-2 h-4 w-4" />
          Save as Draft
        </Button>

        {currentStep < 8 ? (
          <Button
            onClick={nextStep}
            disabled={!canContinue}
            className="bg-brand-600 hover:bg-brand-700 flex items-center"
          >
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleFinish} className="bg-brand-600 hover:bg-brand-700 flex items-center">
            Generate Resume
            <Download className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
