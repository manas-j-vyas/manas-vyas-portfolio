import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';
import './Process.css';

const steps = [['Understand', 'Start with the goal, audience, and the real problem to solve.'], ['Plan', 'Shape the structure, content flow, and a clear direction together.'], ['Build', 'Turn the approved direction into a responsive WordPress experience.'], ['Test', 'Check the details across devices, browsers, and real interactions.'], ['Launch', 'Hand over a polished website that is ready to grow.']];
const principles = ['Responsive', 'Clean', 'Fast', 'Maintainable'];

export function Process() {
  return <section className="section-shell section-block process-section"><div className="section-kicker"><span>06</span><p>How I work</p></div><div className="process-grid"><div><p className="eyebrow">A clear path from idea to launch</p><h2>Good work has a <em>rhythm.</em></h2><p className="body-copy">I keep the process collaborative and practical: understand the problem, make a plan, build carefully, then test the details.</p></div><div className="timeline">{steps.map(([title, text], index) => <ScrollReveal key={title} delay={index * 70}><div className="timeline-item"><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={17} /></div></ScrollReveal>)}</div></div><div className="why-section"><div className="quality-heading"><div className="section-kicker"><span>07</span><p>Performance / quality</p></div><h2>Good websites should be easy to use, easy to manage, and built for the people who actually use them.</h2></div><div className="principles-list">{principles.map((principle, index) => <span className="principle-item" key={principle}><b>0{index + 1}</b>{principle}</span>)}</div></div></section>;
}
