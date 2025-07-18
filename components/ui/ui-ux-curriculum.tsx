"use client"

import React from "react"
import { Laptop, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function UiUxCurriculum() {
  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-4xl font-bold mb-16 animate-fade-in">
        Course <span className="text-yellow-400">Curriculum</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="glass-effect border-slate-700/50 animate-scale-in transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Building className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Offline</h3>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li><span className="font-semibold text-white">Week 1 - 3:</span> Introduction to Design Thinking, Design Basics</li>
              <li><span className="font-semibold text-white">Week 4:</span> Graphic Design</li>
              <li><span className="font-semibold text-white">Week 5:</span> Branding</li>
              <li><span className="font-semibold text-white">Week 6 - 8:</span> Introduction to UX, UX methods</li>
              <li><span className="font-semibold text-white">Week 9 - 10:</span> Information Architecture</li>
              <li><span className="font-semibold text-white">Week 11 - 13:</span> Introduction to UI, Wireframes, UI Screens</li>
              <li><span className="font-semibold text-white">Week 14:</span> Testing</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="glass-effect border-slate-700/50 animate-scale-in transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Laptop className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Online</h3>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li><span className="font-semibold text-white">Week 1:</span> Introduction to the design, Designer Mindset</li>
              <li><span className="font-semibold text-white">Week 2:</span> Typography and Color theory</li>
              <li><span className="font-semibold text-white">Week 3 - 7:</span> Design thinking and UX methods</li>
              <li><span className="font-semibold text-white">Week 8 - 10:</span> Introduction of UI and UI Screens</li>
              <li><span className="font-semibold text-white">Week 11 - 12:</span> Portfolio Building</li>
              <li><span className="font-semibold text-white">Week 13-14:</span> Testing and Portfolio Building</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}