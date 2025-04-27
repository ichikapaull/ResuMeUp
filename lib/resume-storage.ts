// Create a utility for saving and retrieving resume data

import type { ResumeData } from "@/contexts/wizard-context"

// Save resume data to localStorage
export function saveResumeData(resumeData: ResumeData): void {
  try {
    localStorage.setItem("resumeup_data", JSON.stringify(resumeData))
    localStorage.setItem("resumeup_last_saved", new Date().toISOString())
  } catch (error) {
    console.error("Error saving resume data:", error)
  }
}

// Get resume data from localStorage
export function getResumeData(): { data: ResumeData | null; lastSaved: Date | null } {
  try {
    const dataString = localStorage.getItem("resumeup_data")
    const lastSavedString = localStorage.getItem("resumeup_last_saved")

    if (!dataString) {
      return { data: null, lastSaved: null }
    }

    return {
      data: JSON.parse(dataString) as ResumeData,
      lastSaved: lastSavedString ? new Date(lastSavedString) : null,
    }
  } catch (error) {
    console.error("Error retrieving resume data:", error)
    return { data: null, lastSaved: null }
  }
}

// Clear saved resume data
export function clearResumeData(): void {
  try {
    localStorage.removeItem("resumeup_data")
    localStorage.removeItem("resumeup_last_saved")
  } catch (error) {
    console.error("Error clearing resume data:", error)
  }
}
