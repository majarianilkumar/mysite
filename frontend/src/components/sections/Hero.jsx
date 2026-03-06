import { profile } from '../../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(108,99,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(56,189,248,0.08) 0%, transparent 60%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-3xl text-center relative z-10" style={{ animation: 'heroIn 0.8s ease forwards', opacity: 0 }}>
        <p className="font-mono text-sm text-[#6c63ff] tracking-widest mb-4">// Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 gradient-text">{profile.name}</h1>
        <p className="text-xl text-[#94a3b8] mb-4">{profile.title}</p>
        <p className="text-[#94a3b8] max-w-xl mx-auto mb-10 text-base">
          With 8+ years of experience building scalable web applications, microservices, and cloud-native solutions.
          Passionate about clean code, performance, and developer experience.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white no-underline transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#6c63ff,#8b5cf6)', boxShadow: '0 4px 20px rgba(108,99,255,0.35)' }}>
            <i className="fa fa-paper-plane" /> Let's Connect
          </a>
          <a href="#about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#e2e8f0] border border-[#2a2a3a] no-underline hover:border-[#6c63ff] hover:text-[#6c63ff] hover:-translate-y-0.5 transition-all">
            <i className="fa fa-user" /> About Me
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#2a2a3a]">
          {profile.stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold font-mono gradient-text-accent">{value}</div>
              <div className="text-xs text-[#475569] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes heroIn{to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  )
}
