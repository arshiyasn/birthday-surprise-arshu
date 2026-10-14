import { useEffect, useState } from 'react'

export const prefersReduced = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Types text out one character at a time (the video's headline effect)
export function useTyped(text, speed = 55, delay = 250) {
  const [n, setN] = useState(prefersReduced() ? text.length : 0)
  useEffect(() => {
    if (prefersReduced()) { setN(text.length); return }
    setN(0)
    let i = 0, iv
    const t = setTimeout(() => {
      iv = setInterval(() => { i += 1; setN(i); if (i >= text.length) clearInterval(iv) }, speed)
    }, delay)
    return () => { clearTimeout(t); clearInterval(iv) }
  }, [text, speed, delay])
  return text.slice(0, n)
}
