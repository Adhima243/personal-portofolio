const GlowBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[140px]" />
      <div className="grid-overlay" />
    </div>
  )
}

export default GlowBackground
