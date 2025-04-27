import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import OptimizedImage from "@/components/optimized-image"

export interface SuccessStoryProps {
  id: string
  name: string
  role: string
  company: string
  companyLogo?: string
  image: string
  shortTestimonial: string
  industry: string
  achievement: string
  timeToJob: string
  slug: string
}

export default function SuccessStoryCard({
  name,
  role,
  company,
  companyLogo,
  image,
  shortTestimonial,
  industry,
  achievement,
  timeToJob,
  slug,
}: SuccessStoryProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-md h-full flex flex-col">
      <div className="relative h-64 w-full">
        <OptimizedImage
          src={image}
          alt={`${name}, ${role} at ${company}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {companyLogo && (
          <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
            <OptimizedImage
              src={companyLogo}
              alt={company}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>
        )}
      </div>
      <CardContent className="flex-grow p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-600">
              {role} at {company}
            </p>
          </div>
          <Badge variant="outline" className="bg-brand-50 text-brand-700 border-brand-200">
            {industry}
          </Badge>
        </div>
        <p className="text-gray-700 italic mb-4">"{shortTestimonial}"</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">ACHIEVEMENT</p>
            <p className="font-medium">{achievement}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">TIME TO JOB</p>
            <p className="font-medium">{timeToJob}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-4">
        <Button asChild className="w-full bg-brand-600 hover:bg-brand-700">
          <Link href={`/success-stories/${slug}`}>Read Full Story</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
