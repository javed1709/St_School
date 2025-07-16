"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ThankYouPageProps {
  isOpen: boolean
  onClose: () => void
}

export function ThankYouPage({ isOpen, onClose }: ThankYouPageProps) {
  const [showConfetti, setShowConfetti] = useState(false)
  const [registrationData, setRegistrationData] = useState<any>(null)

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true)
      // Get registration data from localStorage
      const data = localStorage.getItem("registrationData")
      if (data) {
        setRegistrationData(JSON.parse(data))
      }

      // Hide confetti after 3 seconds
      const timer = setTimeout(() => {
        setShowConfetti(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-60">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ["#fbbf24", "#10b981", "#3b82f6", "#8b5cf6", "#ef4444"][
                    Math.floor(Math.random() * 5)
                  ],
                }}
              />
            </div>
          ))}
        </div>
      )}

      <Card className="w-full max-w-2xl glass-effect border-slate-700/50 animate-scale-in">
        <CardContent className="p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Congratulations!</span>
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Your Application Has Been Submitted Successfully!</h2>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Thank you for choosing St. School! We're excited to have you join our community of next-gen learners.
          </p>

          {/* Registration Details */}
          {registrationData && (
            <div className="bg-slate-800/50 rounded-lg p-6 mb-8 text-left">
              <h3 className="text-xl font-semibold text-white mb-4">Application Details:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-sm">Name</p>
                  <p className="text-white font-medium">{registrationData.name}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white font-medium">{registrationData.email}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Mobile</p>
                  <p className="text-white font-medium">{registrationData.mobile}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Course</p>
                  <p className="text-white font-medium capitalize">{registrationData.course.replace("-", " ")}</p>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              What Happens Next?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-3 mt-1">
                  1
                </div>
                <p className="text-slate-300">
                  Our admissions team will review your application within <strong>24-48 hours</strong>
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-3 mt-1">
                  2
                </div>
                <p className="text-slate-300">
                  You'll receive an email with your <strong>interview schedule</strong> and preparation guidelines
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-3 mt-1">
                  3
                </div>
                <p className="text-slate-300">
                  After a successful interview, you'll get your <strong>admission confirmation</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-800/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Need Help? Contact Us</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center text-slate-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center text-slate-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>admissions@stschool.com</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-3"
              >
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 glass-effect bg-transparent"
            >
              Close
            </Button>
          </div>

          {/* Additional Message */}
          <p className="text-sm text-slate-400 mt-6">
            Check your email (including spam folder) for important updates about your application.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
