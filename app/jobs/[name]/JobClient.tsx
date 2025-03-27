"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Building, Calendar, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function JobClient({ job }) {
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
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Button variant="outline" size="sm" asChild className="mb-8">
              <Link href="/jobs">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden bg-background">
                <Image src={job.logo || "/placeholder.svg"} alt={`${job.company} logo`} fill className="object-cover" priority />
              </div>

              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Building className="mr-2 h-4 w-4" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{job.dates}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{job.type}</Badge>
                  {job.skills.slice(0, 5).map((skill) => (
                    <Badge key={skill} variant="outline" className="font-normal">{skill}</Badge>
                  ))}
                  {job.skills.length > 5 && (
                    <Badge variant="outline" className="font-normal">+{job.skills.length - 5} more</Badge>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div className="md:col-span-2 space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-bold">Job Description</h2>
                <div className="prose max-w-none dark:prose-invert">
                  {job.description.split("\n\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-bold">Responsibilities</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-3 w-3 text-primary" />
                      </div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Looking to hire?</h3>
                <p className="text-muted-foreground mb-4">I'm open to discussing new opportunities in cybersecurity and policy.</p>
                <Button asChild className="w-full">
                  <Link target="_blank" href="https://cameroncottle.net/">Contact Me</Link>
                </Button>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Resume</h3>
                <p className="text-muted-foreground mb-4">Get a complete overview of my experience and skills.</p>
                <Button variant="outline" asChild className="w-full">
                  <Link target="_blank" href="https://cameroncottle.net/?page_id=181">View Resume</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
