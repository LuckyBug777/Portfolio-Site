import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

type Education = {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  achievements?: string[]
}

type Achievement = {
  title: string
  description: string
}

const education: Education = {
  degree: "BE (Computer Science Engineering)",
  institution: "SMVITM",
  location: "Udupi, Karnataka",
  period: "12/2021 - Present",
  description:
    "Driven Computer Science Engineering student at SMVITM with a CGPA of 8.97, possessing strong proficiency in Python, machine learning, artificial intelligence, and Flutter app development. Excellent communication, time management, and leadership skills. Recognized for outstanding performance in state and national-level competitions. Currently enhancing expertise through internships in machine learning and full-stack Flutter app development.",
}

const achievements: Achievement[] = [
  {
    title: "1st Place, Unicourt Codefest",
    description: "Problem Solving, Mangalore (2024)",
  },
  {
    title: "2nd Runner-up, National Level Hackathon",
    description: "Shri Eshwar College of Engineering, Coimbatore (2023)",
  },
  {
    title: "2nd Prize, State Level Ideathon Competition",
    description: "Animation and Gaming Theme, SMVITM (2022)",
  },
  {
    title: "4th Prize, District Level Project Competition",
    description: "Anveshana 2022, Dharwad Section, Agastya Foundation (2022)",
  },
  {
    title: "3rd Prize, Mini Project Competition",
    description: "SMVITM (2022)",
  },
  {
    title: "4th Prize, Mini Project Competition",
    description: "Online Voting System (2021)",
  },
]

const leadershipExperiences: string[] = [
  "Hosted Hackotsav 2k24, the first completely offline National Level Hackathon, ensuring smooth execution and participation.",
  "Organized an Inter-College Hackathon, showcasing strong leadership, event management, and coordination skills.",
  "Led Git and GitHub workshops with my team, mentoring juniors in version control, best practices, and collaboration workflows.",
]

const languages: string[] = ["English", "Hindi", "Kannada", "Konkani", "Tulu"]

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12">
          Education & Achievements
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <div className="text-muted-foreground">
                    <p>
                      {education.institution}, {education.location}
                    </p>
                    <p>{education.period}</p>
                  </div>
                </div>
                <p>{education.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Major Achievements</h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Badge className="mt-1 shrink-0">{index + 1}</Badge>
                      <div>
                        <p className="font-medium">{achievement.title}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">Leadership Experience</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {leadershipExperiences.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Languages</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <Badge key={index} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

