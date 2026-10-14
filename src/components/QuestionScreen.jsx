import Page from './Page'
import ArcText from './ArcText'
import Typed from './Typed'
import Kid from './Kid'

export default function QuestionScreen({ id, q, onChoose }) {
  const withSub = !!q.sub
  return (
    <Page>
      <ArcText id={`arc-${id}`} text={q.arc} size={id === 'angry' ? 54 : 46} />
      <Kid pose={q.pose} face={q.face} className={`q-char ${withSub ? 'with-sub' : ''} ${id === 'angry' ? 'tumble-anim' : 'bob'}`} />
      {withSub && <p className="q-sub"><Typed text={q.sub} delay={1700} speed={50} /></p>}
      <div className="q-buttons fade-in-late">
        {q.buttons.map((b, i) => (
          <button key={i} className="pill" onClick={() => onChoose(b.to)}>{b.label}</button>
        ))}
      </div>
    </Page>
  )
}
