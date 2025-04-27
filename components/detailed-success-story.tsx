import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Quote, CheckCircle, Award, Clock, BarChart } from "lucide-react"
import Link from "next/link"
import OptimizedImage from "@/components/optimized-image"
import type { SuccessStory } from "@/lib/success-stories-data"
import GetStartedButton from "@/components/get-started-button"

interface DetailedSuccessStoryProps {
  story: SuccessStory
}

export default function DetailedSuccessStory({ story }: DetailedSuccessStoryProps) {
  return (
    <div className="container px-4 py-8 md:py-12">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="pl-0 flex items-center gap-2">
          <Link href="/success-stories">
            <ArrowLeft className="h-4 w-4" />
            Back to Success Stories
          </Link>
        </Button>
      </div>

      {/* Hero section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <Badge variant="outline" className="bg-brand-50 text-brand-700 border-brand-200 mb-4 self-start">
            {story.industry}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{story.name}'s Success Story</h1>
          <p className="text-xl text-gray-600 mb-6">
            {story.role} at {story.company}
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex items-start gap-2 mb-4">
              <Quote className="h-8 w-8 text-brand-600 flex-shrink-0 mt-1" />
              <p className="text-lg italic">{story.shortTestimonial}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-sm text-brand-700 font-medium mb-1">ACHIEVEMENT</p>
              <p className="text-lg font-bold">{story.achievement}</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-sm text-brand-700 font-medium mb-1">TIME TO JOB</p>
              <p className="text-lg font-bold">{story.timeToJob}</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] md:h-auto rounded-xl overflow-hidden">
          <OptimizedImage
            src={story.image}
            alt={story.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {story.companyLogo && (
            <div className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-lg">
              <OptimizedImage
                src={story.companyLogo}
                alt={story.company}
                width={60}
                height={60}
                className="h-15 w-15 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">The Journey</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{story.fullTestimonial}</p>

            {story.quote && (
              <div className="my-8 border-l-4 border-brand-500 pl-6 py-2">
                <p className="text-xl italic text-gray-700">{story.quote}</p>
              </div>
            )}

            <Tabs defaultValue="challenges" className="mt-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
                <TabsTrigger value="solutions">Solutions</TabsTrigger>
              </TabsList>
              <TabsContent value="challenges" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {story.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 text-red-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </div>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="solutions" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {story.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Before and After */}
            {story.beforeImage && story.afterImage && (
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Resume Transformation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b">
                      <p className="font-medium">Before ResuMeUp</p>
                    </div>
                    <div className="relative h-[400px]">
                      <OptimizedImage
                        src={story.beforeImage}
                        alt="Resume before using ResuMeUp"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-brand-50 px-4 py-2 border-b">
                      <p className="font-medium text-brand-700">After ResuMeUp</p>
                    </div>
                    <div className="relative h-[400px]">
                      <OptimizedImage
                        src={story.afterImage}
                        alt="Resume after using ResuMeUp"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video testimonial if available */}
            {story.videoTestimonial && (
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Hear from {story.name}</h3>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                  <iframe
                    src={story.videoTestimonial}
                    title={`${story.name}'s video testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-brand-600" />
                  Results at a Glance
                </h3>
                <div className="space-y-4">
                  {story.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <p className="text-gray-600">{stat.label}</p>
                      <p className="font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-600" />
                  Resume Template Used
                </h3>
                <p className="text-gray-700">{story.resumeTemplate}</p>
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2">Job Search Stats</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Applications</p>
                      <p className="font-bold text-lg">{story.jobApplications}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Interviews</p>
                      <p className="font-bold text-lg">{story.interviews}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-600" />
                  Ready for Your Success Story?
                </h3>
                <p className="text-gray-700 mb-4">
                  Join thousands of job seekers who have transformed their careers with ResuMeUp.
                </p>
                <GetStartedButton className="w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related success stories */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">More Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* This would be populated with related stories */}
          {/* For now, just showing placeholder content */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <p className="font-medium">Related success stories would appear here</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
