import { useEffect, useRef } from 'react'
import content from '../data/birthdayContent'
import Page, { ArrowButton } from './Page'
import Kid from './Kid'
import { Gingham } from './Decor'

export default function LetterPage({ onDone }) {
  const l = content.letter
  const box = useRef(null)
  // Slowly scrolls the letter like the video; stops as soon as the visitor touches it.
  useEffect(() => {
    const el = box.current
    if (!el) return
    let raf, stopped = false, y = 0
    const stop = () => { stopped = true }
    el.addEventListener('wheel', stop, { passive: true })
    el.addEventListener('pointerdown', stop)
    el.addEventListener('touchstart', stop, { passive: true })
    const start = setTimeout(function tick() {
      if (stopped) return
      y += 0.35
      el.scrollTop = y
      if (el.scrollTop + el.clientHeight < el.scrollHeight - 1) raf = requestAnimationFrame(tick)
    }, 2500)
    return () => { clearTimeout(start); cancelAnimationFrame(raf); el.removeEventListener('wheel', stop); el.removeEventListener('pointerdown', stop); el.removeEventListener('touchstart', stop) }
  }, [])
  return (
    <Page edges={false} className="letter-page">
      <Gingham className="letter-strip" />
      <h1 className="letter-title fade-in">{l.title}<span className="letter-dot" /></h1>
      <div className="letter-box" ref={box} tabIndex={0} aria-label="Birthday letter">
        <p className="letter-greet">{l.greeting}</p>
        {l.body.map((p, i) => <p key={i}>{p}</p>)}
        <p className="letter-sign">{l.signoff} <span aria-hidden="true">{'\u2764'}</span></p>
      </div>
      <Kid pose="bust" face="happy" className="corner-kid letter-kid" />
      <ArrowButton onClick={onDone} />
    </Page>
  )
}
