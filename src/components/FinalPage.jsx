import { RotateCcw } from 'lucide-react'
import content from '../data/birthdayContent'
import Page, { ArrowButton } from './Page'
import Typed from './Typed'
import Kid from './Kid'

export default function FinalPage({ onGifts, onReplay }) {
  return (
    <Page blob className="final-page">
      <p className="final-text"><Typed text={content.final.text} delay={500} speed={55} /></p>
      <Kid pose="bust" face="happy" className="corner-kid" />
      <button className="replay-btn" onClick={onReplay} aria-label="Replay from the start"><RotateCcw size={18} /> Replay</button>
      <ArrowButton onClick={onGifts} />
    </Page>
  )
}
