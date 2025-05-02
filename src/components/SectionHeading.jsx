const SectionHeading = ({ title, subtitle }) => {
    return (
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
        {subtitle && <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
      </div>
    );
  };
  
  export default SectionHeading;