import { Terminal, Server, Code, MapPin, Mail, Clock } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import profileImage from "../assets/profile.png"

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading
        title="About Me"
        subtitle="Get to know more about my background and what drives me as a developer"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl overflow-hidden">
            <img
              src={profileImage || "/placeholder.svg"}
              alt="Abhijeet Singh"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 dark:from-emerald-400 dark:via-sky-400 dark:to-amber-400 bg-clip-text text-transparent">
              Backend Developer, Full Stack Developer & DevOps Engineer
            </span>
          </h3>

          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Terminal className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Backend Development</span>
            <Server className="h-5 w-5 text-sky-600 dark:text-sky-400 ml-4 flex-shrink-0" />
            <span>DevOps</span>
            <Code className="h-5 w-5 text-amber-600 dark:text-amber-400 ml-4 flex-shrink-0" />
            <span>Full Stack</span>
          </div>

          <p className="text-slate-700 dark:text-slate-300">
            I specialize in backend development with Node.js and databases, while also being proficient in DevOps
            practices and full stack development. My approach combines technical expertise with a focus on creating
            scalable, maintainable solutions that solve real-world problems.
          </p>

          <p className="text-slate-700 dark:text-slate-300">
            With a passion for continuous learning, I stay updated with the latest technologies and best practices in
            software development, cloud infrastructure, and system architecture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-3">
              <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-md">
                <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                <p className="text-slate-700 dark:text-slate-300">Roorkee, Uttarakhand</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-md">
                <Mail className="h-5 w-5 text-sky-600 dark:text-sky-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                <p className="text-slate-700 dark:text-slate-300 break-all">abhijeetsingh28004@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-md">
                <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Availability</h4>
                <p className="text-slate-700 dark:text-slate-300">Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
