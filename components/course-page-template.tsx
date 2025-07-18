"use client"
import type React from "react"
import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  CheckCircle,
  Calendar,
  MessageCircle,
  Download,
  Laptop,
  Phone,
  TrendingUp,
  DollarSign,
  Briefcase,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  Code,
  Cpu,
  Thermometer,
  Cloud,
  Server,
  Bug,
  Box,
  Brain,
  Layout,
  Palette,
  Smartphone,
  PenToolIcon as Tool,
  GitFork,
  CodepenIcon as ReactIcon,
  GitBranch,
  Terminal,
  Building,
} from "lucide-react"
import type { CourseData } from "@/data/courses"
import { useEffect } from "react"
import { useRegistration } from "@/hooks/use-registration"
import { RegistrationForm } from "@/components/registration-form"
import { ThankYouPage } from "@/components/thank-you-page"
import { Timeline } from "@/components/timeline"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface CoursePageTemplateProps {
  course: CourseData
}

// Map icon names to Lucide React components
const iconMap: { [key: string]: React.ElementType } = {
  calendar: Calendar,
  dollarSign: DollarSign,
  award: Award,
  trendingUp: TrendingUp,
  briefcase: Briefcase,
  phone: Phone,
  laptop: Laptop,
  graduationCap: GraduationCap,
  lightbulb: Lightbulb,
  users: Users,
  code: Code,
  cpu: Cpu,
  thermometer: Thermometer,
  cloud: Cloud,
  server: Server,
  bug: Bug,
  box: Box,
  brain: Brain,
  layout: Layout,
  palette: Palette,
  smartphone: Smartphone,
  tool: Tool,
  gitFork: GitFork,
  react: ReactIcon,
  gitBranch: GitBranch,
  terminal: Terminal,
  building: Building,
}

// Define color mappings to avoid dynamic class generation
const colorMappings = {
  "from-blue-500 to-cyan-500": {
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    text: "text-blue-400",
    bg: "bg-blue-500/20",
  },
  "from-green-500 to-emerald-500": {
    badge: "bg-green-500/20 text-green-400 border-green-500/30",
    text: "text-green-400",
    bg: "bg-green-500/20",
  },
  "from-purple-500 to-pink-500": {
    badge: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    text: "text-purple-400",
    bg: "bg-purple-500/20",
  },
  "from-orange-500 to-red-500": {
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    text: "text-orange-400",
    bg: "bg-orange-500/20",
  },
}

export function CoursePageTemplate({ course }: CoursePageTemplateProps) {
  const { isFormOpen, isThankYouOpen, openForm, closeForm, closeThankYou, handleRegistrationSuccess } =
    useRegistration()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = `Hi! I'm interested in learning more about the ${course.title} course at St. School.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const quickInfoItems = [
    {
      icon: Calendar,
      label: "Next Batch Starts",
      value: course.cohortInfo.startDate,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      icon: DollarSign,
      label: "Fees (Online)",
      value: course.price,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    ...(course.originalPrice
      ? [
          {
            icon: DollarSign,
            label: "Fees (Offline)",
            value: course.originalPrice,
            color: "text-red-400",
            bgColor: "bg-red-400/10",
          },
        ]
      : []),
    {
      icon: Award,
      label: "Scholarships",
      value: course.id === 'digital-marketing' ? 'Not Applicable' : 'Available',
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: TrendingUp,
      label: "Avg Salary",
      value: course.salaryInfo.average,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: Briefcase,
      label: "Placed at",
      value:
        course.id === 'digital-marketing'
          ? course.placedAtCompanies.join(', ')
          : course.placedAtCompanies.slice(0, 4).join(', ') + (course.placedAtCompanies.length > 4 ? ' & more' : ''),
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    // Only include WhatsApp item for non-digital-marketing courses
  ]
  .concat(
    course.id !== 'digital-marketing'
      ? [
          {
            icon: Phone,
            label: "WhatsApp",
            value: course.contactNumber,
            color: "text-green-500",
            bgColor: "bg-green-500/10",
          },
        ]
      : []
  )

  const targetAudienceIcons = [Laptop, GraduationCap, Briefcase, Lightbulb]
  const courseColors =
    colorMappings[course.color as keyof typeof colorMappings] || colorMappings["from-blue-500 to-cyan-500"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-48 h-48 bg-yellow-400 rounded-full blur-3xl absolute top-1/4 left-1/4 animate-float" />
          <div className="w-64 h-64 bg-blue-400 rounded-full blur-3xl absolute bottom-1/3 right-1/4 animate-float delay-500" />
          <div className="w-32 h-32 bg-green-400 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float delay-1000" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className={courseColors.badge + " mb-4"}>{course.badge}</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-slate-300 mb-8">{course.description}</p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {quickInfoItems.map((item, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-xl p-4 flex flex-col items-center justify-center text-center animate-scale-in hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center mb-2`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="font-semibold text-white text-base">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => openForm(course.id)}
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-4 group transition-all duration-300 transform hover:scale-105"
                >
                  {course.id === 'embedded'
                    ? `Apply Now – Only ${course.students.toUpperCase()}`
                    : course.id === 'mern-dsa'
                    ? 'Apply Now – Limited to 33 Students'
                    : `Apply Now – Only ${course.students}`}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 glass-effect bg-transparent group transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Curriculum
                </Button>
                {/* Remove chat button for digital-marketing */}
              </div>
            </div>

            {/* Placeholder for an image or 3D model if needed */}
            <div className="hidden lg:flex items-center justify-center animate-scale-in">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Course Illustration"
                className="rounded-lg shadow-2xl glass-effect"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Program */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            {course.id === 'embedded' ? (
              <>We Don’t Just Teach You to Code. <span className="gradient-text">We Prepare You for Core Tech Careers.</span></>
            ) : course.id === 'digital-marketing' ? (
              <>Designed for Real-World Marketing — Not Just Theory</>
            ) : (
              <>We Don’t Just Teach Code. <span className="gradient-text">We Build Problem-Solvers.</span></>
            )}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{course.whyChooseProgram}</p>
        </div>
      </section>

      {/* What You'll Learn (Course Modules) */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            {course.id === "ui-ux"
              ? <>Course <span className="text-yellow-400">Curriculum</span></>
              : <>What You&apos;ll <span className="gradient-text">Learn</span></>}
          </h2>
          {course.id === "ui-ux" ? (
            <Tabs defaultValue="online" className="mx-auto w-fit items-center">
              <TabsList>
                <TabsTrigger value="online">Online</TabsTrigger>
                <TabsTrigger value="offline">Offline</TabsTrigger>
              </TabsList>
              <TabsContent value="online">
                {/* Online Card */}
                <Card className="glass-effect border-slate-700/50 animate-scale-in transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Laptop className="w-6 h-6 text-yellow-400 mr-2" />
                      <h3 className="text-2xl font-bold text-white">Online</h3>
                    </div>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                      <li><strong>Week 1:</strong> Introduction to the design, Designer Mindset</li>
                      <li><strong>Week 2:</strong> Typography and Color theory</li>
                      <li><strong>Week 3 - 7:</strong> Design thinking and UX methods</li>
                      <li><strong>Week 8 - 10:</strong> Introduction of UI and UI Screens</li>
                      <li><strong>Week 11 - 12:</strong> Portfolio Building</li>
                      <li><strong>Week 13-14:</strong> Testing and Portfolio Building</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="offline">
                {/* Offline Card */}
                <Card className="glass-effect border-slate-700/50 animate-scale-in transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Building className="w-6 h-6 text-yellow-400 mr-2" />
                      <h3 className="text-2xl font-bold text-white">Offline</h3>
                    </div>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                      <li><strong>Week 1 - 3:</strong> Introduction to Design Thinking, Design Basics</li>
                      <li><strong>Week 4:</strong> Graphic Design</li>
                      <li><strong>Week 5:</strong> Branding</li>
                      <li><strong>Week 6 - 8:</strong> Introduction to UX, UX methods</li>
                      <li><strong>Week 9 - 10:</strong> Information Architecture</li>
                      <li><strong>Week 11 - 13:</strong> Introduction to UI, Wireframes, UI Screens</li>
                      <li><strong>Week 14:</strong> Testing</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {course.courseModules.map((module, index) => {
                const Icon = iconMap[module.icon] || CheckCircle
                return (
                  <Card
                    key={index}
                    className="glass-effect border-slate-700/50 animate-scale-in group hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 ${courseColors.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-8 h-8 ${courseColors.text}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-slate-300 text-sm">{module.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* How We Teach (Program Includes) - Now a Timeline */}
      <section className="py-20 px-4 bg-slate-800/30">
        <Timeline
          title="How We Teach"
          description={
            course.id === 'embedded'
              ? 'We bridge the gap between college theory and core industry skillsets.'
              : course.id === 'digital-marketing'
              ? 'Learn by doing. Present by pitching. Grow by executing.'
              : 'No boring videos. No aimless coding. Just real projects, live sessions, and direct mentorship.'
          }
          items={course.programIncludes}
        />
      </section>

      {/* Who Is This For? */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Who Is This <span className="gradient-text">Course For?</span>
          </h2>
          {course.id === 'embedded' ? (
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">This course is ideal for:</p>
          ) : course.id === 'mern-dsa' ? (
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">This program is perfect for:</p>
          ) : course.id === 'digital-marketing' ? (
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">This course is perfect for:</p>
          ) : (
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">This program is built for:</p>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {course.targetAudience.map((audience, index) => {
              const Icon = targetAudienceIcons[index % targetAudienceIcons.length] || Users
              return (
                <Card
                  key={index}
                  className="glass-effect border-slate-700/50 animate-scale-in group hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 ${courseColors.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-8 h-8 ${courseColors.text}`} />
                    </div>
                    <p className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {audience}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why We Only Take 33 Students */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why We Only Take <span className="gradient-text">33 Students</span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">{course.whyOnly33Students}</p>
        </div>
      </section>

      {/* Fees & Scholarships */}
      <section className="py-20 px-4">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 animate-fade-in">
      Fees & <span className="gradient-text">Scholarships</span>
    </h2>
    <div className={`grid gap-8 max-w-3xl mx-auto mb-8 ${
      course.originalPrice 
        ? 'md:grid-cols-2' 
        : 'md:grid-cols-1 place-items-center'
    }`}>
      <Card className="glass-effect border-slate-700/50 animate-scale-in group hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
            Online Program Fee
          </h3>
          <p className="text-5xl font-bold gradient-text mb-4">{course.price}</p>
          <p className="text-slate-300">(Including GST)</p>
        </CardContent>
      </Card>
      {course.originalPrice && (
        <Card
          className="glass-effect border-slate-700/50 animate-scale-in group hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02]"
          style={{ animationDelay: "0.1s" }}
        >
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
              Offline Program Fee
            </h3>
            <p className="text-5xl font-bold gradient-text mb-4">{course.originalPrice}</p>
            <p className="text-slate-300">(Including GST)</p>
          </CardContent>
        </Card>
      )}
    </div>
    <div className="mt-8 text-xl text-slate-300 space-y-3">
      {course.id === 'embedded' ? (
        <p className="flex items-center justify-center animate-slide-up">
          <GraduationCap className="w-5 h-5 inline-block mr-2 text-yellow-400" />
          Scholarships: Available for qualified students
        </p>
      ) : course.id === 'mern-dsa' ? (
        <p className="flex items-center justify-center animate-slide-up">
          <GraduationCap className="w-5 h-5 inline-block mr-2 text-yellow-400" />
          Scholarships: Available for eligible learners
        </p>
      ) : course.id === 'digital-marketing' ? (
        null
      ) : (
        <p className="flex items-center justify-center animate-slide-up">
          <GraduationCap className="w-5 h-5 inline-block mr-2 text-yellow-400" />
          Scholarships: Up to ₹15,000 available for eligible students
        </p>
      )}
      {course.id === 'embedded' ? (
        <p className="flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <CheckCircle className="w-5 h-5 inline-block mr-2 text-green-400" />
          EMI Options Available
        </p>
      ) : (
        <p className="flex items-center justify-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <CheckCircle className="w-5 h-5 inline-block mr-2 text-green-400" />
          EMI Options Available
        </p>
      )}
      {course.id === 'digital-marketing' && (
        <p className="mt-2 text-yellow-400 flex items-center justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Includes access to all live sessions, project templates, AI tools, and certificate
        </p>
      )}
      {course.id === "mern-dsa" && (
        <p
          className="mt-2 text-yellow-400 flex items-center justify-center animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <CheckCircle className="w-5 h-5 inline-block mr-2 text-yellow-400" />
          Pay after shortlisting — not before
        </p>
      )}
      {course.id === 'embedded' && (
        <p className="mt-2 text-yellow-400 flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Admission is via application + interview only
        </p>
      )}
    </div>
  </div>
</section>

      {/* Certification & Recognition */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Certification & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            {course.id === 'embedded' 
              ? 'Get Certified by Student Tribe\nYou’ll graduate with:' 
              : ' Certificate + GitHub Portfolio + Interview Report\nUpon completion, you’ll get:'}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {course.certificationBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="glass-effect border-slate-700/50 animate-scale-in group hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-center text-left">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {benefit}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Where Our Students Got Placed */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Where Our Students Got <span className="gradient-text">Placed</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Our alumni now work as {course.salaryInfo.jobTitle}s at:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {course.placedAtCompanies.map((company, index) => (
              <div
                key={index}
                className="glass-effect px-6 py-3 rounded-full border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <span className="text-white font-semibold">{company}</span>
              </div>
            ))}
          </div>
          <div className="text-2xl font-bold text-white mb-4 animate-slide-up">
            Avg Salary Package: <span className="gradient-text">{course.salaryInfo.average}</span>
          </div>
          <p className="text-slate-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Placement Support Duration: {course.cohortInfo.placementSupport} (Internships + Jobs + Freelance Referrals)
          </p>
        </div>
      </section>

      {/* What Our Students Say */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            What Our Students Say
          </h2>
          {course.id === 'embedded' ? (
            <div className="max-w-2xl mx-auto text-xl text-slate-300 space-y-8">
              <p>“This is the only program that gave me actual microcontroller experience. I cracked Bosch with confidence.”</p>
              <p className="font-semibold text-white">– Sandeep, ECE Graduate</p>
              <p>“I built an end-to-end sensor system in 3 weeks. That became my project during Intel’s interview.”</p>
              <p className="font-semibold text-white">– Ritika, Final Year B.Tech</p>
            </div>
          ) : course.id === 'mern-dsa' ? (
            <div className="max-w-2xl mx-auto text-xl text-slate-300 space-y-8">
              <p>“This wasn’t just a coding course. It trained me to think, solve, build, and communicate — I got hired in 3 months.”</p>
              <p className="font-semibold text-white">– Sahil, B.Tech CS</p>
              <p>“I had basic JavaScript before this. Now I can build full-stack apps and solve DSA problems I once feared.”</p>
              <p className="font-semibold text-white">– Divya, BSc Student</p>
            </div>
          ) : course.id === 'digital-marketing' ? (
            <div className="max-w-2xl mx-auto text-xl text-slate-300 space-y-8">
              <p>“I created my first ad campaign, pitched it live, and now I manage real campaigns at 8Views.”</p>
              <p className="font-semibold text-white">– Sanvi, MBA Graduate</p>
              <p>“They taught me not just marketing — but how to pitch, present, and talk like a strategist.”</p>
              <p className="font-semibold text-white">– Manoj, Freelancer Turned Performance Marketer</p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-xl text-slate-300 space-y-8">
              <p>“I had no design background. This course gave me clarity, a strong portfolio, and internship offers in 2 months.”</p>
              <p className="font-semibold text-white">– Sneha, VIT</p>
              <p>“Best decision I made — real feedback, real people, and a lot of learning beyond just design.”</p>
              <p className="font-semibold text-white">– Aravind, Non-tech background</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Batch Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            {course.id === 'ui-ux' ? (
              <>Upcoming <span className="text-yellow-400">Batch Details</span></>
            ) : (
              'Upcoming Batch Details'
            )}
          </h2>
          <div className="text-xl text-slate-300 space-y-4">
            <p className="flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="font-semibold text-white mr-2">Start Date:</span> August 11th
            </p>
            <p className="flex items-center justify-center">
              <Users className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="font-semibold text-white mr-2">Seats:</span> 33 only
            </p>
            <p className="flex items-center justify-center">
              <Laptop className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="font-semibold text-white mr-2">Mode:</span> 100% Online (Offline option available)
            </p>
            <p className="flex items-center justify-center">
              <Phone className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="font-semibold text-white mr-2">Contact:</span> {course.contactNumber}
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4 text-center bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            {course.id === 'embedded'
              ? 'Want to build systems that talk to hardware, sensors, and real-time apps?'
              : course.id === 'ui-ux'
              ? 'Ready to build your UI/UX career from scratch?'
              : course.id === 'digital-marketing'
              ? 'If you want to break into the world of digital marketing with a portfolio, confidence, and AI edge?'
              : 'Want to become a full-stack developer with real problem-solving confidence?'}
          </h2>
          <p className="text-xl text-slate-300 mb-12 animate-slide-up">
            {course.id === 'embedded'
              ? 'This program is for the true builders of tomorrow.'
              : course.id === 'ui-ux'
              ? 'Join a selective, mentor-led program that’s already changed the lives of 100s of students.'
              : course.id === 'digital-marketing'
              ? 'This is where your journey begins Build real campaigns, leverage AI tools, showcase results that set you apart.'
              : 'Join India’s most career-focused MERN + DSA program.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => openForm(course.id)}
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-4 group transition-all duration-300 transform hover:scale-105"
            >
              {course.id === 'embedded' ? 'Apply Now – Interviews Ongoing' : course.id === 'mern-dsa' ? 'Apply Now – Limited to 33 Students' : 'Apply Now – Only ' + course.students}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 glass-effect bg-transparent group transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download Curriculum PDF
            </Button>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />

      {/* Registration Form */}
      <RegistrationForm
        isOpen={isFormOpen}
        onClose={closeForm}
        onSuccess={handleRegistrationSuccess}
        selectedCourse={course.id}
      />

      {/* Thank You Page */}
      <ThankYouPage isOpen={isThankYouOpen} onClose={closeThankYou} />
    </div>
  )
}
