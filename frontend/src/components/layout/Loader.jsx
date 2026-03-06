import { useEffect, useState } from 'react'

const STEPS = [
  '▶ Initializing Portfolio Environment',
  '▶ Loading Full Stack Projects',
  '▶ Fetching Skills & Certifications',
  '▶ Deploying Portfolio',
]

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPct((p) => {
        const next = Math.min(p + Math.random() * 12, 100)
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(onDone, 400)
        }
        return next
      })
    }, 200)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div className="fixed inset-0 bg-[#0a0a0f] flex flex-col items-center justify-center z-[9999]">
      <div
        className="w-18 h-18 rounded-2xl flex items-center justify-center font-mono text-3xl font-bold text-white mb-8"
        style={{
          width: 72,
          height: 72,
          background: 'linear-gradient(135deg, #6c63ff, #38bdf8)',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      >
        JD
      </div>
      <div className="text-center mb-8 space-y-1">
        {STEPS.map((step, i) => (
          <p
            key={i}
            className="font-mono text-xs text-[#94a3b8]"
            style={{
              opacity: pct >= (i + 1) * 25 ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          >
            {step}
          </p>
        ))}
      </div>
      <div className="w-72 h-1 bg-[#2a2a3a] rounded overflow-hidden">
        <div
          className="h-full rounded"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #6c63ff, #38bdf8)',
            transition: 'width 0.2s ease',
          }}
        />
      </div>
      <p className="font-mono text-xs text-[#6c63ff] mt-2">{Math.floor(pct)}%</p>
      <style>{`@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}`}</style>
    </div>
  )
}
