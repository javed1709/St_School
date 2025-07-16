import { Navigation } from "@/components/navigation"
import { CoursesPreviewSection } from "@/components/courses-preview"
import { FloatingCTA } from "@/components/floating-cta"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Choose from our carefully crafted programs designed to transform your career
          </p>
        </div>
        <CoursesPreviewSection />
      </div>
      <FloatingCTA />
    </div>
  )
}
