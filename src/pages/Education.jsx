import SectionHeading from '../components/SectionHeading';

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      period: '2022-26',
      description: 'Currently pursuing a B.Tech in Computer Science with a focus on software development and devops.',
    },
    {
      id: 2,
      degree: 'Intermediate in Science',
      institution: 'Shemford School',
      location: 'Roorkee, Uttarakhand',
      period: '2020-21',
      description: 'Completed my intermediate studies with a focus on science and mathematics.',
    },
    {
      id: 3,
      degree: 'Matriculation',
      institution: 'Shemford School',
      location: 'Roorkee, Uttarakhand',
      period: '2018-19',
      description: 'Completed my matriculation with a focus on science and mathematics.',
    },
  ];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading 
        title="Education" 
        subtitle="My academic background and certifications"
      />
      
      <div className="relative border-l-2 border-indigo-500 dark:border-indigo-400 ml-4 md:ml-8 pl-6 space-y-12">
        {educationHistory.map(item => (
          <div key={item.id} className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-indigo-500 bg-white dark:border-indigo-400 dark:bg-slate-800"></div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 block">
                {item.period}
              </span>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {item.degree}
              </h3>
              
              <h4 className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                {item.institution}, {item.location}
              </h4>
              
              <p className="text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;