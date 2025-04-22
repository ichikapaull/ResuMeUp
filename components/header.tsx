"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

// Navigation items for the header
const navItems = [
  { name: "Home", href: "/" },
  { name: "Templates", href: "/templates" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and brand name */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
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
          </Link>
        </div>

        {/* Desktop navigation */}
        {isDesktop ? (
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-medium transition-colors hover:text-brand-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button size="sm" className="bg-brand-600 hover:bg-brand-700" asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </nav>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}

        {/* Mobile navigation */}
        {!isDesktop && mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-1 md:hidden bg-background">
            <div className="relative z-20 grid gap-6 rounded-md p-4">
              <nav className="grid grid-flow-row auto-rows-max text-sm">
                <ul className="grid gap-6">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-medium transition-colors hover:text-brand-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      Log in
                    </Link>
                  </Button>
                  <Button className="bg-brand-600 hover:bg-brand-700" asChild>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                      Sign up
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
