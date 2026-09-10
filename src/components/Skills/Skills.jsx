import { skills } from '../../data/skills.js';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';
import './Skills.css';

const groups = [
  { label: 'CMS', names: ['WordPress', 'WooCommerce', 'Elementor'] },
  { label: 'Frontend', names: ['HTML & CSS', 'JavaScript', 'Responsive Design'] },
  { label: 'Development', names: ['PHP', 'Theme Customization', 'Plugin Integration', 'Git & GitHub'] },
  { label: 'Optimization', names: ['Performance', 'SEO Basics'] },
];

const skillMap = new Map(skills.map(([label, Icon]) => [label, Icon]));

export function Skills() {
  return <section id="skills" className="section-shell section-block skills-section editorial-section"><div className="section-kicker"><span>02</span><p>Toolkit</p></div><div className="skills-editorial-intro"><div><p className="eyebrow">The tools behind the work</p><h2>Things I <em>work with.</em></h2></div><p>Enough range to take a site from a rough idea to a responsive, manageable WordPress build.</p></div><div className="skills-list">{groups.map((group) => <div className="skill-group gsap-reveal" key={group.label}><span className="skill-group-label">{group.label}</span><div className="skill-group-items">{group.names.map((label) => { const Icon = skillMap.get(label); return <div className="skill-row" key={label}><span>{label}</span>{Icon && <Icon size={17} strokeWidth={1.6} />}<small>↗</small></div>; })}</div></div>)}</div></section>;
}
