import Link from "next/link"
import { Button } from "@/components/ui/button"

interface GetStartedButtonProps {
  className?: string
  size?: "default" | "sm" | "lg"
}

export default function GetStartedButton({ className, size = "default" }: GetStartedButtonProps) {
  return (
    <Button size={size} className={`bg-brand-600 hover:bg-brand-700 ${className}`} asChild>
      <Link href="/resume-wizard">Get Started</Link>
    </Button>
  )
}
