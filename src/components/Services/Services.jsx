import { services } from '../../data/services.js';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';

export function Services() {
  return <section id="services" className="section-shell section-block services-section"><div className="section-kicker"><span>03</span><p>What I do</p></div><div className="section-intro"><h2>What I can <em>do</em></h2><p>From first idea to final launch, I build digital experiences with care.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text }, index) => <ScrollReveal key={title} delay={(index % 4) * 70}><article className="service-card"><div className="service-icon"><Icon size={21} /></div><span className="service-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Ask about ${title}`}>Learn more <span>↗</span></a></article></ScrollReveal>)}</div></section>;
}
