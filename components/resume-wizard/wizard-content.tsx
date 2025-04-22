"use client"

import { useWizard } from "@/contexts/wizard-context"
import TemplateSelection from "@/components/resume-wizard/steps/template-selection"
import PersonalInfo from "@/components/resume-wizard/steps/personal-info"
import Summary from "@/components/resume-wizard/steps/summary"
import Experience from "@/components/resume-wizard/steps/experience"
import Education from "@/components/resume-wizard/steps/education"
import Skills from "@/components/resume-wizard/steps/skills"
import OptionalSections from "@/components/resume-wizard/steps/optional-sections"
import Review from "@/components/resume-wizard/steps/review"

export default function WizardContent() {
  const { currentStep } = useWizard()

  // Render the appropriate step based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <TemplateSelection />
      case 2:
        return <PersonalInfo />
      case 3:
        return <Summary />
      case 4:
        return <Experience />
      case 5:
        return <Education />
      case 6:
        return <Skills />
      case 7:
        return <OptionalSections />
      case 8:
        return <Review />
      default:
        return <div>Step not found</div>
    }
  }

  return <div className="min-h-[400px]">{renderStep()}</div>
}
