import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h2>
          <div className="mt-8 space-y-6 text-left">
            <p className="text-lg text-muted-foreground">
              Driven Computer Science Engineering student at SMVITM with a CGPA of 8.97, possessing strong proficiency
              in Python, machine learning, artificial intelligence, and Flutter app development. Excellent
              communication, time management, and leadership skills. Recognized for outstanding performance in state and
              national-level competitions.
            </p>
            <p className="text-lg text-muted-foreground">
              Currently enhancing expertise through internships in machine learning and full-stack Flutter app
              development. I am passionate about creating innovative solutions that leverage cutting-edge technologies
              to solve real-world problems.
            </p>
            <div className="flex justify-center pt-6">
              <Button className="gap-2">
                <FileDown className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

