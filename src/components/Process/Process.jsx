import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';

const steps = [['Understand', 'Start with the goal, audience, and the real problem to solve.'], ['Plan', 'Shape the structure, content flow, and a clear direction together.'], ['Build', 'Turn the approved direction into a responsive WordPress experience.'], ['Test', 'Check the details across devices, browsers, and real interactions.'], ['Launch', 'Hand over a polished website that is ready to grow.']];

export function Process() {
  return <section className="section-shell section-block process-section"><div className="section-kicker"><span>05</span><p>My process</p></div><div className="process-grid"><div><h2>How I <em>work</em></h2><p className="body-copy">A straightforward process keeps the work collaborative, focused, and moving.</p></div><div className="timeline">{steps.map(([title, text], index) => <ScrollReveal key={title} delay={index * 70}><div className="timeline-item"><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div></ScrollReveal>)}</div></div></section>;
}
