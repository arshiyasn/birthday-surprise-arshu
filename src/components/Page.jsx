import { Gingham, Blob } from './Decor'

// A full-stage page. variant: 'light' (pale paper + gingham edges) or 'orange'.
export default function Page({ variant = 'light', blob = false, edges = true, className = '', children }) {
  return (
    <div className={`page page-${variant} ${className}`}>
      {variant === 'light' && edges && <><Gingham className="edge-l" /><Gingham className="edge-r" /></>}
      {blob && <Blob />}
      {children}
    </div>
  )
}

export function ArrowButton({ onClick, label = 'Back to gifts', className = '' }) {
  return (
    <button className={`arrow-btn ${className}`} onClick={onClick} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M5 12h13M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
  )
}
