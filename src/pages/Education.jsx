"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import SectionHeading from "../components/SectionHeading"

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([])
  const timelineRef = useRef(null)

  const educationHistory = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2022-26",
      description:
        "Currently pursuing a B.Tech in Computer Science with a focus on software development and DevOps. Participating in various coding competitions and hackathons to enhance practical skills.",
    },
    {
      id: 2,
      degree: "Intermediate in Science",
      institution: "Shemford School",
      location: "Roorkee, Uttarakhand",
      period: "2020-21",
      description:
        "Completed intermediate studies with a focus on science and mathematics. Developed a strong foundation in analytical thinking and problem-solving skills.",
    },
    {
      id: 3,
      degree: "Matriculation",
      institution: "Shemford School",
      location: "Roorkee, Uttarakhand",
      period: "2018-19",
      description:
        "Completed matriculation with a focus on science and mathematics. Participated in various extracurricular activities and competitions.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-id"))
            setVisibleItems((prev) => (prev.includes(id) ? prev : [...prev, id]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => observer.observe(item))

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading title="Education" subtitle="My academic journey and qualifications" />

      <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-sky-500 to-amber-500 dark:from-emerald-400 dark:via-sky-400 dark:to-amber-400 transform md:translate-x-[-50%] rounded-full"></div>

        {educationHistory.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            className={`timeline-item relative mb-16 md:mb-24 ${
              index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-[50%]" : "md:pl-12 md:ml-[50%]"
            } transition-all duration-700 ${
              visibleItems.includes(item.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-6 ${
                index % 2 === 0 ? "right-[-25px] md:right-[-12px]" : "left-[-25px] md:left-[-12px]"
              } w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 z-10 ${
                index === 0
                  ? "bg-emerald-500 dark:bg-emerald-400"
                  : index === 1
                    ? "bg-sky-500 dark:bg-sky-400"
                    : "bg-amber-500 dark:bg-amber-400"
              }`}
            ></div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  index === 0
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                    : index === 1
                      ? "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                }`}
              >
                <Calendar className="h-3 w-3" />
                <span>{item.period}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.degree}</h3>

              <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 mb-4">
                <GraduationCap className="h-4 w-4 flex-shrink-0" />
                <span>{item.institution}</span>
              </div>

              <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 mb-4">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{item.location}</span>
              </div>

              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
