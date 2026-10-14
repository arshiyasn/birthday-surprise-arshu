import { useState } from 'react'
import content from '../data/birthdayContent'

// An original cartoon kid drawn in SVG. Poses: stand, sign, tumble, back, bust, cake.
// To use your own artwork, add PNGs to public/images/character/ and set
// useCustomCharacterImages: true in birthdayContent.js.
const INK = '#4a2b1d'
const SKIN = '#ffe1c6'
const HAIR = '#2f2320'
const SHIRT = '#d9382c'

function Face({ face }) {
  const s = { stroke: INK, strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }
  const eyes = {
    happy: <g {...s}><path d="M68 104q9-11 18 0" /><path d="M114 104q9-11 18 0" /></g>,
    shock: <g stroke={INK} strokeWidth="3"><circle cx="77" cy="102" r="10" fill="#fff" /><circle cx="123" cy="102" r="10" fill="#fff" /><circle cx="77" cy="103" r="4" fill={INK} /><circle cx="123" cy="103" r="4" fill={INK} /></g>,
    angry: <g><circle cx="77" cy="106" r="5" fill={INK} /><circle cx="123" cy="106" r="5" fill={INK} /><g {...s} strokeWidth="6"><path d="M62 88L91 98" /><path d="M138 88L109 98" /></g></g>,
    sad: <g><circle cx="77" cy="106" r="5" fill={INK} /><circle cx="123" cy="106" r="5" fill={INK} /><g {...s} strokeWidth="5"><path d="M62 98L91 89" /><path d="M138 98L109 89" /></g></g>,
  }
  const mouths = {
    happy: <path d="M84 126q16 16 32 0" {...s} fill="#fff" />,
    shock: <ellipse cx="100" cy="130" rx="8" ry="11" fill="#c0392b" stroke={INK} strokeWidth="3" />,
    angry: <path d="M82 138q18-16 36 0Z" {...s} fill="#c0392b" />,
    sad: <path d="M86 138q14-12 28 0" {...s} />,
  }
  return (
    <g>
      <ellipse cx="68" cy="124" rx="10" ry="6" fill="#ff8fa3" opacity=".6" />
      <ellipse cx="132" cy="124" rx="10" ry="6" fill="#ff8fa3" opacity=".6" />
      {eyes[face] || eyes.happy}
      {mouths[face] || mouths.happy}
    </g>
  )
}

function Head({ face, back = false, hat = false }) {
  return (
    <g>
      <circle cx="36" cy="104" r="12" fill={SKIN} stroke={INK} strokeWidth="4" />
      <circle cx="164" cy="104" r="12" fill={SKIN} stroke={INK} strokeWidth="4" />
      <ellipse cx="100" cy="98" rx="66" ry="60" fill={back ? HAIR : SKIN} stroke={INK} strokeWidth="4" />
      {!back && <path d="M36 92C32 40 70 36 100 36S168 40 164 92C150 68 128 60 100 60S50 68 36 92Z" fill={HAIR} />}
      {!back && <path d="M94 38q6-16 18-10" stroke={HAIR} strokeWidth="6" strokeLinecap="round" fill="none" />}
      {!back && <Face face={face} />}
      {hat && (
        <g>
          <polygon points="100,-8 70,50 130,50" fill="#ff8fab" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
          <path d="M88 20L112 24M80 36L120 40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="-8" r="8" fill="#ffd54f" stroke={INK} strokeWidth="3" />
        </g>
      )}
    </g>
  )
}

const limb = (d, color = SKIN, w = 15) => (
  <g fill="none" strokeLinecap="round">
    <path d={d} stroke={INK} strokeWidth={w + 7} />
    <path d={d} stroke={color} strokeWidth={w} />
  </g>
)

function Body({ arms = 'down', sign = false }) {
  const armPaths = {
    down: ['M66 172 L48 226', 'M134 172 L152 226'],
    flail: ['M66 172 L26 128', 'M134 172 L176 126'],
    sign: ['M66 172 L48 226', 'M134 172 L156 214'],
    cake: ['M70 176 L82 214', 'M130 176 L118 214'],
  }[arms]
  return (
    <g>
      {limb('M86 236 L84 306')}{limb('M114 236 L116 306')}
      <ellipse cx="82" cy="312" rx="17" ry="9" fill="#fff" stroke={INK} strokeWidth="4" />
      <ellipse cx="118" cy="312" rx="17" ry="9" fill="#fff" stroke={INK} strokeWidth="4" />
      <rect x="66" y="222" width="68" height="34" rx="10" fill="#4f7ccf" stroke={INK} strokeWidth="4" />
      {limb(armPaths[0])}{limb(armPaths[1])}
      <rect x="62" y="150" width="76" height="82" rx="20" fill={SHIRT} stroke={INK} strokeWidth="4" />
      <circle cx="68" cy="170" r="14" fill={SHIRT} stroke={INK} strokeWidth="4" />
      <circle cx="132" cy="170" r="14" fill={SHIRT} stroke={INK} strokeWidth="4" />
      {sign && (
        <g>
          <path d="M156 214 L162 96" stroke={INK} strokeWidth="6" strokeLinecap="round" />
          <g transform="rotate(8 176 76)">
            <rect x="136" y="42" width="84" height="64" rx="6" fill="#fff" stroke={INK} strokeWidth="4" />
            <path d="M154 56L202 92M202 56L154 92" stroke="#2b59e0" strokeWidth="9" strokeLinecap="round" />
          </g>
        </g>
      )}
    </g>
  )
}

function Cake() {
  return (
    <g>
      <rect x="66" y="176" width="68" height="34" rx="8" fill="#ffb3c1" stroke={INK} strokeWidth="4" />
      <path d="M66 190q8 10 17 0q8 10 17 0q8 10 17 0q8 10 17 0" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <rect x="96" y="156" width="8" height="20" fill="#7fd1ff" stroke={INK} strokeWidth="3" />
      <path d="M100 138c7 8 8 14 0 20c-8-6-7-12 0-20z" fill="#ffa726" />
    </g>
  )
}

const FILES = { stand: 'stand', sign: 'sign', tumble: 'tumble', back: 'back', bust: 'bust', cake: 'cake' }

export default function Kid({ pose = 'stand', face = 'happy', className = '' }) {
  const [imgFailed, setImgFailed] = useState(false)
  if (content.useCustomCharacterImages && !imgFailed) {
    return <img className={`kid kid-${pose} ${className}`} src={`${import.meta.env.BASE_URL}images/character/${FILES[pose]}.png`} alt="" onError={() => setImgFailed(true)} />
  }
  const bust = pose === 'bust' || pose === 'cake'
  return (
    <svg className={`kid kid-${pose} ${className}`} viewBox={bust ? '-10 -20 220 270' : '-20 -20 260 350'} aria-hidden="true">
      {!bust && <Body arms={pose === 'tumble' ? 'flail' : pose === 'sign' ? 'sign' : 'down'} sign={pose === 'sign'} />}
      {bust && (
        <g>
          <path d="M30 250Q100 150 170 250Z" fill={SHIRT} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
          {pose === 'cake' && <g transform="translate(0,28)"><Cake /></g>}
        </g>
      )}
      <Head face={face} back={pose === 'back'} hat={pose === 'cake'} />
    </svg>
  )
}
