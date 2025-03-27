import Link from "next/link"
import { ChevronRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"
import { GlitchText } from "@/components/glitch-text"
import { ProfileImage } from "@/components/profile-image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-8 items-center py-20">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Cybersecurity Ethics & Policy Enthusiast 
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm <GlitchText text="Cam Cottle" highlightColor="text-primary" glitchInterval={4000} />
            </h1>
            <p className="text-xl text-muted-foreground">
              A full stack developer with a passion for cyber ethics and policy at the federal level.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link target="_blank" href="https://cameroncottle.net/">
                  Get in touch <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">View my work</Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:alex.morgan@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <ProfileImage />
          </div>
        </section>

        {/* About Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Computer science student with a focus on cybersecurity and policy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Education</h3>
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold">B.S. Computer Science</h4>
                        <p className="text-sm text-muted-foreground">Utah State University</p>
                      </div>
                      <p className="text-sm text-muted-foreground">2020 - 2024</p>
                    </div>
                    <p className="mt-2 text-sm">Minor in Anticipatory Intelligence</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Work Experience</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4 shadow-sm">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-semibold">Full Stack Developer</h4>
                          <p className="text-sm text-muted-foreground">TechNova Solutions</p>
                        </div>
                        <p className="text-sm text-muted-foreground">2022 - Present</p>
                      </div>
                      <p className="mt-2 text-sm">
                        Developing secure web applications and implementing cybersecurity best practices.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4 shadow-sm">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-semibold">Legislative Intern</h4>
                          <p className="text-sm text-muted-foreground">U.S. Capitol Hill</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Summer 2023</p>
                      </div>
                      <p className="mt-2 text-sm">
                        Assisted with research on cybersecurity policy and digital privacy legislation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Professional Interests</h3>
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <p className="text-sm">
                      I'm passionate about the intersection of technology and policy, particularly in the realm of cyber
                      ethics. My goal is to work at the federal level, helping shape policies that protect digital
                      privacy while enabling technological innovation. With experience in both software development and
                      policy research, I bring a unique perspective to addressing complex cybersecurity challenges.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Personal Interests</h3>
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <p className="text-sm">
                      Outside of academics and work, I'm an avid lacrosse player and enjoy spending time outdoors
                      fishing. I'm also passionate about reading, particularly books on technology ethics and science
                      fiction. In my spare time, you can find me working on my motorcycle, combining my technical skills
                      with my love for hands-on projects.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "Python",
                      "React",
                      "Node.js",
                      "AWS",
                      "Cybersecurity",
                      "Policy Analysis",
                      "Full Stack Development",
                      "Research",
                      "Technical Writing",
                    ].map((skill) => (
                      <div key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">Take a look at some of my recent work</p>
            </div>

            <div className="mx-auto max-w-5xl">
              <ImageCarousel />
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/projects">
                  View all projects <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let's Connect</h2>
            <p className="mx-auto max-w-2xl text-lg mb-8">
              I'm always interested in discussing cybersecurity, policy, or potential collaboration opportunities.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link target="_blank" href="https://cameroncottle.net/">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

