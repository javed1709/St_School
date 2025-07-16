import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"
import { CoursePageTemplate } from "@/components/course-page-template"
import { getCourseById } from "@/data/courses"
import { notFound } from "next/navigation"

export default function MERNDSACoursePage() {
  const course = getCourseById("mern-dsa")

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />

      <CoursePageTemplate course={course} />

      <FloatingCTA />
    </div>
  )
}
