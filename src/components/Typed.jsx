import { useTyped } from './useTyped'

export default function Typed({ text, speed = 55, delay = 250, className = '', style }) {
  const shown = useTyped(text, speed, delay)
  return (
    <span className={className} style={style} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
    </span>
  )
}
