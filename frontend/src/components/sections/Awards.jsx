import SectionHeader from '../ui/SectionHeader'
import { awards } from '../../data/portfolioData'

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-4 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Recognition"
          title="Awards and achievements"
          subtitle="Recognition for excellence in engineering, innovation, and team leadership."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          {awards.map((a) => (
            <div key={a.title} className="bg-[#1a1a24] border border-[#2a2a3a] rounded-2xl p-8 relative overflow-hidden hover:border-[#6c63ff] hover:-translate-y-1 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg,#6c63ff,#38bdf8)' }} />
              <i className={`fa ${a.icon} absolute right-6 top-6 text-2xl opacity-15 text-[#94a3b8]`} />
              <p className="font-mono text-xs text-[#6c63ff] mb-4">{a.year}</p>
              <h3 className="font-bold text-base mb-2">{a.title}</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">{a.desc}</p>
              <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold text-[#a78bfa]"
                style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.25)' }}>
                {a.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
