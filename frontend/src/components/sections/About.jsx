import SectionHeader from '../ui/SectionHeader'
import { profile } from '../../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-[#111118]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="About Me"
          title="Meet your next Full Stack partner"
          subtitle="8+ years of experience delivering robust, scalable web solutions that power modern products."
        />
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-start fade-in">
          {/* Photo */}
          <div className="relative">
            <div className="w-full rounded-2xl border border-[#2a2a3a] flex items-center justify-center relative overflow-hidden"
              style={{ aspectRatio: '4/5', background: 'linear-gradient(135deg,#1a1a24,#16161f)' }}>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(108,99,255,0.2),rgba(56,189,248,0.1))' }} />
              <span className="font-mono text-7xl font-bold text-[#6c63ff] opacity-30 relative z-10">JD</span>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1a1a24] border border-[#2a2a3a] rounded-full px-5 py-1.5 text-xs font-semibold text-[#6c63ff] whitespace-nowrap">
              Full Stack Developer
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-1">{profile.name}</h3>
            <p className="text-sm text-[#94a3b8] mb-5">📍 {profile.location}</p>
            {profile.bio.map((p, i) => (
              <p key={i} className="text-[#94a3b8] text-sm mb-3 leading-relaxed">{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 mt-5">
              {profile.pills.map((pill) => (
                <span key={pill} className="px-3 py-1 bg-[#1a1a24] border border-[#2a2a3a] rounded-full text-xs font-medium text-[#94a3b8]">{pill}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {profile.expertise.map(({ label, level }) => (
                <div key={label} className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-4">
                  <p className="text-xs text-[#94a3b8] mb-1">{label}</p>
                  <p className="text-sm font-semibold text-[#a78bfa]">{level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
