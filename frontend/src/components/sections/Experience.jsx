import SectionHeader from '../ui/SectionHeader'
import { experience } from '../../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-[#111118]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Work Experience"
          title="Building the future one commit at a time"
          subtitle="8+ years of crafting scalable web products across startups and enterprise organisations."
        />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 rounded"
            style={{ background: 'linear-gradient(to bottom,#6c63ff,#38bdf8,transparent)' }} />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="flex gap-8 fade-in">
                {/* Dot */}
                <div className="flex-shrink-0 w-10 h-10 bg-[#1a1a24] border-2 border-[#6c63ff] rounded-xl flex items-center justify-center z-10">
                  <span className="font-mono text-xs font-bold text-[#6c63ff]">{job.initials}</span>
                </div>
                {/* Card */}
                <div className="flex-1 bg-[#1a1a24] border border-[#2a2a3a] rounded-2xl p-6 hover:border-[#6c63ff] transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-lg">{job.role}</h3>
                      <p className="text-sm font-semibold text-[#a78bfa]">{job.company}</p>
                    </div>
                    <span className="font-mono text-xs text-[#94a3b8] bg-[#0a0a0f] border border-[#2a2a3a] px-3 py-1 rounded-lg">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#94a3b8] my-4 leading-relaxed">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.chips.map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[10px] text-[#475569] mb-0.5">{label}</p>
                        <span className="px-2.5 py-1 bg-[#0a0a0f] border border-[#2a2a3a] rounded-md text-xs font-semibold text-[#94a3b8]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
