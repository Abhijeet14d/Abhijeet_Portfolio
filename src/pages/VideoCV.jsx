import SectionHeading from '../components/SectionHeading';
import { useState } from 'react';

const VideoCV = () => {
  // Google Drive file ID extracted from your link
  const fileId = "1kBgyDCM17ReGoekn1hVGyRPstcxW3xKS";
  
  // Direct embed URL using the file ID
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  
  // State to track if the video is loading
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Video CV" 
          subtitle="Watch my video introduction"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="w-full h-0 pt-[56.25%] relative rounded-lg overflow-hidden">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700">
                    <div className="text-slate-500 dark:text-slate-400">Loading video...</div>
                  </div>
                )}
                <iframe 
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  title="Video CV"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay"
                  onLoad={() => setIsLoading(false)}
                ></iframe>
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
    </div>
  );
};

export default VideoCV;