import { useEffect } from 'react'
import content from '../data/birthdayContent'
import SmartImage from './SmartImage'
import { ArrowButton } from './Page'

export default function CollagePage({ onDone }) {
  const { text, photos, seconds } = content.collage
  useEffect(() => {
    const t = setTimeout(onDone, seconds * 1000)
    return () => clearTimeout(t)
  }, [onDone, seconds])
  return (
    <div className="page collage-page">
      <div className="collage-grid">
        {photos.slice(0, 6).map((src, i) => (
          <div key={i} className="collage-cell" style={{ '--d': `${i * 0.12}s` }}><SmartImage src={src} alt={`Collage photo ${i + 1}`} className="collage-img" /></div>
        ))}
      </div>
      <p className="collage-text">{text}</p>
      <div className="collage-bar" />
      <ArrowButton onClick={onDone} label="Next" />
    </div>
  )
}
