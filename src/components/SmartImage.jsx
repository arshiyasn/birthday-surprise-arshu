import { useState } from 'react'

// Loads a photo from /public. If the file is missing, shows a clear placeholder.
export default function SmartImage({ src, alt = '', className = '' }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className={`img-missing ${className}`} role="img" aria-label={`Missing photo: ${alt}`}>
        <b>Add photo</b><small>public/{src}</small>
      </div>
    )
  }
  const url = import.meta.env.BASE_URL + src.replace(/^\/+/, '')
  return <img className={className} src={url} alt={alt} draggable="false" onError={() => setFailed(true)} />
}
