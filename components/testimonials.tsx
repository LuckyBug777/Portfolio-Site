"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

type Testimonial = {
  quote: string
  author: string
  position: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Prathviraj is an exceptional developer with a deep understanding of machine learning and Flutter. His work on our project exceeded our expectations.",
    author: "Jane Smith",
    position: "Project Manager, Tech Solutions",
  },
  {
    quote:
      "Working with Prathviraj was a pleasure. His technical skills combined with his ability to understand business requirements made him an invaluable asset to our team.",
    author: "John Doe",
    position: "CTO, Innovation Labs",
  },
  {
    quote:
      "Prathviraj's attention to detail and problem-solving abilities are outstanding. He consistently delivered high-quality code and innovative solutions.",
    author: "Sarah Johnson",
    position: "Lead Developer, Mobile Apps Inc.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12">Testimonials</h2>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-primary/20">
                    <CardContent className="pt-6">
                      <Quote className="h-10 w-10 text-primary/40 mb-4" />
                      <blockquote className="text-xl italic mb-6">"{testimonial.quote}"</blockquote>
                      <div className="text-right">
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-muted-foreground">{testimonial.position}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={current === index ? "default" : "outline"}
                size="icon"
                className="h-2 w-2 rounded-full p-0"
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

