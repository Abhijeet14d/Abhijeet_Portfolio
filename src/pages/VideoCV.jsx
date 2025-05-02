import SectionHeading from '../components/SectionHeading';

const VideoCV = () => {
  // Replace with your actual video URL
//   const videoUrl = "https://www.youtube.com/embed/your-video-id";
  
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading 
        title="Video CV" 
        subtitle="Watch my video introduction"
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <div className="w-full h-0 pt-[56.25%] bg-slate-200 dark:bg-slate-700 relative rounded-lg flex items-center justify-center">
              {/* Replace with actual embedded video iframe */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 dark:text-slate-400">
                Video player placeholder - Your video will be embedded here
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About This Video
          </h3>
          
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            In this video, I introduce myself and talk about my skills, experience, and passion
            for software development. I also showcase some of my projects and explain my approach
            to problem-solving and collaboration.
          </p>
          
          <p className="text-slate-700 dark:text-slate-300">
            This video CV complements my written resume and gives you a better sense of who I am
            as a developer and as a person. Feel free to reach out if you'd like to discuss any
            opportunities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCV;