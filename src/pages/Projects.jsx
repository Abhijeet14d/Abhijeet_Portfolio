"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Code, Server, Terminal } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import chatAppImage from "../assets/quicktalk.png"
import notesAppImage from "../assets/notesapp.png"
import portfolioImage from "../assets/portfolio.png"
import secureLoginImage from "../assets/securelogin.png"
import docontimeImage from "../assets/docontime.png"
import weatherAppImage from "../assets/weather.png"

const Projects = () => {
  const [filter, setFilter] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState([])

  const projects = [
    {
      id: 1,
      title: "QuickTalk",
      description:
        "A real-time chat application with private and group chat functionality, built using WebSocket technology.",
      image: chatAppImage,
      technologies: ["React", "Socket.IO", "Node.js", "Tailwind CSS"],
      category: ["frontend", "backend", "fullstack"],
      githubLink: "https://github.com/Abhijeet14d/Chat-App",
      liveLink: "https://quicktalk-njxn.onrender.com/",
    },
    {
      id: 2,
      title: "DoctorOnTime",
      description:
        "A doctor appointment booking platform that connects patients with healthcare professionals, allowing users to book appointments online.",
      image: docontimeImage,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      category: ["frontend", "backend", "fullstack"],
      githubLink: "https://github.com/Adarsh097/DoctorOnTime?tab=readme-ov-file",
      liveLink: "https://doctor-on-time-git-main-adarshgupta0601-gmailcoms-projects.vercel.app/",
    },
    {
      id: 3,
      title: "Note Taking App",
      description: "A simple note-taking application that allows users to create, edit, and delete notes.",
      image: notesAppImage,
      technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
      category: ["frontend", "backend", "fullstack"],
      githubLink: "https://github.com/Abhijeet14d/NotesApp",
      liveLink: "https://weather-app-demo.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects, skills, and experience, with a responsive design.",
      image: portfolioImage,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: ["frontend"],
      githubLink: "https://github.com/Abhijeet14d/Abhijeet_Portfolio",
      liveLink: "www.abhijeetsingh123.me",
    },
    {
      id: 5,
      title: "Secure Login",
      description: "An authentication system that allows users to securely log in and manage their accounts.",
      image: secureLoginImage,
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Chakra UI"],
      category: ["frontend", "backend", "fullstack"],
      githubLink: "https://github.com/Abhijeet14d/SecureLogin",
      liveLink: "https://securelogin-8uzd.onrender.com/",
    },
    {
      id: 6,
      title: "Weather App",
      description:
        "A weather forecasting app that provides real-time weather updates and forecasts for any location using the OpenWeatherMap API.",
      image: weatherAppImage,
      technologies: ["React", "Tailwind CSS", "OpenWeatherMap API"],
      category: ["frontend"],
      githubLink: "https://github.com/yourusername/blog-platform",
      liveLink: "https://blog-platform-demo.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category.includes(filter))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-id"))
            setVisibleProjects((prev) => (prev.includes(id) ? prev : [...prev, id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectItems = document.querySelectorAll(".project-card")
    projectItems.forEach((item) => observer.observe(item))

    return () => {
      projectItems.forEach((item) => observer.unobserve(item))
    }
  }, [filteredProjects])

  return (
    <div className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Projects" subtitle="Check out some of my recent work" />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            filter === "all"
              ? "bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg scale-105"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter("frontend")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
            filter === "frontend"
              ? "bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg scale-105"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
          }`}
        >
          <Code className="h-4 w-4" />
          Frontend
        </button>
        <button
          onClick={() => setFilter("backend")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
            filter === "backend"
              ? "bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg scale-105"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
          }`}
        >
          <Terminal className="h-4 w-4" />
          Backend
        </button>
        <button
          onClick={() => setFilter("fullstack")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
            filter === "fullstack"
              ? "bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg scale-105"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
          }`}
        >
          <Server className="h-4 w-4" />
          Full Stack
        </button>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            data-id={project.id}
            className={`project-card group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-500 hover:shadow-xl ${
              visibleProjects.includes(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/40 transition-colors"
                  aria-label="View code on GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/40 transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 text-sm"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors flex items-center gap-1 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
