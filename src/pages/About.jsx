import SectionHeading from '../components/SectionHeading';
import profileImage from '../assets/profile.png';


const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading 
        title="About Me" 
        subtitle="Get to know more about me and my background"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-slate-200 dark:bg-slate-800 rounded-xl h-100 md:h-200 flex items-center justify-center">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="rounded-lg object-cover max-w-full h-auto"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Software Developer with a passion for creating intuitive user experiences
          </h3>
          
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            I specialize in frontend development with React.js, but I'm also comfortable
            working with backend technologies like Node.js and databases. I believe in writing
            clean, maintainable code and creating applications that are both visually appealing
            and highly functional.
          </p>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            I'm constantly learning new technologies and techniques to improve my skills and stay current in this ever-evolving field.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Location</h4>
              <p className="text-slate-700 dark:text-slate-300">Roorkee, Uttarakhand </p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Email</h4>
              <p className="text-slate-700 dark:text-slate-300">abhijeetsingh28004@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Availability</h4>
              <p className="text-slate-700 dark:text-slate-300">Internship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;