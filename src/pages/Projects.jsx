import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project Name 1',
      description: 'Description of your first project. Explain what it does, the problem it solves, and your contribution to it.',
      image: 'project-image-placeholder',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/project1',
      liveLink: 'https://project1-demo.com',
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'Description of your second project. Explain what it does, the problem it solves, and your contribution to it.',
      image: 'project-image-placeholder',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/project2',
      liveLink: 'https://project2-demo.com',
    },
    {
      id: 3,
      title: 'Project Name 3',
      description: 'Description of your third project. Explain what it does, the problem it solves, and your contribution to it.',
      image: 'project-image-placeholder',
      technologies: ['React', 'Express', 'PostgreSQL'],
      githubLink: 'https://github.com/yourusername/project3',
      liveLink: 'https://project3-demo.com',
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