import content from '../data/birthdayContent'
import Page from './Page'
import ArcText from './ArcText'
import Typed from './Typed'
import Gift from './Gift'

const POS = [
  { x: 270, y: 215, r: -4 }, { x: 465, y: 185, r: 3 }, { x: 655, y: 215, r: -2 },
  { x: 365, y: 375, r: 3 }, { x: 555, y: 370, r: -3 },
]

export default function GiftHub({ opened, onOpen }) {
  return (
    <Page>
      <ArcText id="giftArc" text={content.gifts.title} path="M 70 250 Q 470 40 900 180" size={42} speed={45} />
      <p className="gift-cta"><Typed text={content.gifts.cta} delay={1500} speed={70} /></p>
      {POS.map((p, i) => (
        <button
          key={i}
          className={`gift-hit ${opened.includes(i) ? 'opened' : ''}`}
          style={{ left: p.x, top: p.y, '--r': `${p.r}deg`, '--d': `${0.5 + i * 0.12}s` }}
          onClick={() => onOpen(i)}
          aria-label={`Open gift ${i + 1}`}
        >
          <Gift tone={i} />
        </button>
      ))}
    </Page>
  )
}
