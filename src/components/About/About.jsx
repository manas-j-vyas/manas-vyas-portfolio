import { MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';

const highlights = ['Responsive Development', 'WordPress Development', 'Modern UI', 'Performance Focused'];

export function About() {
  return <section id="about" className="section-shell section-block about-section"><div className="section-kicker"><span>01</span><p>About me</p></div><div className="about-grid"><ScrollReveal><div><h2>I turn ideas into <em>useful</em> websites.</h2><p className="body-copy">I'm a WordPress Developer focused on building modern, responsive, and user-friendly websites. I enjoy turning ideas and designs into functional websites with clean layouts, smooth interactions, and a strong focus on usability and performance.</p><div className="about-place"><MapPin size={18} /><span>Nallasopara, Mumbai, Maharashtra, India</span></div></div></ScrollReveal><ScrollReveal animation="fade-left" delay={140}><div className="about-card"><div className="card-grid" /><Terminal size={24} /><span className="card-code">&lt;build /&gt;</span><strong>Thoughtful code.<br />Clear outcomes.</strong><small>Always learning. Always improving.</small></div></ScrollReveal></div><div className="highlight-grid">{highlights.map((item, index) => <ScrollReveal key={item} delay={index * 70}><div className="highlight"><span>0{index + 1}</span><CheckCircle2 size={16} /><strong>{item}</strong></div></ScrollReveal>)}</div></section>;
}
