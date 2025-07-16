"use client"

import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface TimelineProps {
  items: string[]
  title: string
  description?: string
}

export function Timeline({ items, title, description }: TimelineProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title.split(" ")[0]} <span className="gradient-text">{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          {description && <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">{description}</p>}
        </motion.div>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-700 rounded-full hidden md:block"></div>
          <div className="space-y-12">
            {items.map((item, index) => (
              <div key={index} className="flex items-center md:odd:flex-row-reverse md:even:flex-row w-full">
                {/* Content */}
                <motion.div
                  className={cn("w-full md:w-1/2 p-4", index % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12 text-left")}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
                >
                  <div className="glass-effect border border-slate-700/50 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02]">
                    <p className="text-lg font-semibold text-white">{item}</p>
                  </div>
                </motion.div>
                {/* Icon Circle (Desktop) */}
                <div className="relative z-10 flex-shrink-0 hidden md:block">
                  <motion.div
                    className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg border-4 border-slate-900"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 + 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </motion.div>
                </div>
                {/* Mobile Icon (visible on small screens) */}
                <div className="flex-shrink-0 md:hidden mr-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-md border-2 border-slate-900">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
