import { Volume2, VolumeX } from 'lucide-react'

export default function MusicButton({ playing, missing, onToggle }) {
  return (
    <button
      className={`music-btn ${playing ? 'on' : ''}`}
      onClick={onToggle}
      aria-pressed={playing}
      aria-label={missing ? 'Music file not found' : playing ? 'Pause music' : 'Play music'}
      title={missing ? 'Add public/audio/deema.mp3' : 'Music'}
    >
      {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  )
}
