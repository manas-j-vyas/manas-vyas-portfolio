import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '../../data/navigation.js';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className={`navbar ${open ? 'menu-open' : ''}`}>
    <a className="brand" href="#home" onClick={close}><span>MV</span><strong>Manas Vyas</strong></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <a className="nav-cta" href="#contact">Let's Talk <ArrowUpRight size={15} /></a>
    <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item, index) => <a key={item.href} href={item.href} onClick={close}><span>0{index + 1}</span>{item.label}</a>)}</nav>
  </header>;
}
