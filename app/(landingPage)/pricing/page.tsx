"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Rocket, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      icon: <Zap className="w-6 h-6" />,
      description: "Perfect for job seekers getting started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      originalPrice: null,
      features: [
        "1 Resume Template",
        "Basic ATS Optimization",
        "PDF Download",
        "Email Support",
        "Basic Formatting"
      ],
      limitations: [
        "Limited to 1 resume",
        "No AI suggestions",
        "Basic templates only"
      ],
      buttonText: "Get Started Free",
      popular: false,
      gradient: "from-gray-400 to-gray-600"
    },
    {
      name: "Professional",
      icon: <Crown className="w-6 h-6" />,
      description: "Most popular for serious job seekers",
      monthlyPrice: 15,
      yearlyPrice: 120,
      originalPrice: 180,
      features: [
        "10+ Premium Templates",
        "Advanced ATS Optimization",
        "AI-Powered Content Suggestions",
        "Multiple Resume Versions",
        "Cover Letter Builder",
        "LinkedIn Profile Optimizer",
        "Real-time ATS Scanning",
        "Priority Email Support",
        "Custom Sections",
        "Professional Formatting"
      ],
      limitations: [],
      buttonText: "Start Professional",
      popular: true,
      gradient: "from-primary to-purple-600"
    },
    {
      name: "Enterprise",
      icon: <Rocket className="w-6 h-6" />,
      description: "For teams and career coaches",
      monthlyPrice: 49,
      yearlyPrice: 480,
      originalPrice: 588,
      features: [
        "Everything in Professional",
        "Unlimited Resumes",
        "Team Collaboration",
        "White-label Solutions",
        "API Access",
        "Custom Branding",
        "Analytics Dashboard",
        "Dedicated Account Manager",
        "Phone Support",
        "Custom Integrations",
        "Bulk Operations",
        "Advanced Reporting"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      popular: false,
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  const faqs = [
    {
      question: "What makes ResuMeUp ATS-friendly?",
      answer: "Our resumes are specifically designed to pass Applicant Tracking Systems. We use proper formatting, keywords optimization, and standard layouts that ATS systems can easily parse."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to your paid features until the end of your billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact us within 30 days for a full refund."
    },
    {
      question: "How does the AI content suggestion work?",
      answer: "Our AI analyzes your job description and industry trends to suggest relevant skills, achievements, and optimizations to make your resume more impactful."
    },
    {
      question: "Can I use my resume offline?",
      answer: "Yes, once you download your resume as a PDF, you can use it offline. Your data is also saved in our cloud for easy access and editing."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Software Engineer",
      quote: "Worth every penny! Got 5 interviews in my first week.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Marketing Director",
      quote: "The AI suggestions were game-changing for my career transition.",
      rating: 5
    },
    {
      name: "Jessica L.",
      role: "Product Manager",
      quote: "Clean interface, professional results. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Choose Your Career Growth Plan
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your career goals. All plans include our core ATS optimization 
              technology and professional templates.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <Tabs defaultValue="monthly" className="w-fit">
              <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                <TabsTrigger 
                  value="monthly"
                  onClick={() => setBillingPeriod("monthly")}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger 
                  value="yearly"
                  onClick={() => setBillingPeriod("yearly")}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Yearly
                  <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 33%</Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'border-2 border-primary shadow-2xl scale-105' : 'border border-border'} bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-black">
                          ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-muted-foreground">
                          /{billingPeriod === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                      {plan.originalPrice && billingPeriod === "yearly" && (
                        <p className="text-sm text-muted-foreground mt-2">
                          <span className="line-through">${plan.originalPrice}/year</span>
                          <span className="text-green-600 font-semibold ml-2">Save ${plan.originalPrice - plan.yearlyPrice}</span>
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations.map((limitation, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-60">
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        className={`w-full py-3 font-semibold ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-primary via-purple-500 to-blue-600 hover:shadow-lg' 
                            : 'bg-foreground text-background hover:bg-foreground/90'
                        }`}
                        size="lg"
                      >
                        {plan.buttonText}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Loved by Professionals</h2>
            <p className="text-xl text-muted-foreground">
              See what our users say about their experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ResuMeUp
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of professionals who've transformed their careers with our ATS-optimized resumes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-primary via-purple-500 to-blue-600 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background font-semibold rounded-xl text-lg transition-all duration-300"
              >
                View Examples
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
