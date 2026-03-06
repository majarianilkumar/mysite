export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-16 fade-in">
      <p className="font-mono text-xs text-[#6c63ff] tracking-widest uppercase mb-3">{tag}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">{title}</h2>
      {subtitle && <p className="text-[#94a3b8] max-w-lg mx-auto">{subtitle}</p>}
      <div className="w-14 h-0.5 bg-gradient-to-r from-[#6c63ff] to-[#38bdf8] rounded mx-auto mt-5" />
    </div>
  )
}
