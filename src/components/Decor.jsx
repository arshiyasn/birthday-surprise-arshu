// Small decorative pieces used across the pages (all drawn in SVG/CSS)

export const Gingham = ({ className = '', style }) => <div className={`gingham ${className}`} style={style} aria-hidden="true" />

export function Blob({ className = '' }) {
  return (
    <svg className={`blob ${className}`} viewBox="0 0 300 260" aria-hidden="true">
      <path d="M0 0H250C282 44 214 78 196 112C170 160 186 214 112 226C66 233 28 198 0 226Z" fill="#e9732c" />
      <path d="M0 238C34 206 74 242 118 236C196 224 180 160 212 116C232 88 276 60 252 14" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <path d="M0 252C40 224 84 254 130 250" fill="none" stroke="#e9732c" strokeWidth="5" strokeLinecap="round" opacity=".55" />
    </svg>
  )
}

export const Sparkle = ({ className = '', style }) => (
  <svg className={`sparkle ${className}`} style={style} viewBox="0 0 40 40" aria-hidden="true">
    <path d="M20 0C22 12 28 18 40 20C28 22 22 28 20 40C18 28 12 22 0 20C12 18 18 12 20 0Z" fill="#c0392b" />
  </svg>
)

export function GoldHeart({ children }) {
  const heart = 'M200 336C60 236 18 164 18 104C18 52 58 20 106 20C146 20 182 42 200 80C218 42 254 20 294 20C342 20 382 52 382 104C382 164 340 236 200 336Z'
  return (
    <div className="gold-heart">
      <svg viewBox="0 0 400 360" aria-hidden="true">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbe58a" /><stop offset=".5" stopColor="#d9a93a" /><stop offset="1" stopColor="#f6d56b" />
          </linearGradient>
          <clipPath id="heartClip"><path d={heart} /></clipPath>
        </defs>
        <path d={heart} fill="#f5f1e3" />
        <g clipPath="url(#heartClip)" opacity=".5">
          <circle cx="90" cy="110" r="34" fill="#cfe3f5" /><circle cx="150" cy="70" r="14" fill="#cfe3f5" /><circle cx="300" cy="220" r="26" fill="#cfe3f5" />
        </g>
        <path d={heart} fill="none" stroke="url(#gold)" strokeWidth="30" strokeLinejoin="round" />
        <path d={heart} fill="none" stroke="#fff2b0" strokeWidth="22" strokeLinecap="round" strokeDasharray="0 17" opacity=".95" />
        <path d={heart} fill="none" stroke="#a9781f" strokeWidth="3" transform="translate(200 180) scale(.9) translate(-200 -180)" />
      </svg>
      <div className="gold-heart-art">{children}</div>
    </div>
  )
}

export const TornPaper = () => (
  <svg className="torn" viewBox="0 0 300 260" aria-hidden="true">
    <path d="M0 80L30 70L52 96L86 84L104 120L142 110L160 150L196 144L214 190L252 184L270 230L300 224V260H0Z" fill="#f4e9d6" />
  </svg>
)

export function Balloons() {
  return (
    <svg className="balloons" viewBox="0 0 120 170" aria-hidden="true">
      <path d="M40 150C44 120 30 100 50 80" stroke="#8a6a5a" strokeWidth="2" fill="none" />
      <path d="M80 150C76 124 92 104 74 84" stroke="#8a6a5a" strokeWidth="2" fill="none" />
      <path d="M40 40C30 14 4 24 8 46C12 66 40 82 50 92C60 82 88 66 92 46C96 24 70 14 60 40Z" transform="translate(-6 0) scale(.9)" fill="#7fb2e8" />
      <path d="M70 52C62 28 36 38 40 58C44 76 68 90 76 98C84 90 108 76 112 58C116 38 90 28 82 52Z" transform="translate(-2 -6) scale(.9)" fill="#f48aa6" />
    </svg>
  )
}

export function Squiggles() {
  return (
    <svg className="squiggles" viewBox="0 0 200 160" aria-hidden="true">
      <path d="M20 40c14-24 28 24 42 0s28 24 42 0" stroke="#e9732c" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30 100c10-14 20 14 30 0s20 14 30 0" stroke="#d94b3d" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="150" cy="40" r="5" fill="#f2b23c" /><circle cx="168" cy="96" r="4" fill="#d94b3d" /><circle cx="120" cy="130" r="5" fill="#e9732c" />
    </svg>
  )
}

export function Cake({ out = false }) {
  const xs = [118, 145, 172, 199, 226, 253, 280]
  const wave = (x0, x1, y, step) => {
    let d = `M${x0} ${y}`
    for (let x = x0; x < x1; x += step) d += ` q${step / 4} ${step / 2.2} ${step / 2} 0 q${step / 4} ${step / 2.2} ${step / 2} 0`
    return d
  }
  return (
    <svg className={`cake ${out ? 'is-out' : ''}`} viewBox="0 0 400 340" role="img" aria-label="Birthday cake">
      <ellipse cx="200" cy="310" rx="190" ry="22" fill="#f1d9bd" />
      <rect x="22" y="196" width="356" height="106" rx="34" fill="#e9b98a" stroke="#c98a5a" strokeWidth="4" />
      <path d={wave(22, 378, 214, 44) + 'V196H22Z'} fill="#fff8ef" stroke="#c98a5a" strokeWidth="4" strokeLinejoin="round" />
      <rect x="86" y="118" width="228" height="92" rx="30" fill="#e9b98a" stroke="#c98a5a" strokeWidth="4" />
      <path d={wave(86, 314, 134, 38) + 'V118H86Z'} fill="#fff8ef" stroke="#c98a5a" strokeWidth="4" strokeLinejoin="round" />
      {xs.map((x, i) => (
        <g key={x}>
          <rect x={x - 6} y="76" width="12" height="46" rx="3" fill="#d94b3d" stroke="#8d2b22" strokeWidth="2" />
          <path d={`M${x - 6} 90l12 -8M${x - 6} 104l12 -8M${x - 6} 118l12 -8`} stroke="#fff" strokeWidth="3" />
          <g className="flame" style={{ '--i': i }}>
            <path d={`M${x} 42c9 11 11 20 0 30c-11-10-9-19 0-30z`} fill="#ffa726" />
            <path d={`M${x} 54c4 5 5 10 0 14c-5-4-4-9 0-14z`} fill="#ffe082" />
          </g>
          <g className="smoke"><circle cx={x} cy="56" r="5" /><circle cx={x + 4} cy="42" r="4" /></g>
        </g>
      ))}
    </svg>
  )
}

export const Clothespin = ({ style }) => <span className="pin" style={style} aria-hidden="true" />
export const Bow = ({ style }) => (
  <svg className="bow" style={style} viewBox="0 0 60 40" aria-hidden="true">
    <path d="M30 20C16 0 2 6 6 20C2 34 16 40 30 20ZM30 20C44 0 58 6 54 20C58 34 44 40 30 20Z" fill="#c0392b" /><circle cx="30" cy="20" r="6" fill="#9b2a20" />
  </svg>
)
export const Star = ({ style }) => (
  <svg className="red-star" style={style} viewBox="0 0 50 50" aria-hidden="true">
    <path d="M25 2l6 17 18 1-14 11 5 18-15-10-15 10 5-18L1 20l18-1z" fill="#c0392b" />
  </svg>
)
export const Camera = ({ style }) => (
  <svg className="camera" style={style} viewBox="0 0 80 60" aria-hidden="true">
    <rect x="4" y="14" width="72" height="42" rx="8" fill="#6d5b50" /><rect x="4" y="14" width="72" height="14" rx="6" fill="#8b786c" />
    <circle cx="40" cy="36" r="14" fill="#2b2b2b" /><circle cx="40" cy="36" r="8" fill="#5a7ca0" /><rect x="14" y="6" width="16" height="10" rx="3" fill="#6d5b50" />
  </svg>
)
