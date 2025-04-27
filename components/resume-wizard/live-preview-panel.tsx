"use client"

import { useState, useEffect } from "react"
import { useWizard } from "@/contexts/wizard-context"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Download } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function LivePreviewPanel() {
  const { resumeData } = useWizard()
  const [isVisible, setIsVisible] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Auto-hide on mobile by default
  useEffect(() => {
    setIsVisible(!isMobile)
  }, [isMobile])

  return (
    <div className="relative">
      {/* Mobile toggle button */}
      {isMobile && (
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-20 right-4 z-50 rounded-full shadow-md"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
          {isVisible ? "Hide Preview" : "Show Preview"}
        </Button>
      )}

      {/* Preview panel */}
      <div
        className={`
          ${isMobile ? "fixed inset-0 z-40 bg-white/95 transition-transform duration-300 overflow-auto" : "sticky top-20"} 
          ${isMobile && !isVisible ? "translate-y-full" : "translate-y-0"}
          ${isMobile && isVisible ? "p-4" : ""}
        `}
      >
        {isVisible && (
          <div className="bg-white rounded-lg shadow-lg p-4 border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Live Preview</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-3 w-3 mr-1" /> PDF
                </Button>
                {isMobile && (
                  <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)}>
                    <EyeOff className="h-3 w-3 mr-1" /> Hide
                  </Button>
                )}
              </div>
            </div>

            <div className="aspect-[8.5/11] border rounded overflow-hidden bg-white shadow-inner">
              {/* This would be replaced with an actual resume renderer component */}
              <div className="p-6 h-full">
                {resumeData.personalInfo.firstName && (
                  <div className="text-center mb-4">
                    <h1 className="text-xl font-bold">
                      {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                    </h1>
                    {resumeData.personalInfo.professionalTitle && (
                      <p className="text-gray-600">{resumeData.personalInfo.professionalTitle}</p>
                    )}
                    <div className="text-xs mt-1 flex justify-center gap-2 flex-wrap">
                      {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                      {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                      {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
                    </div>
                  </div>
                )}

                {resumeData.summary && (
                  <div className="mb-4">
                    <h2 className="text-sm font-bold border-b mb-1">SUMMARY</h2>
                    <p className="text-xs">{resumeData.summary}</p>
                  </div>
                )}

                {resumeData.experiences.length > 0 && (
                  <div className="mb-4">
                    <h2 className="text-sm font-bold border-b mb-1">EXPERIENCE</h2>
                    {resumeData.experiences.map((exp) => (
                      <div key={exp.id} className="mb-2">
                        <div className="flex justify-between text-xs">
                          <strong>{exp.jobTitle}</strong>
                          <span>
                            {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                          </span>
                        </div>
                        <p className="text-xs">
                          {exp.companyName}, {exp.location}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {resumeData.education.length > 0 && (
                  <div className="mb-4">
                    <h2 className="text-sm font-bold border-b mb-1">EDUCATION</h2>
                    {resumeData.education.map((edu) => (
                      <div key={edu.id} className="mb-2">
                        <div className="flex justify-between text-xs">
                          <strong>{edu.degree}</strong>
                          <span>
                            {edu.startDate} - {edu.ongoing ? "Present" : edu.graduationDate}
                          </span>
                        </div>
                        <p className="text-xs">
                          {edu.institution}, {edu.location}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {resumeData.skills.length > 0 && (
                  <div>
                    <h2 className="text-sm font-bold border-b mb-1">SKILLS</h2>
                    <p className="text-xs">{resumeData.skills.map((skill) => skill.name).join(", ")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
