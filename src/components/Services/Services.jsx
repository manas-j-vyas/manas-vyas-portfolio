import { ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services.js';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';
import './Services.css';

export function Services() {
  return <section id="services" className="section-shell section-block services-section editorial-section"><div className="section-kicker"><span>03</span><p>What I do</p></div><div className="services-editorial-intro"><h2>Useful work,<br /><em>properly built.</em></h2><p>Whether it is a first website or a tired one that needs a reset, I keep the process clear and the result easy to live with.</p></div><div className="services-list">{services.map(({ title, text }, index) => <ScrollReveal key={title} delay={(index % 4) * 55}><a className="service-row" href="#contact"><span className="service-number">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={19} /></a></ScrollReveal>)}</div></section>;
}
