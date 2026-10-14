import { useLayoutEffect, useState } from 'react'

const W = 960, H = 600 // the design is drawn on a 960x600 landscape stage

// Scales the landscape stage to fit any screen. On a phone held upright it turns
// the stage sideways so it fills the screen.
export default function Stage({ children }) {
  const [t, setT] = useState({ s: 1, rotated: false })
  useLayoutEffect(() => {
    const fit = () => {
      const w = window.innerWidth, h = window.innerHeight
      const rotated = h > w && w < 800
      setT({ rotated, s: rotated ? Math.min(h / W, w / H) : Math.min(w / W, h / H) })
    }
    fit()
    window.addEventListener('resize', fit)
    window.addEventListener('orientationchange', fit)
    return () => { window.removeEventListener('resize', fit); window.removeEventListener('orientationchange', fit) }
  }, [])
  const transform = `translate(-50%, -50%) ${t.rotated ? 'rotate(90deg) ' : ''}scale(${t.s})`
  return (
    <div className="viewport">
      <div className="stage" style={{ width: W, height: H, transform }}>{children}</div>
    </div>
  )
}
