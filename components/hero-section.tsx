"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRegistration } from "@/hooks/use-registration"
import { RegistrationForm } from "@/components/registration-form"
import { ThankYouPage } from "@/components/thank-you-page"
import SplashCursor from "./SplashCursor"
import { Typewriter } from "./ui/typewriter-text"
 

export function HeroSection() {
  const { isFormOpen, isThankYouOpen, selectedCourse, openForm, closeForm, closeThankYou, handleRegistrationSuccess } =
    useRegistration()

  return (
    <>
    
    <SplashCursor  />
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6 animate-float">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-yellow-400 font-medium">India's Most Trusted Career School</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Transform Your Career with
              <br />
              {/* <span className=""></span> */}
              <Typewriter
                text={["Next-Gen Learning"]}
                speed={100}
                loop={true}
                className="gradient-text"
                 
            />
            </h1>

            <p
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Learn from Industry Experts • Build Real Projects • Get Career-Ready
              <br />
              <span className="text-yellow-400">Selective, Mentorship-Driven Courses</span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                onClick={() => openForm()}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-4 text-lg group transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <span className="ml-2 text-sm opacity-75">(Limited to 33 Seats)</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg glass-effect transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div
            className="absolute top-1/4 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </section>

      {/* Registration Form */}
      <RegistrationForm
        isOpen={isFormOpen}
        onClose={closeForm}
        onSuccess={handleRegistrationSuccess}
        selectedCourse={selectedCourse}
      />

      {/* Thank You Page */}
      <ThankYouPage isOpen={isThankYouOpen} onClose={closeThankYou} />
    </>
  )
}
