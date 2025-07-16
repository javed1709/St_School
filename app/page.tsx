import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DifferentiatorsSection } from "@/components/differentiators-section"
import { CoursesPreviewSection } from "@/components/courses-preview"
import { SelectionProcessSection } from "@/components/selection-process"
import { SuccessStoriesSection } from "@/components/success-stories"
import { CareerOutcomesSection } from "@/components/career-outcomes"
import { HowItWorksSection } from "@/components/how-it-works"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"
 
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      
      <HeroSection />
      <DifferentiatorsSection />
      <CoursesPreviewSection />
      <SelectionProcessSection />
      <div id="success-stories">
        <SuccessStoriesSection />
      </div>
      <CareerOutcomesSection />
      <HowItWorksSection />
      <FloatingCTA />
      <Footer />
    </div>
  )
}
