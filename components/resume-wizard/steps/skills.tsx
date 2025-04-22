"use client"

import type React from "react"

import { useWizard } from "@/contexts/wizard-context"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, X, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Skill categories
const skillCategories = [
  "Technical Skills",
  "Soft Skills",
  "Languages",
  "Tools",
  "Frameworks",
  "Certifications",
  "Other",
]

// AI-suggested skills by category (for demo purposes)
const suggestedSkills = {
  "Technical Skills": [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "TypeScript",
    "HTML/CSS",
    "Git",
    "AWS",
    "Docker",
  ],
  "Soft Skills": [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Leadership",
    "Adaptability",
    "Critical Thinking",
    "Creativity",
  ],
  Languages: ["English", "Spanish", "French", "German", "Mandarin", "Japanese", "Russian", "Arabic"],
  Tools: ["VS Code", "Jira", "Figma", "Adobe Photoshop", "Microsoft Office", "Google Analytics", "Slack", "Trello"],
  Frameworks: ["React", "Angular", "Vue.js", "Express", "Django", "Flask", "Spring Boot", "Laravel"],
  Certifications: ["AWS Certified", "Google Cloud", "Microsoft Certified", "Cisco CCNA", "CompTIA A+", "PMP"],
  Other: ["Project Management", "Agile Methodology", "SEO", "Content Writing", "Data Analysis", "Public Speaking"],
}

export default function Skills() {
  const { resumeData, addSkill, removeSkill } = useWizard()
  const { toast } = useToast()
  const [newSkill, setNewSkill] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Technical Skills")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleAddSkill = () => {
    if (newSkill.trim() === "") return

    // Check if skill already exists in the same category
    const exists = resumeData.skills.some(
      (skill) => skill.name.toLowerCase() === newSkill.toLowerCase() && skill.category === selectedCategory,
    )

    if (exists) {
      toast({
        title: "Skill already exists",
        description: `"${newSkill}" already exists in the ${selectedCategory} category.`,
        variant: "destructive",
      })
      return
    }

    addSkill({
      id: crypto.randomUUID(),
      name: newSkill,
      category: selectedCategory,
    })

    setNewSkill("")

    toast({
      title: "Skill added",
      description: `"${newSkill}" has been added to your skills.`,
    })
  }

  const handleRemoveSkill = (id: string) => {
    removeSkill(id)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill()
    }
  }

  const handleSuggestSkills = async () => {
    setIsGenerating(true)
    try {
      // Simulate AI suggestion
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Get suggested skills for the selected category
      const suggestions = suggestedSkills[selectedCategory as keyof typeof suggestedSkills] || []

      // Filter out skills that already exist
      const existingSkillNames = resumeData.skills
        .filter((skill) => skill.category === selectedCategory)
        .map((skill) => skill.name.toLowerCase())

      const newSuggestions = suggestions.filter((suggestion) => !existingSkillNames.includes(suggestion.toLowerCase()))

      // Add up to 5 new suggested skills
      const skillsToAdd = newSuggestions.slice(0, 5)

      if (skillsToAdd.length === 0) {
        toast({
          title: "No new skills to suggest",
          description: "Try selecting a different category or adding skills manually.",
        })
      } else {
        skillsToAdd.forEach((skillName) => {
          addSkill({
            id: crypto.randomUUID(),
            name: skillName,
            category: selectedCategory,
          })
        })

        toast({
          title: "Skills suggested",
          description: `Added ${skillsToAdd.length} suggested skills to your resume.`,
        })
      }
    } catch (error) {
      toast({
        title: "Suggestion failed",
        description: "There was an error suggesting skills. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  // Group skills by category
  const skillsByCategory = resumeData.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof resumeData.skills>,
  )

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="text-muted-foreground">Add relevant skills to showcase your expertise</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {skillCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-[2] flex gap-2">
                <Input
                  placeholder="Enter a skill (e.g., JavaScript, Project Management)"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button onClick={handleAddSkill} disabled={!newSkill.trim()}>
                  <Plus className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only md:ml-2">Add</span>
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={handleSuggestSkills}
              disabled={isGenerating}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {isGenerating ? "Generating Suggestions..." : "Suggest Skills with AI"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {Object.entries(skillsByCategory).length > 0 ? (
          Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-medium mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.id} variant="secondary" className="px-3 py-1 text-sm">
                    {skill.name}
                    <button
                      onClick={() => handleRemoveSkill(skill.id)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {skill.name}</span>
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-8 border border-dashed rounded-lg">
            <p className="text-muted-foreground">No skills added yet</p>
          </div>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">ATS Tip</h3>
        <p className="text-sm text-muted-foreground">
          Include skills mentioned in the job description to increase your resume's ATS compatibility. Focus on both
          technical skills and soft skills relevant to your target role.
        </p>
      </div>
    </div>
  )
}
