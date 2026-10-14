import { useTyped } from './useTyped'

// Curved headline that types itself along an SVG path
export default function ArcText({ id, text, path = 'M 150 235 Q 480 70 810 215', size = 46, speed = 60, delay = 300, className = '' }) {
  const shown = useTyped(text, speed, delay)
  const rest = text.slice(shown.length)
  return (
    <svg className={`arc ${className}`} viewBox="0 0 960 600" role="img" aria-label={text}>
      <defs><path id={id} d={path} /></defs>
      <text className="arc-text" fontSize={size} textAnchor="middle">
        <textPath href={`#${id}`} startOffset="50%">
          {shown}<tspan fillOpacity="0">{rest}</tspan>
        </textPath>
      </text>
    </svg>
  )
}
