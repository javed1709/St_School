"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 block">
              St. School
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              India's most trusted career school for next-gen learners. Transform your career with industry experts and
              real projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/studenttribe.st/?hl=en" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses/ui-ux" className="text-slate-400 hover:text-yellow-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/courses/mern-dsa" className="text-slate-400 hover:text-yellow-400 transition-colors">
                  MERN + DSA
                </Link>
              </li>
              <li>
                <Link href="/courses/embedded" className="text-slate-400 hover:text-yellow-400 transition-colors">
                  Embedded Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/digital-marketing"
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#success-stories" className="text-slate-400 hover:text-yellow-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>hello@stschool.com</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start text-slate-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-1" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">© 2024 St. School. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
