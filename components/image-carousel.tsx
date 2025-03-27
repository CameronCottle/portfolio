"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "cyber-ethics-framework",
    title: "Cyber Ethics Framework",
    description:
      "A comprehensive framework for evaluating ethical implications of cybersecurity policies and technologies.",
    image: "/images/cyberethics.webp",
    link: "/projects/cyber-ethics-framework",
    tags: ["Python", "React", "Policy Analysis"],
  },
  {
    id: "secure-voting-system",
    title: "Secure Voting System Prototype",
    description:
      "A blockchain-based secure voting system designed to enhance democratic processes while maintaining security.",
    image: "/images/voting.webp",
    link: "/projects/secure-voting-system",
    tags: ["Blockchain", "React", "Cryptography"],
  },
  {
    id: "privacy-policy-analyzer",
    title: "Privacy Policy Analyzer",
    description:
      "AI-powered tool that analyzes privacy policies to highlight concerns and simplify complex legal language.",
    image: "/images/privacypolicy.webp",
    link: "/projects/privacy-policy-analyzer",
    tags: ["Python", "NLP", "Machine Learning"],
  },
  {
    id: "cyber-threat-dashboard",
    title: "Cyber Threat Intelligence Dashboard",
    description:
      "Real-time dashboard for visualizing cyber threats, designed for policy makers and non-technical stakeholders.",
    image: "/images/cyberdashboard.webp",
    link: "/projects/cyber-threat-dashboard",
    tags: ["JavaScript", "D3.js", "Data Visualization"],
  },
  {
    id: "fishing-spot-finder",
    title: "Fishing Spot Finder App",
    description: "Mobile application that helps anglers find optimal fishing locations based on multiple data sources.",
    image: "/images/fishfinder.webp",
    link: "/projects/fishing-spot-finder",
    tags: ["React Native", "Firebase", "Maps API"],
  },
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  return (
    <div className="relative overflow-hidden rounded-xl border bg-background p-1 mx-auto">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-full">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-4 max-w-md">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/20 px-3 py-1 text-xs text-primary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild size="sm">
                    <Link href={project.link}>
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {projects.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={cn("h-2 w-2 rounded-full p-0", currentIndex === index ? "bg-primary" : "bg-muted")}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

