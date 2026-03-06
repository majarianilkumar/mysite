import { useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const NAV_LINKS = ['home', 'about', 'skills', 'experience', 'awards', 'certifications', 'contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(NAV_LINKS)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a3a] h-16 px-6 flex items-center justify-between"
      style={{ background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(12px)' }}>
      <a href="#home" className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm font-bold text-white"
          style={{ background: 'linear-gradient(135deg,#6c63ff,#38bdf8)' }}>JD</div>
        <span className="font-semibold text-[#e2e8f0] font-mono text-sm">John Doe</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-1">
        {NAV_LINKS.map((id) => (
          <a key={id} href={`#${id}`}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-all duration-150 no-underline
              ${active === id ? 'bg-[#1a1a24] text-[#e2e8f0]' : 'text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#1a1a24]'}`}>
            {id}
          </a>
        ))}
      </div>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen((o) => !o)}>
        <span className="block w-5 h-0.5 bg-[#e2e8f0] rounded transition-all" />
        <span className="block w-5 h-0.5 bg-[#e2e8f0] rounded transition-all" />
        <span className="block w-5 h-0.5 bg-[#e2e8f0] rounded transition-all" />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b border-[#2a2a3a] p-4 flex flex-col gap-1"
          style={{ background: 'rgba(10,10,15,0.97)' }}>
          {NAV_LINKS.map((id) => (
            <a key={id} href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium capitalize text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#1a1a24] no-underline transition-all">
              {id}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
