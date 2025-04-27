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
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { PlusCircle, Trash2, Pencil, Sparkles, Save, X, Calendar, Building, MapPin, Briefcase } from "lucide-react"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Form validation schema
const experienceSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  companyName: z.string().min(1, "Company name is required"),
  location: z.string().min(1, "Location is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  currentlyWorking: z.boolean().default(false),
  responsibilities: z.string().min(1, "Please describe your responsibilities and achievements"),
  jobType: z.string().optional(),
  industry: z.string().optional(),
})

type ExperienceFormValues = z.infer<typeof experienceSchema>

export default function Experience() {
  const { resumeData, addExperience, updateExperience, removeExperience } = useWizard()
  const { toast } = useToast()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const form = useForm<ExperienceFormValues>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      responsibilities: "",
      jobType: "",
      industry: "",
    },
  })

  // Reset form when editing state changes
  useEffect(() => {
    // Autosave form data when component unmounts or when form values change significantly
    const subscription = form.watch((value, { name, type }) => {
      // Only save on significant changes to reduce unnecessary operations
      if (type === "change" && ["jobTitle", "companyName", "responsibilities"].includes(name || "")) {
        // Save to local storage as backup
        localStorage.setItem("resumeup_experience_draft", JSON.stringify(value))
      }
    })

    // Check for saved draft when component mounts
    const savedDraft = localStorage.getItem("resumeup_experience_draft")
    if (savedDraft && !editingId && !isAdding) {
      try {
        const parsedDraft = JSON.parse(savedDraft)
        // Show recovery option
        toast({
          title: "Draft found",
          description: "Would you like to recover your previous work?",
          action: (
            <Button
              variant="outline"
              onClick={() => {
                form.reset(parsedDraft)
                setIsAdding(true)
                localStorage.removeItem("resumeup_experience_draft")
              }}
            >
              Recover
            </Button>
          ),
        })
      } catch (e) {
        console.error("Error parsing saved draft:", e)
      }
    }

    return () => subscription.unsubscribe()
  }, [form, editingId, isAdding, toast])

  useEffect(() => {
    if (!isAdding) {
      resetForm()
    }
  }, [isAdding])

  const resetForm = () => {
    form.reset({
      jobTitle: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      responsibilities: "",
      jobType: "",
      industry: "",
    })
  }

  const handleEdit = (id: string) => {
    try {
      const experience = resumeData.experiences.find((exp) => exp.id === id)
      if (experience) {
        form.reset({
          jobTitle: experience.jobTitle || "",
          companyName: experience.companyName || "",
          location: experience.location || "",
          startDate: experience.startDate || "",
          endDate: experience.endDate || "",
          currentlyWorking: experience.currentlyWorking || false,
          responsibilities: experience.responsibilities || "",
          jobType: experience.jobType || "",
          industry: experience.industry || "",
        })
        setEditingId(id)
        setIsAdding(true)
      }
    } catch (error) {
      console.error("Error editing experience:", error)
      toast({
        title: "Error",
        description: "There was a problem loading this experience. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingId(null)
    resetForm()
  }

  const handleDelete = (id: string) => {
    try {
      removeExperience(id)
      toast({
        title: "Experience removed",
        description: "The work experience has been removed from your resume.",
      })
    } catch (error) {
      console.error("Error removing experience:", error)
      toast({
        title: "Error",
        description: "There was a problem removing this experience. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleGenerateBullets = async () => {
    const jobTitle = form.getValues("jobTitle")
    const companyName = form.getValues("companyName")
    const industry = form.getValues("industry")

    if (!jobTitle || !companyName) {
      toast({
        title: "Missing information",
        description: "Please enter a job title and company name first.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    try {
      // Simulate AI generation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const industryContext = industry ? ` in the ${industry} industry` : ""
      const generatedBullets = `• Led cross-functional teams to deliver high-impact projects${industryContext}, resulting in 30% improved efficiency
• Developed and implemented strategic initiatives that increased revenue by 25% within 12 months
• Collaborated with stakeholders to identify opportunities and solve complex business challenges
• Managed resources effectively, optimizing budget allocation and reducing costs by 15%
• Mentored junior team members, improving overall team performance and knowledge transfer`

      form.setValue("responsibilities", generatedBullets)

      toast({
        title: "Bullets generated",
        description: "AI has generated achievement-focused bullet points based on your job information.",
      })
    } catch (error) {
      console.error("Error generating bullets:", error)
      toast({
        title: "Generation failed",
        description: "There was an error generating bullet points. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  function onSubmit(data: ExperienceFormValues) {
    try {
      if (editingId) {
        updateExperience(editingId, {
          ...data,
          id: editingId,
        })
        toast({
          title: "Experience updated",
          description: "Your work experience has been updated successfully.",
        })
      } else {
        addExperience({
          ...data,
          id: crypto.randomUUID(),
        })
        toast({
          title: "Experience added",
          description: "Your work experience has been added to your resume.",
        })
      }
      setIsAdding(false)
      setEditingId(null)
      resetForm()
    } catch (error) {
      console.error("Error saving experience:", error)
      toast({
        title: "Error",
        description: "There was a problem saving your experience. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <p className="text-muted-foreground">Add your relevant work experience, starting with the most recent</p>
      </div>

      {!isAdding ? (
        <>
          <div className="space-y-4">
            {resumeData.experiences && resumeData.experiences.length > 0 ? (
              resumeData.experiences.map((experience) => (
                <Card key={experience.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{experience.jobTitle}</CardTitle>
                        <CardDescription className="text-base flex items-center mt-1">
                          <Building className="h-4 w-4 mr-1 inline" />
                          {experience.companyName}
                          {experience.industry && (
                            <Badge variant="outline" className="ml-2 font-normal">
                              {experience.industry}
                            </Badge>
                          )}
                        </CardDescription>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {experience.startDate} - {experience.currentlyWorking ? "Present" : experience.endDate}
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            {experience.location}
                          </div>
                          {experience.jobType && (
                            <>
                              <div className="hidden sm:block">•</div>
                              <div className="flex items-center">
                                <Briefcase className="h-3.5 w-3.5 mr-1" />
                                {experience.jobType}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(experience.id)}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(experience.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="whitespace-pre-line">{experience.responsibilities}</div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center p-8 border border-dashed rounded-lg">
                <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4 opacity-50" />
                <p className="text-muted-foreground">No work experience added yet</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Add your professional experience to make your resume stand out
                </p>
              </div>
            )}
          </div>

          <Button
            onClick={() => setIsAdding(true)}
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Work Experience
          </Button>
        </>
      ) : (
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>{editingId ? "Edit Work Experience" : "Add Work Experience"}</CardTitle>
            <CardDescription>
              {editingId
                ? "Update your work experience details"
                : "Add details about your previous or current position"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form id="experience-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="Software Engineer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="San Francisco, CA" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <FormControl>
                          <Input placeholder="Technology, Healthcare, Finance, etc." {...field} />
                        </FormControl>
                        <FormDescription>Industry context helps with AI-generated content</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="jobType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Full-time, Part-time, Contract, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator className="my-2" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date *</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YYYY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="currentlyWorking"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                          <div className="space-y-0.5">
                            <FormLabel>Currently Working Here</FormLabel>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {!form.watch("currentlyWorking") && (
                      <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>End Date *</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YYYY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>

                <Separator className="my-2" />

                <FormField
                  control={form.control}
                  name="responsibilities"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel>Responsibilities & Achievements *</FormLabel>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                          onClick={handleGenerateBullets}
                          disabled={isGenerating}
                        >
                          <Sparkles className="mr-2 h-3 w-3" />
                          {isGenerating ? "Generating..." : "Generate Bullets"}
                        </Button>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="• Led the development of a customer-facing web application
• Implemented new features that increased user engagement by 25%
• Collaborated with cross-functional teams to deliver projects on time"
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Use bullet points starting with action verbs. Include metrics and achievements when possible.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2 bg-gray-50 px-6 py-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button type="submit" form="experience-form" className="bg-brand-600 hover:bg-brand-700">
              <Save className="mr-2 h-4 w-4" />
              {editingId ? "Update" : "Save"}
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">ATS Tips for Work Experience</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
          <li>Use keywords from the job description in your responsibilities</li>
          <li>Quantify achievements with numbers and percentages when possible</li>
          <li>Focus on accomplishments rather than just listing duties</li>
          <li>Use action verbs at the beginning of each bullet point</li>
          <li>List your most recent experience first</li>
        </ul>
      </div>
    </div>
  )
}
