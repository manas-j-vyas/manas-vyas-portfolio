import { ArrowDownRight } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';
import './Position.css';

export function Position() {
  return <section id="position" className="position-section section-shell section-block"><div className="section-kicker"><span>01</span><p>What I build</p></div><div className="position-grid"><ScrollReveal><h2>Websites should not need <em>explaining.</em></h2></ScrollReveal><ScrollReveal animation="fade-left" delay={120}><div className="position-copy"><p>I build WordPress websites that are clear for visitors and manageable for the people running them.</p><p>That means useful structure, responsive implementation, and a site that still feels good to use after launch.</p><a href="#projects" className="position-link">See the work <ArrowDownRight size={17} /></a></div></ScrollReveal></div><div className="position-rule"><span>MANAS VYAS</span><span>WORDPRESS / ELEMENTOR / PHP / JAVASCRIPT</span><span>NALLASOPARA / MUMBAI</span></div></section>;
}
