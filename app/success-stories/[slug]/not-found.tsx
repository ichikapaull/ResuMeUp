import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccessStoryNotFound() {
  return (
    <div className="container px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">Success Story Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        We couldn't find the success story you're looking for. It may have been removed or the URL might be incorrect.
      </p>
      <Button asChild>
        <Link href="/success-stories">Browse All Success Stories</Link>
      </Button>
    </div>
  )
}
