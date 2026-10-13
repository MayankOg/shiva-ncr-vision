export default function Logo({ light = false }: { light?: boolean }) {
  const fg = light ? '#F3F0E7' : '#183D2B'
  return (
    <span className="logo">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="7" fill={fg} />
        <circle cx="10" cy="11" r="2.6" fill={light ? '#183D2B' : '#B8CFB9'} />
        <circle cx="22" cy="11" r="2.6" fill={light ? '#183D2B' : '#B8CFB9'} />
        <circle cx="16" cy="22" r="2.6" fill={light ? '#183D2B' : '#F3F0E7'} />
        <path d="M10 11 L22 11 L16 22 Z" fill="none" stroke={light ? '#183D2B' : '#B8CFB9'} strokeWidth="1.6" />
      </svg>
      <span className="logo-text" style={{ color: fg }}>Shiva NCR<span className="logo-sub">Consultants</span></span>
    </span>
  )
}
