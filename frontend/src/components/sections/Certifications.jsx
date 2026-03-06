import SectionHeader from '../ui/SectionHeader'
import { certifications } from '../../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 bg-[#111118]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Credentials"
          title="Licenses and certifications"
          subtitle="Professional certifications validating expertise across cloud, frontend, and software engineering."
        />
        <div className="grid sm:grid-cols-2 gap-4 fade-in">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-[#1a1a24] border border-[#2a2a3a] rounded-2xl p-5 flex gap-4 hover:border-[#6c63ff] hover:-translate-y-0.5 transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-[#16161f] border border-[#2a2a3a] rounded-xl overflow-hidden flex items-center justify-center">
                <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain p-1.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded mb-1">
                  <i className="fa fa-check-circle text-[9px]" /> Verified
                </div>
                <h3 className="font-bold text-sm mb-0.5 leading-snug">{cert.name}</h3>
                <p className="text-xs font-semibold text-[#a78bfa] mb-1">{cert.issuer}</p>
                <p className="text-[11px] text-[#475569] mb-1"><strong>Skills:</strong> {cert.skills}</p>
                <p className="text-[11px] text-[#94a3b8] mb-2">{cert.meta}</p>
                <a href={cert.url} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#6c63ff] hover:text-[#a78bfa] no-underline font-medium transition-colors">
                  <i className="fa fa-external-link-alt text-[10px]" /> Show credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
