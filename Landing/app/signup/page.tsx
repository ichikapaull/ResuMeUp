import type { Metadata } from "next"
import Link from "next/link"
import SignupForm from "@/components/signup-form"

export const metadata: Metadata = {
  title: "Sign Up | ResuMeUp",
  description: "Create a ResuMeUp account to build professional, ATS-friendly resumes and land your dream job.",
  keywords: "sign up, register, create account, resume builder, ResuMeUp",
}

export default function SignupPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Sign up to start creating your professional resume</p>
        </div>
        <SignupForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4 hover:text-brand-600">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

