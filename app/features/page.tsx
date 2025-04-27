import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import GetStartedButton from "@/components/get-started-button"
import OptimizedImage from "@/components/optimized-image"
import { images } from "@/lib/image-assets"

export const metadata: Metadata = {
  title: "Features | ResuMeUp",
  description: "Learn more about ResuMeUp's powerful features and how they can help you land your dream job.",
  keywords: "resume builder, ATS optimization, resume features, professional resume, job application",
}

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">Features</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Tools for Your Job Search Success
            </h1>
            <p className="text-xl text-gray-500 max-w-[700px]">
              Discover how ResuMeUp's innovative features can transform your resume and boost your chances of landing
              interviews.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="#ats-optimization">ATS Optimization</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#ai-tools">AI Tools</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#templates">Templates</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#customization">Customization</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#analytics">Analytics</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Overview */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={images.features.atsOptimization}
                  alt="ATS optimization visualization"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold">ATS-Friendly Design</h3>
                <p className="text-gray-500">
                  Our templates are specifically engineered to pass through Applicant Tracking Systems with flying
                  colors, ensuring your resume gets seen by human recruiters.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={images.features.aiTools}
                  alt="AI-powered content generation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold">AI-Powered Content</h3>
                <p className="text-gray-500">
                  Leverage our advanced AI tools to generate impactful bullet points, optimize your professional
                  summary, and highlight your most relevant skills.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={images.features.analytics || "/images/features/analytics.jpg"}
                  alt="Resume analytics dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold">Resume Analytics</h3>
                <p className="text-gray-500">
                  Get detailed insights into how your resume performs, with actionable recommendations to improve your
                  chances of getting interviews.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ATS Optimization Section */}
      <section id="ats-optimization" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">
                ATS Optimization
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Beat the Applicant Tracking Systems</h2>
              <p className="text-xl text-gray-500">
                Over 75% of resumes are rejected before a human ever sees them. Our ATS-optimized templates ensure your
                resume makes it through the digital gatekeepers.
              </p>
              <ul className="space-y-2">
                {[
                  "Keyword optimization based on job descriptions",
                  "Clean, parsable formatting that ATS systems can read",
                  "Proper heading structure recognized by all major ATS platforms",
                  "Real-time ATS compatibility score",
                  "Suggestions to improve your resume's ATS performance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-video relative">
                <OptimizedImage
                  src={images.features.atsOptimization}
                  alt="ATS optimization visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">ATS Score: 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="ai-tools" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-video relative">
                <OptimizedImage
                  src={images.features.aiTools}
                  alt="AI content generation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent" />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">AI Tools</div>
              <h2 className="text-3xl font-bold tracking-tighter">AI-Powered Resume Enhancement</h2>
              <p className="text-xl text-gray-500">
                Our advanced AI tools analyze your experience and skills to generate impactful content that highlights
                your strengths and achievements.
              </p>
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="content">Content Generation</TabsTrigger>
                  <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
                  <TabsTrigger value="feedback">Smart Feedback</TabsTrigger>
                </TabsList>
                <TabsContent value="content" className="space-y-4 mt-4">
                  <h3 className="text-lg font-medium">Powerful Content Generation</h3>
                  <p>
                    Transform basic job descriptions into achievement-focused bullet points that showcase your impact
                    and value to potential employers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Generate achievement-oriented bullet points</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Create compelling professional summaries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enhance existing content with stronger language</span>
                    </li>
                  </ul>
                </TabsContent>
                {/* Other tab contents... */}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">Templates</div>
            <h2 className="text-3xl font-bold tracking-tighter">Professional Resume Templates</h2>
            <p className="text-xl text-gray-500 max-w-[700px]">
              Choose from our collection of expertly designed templates for every industry and career stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Professional",
                description: "A clean, traditional layout perfect for most industries",
                image: images.templates.professional,
                tag: "Most Popular",
              },
              {
                name: "Modern",
                description: "A contemporary design with a fresh look",
                image: images.templates.modern,
              },
              {
                name: "Executive",
                description: "An elegant design for senior positions",
                image: images.templates.executive,
                tag: "Premium",
              },
            ].map((template, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="relative">
                  <div className="aspect-[3/4] relative">
                    <OptimizedImage
                      src={template.image}
                      alt={`${template.name} template preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {template.tag && (
                    <div className="absolute top-2 right-2 bg-brand-600 text-white text-xs px-2 py-1 rounded-full">
                      {template.tag}
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">{template.name}</h3>
                      <p className="text-sm text-gray-500">{template.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link href="/templates">View All Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional sections... */}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Build Your Perfect Resume?</h2>
            <p className="text-xl text-gray-500">
              Join thousands of job seekers who have successfully used ResuMeUp to land their dream jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GetStartedButton size="lg" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/templates">Browse Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
