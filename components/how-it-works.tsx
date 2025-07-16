"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Users, GraduationCap } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Choose Your Program",
    description: "Browse our courses and select the one that aligns with your career goals",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    icon: FileText,
    title: "Apply Online (Limited Seats!)",
    description: "Fill out our application form and submit your details for review",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: 3,
    icon: Users,
    title: "Get Interviewed by Our Team",
    description: "Participate in our selection interview to assess your motivation and fit",
    color: "from-yellow-500 to-orange-500",
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "Join the Tribe & Start Learning",
    description: "Welcome to St. School! Begin your transformation journey with expert mentors",
    color: "from-purple-500 to-pink-500",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-10 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey Starts in <span className="gradient-text">4 Simple Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="glass-effect border-slate-700/50 hover:border-slate-600 transition-all duration-300 group animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center relative z-10">
                {/* Step Number */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </CardContent>

              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
