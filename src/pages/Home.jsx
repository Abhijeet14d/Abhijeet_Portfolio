import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-slate-900 dark:to-indigo-950 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Abhijeet Singh</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8">
          Software Developer
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          I build elegant, user-friendly applications with modern technologies.
          Specializing in full-stack development with a passion for clean code and
          intuitive UI/UX design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://docs.google.com/document/d/1uLoG7zSmeMtQ2mIQ9sWcwGKQabZNMflkRyLuvt6t0kg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Download CV
          </a>
          <Link to="/contact" className="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-slate-900">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-indigo-600 dark:text-indigo-400" size={32} />
      </div>
    </div>
  );
};

export default Home;
