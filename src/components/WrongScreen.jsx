import content from '../data/birthdayContent'
import Page from './Page'
import ArcText from './ArcText'
import Kid from './Kid'

export default function WrongScreen({ onRetry }) {
  return (
    <Page>
      <ArcText id="wrongArc" text={content.wrong.text} path="M 190 250 Q 480 60 800 230" size={58} speed={70} />
      <Kid pose="sign" face="sad" className="q-char wobble" />
      <button className="pill pill-bottom" onClick={onRetry}>{content.wrong.button}</button>
    </Page>
  )
}
