import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-xl font-bold">
              Prathviraj
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Software Developer specializing in Flutter, Machine Learning & AI
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-4">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:prathviz.111@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-right">
              &copy; {currentYear} Prathviraj. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-6">
            <Link href="#hero" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground">
              Skills
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground">
              Experience
            </Link>
            <Link href="#education" className="text-sm text-muted-foreground hover:text-foreground">
              Education
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

