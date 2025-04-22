"use client"

import { useWizard } from "@/contexts/wizard-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Download, Pencil, Building, Calendar, MapPin, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"

export default function Review() {
  const { resumeData, goToStep, isStepComplete } = useWizard()
  const { toast } = useToast()

  // Calculate ATS score based on resume completeness
  const calculateATSScore = () => {
    let score = 0
    let total = 0

    // Personal info
    const personalInfoFields = ["firstName", "lastName", "email", "phone", "location"]
    personalInfoFields.forEach((field) => {
      total++
      if (resumeData.personalInfo[field as keyof typeof resumeData.personalInfo]) score++
    })

    // Summary
    total++
    if (resumeData.summary.length > 0) score++

    // Experience
    total++
    if (resumeData.experiences.length > 0) score++

    // Education
    total++
    if (resumeData.education.length > 0) score++

    // Skills
    total++
    if (resumeData.skills.length > 0) score++

    // Calculate percentage
    return Math.round((score / total) * 100)
  }

  const atsScore = calculateATSScore()

  const handleDownload = () => {
    // In a real app, this would generate and download the resume
    toast({
      title: "Resume downloaded",
      description: "Your resume has been generated and downloaded successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Review Your Resume</h2>
        <p className="text-muted-foreground">Review your information before generating your resume</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Your contact details</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center" onClick={() => goToStep(2)}>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-medium text-lg">
                  {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                </p>
                {resumeData.personalInfo.professionalTitle && (
                  <p className="text-muted-foreground">{resumeData.personalInfo.professionalTitle}</p>
                )}
                <p>{resumeData.personalInfo.email}</p>
                <p>{resumeData.personalInfo.phone}</p>
                <p>{resumeData.personalInfo.location}</p>
                {resumeData.personalInfo.linkedinUrl && (
                  <p className="text-sm text-brand-600">{resumeData.personalInfo.linkedinUrl}</p>
                )}
                {resumeData.personalInfo.portfolioUrl && (
                  <p className="text-sm text-brand-600">{resumeData.personalInfo.portfolioUrl}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Professional Summary</CardTitle>
                <CardDescription>Your career overview</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center" onClick={() => goToStep(3)}>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{resumeData.summary}</p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Your professional history</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center" onClick={() => goToStep(4)}>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              {resumeData.experiences && resumeData.experiences.length > 0 ? (
                <div className="space-y-4">
                  {resumeData.experiences.map((exp) => (
                    <div key={exp.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium">{exp.jobTitle}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Building className="h-3.5 w-3.5 mr-1" />
                        {exp.companyName}
                        {exp.industry && (
                          <Badge variant="outline" className="ml-2 font-normal">
                            {exp.industry}
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                        </div>
                        <div className="hidden sm:block">•</div>
                        <div className="flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {exp.location}
                        </div>
                        {exp.jobType && (
                          <>
                            <div className="hidden sm:block">•</div>
                            <div className="flex items-center">
                              <Briefcase className="h-3.5 w-3.5 mr-1" />
                              {exp.jobType}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="mt-2 text-sm whitespace-pre-line">{exp.responsibilities}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No work experience added</p>
              )}
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Education</CardTitle>
                <CardDescription>Your academic background</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center" onClick={() => goToStep(5)}>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              {resumeData.education && resumeData.education.length > 0 ? (
                <div className="space-y-4">
                  {resumeData.education.map((edu) => (
                    <div key={edu.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium">
                        {edu.degree} in {edu.fieldOfStudy}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution} • {edu.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.startDate} - {edu.ongoing ? "Present" : edu.graduationDate}
                        {edu.gpa && ` • GPA: ${edu.gpa}`}
                      </p>
                      {edu.achievements && <div className="mt-2 text-sm whitespace-pre-line">{edu.achievements}</div>}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No education added</p>
              )}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Your expertise and abilities</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center" onClick={() => goToStep(6)}>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              {resumeData.skills && resumeData.skills.length > 0 ? (
                <div className="space-y-3">
                  {Object.entries(
                    resumeData.skills.reduce(
                      (acc, skill) => {
                        if (!acc[skill.category]) {
                          acc[skill.category] = []
                        }
                        acc[skill.category].push(skill)
                        return acc
                      },
                      {} as Record<string, typeof resumeData.skills>,
                    ),
                  ).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-sm font-medium mb-1">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {skills.map((skill) => (
                          <Badge key={skill.id} variant="secondary" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No skills added</p>
              )}
            </CardContent>
          </Card>

          {/* Optional Sections */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Additional Sections</CardTitle>
                <CardDescription>Projects and certifications</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center" onClick={() => goToStep(7)}>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Projects */}
                {resumeData.showProjects && resumeData.projects && resumeData.projects.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Projects</h4>
                    <div className="space-y-2">
                      {resumeData.projects.map((project) => (
                        <div key={project.id} className="text-sm">
                          <div className="font-medium">{project.title}</div>
                          <div className="text-muted-foreground">{project.description}</div>
                          {project.technologies.length > 0 && (
                            <div className="mt-1">
                              <span className="text-xs font-medium">Technologies: </span>
                              <span className="text-xs">{project.technologies.join(", ")}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {resumeData.showCertifications && resumeData.certifications && resumeData.certifications.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Certifications</h4>
                    <div className="space-y-2">
                      {resumeData.certifications.map((cert) => (
                        <div key={cert.id} className="text-sm">
                          <div className="font-medium">{cert.name}</div>
                          <div className="text-muted-foreground">
                            {cert.issuer} • {cert.date}
                            {cert.expiryDate && ` - ${cert.expiryDate}`}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(!resumeData.showProjects || !resumeData.projects || resumeData.projects.length === 0) &&
                  (!resumeData.showCertifications ||
                    !resumeData.certifications ||
                    resumeData.certifications.length === 0) && (
                    <p className="text-muted-foreground">No additional sections added</p>
                  )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resume Preview and ATS Score */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Preview</CardTitle>
              <CardDescription>See how your resume will look</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="border rounded-md w-full max-w-[300px] overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/at98cv-NcSIoDIgOvScjOdpGgwm2of0ng0VnO.jpeg"
                  alt="Resume preview"
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">ATS Score: 98%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ATS Compatibility</CardTitle>
              <CardDescription>How well your resume will perform with ATS systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Score</span>
                    <span className="text-sm font-medium">{atsScore}%</span>
                  </div>
                  <Progress value={atsScore} className="h-2" />
                </div>

                <div className="space-y-2">
                  {isStepComplete(2) ? (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personal information complete</span>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complete your personal information</span>
                    </div>
                  )}

                  {isStepComplete(3) ? (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional summary added</span>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Add a professional summary</span>
                    </div>
                  )}

                  {isStepComplete(4) ? (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Work experience added</span>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Add work experience</span>
                    </div>
                  )}

                  {isStepComplete(5) ? (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Education added</span>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Add education</span>
                    </div>
                  )}

                  {isStepComplete(6) ? (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Skills added</span>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Add relevant skills</span>
                    </div>
                  )}
                </div>

                <Button onClick={handleDownload} className="w-full bg-brand-600 hover:bg-brand-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
