"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-16 items-center">
          <div className="flex flex-col items-center justify-center space-y-4 md:items-start md:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Prathviraj
              </span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Software Developer specializing in Flutter, Machine Learning & AI
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={scrollToAbout} className="group flex items-center gap-2">
                Learn More
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Prathviraj"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

