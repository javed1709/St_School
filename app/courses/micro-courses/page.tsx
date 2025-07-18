"use client"

import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useRegistration } from "@/hooks/use-registration"
import { RegistrationForm } from "@/components/registration-form"
import { ThankYouPage } from "@/components/thank-you-page"
import Link from "next/link"
import { Search, Terminal, Code, PenToolIcon as Tool, BarChart, Users, Laptop, Award, MessageCircle, ArrowRight, Download, Brain, FileText, Rocket, List, Phone, Lock } from "lucide-react"

export default function MicroCoursesPage() {
  const { isFormOpen, isThankYouOpen, openForm, closeForm, handleRegistrationSuccess } = useRegistration()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block bg-rose-500/20 text-rose-400 rounded-full px-4 py-1 mb-4 text-sm font-semibold">
              Micro Courses
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Master AI Tools & Career-Ready Skills in Just 15–18 Days
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Designed for busy learners — these micro courses help you upskill fast in the most in-demand AI topics across design, research, coding, and communication.
            </p>
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="glass-effect rounded-xl p-4 flex flex-col items-center text-center">
                <Users className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-sm text-slate-400">Open to Students & Professionals</p>
                <p className="text-white">No Tech Background Needed</p>
              </div>
              <div className="glass-effect rounded-xl p-4 flex flex-col items-center text-center">
                <Laptop className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-sm text-slate-400">Format</p>
                <p className="text-white">100% Online (Live + Recorded Access)</p>
              </div>
              <div className="glass-effect rounded-xl p-4 flex flex-col items-center text-center">
                <Award className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-sm text-slate-400">Certificate</p>
                <p className="text-white">Completion for Every Course</p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-start gap-4 mt-8">
              <Button onClick={() => openForm("micro-courses")} size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-4 group transition-all duration-300 transform hover:scale-105">
                Apply Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="#curriculum">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-transparent active:bg-transparent focus:bg-transparent px-8 py-4 glass-effect bg-transparent group transition-all duration-300 transform hover:scale-105">
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Curriculum
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-scale-in self-center">
            <img src="/placeholder.svg?height=400&width=400" alt="Space Illustration" className="h-full w-auto rounded-lg shadow-2xl glass-effect object-contain" />
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section id="curriculum" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Explore Our Micro Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-cyan-500 transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">AI Productivity & Research</h3>
              <p className="text-white/75 mb-4">Work faster. Think smarter. Learn how to use AI for research, idea generation, and content creation.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">15 Days</span>
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">₹2,500</span>
              </div>
              <p className="text-white/80 text-sm">ChatGPT, Notion AI, Perplexity, AI summarizers</p>
              <p className="text-white/80 text-sm mt-1">Students, marketers, writers, researchers</p>
            </div>
            {/* Course 2 */}
            <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Gen AI & Advanced Prompt Engineering</h3>
              <p className="text-white/75 mb-4">Unlock the real power of AI tools by learning how to write effective prompts.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">15 Days</span>
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">₹2,500</span>
              </div>
              <p className="text-white/80 text-sm">ChatGPT, Claude, Gemini, Midjourney</p>
              <p className="text-white/80 text-sm mt-1">Creators, freelancers, marketers, anyone using Gen AI tools</p>
            </div>
            {/* Course 3 */}
            <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-green-500 to-emerald-500 transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">AI Tools for Software Development</h3>
              <p className="text-white/75 mb-4">Boost your development speed with AI tools that write, debug, and explain code.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">18 Days</span>
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">₹3,000</span>
              </div>
              <p className="text-white/80 text-sm">GitHub Copilot, ChatGPT, Tabnine, Codeium</p>
              <p className="text-white/80 text-sm mt-1">CS students, developers, tech professionals</p>
            </div>
            {/* Course 4 */}
            <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-orange-500 to-red-500 transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Tool className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">AI-Powered UX Research & Design</h3>
              <p className="text-white/75 mb-4">Use AI to accelerate design research, ideation, and wireframing.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">18 Days</span>
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">₹3,000</span>
              </div>
              <p className="text-white/80 text-sm">Uizard, Dovetail AI, Figma AI Plugins, ChatGPT</p>
              <p className="text-white/80 text-sm mt-1">UI/UX students, design learners, product thinkers</p>
            </div>
            {/* Course 5 */}
            <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-indigo-500 to-violet-500 transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">AI for Data Visualization & Storytelling</h3>
              <p className="text-white/75 mb-4">Turn complex data into beautiful, impactful visual stories using AI tools.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">18 Days</span>
                <span className="text-sm bg-white/30 rounded-full px-3 py-1">₹3,000</span>
              </div>
              <p className="text-white/80 text-sm">Tableau, ChatGPT, Flourish, Excel AI, Notion AI</p>
              <p className="text-white/80 text-sm mt-1">Business students, analysts, marketers, report creators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Student Tribe Micro Courses? */}
      <section className="px-4 bg-slate-800/30 py-16">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Why Choose Student Tribe <span className="gradient-text">Micro Courses?</span></h2>
          <ul className="space-y-4 flex flex-col items-center">
            <li className="flex items-center justify-center">
              <Brain className="w-6 h-6 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Learn practical, career-relevant AI skills</span>
            </li>
            <li className="flex items-center justify-center">
              <FileText className="w-6 h-6 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Get real project templates you can use instantly</span>
            </li>
            <li className="flex items-center justify-center">
              <Users className="w-6 h-6 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Live sessions with experts & mentors</span>
            </li>
            <li className="flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Certificate of Completion (Boosts LinkedIn + Resume)</span>
            </li>
            <li className="flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Weekly Q&A and lifetime access to session recordings</span>
            </li>
            <li className="flex items-center justify-center">
              <Rocket className="w-6 h-6 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Finish in under 3 weeks, apply immediately</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What Learners Say */}
      <section className="px-4 py-16">
        <div className="container mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">What Learners Say</h2>
          <p className="text-xl text-slate-300 italic">“I learned more about ChatGPT in 2 weeks than I had in 6 months of YouTube.”</p>
          <p className="text-lg font-semibold text-white">– Vamshi, MBA Student</p>
          <p className="text-xl text-slate-300 italic">“The AI for Software course helped me automate code cleanup & documentation — game-changer!”</p>
          <p className="text-lg font-semibold text-white">– Aditya, B.Tech 3rd Year</p>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="px-4 bg-slate-800/30 py-16">
        <div className="container mx-auto text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">How to <span className="gradient-text">Get Started</span></h2>
          <ol className="list-decimal list-inside space-y-2 flex flex-col items-center">
            <li className="flex items-center justify-center">
              <List className="w-5 h-5 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Choose your course</span>
            </li>
            <li className="flex items-center justify-center">
              <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Talk to us on WhatsApp: <a href="https://wa.me/8498963240" className="text-green-400">8498963240</a></span>
            </li>
            <li className="flex items-center justify-center">
              <Lock className="w-5 h-5 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Confirm your slot (limited seats)</span>
            </li>
            <li className="flex items-center justify-center">
              <Users className="w-5 h-5 text-yellow-400 flex-shrink-0 mr-2 mt-1" />
              <span className="text-xl text-slate-300">Join live sessions & get access to resources</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 text-center">
        <div className="container mx-auto space-y-6 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Small investment. <span className="gradient-text">High-value learning.</span></h2>
          <p className="text-xl text-slate-300">Whether you’re a student or a working professional, these AI micro-courses are built to upgrade your skills and boost your confidence.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => openForm("micro-courses")} size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
              Apply Now
            </Button>
            <Link href="#curriculum">
              <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-transparent active:bg-transparent focus:bg-transparent">
                View All Micro Course Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
      <RegistrationForm isOpen={isFormOpen} onClose={closeForm} onSuccess={handleRegistrationSuccess} selectedCourse="micro-courses" />
      <ThankYouPage isOpen={isThankYouOpen} onClose={closeForm} />
    </div>
  )
}