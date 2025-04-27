"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CheckCircle, HelpCircle, X } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingComparison() {
  const [view, setView] = useState<"category" | "plan">("category")

  const features = [
    {
      category: "Resume Creation",
      items: [
        {
          name: "Number of resumes",
          free: "1",
          professional: "Unlimited",
          enterprise: "Unlimited",
          tooltip: "How many different resumes you can create and save",
        },
        {
          name: "Templates",
          free: "3 Basic",
          professional: "20+ Professional",
          enterprise: "20+ Professional + Custom",
          tooltip: "Available resume design templates",
        },
        {
          name: "Sections customization",
          free: "Limited",
          professional: "Full",
          enterprise: "Full + Custom",
          tooltip: "Ability to add, remove, and rearrange resume sections",
        },
        {
          name: "Custom branding",
          free: false,
          professional: false,
          enterprise: true,
          tooltip: "Add your organization's logo and branding",
        },
      ],
    },
    {
      category: "ATS Optimization",
      items: [
        {
          name: "ATS compatibility check",
          free: true,
          professional: true,
          enterprise: true,
          tooltip: "Ensure your resume can be read by Applicant Tracking Systems",
        },
        {
          name: "Keyword optimization",
          free: "Basic",
          professional: "Advanced",
          enterprise: "Advanced",
          tooltip: "Suggestions for keywords to include based on job descriptions",
        },
        {
          name: "ATS score",
          free: true,
          professional: true,
          enterprise: true,
          tooltip: "Rating of how well your resume will perform with ATS systems",
        },
        {
          name: "Industry-specific optimization",
          free: false,
          professional: true,
          enterprise: true,
          tooltip: "Tailored suggestions based on your industry",
        },
      ],
    },
    {
      category: "AI Features",
      items: [
        {
          name: "Content suggestions",
          free: false,
          professional: true,
          enterprise: true,
          tooltip: "AI-powered suggestions for your resume content",
        },
        {
          name: "Achievement generator",
          free: false,
          professional: true,
          enterprise: true,
          tooltip: "Generate achievement-focused bullet points",
        },
        {
          name: "Skills analysis",
          free: false,
          professional: true,
          enterprise: true,
          tooltip: "AI analysis of your skills compared to job requirements",
        },
        {
          name: "Custom AI training",
          free: false,
          professional: false,
          enterprise: true,
          tooltip: "AI trained on your organization's specific needs",
        },
      ],
    },
    {
      category: "Export & Sharing",
      items: [
        {
          name: "PDF download",
          free: true,
          professional: true,
          enterprise: true,
          tooltip: "Download your resume as a PDF",
        },
        {
          name: "Additional formats",
          free: false,
          professional: "DOCX, TXT",
          enterprise: "DOCX, TXT, HTML, JSON",
          tooltip: "Additional file formats for download",
        },
        {
          name: "Direct sharing",
          free: false,
          professional: true,
          enterprise: true,
          tooltip: "Share your resume directly via link or email",
        },
        {
          name: "API access",
          free: false,
          professional: false,
          enterprise: true,
          tooltip: "Programmatic access to resume data",
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          name: "Help center access",
          free: true,
          professional: true,
          enterprise: true,
          tooltip: "Access to our knowledge base and guides",
        },
        {
          name: "Email support",
          free: "Standard",
          professional: "Priority",
          enterprise: "Priority",
          tooltip: "Support via email",
        },
        { name: "Live chat", free: false, professional: true, enterprise: true, tooltip: "Real-time chat support" },
        {
          name: "Dedicated account manager",
          free: false,
          professional: false,
          enterprise: true,
          tooltip: "Personal support from a dedicated manager",
        },
        {
          name: "Career coaching",
          free: false,
          professional: false,
          enterprise: "2 sessions/month",
          tooltip: "One-on-one career advice sessions",
        },
      ],
    },
  ]

  const renderCheckmark = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
    } else if (value === false) {
      return <X className="h-5 w-5 text-gray-300 mx-auto" />
    } else {
      return <span>{value}</span>
    }
  }

  return (
    <div className="w-full overflow-auto">
      <div className="flex justify-end mb-4">
        <Tabs defaultValue="category" onValueChange={(value) => setView(value as "category" | "plan")}>
          <TabsList>
            <TabsTrigger value="category">By Category</TabsTrigger>
            <TabsTrigger value="plan">By Plan</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <TooltipProvider>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[250px]">Feature</TableHead>
                <TableHead className="text-center">Free</TableHead>
                <TableHead className="text-center bg-brand-50">Professional</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {view === "category" ? (
                features.map((category) => (
                  <>
                    <TableRow key={category.category} className="bg-gray-50">
                      <TableCell colSpan={4} className="font-medium">
                        {category.category}
                      </TableCell>
                    </TableRow>
                    {category.items.map((item, i) => (
                      <TableRow key={`${category.category}-${i}`}>
                        <TableCell className="font-medium flex items-center">
                          {item.name}
                          {item.tooltip && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" className="px-1 py-0 h-auto ml-1">
                                  <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </TableCell>
                        <TableCell className="text-center">{renderCheckmark(item.free)}</TableCell>
                        <TableCell className="text-center bg-brand-50/30">
                          {renderCheckmark(item.professional)}
                        </TableCell>
                        <TableCell className="text-center">{renderCheckmark(item.enterprise)}</TableCell>
                      </TableRow>
                    ))}
                  </>
                ))
              ) : (
                <>
                  {/* Free Plan */}
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={4} className="font-medium">
                      Free Plan
                    </TableCell>
                  </TableRow>
                  {features.flatMap((category) =>
                    category.items.map((item, i) => (
                      <TableRow key={`free-${category.category}-${i}`}>
                        <TableCell className="font-medium flex items-center">
                          {item.name}
                          {item.tooltip && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" className="px-1 py-0 h-auto ml-1">
                                  <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </TableCell>
                        <TableCell colSpan={3} className="text-center">
                          {renderCheckmark(item.free)}
                        </TableCell>
                      </TableRow>
                    )),
                  )}

                  {/* Professional Plan */}
                  <TableRow className="bg-brand-50">
                    <TableCell colSpan={4} className="font-medium">
                      Professional Plan
                    </TableCell>
                  </TableRow>
                  {features.flatMap((category) =>
                    category.items.map((item, i) => (
                      <TableRow key={`pro-${category.category}-${i}`}>
                        <TableCell className="font-medium flex items-center">
                          {item.name}
                          {item.tooltip && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" className="px-1 py-0 h-auto ml-1">
                                  <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </TableCell>
                        <TableCell colSpan={3} className="text-center bg-brand-50/30">
                          {renderCheckmark(item.professional)}
                        </TableCell>
                      </TableRow>
                    )),
                  )}

                  {/* Enterprise Plan */}
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={4} className="font-medium">
                      Enterprise Plan
                    </TableCell>
                  </TableRow>
                  {features.flatMap((category) =>
                    category.items.map((item, i) => (
                      <TableRow key={`ent-${category.category}-${i}`}>
                        <TableCell className="font-medium flex items-center">
                          {item.name}
                          {item.tooltip && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" className="px-1 py-0 h-auto ml-1">
                                  <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </TableCell>
                        <TableCell colSpan={3} className="text-center">
                          {renderCheckmark(item.enterprise)}
                        </TableCell>
                      </TableRow>
                    )),
                  )}
                </>
              )}
            </TableBody>
          </Table>
        </div>
      </TooltipProvider>
    </div>
  )
}
