import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import { profile } from '../../data/portfolioData'
import { sendContactMessage } from '../../utils/api'

const INITIAL = { firstName: '', lastName: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.email || !form.message) return
    setStatus('loading')
    try {
      await sendContactMessage(form)
      setStatus('success')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const contacts = [
    { icon: 'fa-envelope', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/johndoe', href: profile.linkedin },
    { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/johndoe', href: profile.github },
    { icon: 'fa-map-marker-alt', label: 'Location', value: profile.location, href: null },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Let's Connect"
          title="Ready to build something amazing?"
          subtitle="Let's discuss how my Full Stack expertise can accelerate your next project."
        />
        <div className="grid md:grid-cols-2 gap-16 fade-in">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">Get in touch</h3>
            <p className="text-sm text-[#94a3b8] mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
              Drop me a message — I'd love to hear from you.
            </p>
            {contacts.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 bg-[#1a1a24] border border-[#2a2a3a] rounded-xl flex items-center justify-center text-[#6c63ff] flex-shrink-0">
                  <i className={`fa ${icon}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5">{label}</p>
                  {href
                    ? <a href={href} target="_blank" rel="noreferrer" className="text-xs text-[#a78bfa] hover:underline no-underline">{value}</a>
                    : <span className="text-xs text-[#a78bfa]">{value}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[['firstName', 'First Name', 'Jane'], ['lastName', 'Last Name', 'Smith']].map(([name, label, ph]) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#94a3b8]">{label}</label>
                  <input name={name} value={form[name]} onChange={handleChange} placeholder={ph}
                    className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl px-4 py-2.5 text-sm text-[#e2e8f0] outline-none focus:border-[#6c63ff] transition-colors placeholder:text-[#475569]" />
                </div>
              ))}
            </div>
            {[['email', 'Email Address', 'jane@example.com', 'email'], ['subject', 'Subject', 'Project inquiry', 'text']].map(([name, label, ph, type]) => (
              <div key={name} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#94a3b8]">{label}</label>
                <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={ph}
                  className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl px-4 py-2.5 text-sm text-[#e2e8f0] outline-none focus:border-[#6c63ff] transition-colors placeholder:text-[#475569]" />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#94a3b8]">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..."
                rows={5}
                className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl px-4 py-2.5 text-sm text-[#e2e8f0] outline-none focus:border-[#6c63ff] transition-colors resize-none placeholder:text-[#475569]" />
            </div>
            <button onClick={handleSubmit} disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60"
              style={{
                background: status === 'success'
                  ? 'linear-gradient(135deg,#4ade80,#22d3ee)'
                  : status === 'error'
                  ? 'linear-gradient(135deg,#f87171,#fb923c)'
                  : 'linear-gradient(135deg,#6c63ff,#8b5cf6)',
              }}>
              {status === 'loading' && <i className="fa fa-spinner fa-spin" />}
              {status === 'success' && <i className="fa fa-check" />}
              {status === 'error' && <i className="fa fa-exclamation-circle" />}
              {status === 'idle' && <i className="fa fa-paper-plane" />}
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed – Try Again' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
