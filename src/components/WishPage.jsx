import { useEffect } from 'react'
import content from '../data/birthdayContent'
import Page, { ArrowButton } from './Page'
import Typed from './Typed'
import Kid from './Kid'
import { Cake, Balloons, Squiggles } from './Decor'

export default function WishPage({ onDone }) {
  useEffect(() => {
    const s = content.autoReturnSeconds.wish
    if (!s) return
    const t = setTimeout(onDone, s * 1000)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <Page blob className="wish-page">
      <h1 className="wish-title"><Typed text={content.wish.title} delay={500} speed={110} /></h1>
      <div className="cake-wrap rise-in"><Cake /></div>
      <p className="wish-side fade-in-late">{content.wish.side}</p>
      <Squiggles />
      <Balloons />
      <Kid pose="bust" face="happy" className="corner-kid" />
      <ArrowButton onClick={onDone} />
    </Page>
  )
}
