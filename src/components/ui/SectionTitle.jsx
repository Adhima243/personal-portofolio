const SectionTitle = ({ label, title, subtitle }) => {
  return (
    <div className="space-y-4">
      <p className="section-title">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-white/60 max-w-2xl">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
