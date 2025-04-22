"use client"

import { useWizard } from "@/contexts/wizard-context"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

// Form validation schema
const summarySchema = z.object({
  summary: z.string().min(1, "Professional summary is required"),
})

type SummaryFormValues = z.infer<typeof summarySchema>

export default function Summary() {
  const { resumeData, updateResumeData } = useWizard()
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)
  const [isImproving, setIsImproving] = useState(false)
  const [charCount, setCharCount] = useState(resumeData.summary.length)

  const form = useForm<SummaryFormValues>({
    resolver: zodResolver(summarySchema),
    defaultValues: {
      summary: resumeData.summary,
    },
  })

  // Update form values when resumeData changes
  useEffect(() => {
    form.reset({ summary: resumeData.summary })
  }, [form, resumeData.summary])

  function onSubmit(data: SummaryFormValues) {
    updateResumeData({ summary: data.summary })
  }

  const handleGenerateWithAI = async () => {
    setIsGenerating(true)
    try {
      // Simulate AI generation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const generatedSummary =
        "Results-driven software engineer with 5+ years of experience developing robust applications with JavaScript, React, and Node.js. Passionate about creating efficient, scalable solutions and optimizing user experiences. Proven track record of reducing load times by 40% and implementing features that increased user engagement by 25%."

      form.setValue("summary", generatedSummary)
      setCharCount(generatedSummary.length)
      updateResumeData({ summary: generatedSummary })

      toast({
        title: "Summary generated",
        description: "AI has generated a professional summary based on your profile.",
      })
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your summary. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleImproveWithAI = async () => {
    const currentSummary = form.getValues("summary")

    if (!currentSummary) {
      toast({
        title: "No content to improve",
        description: "Please write a summary or generate one first.",
        variant: "destructive",
      })
      return
    }

    setIsImproving(true)
    try {
      // Simulate AI improvement
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const improvedSummary =
        "Innovative software engineer with 5+ years of expertise crafting high-performance applications using JavaScript, React, and Node.js. Dedicated to delivering elegant, scalable solutions that enhance user experiences. Demonstrated success in optimizing application performance by 40% and implementing strategic features that boosted user engagement by 25%."

      form.setValue("summary", improvedSummary)
      setCharCount(improvedSummary.length)
      updateResumeData({ summary: improvedSummary })

      toast({
        title: "Summary improved",
        description: "AI has enhanced your professional summary with stronger language and better ATS optimization.",
      })
    } catch (error) {
      toast({
        title: "Improvement failed",
        description: "There was an error improving your summary. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsImproving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Professional Summary</h2>
        <p className="text-muted-foreground">
          Create a compelling summary that highlights your expertise and achievements
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Button
          variant="outline"
          className="flex items-center"
          onClick={handleGenerateWithAI}
          disabled={isGenerating || isImproving}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {isGenerating ? "Generating..." : "Generate with AI"}
        </Button>

        <Button
          variant="outline"
          className="flex items-center"
          onClick={handleImproveWithAI}
          disabled={isGenerating || isImproving}
        >
          <Zap className="mr-2 h-4 w-4" />
          {isImproving ? "Improving..." : "Improve with AI"}
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professional Summary *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a brief summary of your professional background, key skills, and career achievements..."
                    className="min-h-[200px]"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      setCharCount(e.target.value.length)
                      updateResumeData({ summary: e.target.value })
                    }}
                  />
                </FormControl>
                <FormDescription className="flex justify-between">
                  <span>Aim for 3-5 sentences that highlight your value proposition</span>
                  <span className={charCount > 700 ? "text-red-500" : ""}>{charCount}/700 characters</span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="hidden">
            Save
          </Button>
        </form>
      </Form>

      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">Example Summary</h3>
        <p className="text-sm text-muted-foreground">
          "Dedicated software engineer with 5+ years of experience developing web applications using JavaScript, React,
          and Node.js. Proven track record of delivering high-quality code that improves user experience and business
          metrics. Reduced load times by 40% and implemented features that increased user engagement by 25% at previous
          company."
        </p>
      </div>
    </div>
  )
}
