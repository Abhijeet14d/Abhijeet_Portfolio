import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! This is a demo, so the form does not actually submit.');
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading 
        title="Contact Me" 
        subtitle="Let's get in touch"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
              <MapPin className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">Location</h3>
              <p className="text-slate-600 dark:text-slate-400">Your City, Country</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
              <Mail className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">your.email@example.com</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
              <Phone className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400">+1 234 567 890</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-3">Resume</h3>
            <a 
              href="https://drive.google.com/file/d/your-resume-file-id/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;