import { Terminal, Server, Code, MapPin, Mail, Clock } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import profileImage from "../assets/profile.png"

const About = () => {
  return (
    <div className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background and what drives me as a developer"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Backend Developer, Full Stack Developer & DevOps Engineer
            </span>
          </h3>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <Terminal className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Backend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Server className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">DevOps</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Full Stack</span>
            </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                <p className="text-slate-700 dark:text-slate-300">Roorkee, Uttarakhand</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                <p className="text-slate-700 dark:text-slate-300 break-all text-sm">abhijeetsingh28004@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:shadow-lg transition-shadow sm:col-span-2">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Availability</h4>
                <p className="text-slate-700 dark:text-slate-300">Open for Internship Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
