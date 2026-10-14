import { useEffect } from 'react'
import content from '../data/birthdayContent'
import Page, { ArrowButton } from './Page'
import SmartImage from './SmartImage'
import { Gingham, Clothespin, Bow, Star, Camera } from './Decor'

const LETTER_STYLES = [
  { bg: '#c0392b', color: '#fff', font: 'Special Elite' }, { bg: '#fff', color: '#c0392b', font: 'Playball' },
  { bg: '#e9d7c0', color: '#9b2a20', font: 'Chelsea Market' }, { bg: '#c0392b', color: '#fff', font: 'Playball' },
  { bg: '#fff', color: '#9b2a20', font: 'Special Elite' }, { bg: '#e9d7c0', color: '#c0392b', font: 'Chelsea Market' },
  { bg: '#c0392b', color: '#fff', font: 'Special Elite' }, { bg: '#fff', color: '#c0392b', font: 'Playball' },
]
const X = [125, 305, 485, 665, 845]

export default function MemoriesPage({ onDone }) {
  const { title, photos } = content.memories
  useEffect(() => {
    const s = content.autoReturnSeconds.memories
    if (!s) return
    const t = setTimeout(onDone, s * 1000)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <Page edges={false} className="mem-page">
      <Gingham className="mem-gingham" />
      <h1 className="mem-title" aria-label={title}>
        {title.split('').map((ch, i) => {
          const st = LETTER_STYLES[i % LETTER_STYLES.length]
          return <span key={i} className="mem-letter" style={{ background: st.bg, color: st.color, fontFamily: `'${st.font}', serif`, '--d': `${0.25 + i * 0.12}s`, '--r': `${(i % 2 ? 1 : -1) * (2 + (i % 3))}deg` }}>{ch}</span>
        })}
      </h1>
      <svg className="mem-string" viewBox="0 0 960 600" aria-hidden="true"><path d="M-10 200Q480 262 970 200" fill="none" stroke="#b5372c" strokeWidth="4" /></svg>
      {photos.map((src, i) => (
        <div key={i} className="mem-photo" style={{ left: X[i % 5], '--r': `${i % 2 ? 4 : -4}deg`, '--d': `${1.1 + i * 0.25}s`, top: i % 2 ? 252 : 238 }}>
          <Clothespin />
          <div className="mem-frame"><div className="mem-inner"><SmartImage src={src} alt={`Memory ${i + 1}`} className="mem-img" /></div></div>
          {i % 2 === 0 && <Bow style={{ position: 'absolute', left: -14, top: 90, width: 46 }} />}
        </div>
      ))}
      <Star style={{ position: 'absolute', left: 120, top: 500, width: 70 }} />
      <Camera style={{ position: 'absolute', left: 30, top: 515, width: 90 }} />
      <ArrowButton onClick={onDone} />
    </Page>
  )
}
