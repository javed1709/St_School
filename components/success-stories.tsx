"use client"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const successStories = [
  {
    name: "Debrupa Nag",
    img: "/placeholder.svg?height=40&width=40",
    testimonial:
      "From knowing nothing about design to landing my dream job at CodeChef in just 3 months. The mentorship was incredible!",
  },
  {
    name: "Harsh Singhal",
    img: "/placeholder.svg?height=40&width=40",
    testimonial:
      "The real-world projects and 1:1 mentorship gave me the confidence to crack interviews at top startups.",
  },
  {
    name: "Srineha Gaddam",
    img: "/placeholder.svg?height=40&width=40",
    testimonial:
      "The community support and industry connections helped me transition from engineering to design seamlessly.",
  },
  {
    name: "Rahul Kumar",
    img: "/placeholder.svg?height=40&width=40",
    testimonial: "Switched from a service company to a product company with 150% salary hike. Best decision ever!",
  },
  {
    name: "Priya Patel",
    img: "/placeholder.svg?height=40&width=40",
    testimonial:
      "Transitioned from traditional marketing to growth marketing with AI tools. The course was a game-changer!",
  },
  {
    name: "Amit Sharma",
    img: "/placeholder.svg?height=40&width=40",
    testimonial:
      "From inconsistent freelance income to a stable high-paying job at CRED. The DSA training was exceptional!",
  },
  {
    name: "Neha Kalonia",
    img: "/placeholder.svg?height=40&width=40",
    testimonial: "The portfolio projects helped me stand out in interviews. Got placed in my dream company!",
  },
  {
    name: "Sahil Jain",
    img: "/placeholder.svg?height=40&width=40",
    testimonial: "The DSA training was top-notch. Cracked Microsoft interview in the first attempt!",
  },
]

const SuccessStoryCard = ({
  story,
}: {
  story: (typeof successStories)[0]
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6 glass-effect border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105",
      )}
    >
      {/* Header with name and image */}
      <div className="flex items-center mb-4">
        <img className="w-12 h-12 rounded-full mr-4" src={story.img || "/placeholder.svg"} alt={story.name} />
        <div>
          <figcaption className="text-lg font-semibold text-white">{story.name}</figcaption>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mb-4">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-slate-300 text-sm leading-relaxed">"{story.testimonial}"</blockquote>
      </div>
    </figure>
  )
}

export function SuccessStoriesSection() {
  // Split stories into two rows for marquee
  const firstRow = successStories.slice(0, Math.ceil(successStories.length / 2))
  const secondRow = successStories.slice(Math.ceil(successStories.length / 2))

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Success Stories</span> That Inspire
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Real students, real transformations, real career growth
          </p>
        </div>

        {/* Marquee Success Stories */}
        <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          {firstRow.length > 0 && (
            <Marquee pauseOnHover className="[--duration:60s] [--gap:1rem]">
              {firstRow.map((story, index) => (
                <SuccessStoryCard key={`${story.name}-${index}`} story={story} />
              ))}
            </Marquee>
          )}

          {secondRow.length > 0 && (
            <Marquee reverse pauseOnHover className="[--duration:60s] [--gap:1rem]">
              {secondRow.map((story, index) => (
                <SuccessStoryCard key={`${story.name}-${index}-reverse`} story={story} />
              ))}
            </Marquee>
          )}

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-slate-900 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-slate-900 to-transparent"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
            <p className="text-slate-400">Students Placed</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">95%</div>
            <p className="text-slate-400">Placement Rate</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">₹45L</div>
            <p className="text-slate-400">Highest Package</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">150%</div>
            <p className="text-slate-400">Avg Salary Hike</p>
          </div>
        </div>
      </div>
    </section>
  )
}
