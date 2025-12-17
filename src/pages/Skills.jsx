"use client"

import { useState } from "react"
import {
  Code,
  Terminal,
  Server,
  Database,
  GitBranch,
  Cpu,
  Layers,
  Workflow,
  Lightbulb,
  Users,
  Clock,
  Search,
  CheckCircle,
  Braces,
  FileCode,
  Globe,
  Palette,
  LayoutGrid,
  Boxes,
  Cog,
  Cloud,
  Webhook,
  MessageSquare,
  Briefcase,
  Puzzle,
  Zap,
  BookOpen,
} from "lucide-react"
import SectionHeading from "../components/SectionHeading"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical")

  const skillCategories = {
    technical: [
      {
        category: "Frontend Development",
        icon: <Code className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
        skills: [
          { name: "JavaScript", level: "Advanced", icon: <Braces /> },
          { name: "React.js", level: "Advanced", icon: <Code /> },
          { name: "HTML/CSS", level: "Advanced", icon: <FileCode /> },
          { name: "Tailwind CSS", level: "Advanced", icon: <Palette /> },
          { name: "Responsive Design", level: "Advanced", icon: <LayoutGrid /> },
        ],
      },
      {
        category: "Backend Development",
        icon: <Terminal className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
        skills: [
          { name: "Node.js", level: "Advanced", icon: <Server /> },
          { name: "Express.js", level: "Advanced", icon: <Webhook /> },
          { name: "C++", level: "Advanced", icon: <Cpu /> },
          { name: "MongoDB", level: "Intermediate", icon: <Database /> },
          { name: "SQL", level: "Intermediate", icon: <Database /> },
        ],
      },
      {
        category: "Other Technologies",
        icon: <Boxes className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
        skills: [
          { name: "RESTful APIs", level: "Advanced", icon: <Globe /> },
          { name: "Socket.IO", level: "Intermediate", icon: <Webhook /> },
          { name: "Authentication", level: "Advanced", icon: <CheckCircle /> },
          { name: "State Management", level: "Advanced", icon: <Layers /> },
          { name: "Testing", level: "Intermediate", icon: <Cog /> },
        ],
      },
    ],
    tools: [
      {
        category: "Development Tools",
        icon: <Cog className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
        skills: [
          { name: "Git & GitHub", level: "Advanced", icon: <GitBranch /> },
          { name: "VS Code", level: "Advanced", icon: <Code /> },
          { name: "Postman", level: "Advanced", icon: <Webhook /> },
          { name: "Chrome DevTools", level: "Advanced", icon: <Cog /> },
          { name: "npm/yarn", level: "Advanced", icon: <Boxes /> },
        ],
      },
      {
        category: "DevOps & Deployment",
        icon: <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
        skills: [
          { name: "Docker", level: "Intermediate", icon: <Boxes /> },
          { name: "Jenkins", level: "Intermediate", icon: <Workflow /> },
          { name: "AWS", level: "Intermediate", icon: <Cloud /> },
          { name: "Vercel", level: "Advanced", icon: <Zap /> },
          { name: "Render", level: "Advanced", icon: <Globe /> },
        ],
      },
      {
        category: "Design & Collaboration",
        icon: <Palette className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
        skills: [
          { name: "Figma", level: "Intermediate", icon: <Palette /> },
          { name: "Jira", level: "Intermediate", icon: <Briefcase /> },
          { name: "Slack", level: "Advanced", icon: <MessageSquare /> },
          { name: "Notion", level: "Intermediate", icon: <BookOpen /> },
          { name: "Trello", level: "Advanced", icon: <LayoutGrid /> },
        ],
      },
    ],
    soft: [
      {
        category: "Problem Solving",
        icon: <Lightbulb className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
        skills: [
          { name: "Analytical Thinking", level: "Advanced", icon: <Search /> },
          { name: "Debugging", level: "Advanced", icon: <Cog /> },
          { name: "Algorithm Design", level: "Advanced", icon: <Workflow /> },
          { name: "Research Skills", level: "Advanced", icon: <BookOpen /> },
          { name: "Creative Solutions", level: "Advanced", icon: <Lightbulb /> },
        ],
      },
      {
        category: "Collaboration",
        icon: <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
        skills: [
          { name: "Team Communication", level: "Advanced", icon: <MessageSquare /> },
          { name: "Pair Programming", level: "Advanced", icon: <Users /> },
          { name: "Code Reviews", level: "Advanced", icon: <CheckCircle /> },
          { name: "Knowledge Sharing", level: "Advanced", icon: <BookOpen /> },
          { name: "Conflict Resolution", level: "Intermediate", icon: <Puzzle /> },
        ],
      },
      {
        category: "Work Management",
        icon: <Clock className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
        skills: [
          { name: "Time Management", level: "Advanced", icon: <Clock /> },
          { name: "Project Planning", level: "Advanced", icon: <Briefcase /> },
          { name: "Adaptability", level: "Advanced", icon: <Workflow /> },
          { name: "Attention to Detail", level: "Advanced", icon: <Search /> },
          { name: "Self-Motivation", level: "Advanced", icon: <Zap /> },
        ],
      },
    ],
  }

  // Function to get level badge color
  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
      case "Intermediate":
        return "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300"
      case "Beginner":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Skills" subtitle="Technologies and tools I work with" />

        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center">
        <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-lg inline-flex flex-wrap justify-center">
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 m-1 ${
              activeTab === "technical"
                ? "bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg scale-105"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <Terminal className="h-4 w-4" />
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 m-1 ${
              activeTab === "tools"
                ? "bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg scale-105"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <Server className="h-4 w-4" />
            Tools & Platforms
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 m-1 ${
              activeTab === "soft"
                ? "bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg scale-105"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <Users className="h-4 w-4" />
            Soft Skills
          </button>
        </div>
      </div>
      </div>

      {/* Skills Content */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {skillCategories[activeTab].map((category, categoryIndex) => (
          <div key={categoryIndex} className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md">{category.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.category}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-slate-600 dark:text-slate-400">{skill.icon}</div>
                    <h4 className="font-medium text-slate-900 dark:text-white">{skill.name}</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>

                    <div className="flex">
                      {skill.level === "Advanced" && (
                        <>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mx-0.5"></div>
                        </>
                      )}
                      {skill.level === "Intermediate" && (
                        <>
                          <div className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mx-0.5"></div>
                        </>
                      )}
                      {skill.level === "Beginner" && (
                        <>
                          <div className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mx-0.5"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mx-0.5"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
