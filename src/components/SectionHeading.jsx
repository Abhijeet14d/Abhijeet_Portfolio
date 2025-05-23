const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 flex items-center justify-center">
        <div className="h-1 w-12 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
        <div className="h-1 w-24 bg-sky-600 dark:bg-sky-400 mx-2 rounded-full"></div>
        <div className="h-1 w-12 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
      </div>
    </div>
  )
}

export default SectionHeading
