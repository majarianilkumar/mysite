const variants = {
  primary:
    'bg-gradient-to-br from-[#6c63ff] to-purple-600 text-white shadow-[0_4px_20px_rgba(108,99,255,0.35)] hover:shadow-[0_8px_30px_rgba(108,99,255,0.5)] hover:-translate-y-0.5',
  outline:
    'bg-transparent border border-[#2a2a3a] text-[#e2e8f0] hover:border-[#6c63ff] hover:text-[#6c63ff] hover:-translate-y-0.5',
}

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer border-none transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
