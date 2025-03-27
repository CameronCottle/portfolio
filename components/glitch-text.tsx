"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  glitchInterval?: number
  highlightColor?: string
}

export function GlitchText({
  text,
  className,
  glitchInterval = 3000,
  highlightColor = "text-primary",
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Initial glitch after a short delay
    const initialTimeout = setTimeout(() => {
      triggerGlitch()
    }, 1000)

    // Set up interval for recurring glitches
    const interval = setInterval(() => {
      triggerGlitch()
    }, glitchInterval)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [glitchInterval])

  const triggerGlitch = () => {
    setIsGlitching(true)
    setTimeout(() => {
      setIsGlitching(false)
    }, 500)
  }

  return (
    <span className={cn("relative inline-block", className)}>
      <span className={cn("relative inline-block transition-colors", isGlitching && highlightColor)}>{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute left-0 top-0 inline-block opacity-70 text-red-500"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, -2px)",
              animation: "glitch-anim-1 0.2s infinite linear alternate-reverse",
            }}
          >
            {text}
          </span>
          <span
            className="absolute left-0 top-0 inline-block opacity-70 text-blue-500"
            style={{
              clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)",
              transform: "translate(2px, 2px)",
              animation: "glitch-anim-2 0.3s infinite linear alternate-reverse",
            }}
          >
            {text}
          </span>
        </>
      )}
      <style jsx global>{`
        @keyframes glitch-anim-1 {
          0% {
            transform: translate(-2px, -2px);
          }
          25% {
            transform: translate(-1px, 1px);
          }
          50% {
            transform: translate(1px, -1px);
          }
          75% {
            transform: translate(2px, 1px);
          }
          100% {
            transform: translate(-1px, -1px);
          }
        }
        @keyframes glitch-anim-2 {
          0% {
            transform: translate(2px, 2px);
          }
          25% {
            transform: translate(-1px, -1px);
          }
          50% {
            transform: translate(1px, 1px);
          }
          75% {
            transform: translate(-2px, 1px);
          }
          100% {
            transform: translate(1px, -1px);
          }
        }
      `}</style>
    </span>
  )
}

