"use client"

import { useState } from "react"
import { WizardProvider } from "@/contexts/wizard-context"
import WizardNavigation from "@/components/resume-wizard/wizard-navigation"
import WizardContent from "@/components/resume-wizard/wizard-content"
import WizardActions from "@/components/resume-wizard/wizard-actions"
import { Card } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function WizardContainer() {
  const [tipsOpen, setTipsOpen] = useState(false)

  return (
    <WizardProvider>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Resume Builder</h1>
          <p className="text-muted-foreground">Create a professional, ATS-optimized resume in minutes</p>
        </div>

        <Card className="p-6 shadow-lg overflow-hidden">
          <div className="flex flex-col">
            <div className="mb-6">
              <WizardNavigation />
            </div>

            <div className="mb-8">
              <WizardContent />
            </div>

            <div className="mb-4">
              <Collapsible open={tipsOpen} onOpenChange={setTipsOpen} className="w-full">
                <div className="flex items-center justify-between">
                  <CollapsibleTrigger className="flex items-center text-sm text-brand-600 hover:text-brand-700">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    <span>{tipsOpen ? "Hide ATS Tips" : "Show ATS Tips"}</span>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-2 p-4 bg-gray-50 rounded-md text-sm">
                  <TipsContent />
                </CollapsibleContent>
              </Collapsible>
            </div>

            <WizardActions />
          </div>
        </Card>
      </div>
    </WizardProvider>
  )
}

function TipsContent() {
  const tips = {
    1: [
      "Choose a clean, ATS-friendly template with a clear structure.",
      "Avoid templates with complex graphics or unusual layouts that ATS systems might struggle to parse.",
    ],
    2: [
      "Use a professional email address, ideally based on your name.",
      "Include your LinkedIn profile URL if it's up-to-date and professional.",
      "City and country are sufficient for location - full addresses aren't necessary.",
    ],
    3: [
      "Keep your summary concise (3-5 sentences).",
      "Include relevant keywords from the job description.",
      "Focus on your most impressive achievements and skills.",
    ],
    4: [
      "Use action verbs to start each bullet point.",
      "Quantify achievements with numbers when possible (e.g., 'Increased sales by 20%').",
      "Focus on results and impact rather than just responsibilities.",
    ],
    5: [
      "List your most recent and highest degree first.",
      "Include relevant coursework or academic achievements if you're a recent graduate.",
      "For experienced professionals, education details can be brief.",
    ],
    6: [
      "Include both hard skills (technical) and soft skills (interpersonal).",
      "Match skills mentioned in the job description when applicable.",
      "For ATS optimization, list skills without rating scales.",
    ],
    7: [
      "Only include sections that strengthen your application.",
      "For projects, focus on those most relevant to the job you're applying for.",
      "Keep certifications current and relevant to your target role.",
    ],
    8: [
      "Review for spelling and grammar errors.",
      "Ensure consistent formatting throughout.",
      "Check that all information is accurate and up-to-date.",
    ],
  }

  // This would be connected to the wizard context in a real implementation
  const currentStep = 1

  return (
    <div>
      <h4 className="font-medium mb-2">ATS Tips for This Step</h4>
      <ul className="list-disc pl-5 space-y-1">
        {tips[currentStep as keyof typeof tips]?.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  )
}
