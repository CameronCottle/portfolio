"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  image: string;
  description: string;
  features: string[];
  technologies: string[];
  dates: string;
  link?: string;
  github?: string;
}

export default function ProjectClient({ project }: { project: Project }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 sm:px-8 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Button variant="outline" size="sm" asChild className="mb-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              className="md:col-span-2 space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <div className="prose max-w-none dark:prose-invert">
                  {project.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code2 className="h-3 w-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Timeline</h4>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{project.dates}</span>
                    </div>
                  </div>

                  {project.link && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Live Demo</h4>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          Visit Project <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  )}

                  {project.github && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Source Code</h4>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          View on GitHub <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Interested in this work?</h3>
                <p className="text-muted-foreground mb-4">
                  I&apos;m available to discuss cybersecurity and policy projects or research opportunities.
                </p>
                <Button asChild className="w-full">
                  <Link target="_blank" href="https://cameroncottle.net/">Contact Me</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
