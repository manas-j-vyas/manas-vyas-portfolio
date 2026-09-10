import { skills } from '../../data/skills.js';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';

export function Skills() {
  return <section id="skills" className="section-shell section-block skills-section"><div className="section-kicker"><span>02</span><p>Toolkit</p></div><div className="section-intro"><h2>My <em>skills</em></h2><p>Practical tools and a thoughtful process for building websites that last.</p></div><div className="skills-grid">{skills.map(([label, Icon], index) => <ScrollReveal key={label} delay={(index % 6) * 45}><div className="skill-item"><Icon size={19} strokeWidth={1.7} /><span>{label}</span><small>↗</small></div></ScrollReveal>)}</div></section>;
}
