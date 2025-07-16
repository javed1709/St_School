"use client"

import { useState } from "react"

export function useRegistration() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isThankYouOpen, setIsThankYouOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string>("")

  const openForm = (courseId?: string) => {
    setSelectedCourse(courseId || "")
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setSelectedCourse("")
  }

  const openThankYou = () => {
    setIsThankYouOpen(true)
  }

  const closeThankYou = () => {
    setIsThankYouOpen(false)
  }

  const handleRegistrationSuccess = () => {
    closeForm()
    openThankYou()
  }

  return {
    isFormOpen,
    isThankYouOpen,
    selectedCourse,
    openForm,
    closeForm,
    openThankYou,
    closeThankYou,
    handleRegistrationSuccess,
  }
}
