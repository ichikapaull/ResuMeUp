"use client"

import { useWizard } from "@/contexts/wizard-context"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Trash2, Pencil, Save, X, LinkIcon } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

// Project form validation schema
const projectSchema = z.object({
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Project description is required"),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  url: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional(),
  technologies: z.string().optional(),
})

// Certification form validation schema
const certificationSchema = z.object({
  name: z.string().min(1, "Certification name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  date: z.string().min(1, "Date is required"),
  expiryDate: z.string().optional(),
  url: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional(),
})

type ProjectFormValues = z.infer<typeof projectSchema>
type CertificationFormValues = z.infer<typeof certificationSchema>

export default function OptionalSections() {
  const {
    resumeData,
    addProject,
    updateProject,
    removeProject,
    addCertification,
    updateCertification,
    removeCertification,
    updateResumeData,
  } = useWizard()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("projects")
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [isAddingCertification, setIsAddingCertification] = useState(false)
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null)
  const [editingCertificationId, setEditingCertificationId] = useState<string | null>(null)

  const projectForm = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      url: "",
      technologies: "",
    },
  })

  const certificationForm = useForm<CertificationFormValues>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: "",
      issuer: "",
      date: "",
      expiryDate: "",
      url: "",
    },
  })

  const resetProjectForm = () => {
    projectForm.reset({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      url: "",
      technologies: "",
    })
  }

  const resetCertificationForm = () => {
    certificationForm.reset({
      name: "",
      issuer: "",
      date: "",
      expiryDate: "",
      url: "",
    })
  }

  // Project handlers
  const handleEditProject = (id: string) => {
    const project = resumeData.projects.find((proj) => proj.id === id)
    if (project) {
      projectForm.reset({
        title: project.title,
        description: project.description,
        startDate: project.startDate,
        endDate: project.endDate,
        url: project.url,
        technologies: project.technologies.join(", "),
      })
      setEditingProjectId(id)
      setIsAddingProject(true)
    }
  }

  const handleDeleteProject = (id: string) => {
    removeProject(id)
    toast({
      title: "Project removed",
      description: "The project has been removed from your resume.",
    })
  }

  const handleCancelProject = () => {
    setIsAddingProject(false)
    setEditingProjectId(null)
    resetProjectForm()
  }

  const onSubmitProject = (data: ProjectFormValues) => {
    const technologies = data.technologies
      ? data.technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean)
      : []

    if (editingProjectId) {
      updateProject(editingProjectId, {
        ...data,
        id: editingProjectId,
        technologies,
      })
      toast({
        title: "Project updated",
        description: "Your project has been updated successfully.",
      })
    } else {
      addProject({
        ...data,
        id: crypto.randomUUID(),
        technologies,
      })
      toast({
        title: "Project added",
        description: "Your project has been added to your resume.",
      })
    }
    setIsAddingProject(false)
    setEditingProjectId(null)
    resetProjectForm()
  }

  // Certification handlers
  const handleEditCertification = (id: string) => {
    const certification = resumeData.certifications.find((cert) => cert.id === id)
    if (certification) {
      certificationForm.reset({
        name: certification.name,
        issuer: certification.issuer,
        date: certification.date,
        expiryDate: certification.expiryDate,
        url: certification.url,
      })
      setEditingCertificationId(id)
      setIsAddingCertification(true)
    }
  }

  const handleDeleteCertification = (id: string) => {
    removeCertification(id)
    toast({
      title: "Certification removed",
      description: "The certification has been removed from your resume.",
    })
  }

  const handleCancelCertification = () => {
    setIsAddingCertification(false)
    setEditingCertificationId(null)
    resetCertificationForm()
  }

  const onSubmitCertification = (data: CertificationFormValues) => {
    if (editingCertificationId) {
      updateCertification(editingCertificationId, {
        ...data,
        id: editingCertificationId,
      })
      toast({
        title: "Certification updated",
        description: "Your certification has been updated successfully.",
      })
    } else {
      addCertification({
        ...data,
        id: crypto.randomUUID(),
      })
      toast({
        title: "Certification added",
        description: "Your certification has been added to your resume.",
      })
    }
    setIsAddingCertification(false)
    setEditingCertificationId(null)
    resetCertificationForm()
  }

  // Toggle visibility of sections
  const handleToggleProjectsVisibility = (value: boolean) => {
    updateResumeData({ showProjects: value })
  }

  const handleToggleCertificationsVisibility = (value: boolean) => {
    updateResumeData({ showCertifications: value })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Optional Sections</h2>
        <p className="text-muted-foreground">Add additional sections to enhance your resume</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        {/* Projects Tab */}
        <TabsContent value="projects">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Projects</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Show on resume</span>
              <Switch checked={resumeData.showProjects} onCheckedChange={handleToggleProjectsVisibility} />
            </div>
          </div>

          {!isAddingProject ? (
            <>
              <div className="space-y-4">
                {resumeData.projects.length > 0 ? (
                  resumeData.projects.map((project) => (
                    <Card key={project.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{project.title}</CardTitle>
                            {project.startDate && (
                              <CardDescription>
                                {project.startDate} - {project.endDate || "Present"}
                              </CardDescription>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEditProject(project.id)}>
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteProject(project.id)}>
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">{project.description}</p>
                        {project.technologies.length > 0 && (
                          <div className="mt-2">
                            <span className="text-sm font-medium">Technologies: </span>
                            <span className="text-sm">{project.technologies.join(", ")}</span>
                          </div>
                        )}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-600 hover:text-brand-700 flex items-center mt-2"
                          >
                            <LinkIcon className="h-3 w-3 mr-1" />
                            Project Link
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center p-8 border border-dashed rounded-lg">
                    <p className="text-muted-foreground">No projects added yet</p>
                  </div>
                )}
              </div>

              <Button
                onClick={() => setIsAddingProject(true)}
                className="w-full flex items-center justify-center mt-4"
                variant="outline"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>{editingProjectId ? "Edit Project" : "Add Project"}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...projectForm}>
                  <form onSubmit={projectForm.handleSubmit(onSubmitProject)} className="space-y-6">
                    <FormField
                      control={projectForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Title *</FormLabel>
                          <FormControl>
                            <Input placeholder="E-commerce Website" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={projectForm.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start Date</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YYYY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={projectForm.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>End Date</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YYYY or 'Present'" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={projectForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Developed a full-stack e-commerce platform with user authentication, product catalog, and payment processing."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Briefly describe the project, your role, and key achievements
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={projectForm.control}
                      name="technologies"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Technologies Used</FormLabel>
                          <FormControl>
                            <Input placeholder="React, Node.js, MongoDB, Express" {...field} />
                          </FormControl>
                          <FormDescription>Separate technologies with commas</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={projectForm.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://myproject.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={handleCancelProject}>
                        <X className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-brand-600 hover:bg-brand-700">
                        <Save className="mr-2 h-4 w-4" />
                        {editingProjectId ? "Update" : "Save"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Certifications Tab */}
        <TabsContent value="certifications">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Certifications</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Show on resume</span>
              <Switch checked={resumeData.showCertifications} onCheckedChange={handleToggleCertificationsVisibility} />
            </div>
          </div>

          {!isAddingCertification ? (
            <>
              <div className="space-y-4">
                {resumeData.certifications.length > 0 ? (
                  resumeData.certifications.map((certification) => (
                    <Card key={certification.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{certification.name}</CardTitle>
                            <CardDescription>
                              {certification.issuer} • {certification.date}
                              {certification.expiryDate && ` - ${certification.expiryDate}`}
                            </CardDescription>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEditCertification(certification.id)}
                            >
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteCertification(certification.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {certification.url && (
                          <a
                            href={certification.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-600 hover:text-brand-700 flex items-center"
                          >
                            <LinkIcon className="h-3 w-3 mr-1" />
                            Verify Certification
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center p-8 border border-dashed rounded-lg">
                    <p className="text-muted-foreground">No certifications added yet</p>
                  </div>
                )}
              </div>

              <Button
                onClick={() => setIsAddingCertification(true)}
                className="w-full flex items-center justify-center mt-4"
                variant="outline"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Certification
              </Button>
            </>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>{editingCertificationId ? "Edit Certification" : "Add Certification"}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...certificationForm}>
                  <form onSubmit={certificationForm.handleSubmit(onSubmitCertification)} className="space-y-6">
                    <FormField
                      control={certificationForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Certification Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="AWS Certified Solutions Architect" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={certificationForm.control}
                      name="issuer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Issuing Organization *</FormLabel>
                          <FormControl>
                            <Input placeholder="Amazon Web Services" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={certificationForm.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Issue Date *</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YYYY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={certificationForm.control}
                        name="expiryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiry Date</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YYYY" {...field} />
                            </FormControl>
                            <FormDescription>Leave blank if no expiry</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={certificationForm.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Credential URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://www.credential.net/..." {...field} />
                          </FormControl>
                          <FormDescription>Link to verify your certification (optional)</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={handleCancelCertification}>
                        <X className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-brand-600 hover:bg-brand-700">
                        <Save className="mr-2 h-4 w-4" />
                        {editingCertificationId ? "Update" : "Save"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">ATS Tip</h3>
        <p className="text-sm text-muted-foreground">
          Only include projects and certifications that are relevant to the job you're applying for. Quality is more
          important than quantity.
        </p>
      </div>
    </div>
  )
}
