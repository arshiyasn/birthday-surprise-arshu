import { useCallback, useEffect, useRef, useState } from 'react'
import content from './data/birthdayContent'
import Stage from './components/Stage'
import MusicButton from './components/MusicButton'
import PasswordScreen from './components/PasswordScreen'
import WrongScreen from './components/WrongScreen'
import QuestionScreen from './components/QuestionScreen'
import GiftHub from './components/GiftHub'
import BirthdayPage from './components/BirthdayPage'
import WishPage from './components/WishPage'
import MemoriesPage from './components/MemoriesPage'
import LetterPage from './components/LetterPage'
import FramePage from './components/FramePage'
import CollagePage from './components/CollagePage'
import FinalPage from './components/FinalPage'

// Gift number -> the page it opens (left to right, top row then bottom row)
const GIFT_PAGES = ['birthday', 'wish', 'memories', 'letter', 'frame']

export default function App() {
  const [screen, setScreen] = useState('pass')
  const [opened, setOpened] = useState([])

  // ---- music: never autoplays; starts on the visitor's first tap ----
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)
  const userPaused = useRef(false)
  const tryPlay = useCallback(async () => {
    const a = audioRef.current
    if (!a || userPaused.current) return
    try { a.volume = content.music.volume ?? 0.6; await a.play(); setPlaying(true); return true } catch { return false /* blocked or missing */ }
  }, [])
  useEffect(() => {
    const first = async () => { if (await tryPlay()) { window.removeEventListener('pointerdown', first); window.removeEventListener('keydown', first) } }
    window.addEventListener('pointerdown', first)
    window.addEventListener('keydown', first)
    return () => { window.removeEventListener('pointerdown', first); window.removeEventListener('keydown', first) }
  }, [tryPlay])
  const toggleMusic = async () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { userPaused.current = true; a.pause(); setPlaying(false) }
    else { userPaused.current = false; await tryPlay() }
  }

  const toGifts = useCallback(() => setScreen('gifts'), [])
  const toCollage = useCallback(() => setScreen('collage'), [])
  const toFinal = useCallback(() => setScreen('final'), [])
  const openGift = (i) => { setOpened((o) => (o.includes(i) ? o : [...o, i])); setScreen(GIFT_PAGES[i]) }
  const replay = () => { setOpened([]); setScreen('pass') }

  let view
  switch (screen) {
    case 'pass': view = <PasswordScreen onCorrect={() => setScreen('see')} onWrong={() => setScreen('wrong')} />; break
    case 'wrong': view = <WrongScreen onRetry={() => setScreen('pass')} />; break
    case 'see': case 'angry': case 'excited':
      view = <QuestionScreen id={screen} q={content.questions[screen]} onChoose={(to) => setScreen(to)} />; break
    case 'gifts': view = <GiftHub opened={opened} onOpen={openGift} />; break
    case 'birthday': view = <BirthdayPage onDone={toGifts} />; break
    case 'wish': view = <WishPage onDone={toGifts} />; break
    case 'memories': view = <MemoriesPage onDone={toGifts} />; break
    case 'letter': view = <LetterPage onDone={toGifts} />; break
    case 'frame': view = <FramePage onDone={toCollage} />; break
    case 'collage': view = <CollagePage onDone={toFinal} />; break
    default: view = <FinalPage onGifts={toGifts} onReplay={replay} />
  }

  return (
    <>
      <audio ref={audioRef} src={import.meta.env.BASE_URL + content.music.src} loop preload="auto" onError={() => setMissing(true)} />
      <Stage><div className="screen" key={screen}>{view}</div></Stage>
      <MusicButton playing={playing} missing={missing} onToggle={toggleMusic} />
    </>
  )
}
