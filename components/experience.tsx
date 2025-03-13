import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Experience = {
  title: string
  company: string
  location?: string
  period?: string
  description: string[]
  highlights?: string[]
}

const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "UniCourt (Mangalore InfotechSolutions)",
    description: [
      "Developed data scraping techniques for court websites.",
      "Worked on big data normalization strategies.",
      "Enhanced data processing efficiency through advanced algorithms.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Niveus Solution, Mangalore",
    description: [
      "Completed a two-month internship focusing on machine learning.",
      "Assisted in developing models and algorithms.",
    ],
  },
  {
    title: "Machine Learning and Flutter App Development Intern",
    company: "Arisecraft Technologies, Udupi",
    description: [
      "Contributed to machine learning projects.",
      "Developed and integrated features in Flutter-based applications.",
    ],
  },
  {
    title: "Artificial Intelligence and Machine Learning Intern",
    company: "Technologies, Bangalore",
    description: [
      "Worked as an AI and Machine Learning Intern gaining hands-on experience in developing intelligent systems.",
      "Contributed to various projects involving machine learning models, data analysis, and deep learning.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Shlokaa, Udupi",
    description: [
      "Debugged and fixed issues in the company's existing website, ensuring smooth functionality and performance.",
      "Worked on both front-end and back-end development, improving overall website efficiency.",
    ],
  },
  {
    title: "Intern, App Development",
    company: "Bharath Intern",
    description: [
      "Developed mobile applications using Flutter.",
      "Completed the internship within one month with positive feedback from mentors.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12">
          Professional Experience
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border hidden md:block"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 md:px-8">
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="text-muted-foreground">
                        <div className="font-medium">{exp.company}</div>
                        {exp.location && <div>{exp.location}</div>}
                        {exp.period && <div>{exp.period}</div>}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      {exp.highlights && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, i) => (
                            <Badge key={i} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:block">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

