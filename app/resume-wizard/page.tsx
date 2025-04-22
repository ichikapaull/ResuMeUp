import type { Metadata } from "next"
import WizardContainer from "@/components/resume-wizard/wizard-container"

export const metadata: Metadata = {
  title: "Resume Builder | ResuMeUp",
  description: "Create a professional, ATS-friendly resume with our step-by-step wizard",
}

export default function ResumeWizardPage() {
  return <WizardContainer />
}
