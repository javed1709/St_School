"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, FileText, Building } from "lucide-react"

const outcomes = [
  {
    icon: Target,
    title: "Guaranteed Internship Support",
    description: "We ensure every student gets internship opportunities",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Users,
    title: "Placement Assistance Until You Get Hired",
    description: "Continuous support until you land your dream job",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: FileText,
    title: "Portfolio + Resume + Mock Interviews",
    description: "Complete career preparation package",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: Building,
    title: "Top Company Placements",
    description: "Access to our extensive hiring partner network",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
]

const companies = ["CRED", "Swiggy", "Razorpay", "Freshworks", "Startups", "Agencies"]

export function CareerOutcomesSection() {
  return (
    <section className="py-20 px-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designed for <span className="gradient-text">Outcomes</span>, Not Just Certificates
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're obsessed with student success. That's why we offer:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              className="glass-effect border-slate-700/50 hover:border-slate-600 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${outcome.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <outcome.icon className={`w-8 h-8 ${outcome.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-8 text-white">Our students have interned or been placed at:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="glass-effect px-6 py-3 rounded-full border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <span className="text-white font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
