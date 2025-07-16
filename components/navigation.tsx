"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)

  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect animate-fade-in">
      <div className="container mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            St. School
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setCoursesOpen(!coursesOpen)}
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-lg p-2">
                  <Link
                    href="/courses/ui-ux"
                    className="block px-4 py-2 text-white hover:text-yellow-400 transition-colors"
                    onClick={() => setCoursesOpen(false)}
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    href="/courses/mern-dsa"
                    className="block px-4 py-2 text-white hover:text-yellow-400 transition-colors"
                    onClick={() => setCoursesOpen(false)}
                  >
                    MERN + DSA
                  </Link>
                  <Link
                    href="/courses/embedded"
                    className="block px-4 py-2 text-white hover:text-yellow-400 transition-colors"
                    onClick={() => setCoursesOpen(false)}
                  >
                    Embedded Systems
                  </Link>
                  <Link
                    href="/courses/digital-marketing"
                    className="block px-4 py-2 text-white hover:text-yellow-400 transition-colors"
                    onClick={() => setCoursesOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => handleSmoothScroll("success-stories")}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Success Stories
            </button>
            <Link href="#about" className="text-white hover:text-yellow-400 transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="text-white hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg p-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link href="/courses" className="text-white hover:text-yellow-400 transition-colors">
                Courses
              </Link>
              <button
                onClick={() => handleSmoothScroll("success-stories")}
                className="text-white hover:text-yellow-400 transition-colors text-left"
              >
                Success Stories
              </button>
              <Link href="#about" className="text-white hover:text-yellow-400 transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="text-white hover:text-yellow-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
