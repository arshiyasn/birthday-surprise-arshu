import { useEffect, useRef, useState } from 'react'
import content from '../data/birthdayContent'
import Page from './Page'
import { GoldHeart, TornPaper } from './Decor'
import Kid from './Kid'

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']

export default function PasswordScreen({ onCorrect, onWrong }) {
  const len = content.passcode.length
  const [value, setValue] = useState('')
  const [busy, setBusy] = useState(false)
  const [pressed, setPressed] = useState(null)
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])

  const press = (k) => {
    if (busy || value.length >= len) return
    const v = value + k
    setValue(v)
    setPressed(k)
    setTimeout(() => setPressed(null), 140)
    if (v.length === len) {
      setBusy(true)
      timer.current = setTimeout(() => {
        if (v === content.passcode) onCorrect(); else onWrong()
      }, 420)
    }
  }

  const ref = useRef(press)
  ref.current = press
  useEffect(() => {
    const onKey = (e) => {
      if (/^[0-9*#]$/.test(e.key)) ref.current(e.key)
      else if (e.key === 'Backspace') setValue((v) => (busy ? v : v.slice(0, -1)))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [busy])

  return (
    <Page variant="orange" className="pass-page">
      <TornPaper />
      <div className="pass-heart enter-left">
        <GoldHeart><Kid pose="cake" face="happy" /></GoldHeart>
      </div>
      <div className="pass-pad enter-right">
        <p className="pass-label">{content.password.label}</p>
        <div className="pass-boxes" role="group" aria-label={`Passcode, ${value.length} of ${len} entered`}>
          {Array.from({ length: len }).map((_, i) => (
            <span key={i} className={`pass-box ${i < value.length ? 'filled' : ''}`}>{value[i] || ''}</span>
          ))}
        </div>
        <div className="keypad">
          {KEYS.map((k) => (
            <button key={k} className={`key ${pressed === k ? 'down' : ''}`} onClick={() => press(k)} aria-label={`Key ${k}`}>{k}</button>
          ))}
        </div>
      </div>
    </Page>
  )
}
