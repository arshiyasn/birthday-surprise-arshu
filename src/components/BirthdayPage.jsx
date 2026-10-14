import { useEffect } from 'react'
import content from '../data/birthdayContent'
import Page, { ArrowButton } from './Page'
import SmartImage from './SmartImage'
import Typed from './Typed'
import Kid from './Kid'
import { Sparkle } from './Decor'

export default function BirthdayPage({ onDone }) {
  const b = content.birthday
  useEffect(() => {
    const s = content.autoReturnSeconds.birthday
    if (!s) return
    const t = setTimeout(onDone, s * 1000)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <Page blob className="bday-page">
      <div className="bday-text">
        <p className="bday-happy"><Typed text={b.happy} delay={500} speed={90} /><Sparkle className="sp-a" /></p>
        <h1 className="bday-word slide-in-left">{b.word}</h1>
        <p className="bday-line fade-in-late">{b.line}</p>
        <div className="ribbon pop-late">{content.name}</div>
      </div>
      <div className="polaroid-wrap swing-in">
        <div className="polaroid-back" />
        <div className="polaroid">
          <span className="clip" />
          <SmartImage src={b.photo} alt="Birthday photo" className="polaroid-img" />
        </div>
      </div>
      <Kid pose="bust" face="happy" className="corner-kid" />
      <Sparkle className="sp-b" /><Sparkle className="sp-c" />
      <ArrowButton onClick={onDone} />
    </Page>
  )
}
