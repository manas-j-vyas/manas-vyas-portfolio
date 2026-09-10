import { ArrowDownRight, ArrowUpRight, Braces, Database, Globe, Terminal } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';

export function Hero() {
  return <section id="home" className="hero section-shell">
    <div className="hero-copy">
      <ScrollReveal><p className="eyebrow"><span className="eyebrow-dot" /> WordPress Developer <span className="eyebrow-line" /></p></ScrollReveal>
      <ScrollReveal delay={100}><h1>Hi, I'm<br /><em>Manas Vyas</em></h1></ScrollReveal>
      <ScrollReveal delay={180}><p className="hero-description">I build modern, responsive, user-friendly WordPress websites that help businesses create a strong online presence.</p></ScrollReveal>
      <ScrollReveal delay={260}><div className="hero-actions"><a className="button button-primary" href="#projects">View My Work <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#contact">Contact Me <ArrowDownRight size={17} /></a></div></ScrollReveal>
      <ScrollReveal delay={340}><div className="hero-location"><span>Based in</span><strong>Nallasopara, Mumbai</strong><i>Available for select projects</i></div></ScrollReveal>
    </div>
    <ScrollReveal animation="scale" delay={220} className="hero-visual-wrap"><div className="code-window" aria-label="Developer code visual">
      <div className="window-bar"><span /><span /><span /><small>manas-portfolio / index.jsx</small></div>
      <div className="code-content"><div className="code-line muted">01&nbsp; <span>import</span> <b>Website</b> <span>from</span> <i>'./future'</i></div><div className="code-line">02&nbsp; <span>const</span> <b>experience</b> = {'{'}</div><div className="code-line indent">03&nbsp; <strong>clean:</strong> <i>true</i>,</div><div className="code-line indent">04&nbsp; <strong>responsive:</strong> <i>true</i>,</div><div className="code-line indent">05&nbsp; <strong>madeFor:</strong> <i>'people'</i>,</div><div className="code-line">06&nbsp; {'}'}</div><div className="code-line accent">07&nbsp; <span>export default</span> experience</div><div className="cursor-line">_</div></div>
      <div className="code-status"><span><Globe size={13} /> localhost:3000</span><span><Database size={13} /> ready</span></div>
      <div className="visual-badge"><Braces size={16} /><span>WP<br /><b>DEV</b></span></div>
    </div></ScrollReveal>
  </section>;
}
