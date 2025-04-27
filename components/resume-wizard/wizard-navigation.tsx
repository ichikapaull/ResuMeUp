"use client"

import { useWizard } from "@/contexts/wizard-context"
import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"

export default function WizardNavigation() {
  const { currentStep, goToStep, isStepComplete } = useWizard()
  const isMobile = useMediaQuery("(max-width: 640px)")

  const steps = [
    { id: 1, title: "Template" },
    { id: 2, title: "Personal Info" },
    { id: 3, title: "Summary" },
    { id: 4, title: "Experience" },
    { id: 5, title: "Education" },
    { id: 6, title: "Skills" },
    { id: 7, title: "Optional" },
    { id: 8, title: "Review" },
  ]

  // For mobile, show only current step, previous and next
  const visibleSteps = isMobile
    ? steps.filter((step) => step.id === currentStep || step.id === currentStep - 1 || step.id === currentStep + 1)
    : steps

  return (
    <nav aria-label="Progress" className="w-full">
      {isMobile ? (
        <div className="flex items-center justify-between w-full">
          <div className="flex-1">
            {currentStep > 1 && (
              <Button variant="ghost" size="sm" onClick={() => goToStep(currentStep - 1)} className="text-gray-500">
                {steps[currentStep - 2].title}
              </Button>
            )}
          </div>

          <div className="flex-1 text-center">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-600 text-white text-sm font-medium">
              {currentStep}
            </span>
            <p className="mt-1 text-xs font-medium text-brand-600">{steps[currentStep - 1].title}</p>
          </div>

          <div className="flex-1 text-right">
            {currentStep < 8 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => isStepComplete(currentStep) && goToStep(currentStep + 1)}
                disabled={!isStepComplete(currentStep)}
                className={isStepComplete(currentStep) ? "text-brand-600" : "text-gray-300"}
              >
                {steps[currentStep].title}
              </Button>
            )}
          </div>
        </div>
      ) : (
        <ol className="flex items-center justify-between w-full">
          {steps.map((step) => (
            <li key={step.id} className="relative flex flex-col items-center">
              <button
                type="button"
                onClick={() => {
                  // Only allow navigation to completed steps or the current step + 1
                  if (isStepComplete(step.id - 1) || step.id <= currentStep) {
                    goToStep(step.id)
                  }
                }}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                  step.id < currentStep && isStepComplete(step.id)
                    ? "bg-brand-600 text-white"
                    : step.id === currentStep
                      ? "border-2 border-brand-600 text-brand-600"
                      : "border border-gray-300 text-gray-500",
                  isStepComplete(step.id - 1) || step.id <= currentStep
                    ? "cursor-pointer hover:bg-gray-50"
                    : "cursor-not-allowed opacity-50",
                )}
                disabled={!(isStepComplete(step.id - 1) || step.id <= currentStep)}
                aria-current={step.id === currentStep ? "step" : undefined}
              >
                {step.id < currentStep && isStepComplete(step.id) ? <CheckCircle2 className="h-5 w-5" /> : step.id}
              </button>
              <span
                className={cn("mt-2 text-xs", step.id === currentStep ? "text-brand-600 font-medium" : "text-gray-500")}
              >
                {step.title}
              </span>
              {step.id < steps.length && (
                <div
                  className={cn(
                    "absolute top-4 left-0 h-[2px] w-full translate-x-[50%]",
                    step.id < currentStep ? "bg-brand-600" : "bg-gray-200",
                  )}
                  style={{ width: "calc(100% - 2rem)", left: "50%" }}
                />
              )}
            </li>
          ))}
        </ol>
      )}
    </nav>
  )
}
