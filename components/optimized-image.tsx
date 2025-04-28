"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  fill?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  quality = 85,
  fill = false,
  ...props
}: OptimizedImageProps) {
  // Handle undefined or empty src
  if (!src) {
    return (
      <div
        className={cn(
          "bg-gray-100 flex items-center justify-center text-gray-400",
          fill ? "w-full h-full absolute inset-0" : "",
          className,
        )}
        style={
          !fill
            ? {
                width: `${width}px`,
                height: `${height}px`,
              }
            : {}
        }
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    )
  }

  // Handle placeholder images
  if (src.includes('placeholder.com') || src.includes('via.placeholder.com')) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-md",
          fill ? "w-full h-full" : "",
          className,
        )}
        style={
          !fill
            ? {
                width: `${width}px`,
                height: `${height}px`,
              }
            : {}
        }
      >
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={cn(
            "object-cover",
            className,
          )}
          priority={priority}
          sizes={sizes}
          quality={quality}
          fill={fill}
          onLoad={(event) => {
            const target = event.target as HTMLImageElement
            target.classList.remove("opacity-0")
            target.classList.add("opacity-100")
          }}
          {...props}
        />
      </div>
    )
  }

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-md transition-all duration-300",
          fill ? "w-full h-full" : "",
          className,
        )}
      >
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={cn(
            "object-cover z-10 opacity-0",
            "hover:scale-[1.02] transition-transform",
            className,
          )}
          priority={priority}
          sizes={sizes}
          quality={quality}
          fill={fill}
          onLoad={(event) => {
            // Add fade-in effect when image loads
            const target = event.target as HTMLImageElement
            target.classList.remove("opacity-0")
            target.classList.add("opacity-100")
            
            // Remove the loading animation when image loads
            if (target.parentElement) {
              const loadingEl = target.parentElement.querySelector(".bg-gray-100")
              if (loadingEl) {
                loadingEl.classList.add("opacity-0")
              }
            }
          }}
          {...props}
        />

        {/* Mobile-optimized touch feedback with animation */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 active:opacity-80 transition-all duration-500 ease-in-out z-10 pointer-events-none"
          style={{
            backgroundSize: "200% 100%",
            animation: "shine 1.5s infinite",
          }}
        />

        {/* Optional image loading indicator */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-brand-600 rounded-full animate-spin opacity-30" />
        </div>
      </div>
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </>
  )
}
