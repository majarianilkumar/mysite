import { profile } from '../../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-[#111118] border-t border-[#2a2a3a] py-10 text-center px-4">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-white"
          style={{ background: 'linear-gradient(135deg,#6c63ff,#38bdf8)' }}>JD</div>
        <span className="font-semibold">{profile.name}</span>
      </div>
      <p className="text-xs text-[#94a3b8] mb-6">{profile.title}</p>
      <div className="flex justify-center gap-3 mb-6">
        {[
          { href: `mailto:${profile.email}`, icon: 'fa-envelope' },
          { href: profile.linkedin, icon: 'fab fa-linkedin' },
          { href: profile.github, icon: 'fab fa-github' },
          { href: profile.twitter, icon: 'fab fa-twitter' },
        ].map(({ href, icon }) => (
          <a key={icon} href={href} target="_blank" rel="noreferrer"
            className="w-9 h-9 bg-[#1a1a24] border border-[#2a2a3a] rounded-lg flex items-center justify-center text-[#94a3b8] hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all text-sm no-underline">
            <i className={`fa ${icon}`} />
          </a>
        ))}
      </div>
      <p className="text-xs text-[#475569]">© {new Date().getFullYear()} John Doe. Built with ❤️ using React + Vite.</p>
    </footer>
  )
}
