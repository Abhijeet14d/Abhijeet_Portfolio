"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Terminal, Server, Code, Download, Send, Github, Linkedin, Mail } from "lucide-react"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Profile Image or Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      AS
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
            </div>

            {/* Greeting */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 font-medium">
              👋 Hello, I'm
            </p>

            {/* Name with gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Abhijeet Singh
              </span>
            </h1>

            {/* Role badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Backend Developer
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium flex items-center gap-2">
                <Server className="h-4 w-4" />
                DevOps Engineer
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium flex items-center gap-2">
                <Code className="h-4 w-4" />
                Full Stack Developer
              </span>
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Passionate about building robust, scalable applications with modern technologies. 
              Specializing in backend development, DevOps practices, and full-stack solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://docs.google.com/document/d/1uLoG7zSmeMtQ2mIQ9sWcwGKQabZNMflkRyLuvt6t0kg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                  }
                }}
                className="group bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white hover:border-blue-500 dark:hover:border-blue-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-16">
              <a
                href="https://github.com/Abhijeet14d"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijeet-singh-394769248/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:abhijeetsingh28004@gmail.com"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => {
                  const element = document.getElementById("about")
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                  }
                }}
                className="group flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className="animate-bounce">
                  <ArrowDown className="h-6 w-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
