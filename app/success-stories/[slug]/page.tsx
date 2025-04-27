import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getSuccessStoryBySlug } from "@/lib/success-stories-data"
import DetailedSuccessStory from "@/components/detailed-success-story"

interface SuccessStoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: SuccessStoryPageProps): Promise<Metadata> {
  const story = getSuccessStoryBySlug(params.slug)

  if (!story) {
    return {
      title: "Success Story Not Found | ResuMeUp",
    }
  }

  return {
    title: `${story.name}'s Success Story | ResuMeUp`,
    description: `Learn how ${story.name} used ResuMeUp to land a role as ${story.role} at ${story.company} and achieve ${story.achievement}.`,
  }
}

export default function SuccessStoryPage({ params }: SuccessStoryPageProps) {
  const story = getSuccessStoryBySlug(params.slug)

  if (!story) {
    notFound()
  }

  return <DetailedSuccessStory story={story} />
}
