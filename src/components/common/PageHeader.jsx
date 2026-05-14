function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-sky py-24 px-6 relative overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-white/5 -top-20 -right-20" />
      <div className="absolute w-64 h-64 rounded-full bg-white/5 bottom-0 left-10" />

      <div className="relative z-10 text-center">
        <p className="text-white/60 text-sm mb-4">Home / {breadcrumb}</p>
        <h1 className="text-white font-black text-5xl mb-4">{title}</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHeader
