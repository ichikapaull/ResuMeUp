import type { Metadata } from "next"
import Link from "next/link"
import LoginForm from "@/components/login-form"

export const metadata: Metadata = {
  title: "Login | ResuMeUp",
  description: "Log in to your ResuMeUp account to create, edit, and manage your professional resumes.",
  keywords: "login, sign in, resume builder, ResuMeUp account",
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4 hover:text-brand-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

