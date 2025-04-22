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
import { PlusCircle, Trash2, Pencil, Save, X } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Form validation schema
const educationSchema = z.object({
  institution: z.string().min(1, "Institution name is required"),
  fieldOfStudy: z.string().min(1, "Field of study is required"),
  degree: z.string().min(1, "Degree is required"),
  location: z.string().min(1, "Location is required"),
  startDate: z.string().min(1, "Start date is required"),
  graduationDate: z.string().optional(),
  ongoing: z.boolean().default(false),
  gpa: z.string().optional(),
  achievements: z.string().optional(),
})

type EducationFormValues = z.infer<typeof educationSchema>

export default function Education() {
  const { resumeData, addEducation, updateEducation, removeEducation } = useWizard()
  const { toast } = useToast()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      institution: "",
      fieldOfStudy: "",
      degree: "",
      location: "",
      startDate: "",
      graduationDate: "",
      ongoing: false,
      gpa: "",
      achievements: "",
    },
  })

  const resetForm = () => {
    form.reset({
      institution: "",
      fieldOfStudy: "",
      degree: "",
      location: "",
      startDate: "",
      graduationDate: "",
      ongoing: false,
      gpa: "",
      achievements: "",
    })
  }

  const handleEdit = (id: string) => {
    const education = resumeData.education.find((edu) => edu.id === id)
    if (education) {
      form.reset({
        institution: education.institution,
        fieldOfStudy: education.fieldOfStudy,
        degree: education.degree,
        location: education.location,
        startDate: education.startDate,
        graduationDate: education.graduationDate,
        ongoing: education.ongoing,
        gpa: education.gpa,
        achievements: education.achievements,
      })
      setEditingId(id)
      setIsAdding(true)
    }
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingId(null)
    resetForm()
  }

  const handleDelete = (id: string) => {
    removeEducation(id)
    toast({
      title: "Education removed",
      description: "The education entry has been removed from your resume.",
    })
  }

  function onSubmit(data: EducationFormValues) {
    if (editingId) {
      updateEducation(editingId, {
        ...data,
        id: editingId,
      })
      toast({
        title: "Education updated",
        description: "Your education has been updated successfully.",
      })
    } else {
      addEducation({
        ...data,
        id: crypto.randomUUID(),
      })
      toast({
        title: "Education added",
        description: "Your education has been added to your resume.",
      })
    }
    setIsAdding(false)
    setEditingId(null)
    resetForm()
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Education</h2>
        <p className="text-muted-foreground">Add your educational background, starting with the most recent</p>
      </div>

      {!isAdding ? (
        <>
          <div className="space-y-4">
            {resumeData.education.length > 0 ? (
              resumeData.education.map((education) => (
                <Card key={education.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>
                          {education.degree} in {education.fieldOfStudy}
                        </CardTitle>
                        <CardDescription>
                          {education.institution} • {education.location}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">
                          {education.startDate} - {education.ongoing ? "Present" : education.graduationDate}
                          {education.gpa && ` • GPA: ${education.gpa}`}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(education.id)}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(education.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  {education.achievements && (
                    <CardContent>
                      <div className="whitespace-pre-line">{education.achievements}</div>
                    </CardContent>
                  )}
                </Card>
              ))
            ) : (
              <div className="text-center p-8 border border-dashed rounded-lg">
                <p className="text-muted-foreground">No education added yet</p>
              </div>
            )}
          </div>

          <Button
            onClick={() => setIsAdding(true)}
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Education
          </Button>
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Education" : "Add Education"}</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="University of California, Berkeley" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="degree"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Degree *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a degree" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Bachelor of Science">Bachelor of Science (BS)</SelectItem>
                            <SelectItem value="Bachelor of Arts">Bachelor of Arts (BA)</SelectItem>
                            <SelectItem value="Master of Science">Master of Science (MS)</SelectItem>
                            <SelectItem value="Master of Arts">Master of Arts (MA)</SelectItem>
                            <SelectItem value="Master of Business Administration">
                              Master of Business Administration (MBA)
                            </SelectItem>
                            <SelectItem value="Doctor of Philosophy">Doctor of Philosophy (PhD)</SelectItem>
                            <SelectItem value="Associate of Arts">Associate of Arts (AA)</SelectItem>
                            <SelectItem value="Associate of Science">Associate of Science (AS)</SelectItem>
                            <SelectItem value="High School Diploma">High School Diploma</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fieldOfStudy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Field of Study *</FormLabel>
                        <FormControl>
                          <Input placeholder="Computer Science" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location *</FormLabel>
                      <FormControl>
                        <Input placeholder="Berkeley, CA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                      name="ongoing"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                          <div className="space-y-0.5">
                            <FormLabel>Currently Studying</FormLabel>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {!form.watch("ongoing") && (
                      <FormField
                        control={form.control}
                        name="graduationDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Graduation Date *</FormLabel>
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

                <FormField
                  control={form.control}
                  name="gpa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GPA</FormLabel>
                      <FormControl>
                        <Input placeholder="3.8" {...field} />
                      </FormControl>
                      <FormDescription>Optional, but recommended if it's 3.0 or higher</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="achievements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Achievements & Activities</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="• Dean's List (2019-2021)
• Relevant coursework: Data Structures, Algorithms, Machine Learning
• Member of Computer Science Club"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Include relevant coursework, honors, activities, or projects</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-brand-600 hover:bg-brand-700">
                    <Save className="mr-2 h-4 w-4" />
                    {editingId ? "Update" : "Save"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
