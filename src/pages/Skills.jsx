import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  
  const skills = {
    technical: [
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'C++', level: 90 },
      { name: 'MongoDB', level: 65 },
      { name: 'SQL', level: 60 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Jenkins', level: 60 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 60 },
      { name: 'Postman', level: 90 },
    ],
    soft: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Communication', level: 80 },
      { name: 'Teamwork', level: 90 },
      { name: 'Time Management', level: 90 },
      { name: 'Adaptability', level: 85 },
      { name: 'Attention to Detail', level: 90 },
    ],
  };
  
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading 
        title="My Skills" 
        subtitle="Here are the technologies and tools I work with"
      />
      
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
              activeTab === 'technical'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-700'
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 text-sm font-medium border-y border-r ${
              activeTab === 'tools'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-700'
            }`}
          >
            Tools & Platforms
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-4 py-2 text-sm font-medium border-y border-r rounded-r-lg ${
              activeTab === 'soft'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-700'
            }`}
          >
            Soft Skills
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills[activeTab].map((skill, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-slate-900 dark:text-slate-100">{skill.name}</span>
              <span className="text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;