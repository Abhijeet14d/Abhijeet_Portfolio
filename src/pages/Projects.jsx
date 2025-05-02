import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A weather forecasting app that provides real-time weather updates and forecasts for any location using the OpenWeatherMap API.',
      image: 'Weather App Screenshot',
      technologies: ['React', 'Tailwind CSS', 'OpenWeatherMap API'],
      githubLink: 'https://github.com/yourusername/weather-app',
      liveLink: 'https://weather-app-demo.com',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform with user authentication, product management, and payment integration.',
      image: 'E-Commerce Platform Screenshot',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      githubLink: 'https://github.com/yourusername/ecommerce-platform',
      liveLink: 'https://ecommerce-platform-demo.com',
    },
    {
      id: 3,
      title: 'Chat Application',
      description: 'A real-time chat application with private and group chat functionality, built using WebSocket technology.',
      image: 'Chat Application Screenshot',
      technologies: ['React', 'Socket.IO', 'Node.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/chat-application',
      liveLink: 'https://chat-application-demo.com',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects, skills, and experience, with a responsive design.',
      image: 'Portfolio Website Screenshot',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubLink: 'https://github.com/yourusername/portfolio-website',
      liveLink: 'https://portfolio-website-demo.com',
    },
    {
      id: 5,
      title: 'Task Manager',
      description: 'A task management app to organize and prioritize tasks, with features like drag-and-drop and due date reminders.',
      image: 'Task Manager Screenshot',
      technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/task-manager',
      liveLink: 'https://task-manager-demo.com',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A blogging platform where users can create, edit, and share blog posts, with a rich text editor and comment system.',
      image: 'Blog Platform Screenshot',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Quill.js'],
      githubLink: 'https://github.com/yourusername/blog-platform',
      liveLink: 'https://blog-platform-demo.com',
    },
  ];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading 
        title="My Projects" 
        subtitle="Check out some of my recent work"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              {/* Replace with actual project images */}
              <div className="text-slate-500 dark:text-slate-400">{project.image}</div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{project.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded dark:bg-indigo-900 dark:text-indigo-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;