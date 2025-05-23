"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Terminal, Server, Code, Download, Send, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  const particlesConfig = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#10b981", "#0ea5e9", "#f59e0b"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.2,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#cbd5e1",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.4,
          },
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        {typeof window !== "undefined" && <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 to-white/80 dark:from-slate-900/90 dark:to-slate-800/80 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Tech icons */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg">
                <Terminal className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg">
                <Server className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg">
                <Code className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>

            {/* Name and title with animated gradient */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="text-slate-900 dark:text-white">Hi, I'm </span>
              <div className="relative inline-block">
                <span className="animate-gradient-x bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 dark:from-emerald-400 dark:via-sky-400 dark:to-amber-400 bg-clip-text text-transparent">
                  Abhijeet Singh
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 dark:from-emerald-400 dark:via-sky-400 dark:to-amber-400 rounded-full"></span>
              </div>
            </h1>

            {/* Animated typing effect */}
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-8 h-8 typewriter">
              <span className="inline-flex">
                <span className="text-emerald-600 dark:text-emerald-400">Backend</span>
                <span className="mx-2">•</span>
                <span className="text-sky-600 dark:text-sky-400">DevOps</span>
                <span className="mx-2">•</span>
                <span className="text-amber-600 dark:text-amber-400">Full Stack</span>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              I build robust, scalable applications with modern technologies. Specializing in backend development,
              DevOps practices, and full-stack solutions with a passion for clean code and efficient architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/document/d/1uLoG7zSmeMtQ2mIQ9sWcwGKQabZNMflkRyLuvt6t0kg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-500 dark:to-sky-500 hover:from-emerald-700 hover:to-sky-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
              <Link
                to="/contact"
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>Contact Me</span>
              </Link>
            </div>

            <div className="mt-16 flex flex-col items-center">
              <Link
                to="/about"
                className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Explore My Work</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="mt-4 animate-bounce">
                <ArrowDown className="text-slate-400 dark:text-slate-500" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl z-0"></div>
    </div>
  )
}

export default Home
