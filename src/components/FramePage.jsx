import { useEffect, useState } from 'react'
import content from '../data/birthdayContent'
import Page, { ArrowButton } from './Page'
import SmartImage from './SmartImage'
import Typed from './Typed'
import Kid from './Kid'

export default function FramePage({ onDone }) {
  const { title, photos, secondsPerPhoto } = content.frame
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => { if (i + 1 < photos.length) setI(i + 1); else onDone() }, secondsPerPhoto * 1000 + (i === 0 ? 1400 : 0))
    return () => clearTimeout(t)
  }, [i, photos.length, secondsPerPhoto, onDone])
  const next = () => (i + 1 < photos.length ? setI(i + 1) : onDone())
  return (
    <Page blob className="frame-page">
      <h1 className="frame-title"><Typed text={title} delay={400} speed={80} /></h1>
      <button className="frame-photo" onClick={next} aria-label="Next photo">
        <SmartImage key={i} src={photos[i]} alt={`Photo ${i + 1}`} className="frame-img frame-swap" />
      </button>
      <Kid pose="bust" face="happy" className="corner-kid" />
      <ArrowButton onClick={onDone} label="Skip" />
    </Page>
  )
}
