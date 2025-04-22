import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Zap, Shield, Award, Users } from "lucide-react"
import TemplateShowcase from "@/components/template-showcase"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PricingSection from "@/components/pricing-section"
import GetStartedButton from "@/components/get-started-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  ResuMeUp: Professional Resumes That Get You Hired
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Build ATS-friendly resumes with our easy-to-use platform. Stand out to employers and land your dream
                  job.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GetStartedButton size="lg" />
                <Button size="lg" variant="outline" asChild>
                  <Link href="/features">Learn More</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>ATS-Optimized</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Professional Templates</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Easy to Use</span>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="relative w-full max-w-[500px] aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/at98cv-NcSIoDIgOvScjOdpGgwm2of0ng0VnO.jpeg"
                  alt="Resume preview"
                  className="object-contain w-full h-full"
                  width={480}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">ATS Score: 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides all the tools you need to create a professional resume that gets you noticed.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-brand-100 p-3">
                  <FileText className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold">ATS-Optimized Templates</h3>
                <p className="text-gray-500">
                  Our templates are designed to pass through Applicant Tracking Systems with ease.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-brand-100 p-3">
                  <Zap className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold">AI Content Suggestions</h3>
                <p className="text-gray-500">
                  Get intelligent suggestions for skills, achievements, and job descriptions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-brand-100 p-3">
                  <Shield className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold">Privacy Protection</h3>
                <p className="text-gray-500">
                  Your data is secure and never shared with third parties without your consent.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-brand-100 p-3">
                  <Award className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold">Expert-Approved Designs</h3>
                <p className="text-gray-500">Templates designed by HR professionals and hiring managers.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-brand-100 p-3">
                  <Users className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold">Career Coaching</h3>
                <p className="text-gray-500">
                  Get personalized advice from career experts to improve your job prospects.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-brand-100 p-3">
                  <FileText className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold">Multiple Export Formats</h3>
                <p className="text-gray-500">
                  Download your resume as PDF, DOCX, or plain text for different application needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Template Showcase Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Templates</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Resume Templates</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our collection of professionally designed templates for every industry and career stage.
              </p>
            </div>
          </div>
          <TemplateShowcase />
          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link href="/templates">View All Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from people who have successfully landed their dream jobs using ResuMeUp.
              </p>
            </div>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works best for your needs and budget.
              </p>
            </div>
          </div>
          <PricingSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Land Your Dream Job?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of job seekers who have successfully used ResuMeUp to create professional resumes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <GetStartedButton size="lg" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
