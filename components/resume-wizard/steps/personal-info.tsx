"use client"

import { useWizard } from "@/contexts/wizard-context"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"

// Form validation schema
const personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  professionalTitle: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().min(1, "Location is required"),
  linkedinUrl: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional(),
  portfolioUrl: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional(),
})

type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>

export default function PersonalInfo() {
  const { resumeData, updatePersonalInfo } = useWizard()

  const form = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: resumeData.personalInfo,
  })

  // Update form values when resumeData changes
  useEffect(() => {
    form.reset(resumeData.personalInfo)
  }, [form, resumeData.personalInfo])

  function onSubmit(data: PersonalInfoFormValues) {
    updatePersonalInfo(data)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <p className="text-muted-foreground">Add your contact details and basic information</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        // Update context immediately on change
                        const formValues = form.getValues()
                        updatePersonalInfo({
                          ...formValues,
                          firstName: e.target.value,
                        })
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Doe"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        // Update context immediately on change
                        const formValues = form.getValues()
                        updatePersonalInfo({
                          ...formValues,
                          lastName: e.target.value,
                        })
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="professionalTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professional Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Software Engineer"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      // Update context immediately on change
                      const formValues = form.getValues()
                      updatePersonalInfo({
                        ...formValues,
                        professionalTitle: e.target.value,
                      })
                    }}
                  />
                </FormControl>
                <FormDescription>Your current or desired job title</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@example.com"
                      type="email"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        // Update context immediately on change
                        const formValues = form.getValues()
                        updatePersonalInfo({
                          ...formValues,
                          email: e.target.value,
                        })
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(123) 456-7890"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        // Update context immediately on change
                        const formValues = form.getValues()
                        updatePersonalInfo({
                          ...formValues,
                          phone: e.target.value,
                        })
                      }}
                    />
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
                  <Input
                    placeholder="City, Country"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      // Update context immediately on change
                      const formValues = form.getValues()
                      updatePersonalInfo({
                        ...formValues,
                        location: e.target.value,
                      })
                    }}
                  />
                </FormControl>
                <FormDescription>City and country are sufficient for ATS systems</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="linkedinUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://linkedin.com/in/johndoe"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        // Update context immediately on change
                        const formValues = form.getValues()
                        updatePersonalInfo({
                          ...formValues,
                          linkedinUrl: e.target.value,
                        })
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="portfolioUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Portfolio/Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://johndoe.com"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        // Update context immediately on change
                        const formValues = form.getValues()
                        updatePersonalInfo({
                          ...formValues,
                          portfolioUrl: e.target.value,
                        })
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="hidden">
            Save
          </Button>
        </form>
      </Form>
    </div>
  )
}
