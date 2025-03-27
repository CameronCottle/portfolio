"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/image-carousel"

// Sample project data
const projects = [
  {
    id: "cyber-ethics-framework",
    title: "Cyber Ethics Framework",
    description:
      "A comprehensive framework for evaluating ethical implications of cybersecurity policies and technologies. This project combines technical analysis with policy considerations to create guidelines for organizations and government agencies.",
    image: "/images/cyberethics.webp",
    shortDescription: "Ethical guidelines for cybersecurity policy development",
    technologies: ["Python", "React", "D3.js", "Policy Analysis", "Research Methods"],
    dates: "Jan 2023 - May 2023",
  },
  {
    id: "secure-voting-system",
    title: "Secure Voting System Prototype",
    description:
      "A blockchain-based secure voting system designed to demonstrate the potential for technology to enhance democratic processes while maintaining security and privacy.",
    image: "/images/voting.webp",
    shortDescription: "Blockchain-based electronic voting with enhanced security",
    technologies: ["Solidity", "Ethereum", "React", "Node.js", "Cryptography"],
    dates: "Aug 2022 - Dec 2022",
  },
  {
    id: "privacy-policy-analyzer",
    title: "Privacy Policy Analyzer",
    description:
      "An AI-powered tool that analyzes privacy policies and terms of service agreements to highlight potential privacy concerns and simplify complex legal language for users.",
    image: "/images/privacypolicy.webp",
    shortDescription: "AI tool for analyzing privacy implications in legal documents",
    technologies: ["Python", "NLP", "Machine Learning", "Flask", "React"],
    dates: "Mar 2022 - Jul 2022",
  },
  {
    id: "cyber-threat-dashboard",
    title: "Cyber Threat Intelligence Dashboard",
    description:
      "A real-time dashboard for monitoring and visualizing cyber threats, designed for policy makers to understand technical vulnerabilities in accessible terms.",
    image: "/images/cyberdashboard.webp",
    shortDescription: "Real-time visualization of cybersecurity threats for policy makers",
    technologies: ["JavaScript", "D3.js", "Node.js", "Express", "MongoDB"],
    dates: "Sep 2021 - Feb 2022",
  },
  {
    id: "fishing-spot-finder",
    title: "Fishing Spot Finder App",
    description:
      "A mobile application that helps anglers find optimal fishing locations based on weather conditions, fish species data, and user reports.",
    image: "/images/fishfinder.webp",
    shortDescription: "Mobile app for locating prime fishing spots with real-time data",
    technologies: ["React Native", "Firebase", "Google Maps API", "Weather API", "Node.js"],
    dates: "May 2021 - Aug 2021",
  },
]

export default function ProjectsPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300])

  // Fade-in animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative min-h-screen" ref={containerRef}>
      {/* Parallax Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY }}>
          <Image
            src="/images/projectsbackground.jpg"
            alt="Projects background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
        <div className="relative z-20 container mx-auto px-6 sm:px-8 h-full flex flex-col justify-center items-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where technology meets policy and ethics (and fishing?)
          </motion.p>
        </div>
      </div>

      {/* Featured Projects Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">Take a closer look at some of my best work</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl"
          >
            <ImageCarousel />
          </motion.div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">All Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">Browse through my complete portfolio of work</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="font-normal">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{project.dates}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/projects/${project.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Interested in collaboration?</h2>
            <p className="mx-auto max-w-2xl text-lg mb-8">
              I'm always open to discussing new projects and opportunities in cybersecurity and policy.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link target="_blank" href="https://cameroncottle.net/">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

