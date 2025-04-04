import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-brand-600"
              >
                <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                <path d="M8 13v-2" />
                <path d="M16 13v-2" />
                <path d="M8 21v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8" />
              </svg>
              <span className="font-bold text-xl text-brand-700">ResuMeUp</span>
            </div>
            <p className="text-base text-gray-500">
              Create professional, ATS-friendly resumes that help you land your dream job with ResuMeUp.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Product</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/templates" className="text-base text-gray-500 hover:text-gray-900">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="text-base text-gray-500 hover:text-gray-900">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-base text-gray-500 hover:text-gray-900">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="text-base text-gray-500 hover:text-gray-900">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/help" className="text-base text-gray-500 hover:text-gray-900">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="text-base text-gray-500 hover:text-gray-900">
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-base text-gray-500 hover:text-gray-900">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/press" className="text-base text-gray-500 hover:text-gray-900">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-base text-gray-500 hover:text-gray-900">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base text-gray-400">
                &copy; {new Date().getFullYear()} ResuMeUp. All rights reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <form className="flex w-full max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto"
                />
                <Button type="submit" className="ml-4 flex-none bg-brand-600 hover:bg-brand-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

