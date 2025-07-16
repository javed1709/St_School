"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart } from "lucide-react"
import CountUp from "./CountUp"

export function SelectionProcessSection() {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Don't Teach Everyone. <span className="gradient-text">We Teach the Right Ones.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-effect border-slate-700/50 text-center animate-scale-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2"><CountUp
                  from={0}
                  to={1000}
                  separator=","
                  direction="up"
                  duration={0.5}
                  className="count-up-text"
                />+</div>

                <p className="text-slate-300">Applications per batch</p>
              </CardContent>
            </Card>

            <Card
              className="glass-effect border-slate-700/50 text-center animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2"><CountUp
                  from={0}
                  to={33}
                  separator=","
                  direction="up"
                  duration={0.3}
                  className="count-up-text"
                /></div>
                <p className="text-slate-300">Students selected</p>
              </CardContent>
            </Card>

            <Card
              className="glass-effect border-slate-700/50 text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2"><CountUp
                  from={0}
                  to={100}
                  separator=""
                  direction="up"
                  duration={0.5}
                  className="count-up-text"
                />%</div>
                <p className="text-slate-300">Commitment level</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Every batch gets over <span className="text-yellow-400 font-semibold">1000+ applications</span>.
            </p>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              We interview and handpick{" "}
              <span className="text-yellow-400 font-semibold">33 highly motivated students</span> per course who are
              serious about their careers.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              This allows us to give <span className="text-yellow-400 font-semibold">deep mentorship</span>,{" "}
              <span className="text-yellow-400 font-semibold">close feedback</span>, and{" "}
              <span className="text-yellow-400 font-semibold">real career outcomes</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
