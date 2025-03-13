import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type Skill = {
  name: string
  level: number
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Mobile Development",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "XAMPP", level: 75 },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 75 },
    ],
  },
  {
    name: "Machine Learning",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "scikit-learn", level: 80 },
      { name: "GANs", level: 75 },
      { name: "Keras", level: 80 },
      { name: "OpenCV", level: 85 },
      { name: "NLP", level: 70 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "ChatGPT API", level: 80 },
      { name: "Gemini API", level: 75 },
      { name: "PyCharm", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Time Management", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 85 },
      { name: "Team Collaboration", level: 90 },
      { name: "Adaptability", level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

