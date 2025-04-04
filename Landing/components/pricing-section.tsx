"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  const [billingAnnually, setBillingAnnually] = useState(true)

  const plans = [
    {
      name: "Free",
      description: "Basic resume creation for job seekers",
      priceMonthly: 0,
      priceAnnually: 0,
      features: ["1 resume", "3 basic templates", "PDF downloads", "Basic ATS optimization", "24/7 support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Advanced features for serious job seekers",
      priceMonthly: 12,
      priceAnnually: 8,
      features: [
        "Unlimited resumes",
        "All 20+ templates",
        "Multiple download formats",
        "Advanced ATS optimization",
        "AI content suggestions",
        "Cover letter builder",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and career services",
      priceMonthly: 29,
      priceAnnually: 24,
      features: [
        "Everything in Professional",
        "Team management",
        "Custom branding",
        "API access",
        "Dedicated account manager",
        "Career coaching sessions",
        "Resume analytics",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="mt-12">
      {/* Billing toggle */}
      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center space-x-2">
          <Label htmlFor="billing-toggle" className={billingAnnually ? "text-gray-500" : "font-medium"}>
            Monthly
          </Label>
          <Switch id="billing-toggle" checked={billingAnnually} onCheckedChange={setBillingAnnually} />
          <Label htmlFor="billing-toggle" className={billingAnnually ? "font-medium" : "text-gray-500"}>
            Annually <span className="text-green-600 text-sm">(Save 33%)</span>
          </Label>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`border-2 ${plan.popular ? "border-brand-600 shadow-lg relative" : "border-gray-200"}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <p className="text-gray-500">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">${billingAnnually ? plan.priceAnnually : plan.priceMonthly}</span>
                <span className="text-gray-500">{plan.priceMonthly > 0 ? "/month" : ""}</span>
                {billingAnnually && plan.priceMonthly > 0 && (
                  <div className="text-sm text-gray-500">Billed annually (${plan.priceAnnually * 12}/year)</div>
                )}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  plan.popular ? "bg-brand-600 hover:bg-brand-700" : "bg-gray-900 hover:bg-gray-800"
                }`}
                asChild
              >
                <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Money-back guarantee */}
      <div className="text-center mt-8 text-gray-500">
        All plans come with a 14-day money-back guarantee. No questions asked.
      </div>
    </div>
  )
}

