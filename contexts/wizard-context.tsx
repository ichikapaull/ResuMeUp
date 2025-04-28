"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { saveResumeData, getResumeData } from "@/lib/resume-storage"

// Define types for our resume data
export type PersonalInfo = {
  firstName: string
  lastName: string
  professionalTitle: string
  email: string
  phone: string
  location: string
  linkedinUrl: string
  portfolioUrl: string
}

export type Experience = {
  id: string
  jobTitle: string
  companyName: string
  location: string
  startDate: string
  endDate: string
  currentlyWorking: boolean
  responsibilities: string
  jobType?: string
  industry?: string
}

export type Education = {
  id: string
  institution: string
  fieldOfStudy: string
  degree: string
  location: string
  startDate: string
  graduationDate: string
  ongoing: boolean
  gpa: string
  achievements: string
}

export type Skill = {
  id: string
  name: string
  category: string
  level?: "Beginner" | "Intermediate" | "Advanced"
}

export type Project = {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  url: string
  technologies: string[]
}

export type Certification = {
  id: string
  name: string
  issuer: string
  date: string
  expiryDate?: string
  url: string
}

export type ResumeData = {
  template: string
  personalInfo: PersonalInfo
  summary: string
  experiences: Experience[]
  education: Education[]
  skills: Skill[]
  projects: Project[]
  certifications: Certification[]
  showProjects: boolean
  showCertifications: boolean
}

// Define the context type
type WizardContextType = {
  currentStep: number
  setCurrentStep: (step: number) => void
  totalSteps: number
  resumeData: ResumeData
  formData: ResumeData
  setFormData: (data: ResumeData) => void
  updateResumeData: (data: Partial<ResumeData>) => void
  updatePersonalInfo: (data: Partial<PersonalInfo>) => void
  addExperience: (experience: Experience) => void
  updateExperience: (id: string, experience: Partial<Experience>) => void
  removeExperience: (id: string) => void
  addEducation: (education: Education) => void
  updateEducation: (id: string, education: Partial<Education>) => void
  removeEducation: (id: string) => void
  addSkill: (skill: Skill) => void
  updateSkill: (id: string, skill: Partial<Skill>) => void
  removeSkill: (id: string) => void
  addProject: (project: Project) => void
  updateProject: (id: string, project: Partial<Project>) => void
  removeProject: (id: string) => void
  addCertification: (certification: Certification) => void
  updateCertification: (id: string, certification: Partial<Certification>) => void
  removeCertification: (id: string) => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
  isStepComplete: (step: number) => boolean
  canProceed: () => boolean
  isLoading: boolean
}

// Create the context with a default value
const WizardContext = createContext<WizardContextType | undefined>(undefined)

// Initial state for the resume data
const initialResumeData: ResumeData = {
  template: "professional",
  personalInfo: {
    firstName: "",
    lastName: "",
    professionalTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedinUrl: "",
    portfolioUrl: "",
  },
  summary: "",
  experiences: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  showProjects: true,
  showCertifications: true,
}

// Provider component
export const WizardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)
  const [formData, setFormData] = useState<ResumeData>(initialResumeData)
  const [isLoading, setIsLoading] = useState(true)
  const totalSteps = 8

  // Load saved data on initial render
  useEffect(() => {
    const { data } = getResumeData()
    if (data) {
      setResumeData(data)
      setFormData(data)

      // Find the furthest completed step to allow continuing
      let furthestCompletedStep = 1
      for (let i = 1; i <= 8; i++) {
        if (isStepCompleteWithData(i, data)) {
          furthestCompletedStep = i
        } else {
          break
        }
      }

      // Set current step to the next incomplete step or the last step if all complete
      setCurrentStep(Math.min(furthestCompletedStep + 1, 8))
    }
    setIsLoading(false)
  }, [])

  // Save data when it changes
  useEffect(() => {
    if (!isLoading) {
      saveResumeData(resumeData)
    }
  }, [resumeData, isLoading])

  // Helper function to check step completion with specific data
  const isStepCompleteWithData = (step: number, data: ResumeData): boolean => {
    // Implementation similar to isStepComplete but using the provided data
    switch (step) {
      case 1: // Template Selection
        return !!data.template
      case 2: // Personal Information
        const { firstName, lastName, email, phone, location } = data.personalInfo
        return !!firstName && !!lastName && !!email && !!phone && !!location
      case 3: // Summary
        return !!data.summary && data.summary.trim().length > 0
      case 4: // Experience
        return Array.isArray(data.experiences) && data.experiences.length > 0
      case 5: // Education
        return Array.isArray(data.education) && data.education.length > 0
      case 6: // Skills
        return Array.isArray(data.skills) && data.skills.length > 0
      case 7: // Optional Sections
        return true // Always complete as it's optional
      case 8: // Review
        return true // Always complete as it's just a review
      default:
        return false
    }
  }

  // Update the entire resume data or parts of it
  const updateResumeData = (data: Partial<ResumeData>) => {
    setResumeData((prev) => ({ ...prev, ...data }))
    setFormData((prev) => ({ ...prev, ...data }))
  }

  // Update personal information
  const updatePersonalInfo = (data: Partial<PersonalInfo>) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...data },
    }))
    setFormData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...data },
    }))
  }

  // Experience methods
  const addExperience = (experience: Experience) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, experience],
    }))
    setFormData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, experience],
    }))
  }

  const updateExperience = (id: string, experience: Partial<Experience>) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, ...experience } : exp)),
    }))
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, ...experience } : exp)),
    }))
  }

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((exp) => exp.id !== id),
    }))
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((exp) => exp.id !== id),
    }))
  }

  // Education methods
  const addEducation = (education: Education) => {
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, education],
    }))
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, education],
    }))
  }

  const updateEducation = (id: string, education: Partial<Education>) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, ...education } : edu)),
    }))
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, ...education } : edu)),
    }))
  }

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }))
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }))
  }

  // Skills methods
  const addSkill = (skill: Skill) => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }))
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }))
  }

  const updateSkill = (id: string, skill: Partial<Skill>) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === id ? { ...s, ...skill } : s)),
    }))
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === id ? { ...s, ...skill } : s)),
    }))
  }

  const removeSkill = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== id),
    }))
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== id),
    }))
  }

  // Projects methods
  const addProject = (project: Project) => {
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }))
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }))
  }

  const updateProject = (id: string, project: Partial<Project>) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...project } : p)),
    }))
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...project } : p)),
    }))
  }

  const removeProject = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }))
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }))
  }

  // Certifications methods
  const addCertification = (certification: Certification) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, certification],
    }))
    setFormData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, certification],
    }))
  }

  const updateCertification = (id: string, certification: Partial<Certification>) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, ...certification } : c)),
    }))
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, ...certification } : c)),
    }))
  }

  const removeCertification = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }))
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }))
  }

  // Navigation methods
  const nextStep = () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 8) {
      setCurrentStep(step)
    }
  }

  // Check if a step is complete
  const isStepComplete = (step: number): boolean => {
    return isStepCompleteWithData(step, resumeData)
  }

  // Add a function to check if the current step can proceed
  const canProceed = (): boolean => {
    return isStepComplete(currentStep)
  }

  const value = {
    currentStep,
    setCurrentStep,
    totalSteps,
    resumeData,
    formData,
    setFormData,
    updateResumeData,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkill,
    updateSkill,
    removeSkill,
    addProject,
    updateProject,
    removeProject,
    addCertification,
    updateCertification,
    removeCertification,
    nextStep,
    prevStep,
    goToStep,
    isStepComplete,
    canProceed,
    isLoading,
  }

  return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
}

// Custom hook to use the wizard context
export const useWizard = () => {
  const context = useContext(WizardContext)
  if (context === undefined) {
    throw new Error("useWizard must be used within a WizardProvider")
  }
  return context
}
