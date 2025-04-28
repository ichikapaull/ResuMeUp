import type { Metadata } from "next"
import { successStories } from "@/lib/success-stories-data"
import SuccessStoryCard from "@/components/success-story-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GetStartedButton from "@/components/get-started-button"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Success Stories | ResuMeUp",
  description: "Discover how job seekers transformed their careers with ResuMeUp's professional resume templates.",
}

export default function SuccessStoriesPage() {
  // Get unique industries for filtering
  const industries = Array.from(new Set(successStories.map((story) => story.industry)))

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <OptimizedImage src="/images/brand/pattern.svg" alt="" fill className="object-cover" aria-hidden="true" />
        </div>

        {/* Animated success indicators */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <div className="bg-brand-50 text-brand-700 rounded-full px-3 py-1 text-sm font-medium animate-bounce shadow-md">
            +30% Salary Increase
          </div>
        </div>
        <div className="absolute bottom-20 left-20 hidden lg:block">
          <div className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium animate-pulse shadow-md">
            Hired in 21 Days
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-block rounded-lg bg-brand-600 px-3 py-1 text-sm text-white shadow-sm">
                Transformation Stories
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">
                  Career Transformations That Inspire
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                  Discover how job seekers just like you overcame challenges, impressed employers, and landed their
                  dream roles with ResuMeUp.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <GetStartedButton size="lg" className="shadow-lg hover:shadow-xl transition-all" />
                <Button size="lg" variant="outline" className="group relative overflow-hidden" asChild>
                  <a href="#stories">
                    <span className="absolute inset-0 bg-brand-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200"></span>
                    <span className="relative">Explore Success Stories</span>
                  </a>
                </Button>
              </div>

              {/* Success metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-brand-600">93%</p>
                  <p className="text-xs text-gray-500">Success Rate</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-brand-600">2.5x</p>
                  <p className="text-xs text-gray-500">More Interviews</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-brand-600">21</p>
                  <p className="text-xs text-gray-500">Days to Hire</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-brand-600">20%</p>
                  <p className="text-xs text-gray-500">Salary Increase</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 transform lg:translate-x-10">
                <div className="space-y-4">
                  <div className="relative h-40 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <OptimizedImage
                      src="/images/icons/alex-morgan.png"
                      alt="Success story"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Product Manager</p>
                    </div>
                  </div>
                  <div className="relative h-60 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <OptimizedImage
                      src="/images/icons/priya-sharma.png"
                      alt="Success story"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Financial Analyst</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-60 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <OptimizedImage
                      src="/images/icons/marcus-johnson.png"
                      alt="Success story"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Software Engineer</p>
                    </div>
                  </div>
                  <div className="relative h-40 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <OptimizedImage
                      src="/images/success-stories/emma-wilson.png"
                      alt="Success story"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Marketing Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-brand-600 hidden lg:block"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-4 border-brand-200 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Browse Success Stories</h2>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="flex flex-wrap">
              <TabsTrigger value="all">All Industries</TabsTrigger>
              {industries.map((industry) => (
                <TabsTrigger key={industry} value={industry}>
                  {industry}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successStories.map((story) => (
                  <SuccessStoryCard key={story.id} {...story} />
                ))}
              </div>
            </TabsContent>
            {industries.map((industry) => (
              <TabsContent key={industry} value={industry} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {successStories
                    .filter((story) => story.industry === industry)
                    .map((story) => (
                      <SuccessStoryCard key={story.id} {...story} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Write Your Success Story?</h2>
          <p className="max-w-[600px] mx-auto text-gray-500 mb-8">
            Join thousands of job seekers who have transformed their careers with ResuMeUp.
          </p>
          <GetStartedButton size="lg" />
        </div>
      </section>
    </div>
  )
}
