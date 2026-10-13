// Static illustration shown when WebGL is unavailable: connected panels and nodes.
export default function Fallback() {
  return (
    <svg className="fallback" viewBox="0 0 600 420" role="img" aria-label="Illustration of connected software systems">
      <g stroke="#78917A" strokeWidth="2" fill="none">
        <path d="M120 110 L300 210 L480 110 M120 320 L300 210 L480 320 M300 60 L300 210" />
      </g>
      {[[60, 70], [420, 70], [60, 280], [420, 280]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="120" height="80" rx="6" fill="#fff" stroke="#DCDDD3" strokeWidth="2" />
          <rect x={x} y={y} width="120" height="14" rx="3" fill={i % 2 ? '#183D2B' : '#252A26'} />
          <rect x={x + 12} y={y + 28} width="60" height="6" fill="#B8CFB9" />
          <rect x={x + 12} y={y + 44} width="90" height="6" fill="#DCDDD3" />
          <rect x={x + 12} y={y + 60} width="40" height="6" fill="#78917A" />
        </g>
      ))}
      <polygon points="300,170 340,210 300,250 260,210" fill="#183D2B" />
      <circle cx="300" cy="60" r="10" fill="#78917A" />
    </svg>
  )
}
