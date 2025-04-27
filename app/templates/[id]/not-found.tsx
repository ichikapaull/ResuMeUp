import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TemplateNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Template Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        Sorry, we couldn't find the template you're looking for. It may have been removed or the URL might be incorrect.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-brand-600 hover:bg-brand-700" asChild>
          <Link href="/templates">Browse Templates</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
