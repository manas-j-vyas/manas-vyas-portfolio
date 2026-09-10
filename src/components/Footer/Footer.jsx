import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { navigation } from '../../data/navigation.js';

export function Footer() {
  return <footer className="footer"><div className="section-shell"><div className="footer-top"><div><a className="brand footer-brand" href="#home"><span>MV</span><strong>Manas Vyas</strong></a><p>WordPress Developer</p></div><div className="footer-contact"><a href="mailto:manavvyas0205@gmail.com"><Mail size={15} /> manavvyas0205@gmail.com</a><a href="tel:9484646252"><Phone size={15} /> 9484646252</a><span><MapPin size={15} /> Mumbai, India</span></div><nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div><div className="footer-bottom"><span>© 2026 Manas Vyas. All rights reserved.</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div></div></footer>;
}
