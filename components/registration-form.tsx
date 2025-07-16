"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, User, Mail, Phone, BookOpen, Loader2, GraduationCap } from "lucide-react"
import { coursesData } from "@/data/courses"

interface RegistrationFormProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  selectedCourse?: string
}

interface FormData {
  name: string
  email: string
  mobile: string
  course: string
  graduationYear: string
}

interface FormErrors {
  name?: string
  email?: string
  mobile?: string
  course?: string
  graduationYear?: string
}

export function RegistrationForm({ isOpen, onClose, onSuccess, selectedCourse }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    course: selectedCourse || "",
    graduationYear: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Mobile validation
    const mobileRegex = /^[6-9]\d{9}$/
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number"
    }

    // Course validation
    if (!formData.course) {
      newErrors.course = "Please select a course"
    }
    if (!formData.graduationYear) {
      newErrors.graduationYear = "Please select your graduation year"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Store registration data (in real app, this would be sent to backend)
      localStorage.setItem("registrationData", JSON.stringify(formData))

      onSuccess()
      onClose()
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-md glass-effect border-slate-700/50 animate-scale-in">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <CardTitle className="text-2xl font-bold text-center gradient-text">Apply Now</CardTitle>
          <p className="text-slate-300 text-center">Join India's most trusted career school</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white flex items-center">
                <User className="w-4 h-4 mr-2" />
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-white flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Mobile Number
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                className={`bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 ${
                  errors.mobile ? "border-red-500" : ""
                }`}
              />
              {errors.mobile && <p className="text-red-400 text-sm">{errors.mobile}</p>}
            </div>

            {/* Course Selection */}
            <div className="space-y-2">
              <Label className="text-white flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Select Course
              </Label>
              <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                <SelectTrigger
                  className={`bg-slate-800/50 border-slate-600 text-white focus:border-yellow-400 ${
                    errors.course ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Choose your course" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  {coursesData.map((course) => (
                    <SelectItem key={course.id} value={course.id} className="text-white hover:bg-slate-700">
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.course && <p className="text-red-400 text-sm">{errors.course}</p>}
            </div>

            {/* Graduation Year Field */}
            <div className="space-y-2">
              <Label htmlFor="graduationYear" className="text-white flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                Graduation Year
              </Label>
              <Select
                id="graduationYear"
                value={formData.graduationYear}
                onValueChange={(value) => handleInputChange("graduationYear", value)}
              >
                <SelectTrigger
                  className={`bg-slate-800/50 border-slate-600 text-white focus:border-yellow-400 ${
                    errors.graduationYear ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  {["2022", "2023", "2024", "2025", "Still Pursuing"].map((year) => (
                    <SelectItem key={year} value={year} className="text-white hover:bg-slate-700">
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.graduationYear && <p className="text-red-400 text-sm">{errors.graduationYear}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>

            <p className="text-xs text-slate-400 text-center">
              By applying, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
