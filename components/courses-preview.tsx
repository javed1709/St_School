"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, Star } from "lucide-react"
import Link from "next/link"

import { useRegistration } from "@/hooks/use-registration"
import { RegistrationForm } from "@/components/registration-form"
import { ThankYouPage } from "@/components/thank-you-page"

const courses = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "Product Designer Fellowship",
    description: "Learn the full design process from research to prototype.",
    duration: "3 months",
    students: "33 seats",
    rating: 4.9,
    price: "₹49,999",
    originalPrice: "₹69,999",
    features: [
      "Master tools like Figma, Notion, Whimsical & more",
      "Build 2+ real case studies & get design reviews",
      "Perfect for students from any background",
      "1:1 mentorship from senior designers",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "🎨",
  },
  {
    id: "mern-dsa",
    title: "MERN + DSA",
    subtitle: "Full Stack Development",
    description: "Full-stack development with a strong DSA foundation.",
    duration: "4 months",
    students: "33 seats",
    rating: 4.8,
    price: "₹59,999",
    originalPrice: "₹79,999",
    features: [
      "Build scalable apps with MongoDB, Express, React & Node",
      "Ace tech interviews with problem-solving mastery",
      "Ideal for B.Tech and CS aspirants",
      "Live coding sessions and code reviews",
    ],
    color: "from-green-500 to-emerald-500",
    icon: "💻",
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    subtitle: "IoT & Hardware Development",
    description: "Learn embedded C, IoT protocols, Arduino & microcontrollers.",
    duration: "3 months",
    students: "33 seats",
    rating: 4.7,
    price: "₹44,999",
    originalPrice: "₹64,999",
    features: [
      "Work on hardware-level projects with real-time output",
      "Suited for ECE/EEE/Robotics enthusiasts",
      "Industry-standard tools and protocols",
      "Hands-on project-based learning",
    ],
    color: "from-purple-500 to-pink-500",
    icon: "🔧",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing with AI",
    subtitle: "Growth Marketing Specialist",
    description: "Learn SEO, Performance Marketing, Influencer Strategy & AI tools.",
    duration: "2.5 months",
    students: "33 seats",
    rating: 4.9,
    price: "₹39,999",
    originalPrice: "₹54,999",
    features: [
      "Run real campaigns, analyze data, and pitch like an agency",
      "Perfect for creative minds, BBA/MBA/Arts backgrounds",
      "AI-powered marketing automation",
      "Industry case studies and live projects",
    ],
    color: "from-orange-500 to-red-500",
    icon: "📈",
  },
]

export function CoursesPreviewSection() {
  const { isFormOpen, isThankYouOpen, openForm, closeForm, closeThankYou, handleRegistrationSuccess } =
    useRegistration()

  return (
    <section className="py-20 px-10 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Career Track</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Industry-focused programs designed to make you job-ready in months, not years
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card
              key={course.id}
              className="glass-effect border-slate-700/50 hover:border-slate-600 transition-all duration-300 group animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{course.icon}</div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-300 mb-4">{course.description}</p>

                  {/* Course Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Limited Seats</Badge>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-start">
                        <span className="text-green-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-white">{course.price}</span>
                        <span className="text-sm text-slate-400 line-through">{course.originalPrice}</span>
                      </div>
                      <p className="text-xs text-green-400">Early bird discount</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/courses/${course.id}`}>
                        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold group flex-1">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Button
                        onClick={() => openForm(course.id)}
                        variant="outline"
                        className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses">
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-slate-600 text-white hover:bg-slate-800 px-8 py-4 group bg-transparent"
            >
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Registration Form */}
      <RegistrationForm isOpen={isFormOpen} onClose={closeForm} onSuccess={handleRegistrationSuccess} />

      {/* Thank You Page */}
      <ThankYouPage isOpen={isThankYouOpen} onClose={closeThankYou} />
    </section>
  )
}
