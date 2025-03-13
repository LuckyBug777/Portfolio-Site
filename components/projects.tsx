"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Filter } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Project = {
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  category: string[]
}

const projects: Project[] = [
  {
    title: "Data Augmentation using GANs",
    description:
      "Developed advanced data augmentation techniques. Implemented Generative Adversarial Networks for image synthesis. Improved machine learning model performance through synthetic data generation.",
    technologies: ["Python", "TensorFlow", "GANs", "Machine Learning"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    category: ["Machine Learning", "AI"],
  },
  {
    title: "BabyCare - Early Childhood Development Tracking App",
    description:
      "Flutter-based mobile application for monitoring child development. Features: Growth tracking, milestone assessment, personalized recommendations, downsyndrome detection, autism detection, doctor dashboard. Utilized machine learning for predictive insights.",
    technologies: ["Flutter", "Dart", "Firebase", "Machine Learning"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    liveUrl: "#",
    category: ["Mobile App", "Flutter", "Machine Learning"],
  },
  {
    title: "CareGuardian App",
    description:
      "Comprehensive health management with features like early COPD detection, continuous health monitoring, emergency SOS alerts, and AI voice health assistant.",
    technologies: ["Flutter", "Dart", "Firebase", "AI"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    liveUrl: "#",
    category: ["Mobile App", "Flutter", "AI"],
  },
  {
    title: "Pregacare App",
    description:
      "Supports women's health and pregnancy with secure login, health metric tracking, personalized nutrition plans, and more.",
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    liveUrl: "#",
    category: ["Mobile App", "Flutter"],
  },
  {
    title: "MedCab App",
    description:
      "Developed a blood bank management system in Android using XML, Java, and MySQL. Features include appointment scheduling, urgent blood request submissions, donor search by blood group and city, and user-request sharing.",
    technologies: ["Android", "Java", "MySQL", "XML"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    category: ["Mobile App", "Android"],
  },
  {
    title: "Online Voting System",
    description:
      "Designed a web-based voting platform with HTML, CSS, PHP, and MySQL. Features party creation, voting functionality, party count display, duplicate vote prevention, and a user-friendly interface.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    liveUrl: "#",
    category: ["Web", "Database"],
  },
  {
    title: "Text-to-Video Generation System",
    description:
      "Developed an automated multimedia tool that generates videos from text prompts using ChatGPT's API. Creates and morphs images sequentially into videos.",
    technologies: ["Python", "ChatGPT API", "OpenCV"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    category: ["AI", "Machine Learning"],
  },
  {
    title: "Mango Ripeness Detection Model",
    description:
      "Created a machine learning application to predict mango ripeness based on image analysis. User interface developed using HTML, CSS, and JavaScript.",
    technologies: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    category: ["Machine Learning", "Web"],
  },
  {
    title: "Image Classification and Sorting App",
    description:
      "Integrated with the device's gallery to classify and sort images based on user-defined categories. Technologies: Flutter, Dart, machine learning models.",
    technologies: ["Flutter", "Dart", "Machine Learning"],
    image: "/placeholder.svg?height=200&width=400",
    githubUrl: "#",
    category: ["Mobile App", "Flutter", "Machine Learning"],
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null)

  // Get unique categories
  const categories = Array.from(new Set(projects.flatMap((project) => project.category))).sort()

  const filteredProjects = filter ? projects.filter((project) => project.category.includes(filter)) : projects

  return (
    <section id="projects" className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 md:mb-0">Projects</h2>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                {filter ? `Filter: ${filter}` : "Filter Projects"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilter(null)}>All Projects</DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem key={category} onClick={() => setFilter(category)}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

