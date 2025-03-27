"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 sm:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Cam Cottle
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-foreground/80 hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/jobs" className="text-foreground/80 hover:text-foreground transition-colors">
            Experience
          </Link>
        </nav>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/projects" className="text-foreground/80 hover:text-foreground transition-colors">
                  Projects
                </Link>
                <Link href="/jobs" className="text-foreground/80 hover:text-foreground transition-colors">
                  Experience
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

