import type { Metadata } from "next"
import Link from "next/link"
import ForgotPasswordForm from "@/components/forgot-password-form"

export const metadata: Metadata = {
  title: "Forgot Password | ResuMeUp",
  description: "Reset your ResuMeUp account password.",
  keywords: "forgot password, reset password, account recovery",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Forgot password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>
        <ForgotPasswordForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/login" className="underline underline-offset-4 hover:text-brand-600">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  )
}
