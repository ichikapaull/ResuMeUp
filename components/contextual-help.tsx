"use client"

import { useState, useEffect } from "react"
import { useWizard } from "@/contexts/wizard-context"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"

export default function ContextualHelp() {
  const { currentStep } = useWizard()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
      setIsVisible(false)
    } else {
      setIsOpen(true)
      setIsVisible(true)
    }
  }, [isMobile])

  useEffect(() => {
    let hideTimer: NodeJS.Timeout

    if (isOpen || isVisible) {
      setIsVisible(true)
      hideTimer = setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    return () => {
      clearTimeout(hideTimer)
    }
  }, [isOpen])

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

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {isMobile ? (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const newOpenState = !isOpen
            setIsOpen(newOpenState)
            if (newOpenState) {
              setIsVisible(true)
            }
          }}
        >
          <Lightbulb className="mr-2 h-4 w-4" />
          {isOpen ? "Hide Tips" : "Show Tips"}
        </Button>
      ) : null}

      {(!isMobile || isOpen) && (
        <div
          className={`bg-gray-50 p-4 rounded-md shadow-lg w-80 transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <h4 className="font-medium mb-2">ATS Tips for This Step</h4>
          <ul className="list-disc pl-5 space-y-1">
            {tips[currentStep as keyof typeof tips]?.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
