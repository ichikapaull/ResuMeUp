"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CheckCircle, HelpCircle, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PricingSection() {
  const [billingAnnually, setBillingAnnually] = useState(true)

  const plans = [
    {
      name: "Free",
      description: "Basic resume creation for job seekers",
      priceMonthly: 0,
      priceAnnually: 0,
      features: [
        { name: "1 resume", tooltip: "Create and save one resume" },
        { name: "3 basic templates", tooltip: "Access to our essential template collection" },
        { name: "PDF downloads", tooltip: "Download your resume as a PDF file" },
        { name: "Basic ATS optimization", tooltip: "Essential ATS compatibility features" },
        { name: "24/7 support", tooltip: "Access to our help center and email support" },
      ],
      limitations: ["Limited template customization", "No AI content suggestions"],
      cta: "Get Started",
      popular: false,
      color: "gray",
    },
    {
      name: "Professional",
      description: "Advanced features for serious job seekers",
      priceMonthly: 12,
      priceAnnually: 8,
      features: [
        { name: "Unlimited resumes", tooltip: "Create and save as many resumes as you need" },
        { name: "All 20+ templates", tooltip: "Access to our complete template library" },
        { name: "Multiple download formats", tooltip: "Download as PDF, DOCX, TXT, and more" },
        { name: "Advanced ATS optimization", tooltip: "Enhanced keyword analysis and ATS scoring" },
        { name: "AI content suggestions", tooltip: "Smart suggestions for skills and achievements" },
        { name: "Cover letter builder", tooltip: "Create matching cover letters for your resumes" },
        { name: "Priority support", tooltip: "Fast-track support response" },
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
      color: "brand",
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      description: "For teams and career services",
      priceMonthly: 29,
      priceAnnually: 24,
      features: [
        { name: "Everything in Professional", tooltip: "All features from the Professional plan" },
        { name: "Team management", tooltip: "Manage multiple users under one account" },
        { name: "Custom branding", tooltip: "Add your organization's logo and branding" },
        { name: "API access", tooltip: "Integrate with your existing systems" },
        { name: "Dedicated account manager", tooltip: "Personal support from a dedicated manager" },
        { name: "Career coaching sessions", tooltip: "Professional guidance from career experts" },
        { name: "Resume analytics", tooltip: "Track performance and get insights" },
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      color: "blue",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="mt-8">
      {/* Billing toggle */}
      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-full">
          <Label
            htmlFor="billing-toggle"
            className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${billingAnnually ? "text-gray-500" : "bg-white font-medium shadow-sm"}`}
          >
            Monthly
          </Label>
          <Switch
            id="billing-toggle"
            checked={billingAnnually}
            onCheckedChange={setBillingAnnually}
            className="hidden"
          />
          <Label
            htmlFor="billing-toggle"
            className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${billingAnnually ? "bg-white font-medium shadow-sm" : "text-gray-500"}`}
          >
            Annually <span className="text-green-600 text-sm whitespace-nowrap">(Save 33%)</span>
          </Label>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TooltipProvider>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex"
            >
              <Card
                className={`border-2 flex flex-col h-full w-full ${
                  plan.popular
                    ? "border-brand-600 shadow-lg relative"
                    : plan.color === "blue"
                      ? "border-blue-200"
                      : "border-gray-200"
                }`}
              >
                {plan.popular && plan.badge && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-brand-600 hover:bg-brand-600 text-white px-3 py-1 rounded-full">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className={plan.popular ? "bg-brand-50" : ""}>
                  <CardTitle className="text-2xl flex items-center">
                    {plan.name}
                    {plan.popular && <Star className="h-5 w-5 text-brand-600 ml-2 inline" />}
                  </CardTitle>
                  <p className="text-gray-500">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        ${billingAnnually ? plan.priceAnnually : plan.priceMonthly}
                      </span>
                      <span className="text-gray-500 ml-1">{plan.priceMonthly > 0 ? "/month" : ""}</span>
                    </div>
                    {billingAnnually && plan.priceMonthly > 0 && (
                      <div className="text-sm text-gray-500">Billed annually (${plan.priceAnnually * 12}/year)</div>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          className={`h-5 w-5 ${plan.popular ? "text-brand-500" : "text-green-500"} mr-2 flex-shrink-0 mt-0.5`}
                        />
                        <span>{feature.name}</span>
                        {feature.tooltip && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" className="px-1 py-0 h-auto ml-1">
                                <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </li>
                    ))}
                  </ul>

                  {plan.limitations && plan.limitations.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500 mb-2">Limitations:</p>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="text-sm text-gray-500 flex items-center">
                            <svg
                              className="h-4 w-4 mr-2 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-4 border-t mt-auto">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-brand-600 hover:bg-brand-700"
                        : plan.color === "blue"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    asChild
                  >
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </TooltipProvider>
      </div>

      {/* Money-back guarantee */}
      <div className="text-center mt-8 text-gray-500 bg-gray-50 p-4 rounded-lg">
        <p className="flex items-center justify-center">
          <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          All paid plans come with a 14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </div>
  )
}
