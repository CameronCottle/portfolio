"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Building, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample jobs data
const jobs = [
  {
    id: "technova-developer",
    title: "Full Stack Developer",
    company: "TechNova Solutions",
    logo: "/images/technova.webp",
    location: "Logan, UT",
    type: "Full-time",
    description:
      "Developing secure web applications with a focus on implementing cybersecurity best practices. Working on both frontend and backend components of enterprise applications.",
    dates: "2022 - Present",
    skills: ["React", "Node.js", "AWS", "Security Implementation", "Full Stack Development"],
  },
  {
    id: "capitol-hill-intern",
    title: "Legislative Intern",
    company: "Some US Senate Office (probably not a good one)",
    logo: "/images/captiol.webp",
    location: "Washington, D.C.",
    type: "Internship",
    description:
      "Assisted with research on cybersecurity policy and digital privacy legislation. Prepared briefing materials for committee hearings and contributed to policy analysis.",
    dates: "Summer 2023",
    skills: [
      "Policy Research",
      "Legislative Analysis",
      "Technical Writing",
      "Cybersecurity Policy",
      "Government Relations",
    ],
  },
  {
    id: "cyber-research-assistant",
    title: "Cybersecurity Research Assistant",
    company: "Utah State University",
    logo: "/images/usu.webp",
    location: "Logan, UT",
    type: "Part-time",
    description:
      "Conducted research on emerging cybersecurity threats and their policy implications. Assisted faculty with data collection and analysis for academic publications.",
    dates: "2021 - 2022",
    skills: ["Research Methods", "Data Analysis", "Cybersecurity", "Academic Writing", "Python"],
  },
  {
    id: "tech-policy-fellow",
    title: "Technology Policy Fellow",
    company: "Digital Rights Foundation",
    logo: "/images/digitalrights.webp",
    location: "Remote",
    type: "Fellowship",
    description:
      "Participated in a competitive fellowship program focused on digital rights and technology policy. Contributed to policy briefs and public education materials on privacy issues.",
    dates: "Fall 2022",
    skills: ["Policy Analysis", "Digital Rights", "Privacy Advocacy", "Public Education", "Stakeholder Engagement"],
  },
  {
    id: "junior-developer",
    title: "Junior Web Developer",
    company: "Mountain West Digital",
    logo: "/images/mountainwest.webp",
    location: "Salt Lake City, UT",
    type: "Part-time",
    description:
      "Developed and maintained websites for local businesses. Implemented responsive designs and basic security features. First professional role in software development.",
    dates: "2020 - 2021",
    skills: ["JavaScript", "HTML/CSS", "PHP", "WordPress", "Responsive Design"],
  },
]

export default function JobsPage() {
  // Animation variants
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/jobsbackground.jpeg"
          alt="Work Experience background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative container mx-auto px-6 sm:px-8 h-full flex flex-col justify-center items-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Work Experience
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My professional journey in technology and policy
          </motion.p>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Career Path</h2>
            <p className="mt-4 text-lg text-muted-foreground">A timeline of my professional experience and roles</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {jobs.map((job) => (
              <motion.div key={job.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden">
                          <Image
                            src={job.logo || "/placeholder.svg"}
                            alt={`${job.company} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>{job.dates}</span>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{job.company}</span>
                          <Badge variant="outline" className="ml-2">
                            {job.type}
                          </Badge>
                          <Badge variant="secondary" className="ml-2">
                            {job.location}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button asChild className="w-full sm:w-auto">
                      <Link href={`/jobs/${job.id}`}>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Looking for my resume?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
              Download my full resume or contact me directly to discuss potential opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/resume">Download Resume</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link target="_blank" href="https://cameroncottle.net/">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

