import { CoursePageTemplate } from "@/components/course-page-template"
import { getCourseById } from "@/data/courses"
import { notFound } from "next/navigation"

export default function UIUXCoursePage() {
  const course = getCourseById("ui-ux")

  if (!course) {
    notFound()
  }

  return <CoursePageTemplate course={course} />
}
