import { Github, Linkedin, Twitter, Mail, Code, Server, Terminal } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Terminal className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <Server className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <Code className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 dark:from-emerald-400 dark:via-sky-400 dark:to-amber-400 bg-clip-text text-transparent">
                Abhijeet Singh
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Backend Developer, Full Stack Developer, and DevOps Engineer passionate about creating efficient and
              scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Get In Touch</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Roorkee, Uttarakhand, India</p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">abhijeetsingh28004@gmail.com</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Abhijeet14d"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijeet-singh-394769248/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:abhijeetsingh28004@gmail.com"
                className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {currentYear} Abhijeet Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
