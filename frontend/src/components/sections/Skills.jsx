import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import { industrySkills, toolSkills } from '../../data/portfolioData'

export default function Skills() {
  const [tab, setTab] = useState('industry')

  return (
    <section id="skills" className="py-24 px-4 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Technical Expertise"
          title="8+ years of Full Stack knowledge"
          subtitle="Industry know-how and cutting-edge tools across the entire development stack."
        />
        <div className="fade-in">
          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {[['industry', 'Industry Knowledge'], ['tools', 'Tools & Technologies']].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all border
                  ${tab === key ? 'bg-[#6c63ff] border-[#6c63ff] text-white' : 'bg-[#1a1a24] border-[#2a2a3a] text-[#94a3b8] hover:text-[#e2e8f0]'}`}>
                {label}
              </button>
            ))}
          </div>

          {tab === 'industry' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industrySkills.map(({ title, desc }) => (
                <div key={title} className="bg-[#1a1a24] border border-[#2a2a3a] rounded-2xl p-6 hover:border-[#6c63ff] hover:-translate-y-1 transition-all">
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          )}

          {tab === 'tools' && (
            <div className="space-y-8">
              {toolSkills.map(({ category, icon, tags }) => (
                <div key={category}>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                    <i className={`fa ${icon} text-[#6c63ff] text-xs`} />
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-[#1a1a24] border border-[#2a2a3a] rounded-lg text-xs font-medium text-[#e2e8f0] hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
