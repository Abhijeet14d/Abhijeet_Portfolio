"use client"

import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu, X, Moon, Sun, Code, Terminal, Server } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      )
    }
    return false
  })

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    } else {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    }
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Video CV", path: "/video-cv" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav
      className={`${scrolled ? "bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm" : "bg-white dark:bg-slate-800"} transition-all duration-300 py-4 sticky top-0 z-50 shadow-sm`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-white">
          <div className="flex items-center gap-1">
            <Terminal className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <Server className="h-6 w-6 text-sky-600 dark:text-sky-400" />
            <Code className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 dark:from-emerald-400 dark:via-sky-400 dark:to-amber-400 bg-clip-text text-transparent">
            Abhijeet Singh
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 py-2 border-t border-slate-200 dark:border-slate-700">
          <div className="container mx-auto px-4 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
