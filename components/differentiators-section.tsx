"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Target, UserCheck, Code, Briefcase, Globe, CheckCircle } from "lucide-react"

const differentiators = [
  {
    icon: Target,
    title: "Ultra-Selective Admission",
    description: "1000+ applications per course. Only 33 students selected per batch.",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Award,
    title: "Merit Scholarships",
    description: "Scholarships worth up to ₹15,000 for passionate learners.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Users,
    title: "Largest Student Community",
    description: "Backed by India's largest student community — learn, grow, and network.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: UserCheck,
    title: "1:1 Expert Mentorship",
    description: "Personal guidance from industry experts throughout your journey.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: Code,
    title: "Real-Time Projects",
    description: "Hands-on experience with live projects and real-world challenges.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Briefcase,
    title: "Guaranteed Placement Support",
    description: "Comprehensive placement assistance until you land your dream job.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    icon: Globe,
    title: "Flexible Learning",
    description: "Online & offline learning options for maximum flexibility.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "95% placement rate with top companies across India.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
]

export function DifferentiatorsSection() {
  return (
    <section className="py-20 px-10 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're not just an edtech brand — we're a full-fledged Career School backed by India's largest student
            community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="glass-effect border-slate-700/50 hover:border-slate-600 transition-all duration-300 group animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
