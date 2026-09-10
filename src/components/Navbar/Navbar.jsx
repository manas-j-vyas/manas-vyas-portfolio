import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { navigation } from '../../data/navigation.js';
import './Navbar.css';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const close = () => setOpen(false);
  useEffect(() => {
    if (!mobileNavRef.current || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
    const context = gsap.context(() => {
      gsap.to(mobileNavRef.current, { yPercent: open ? 0 : -140, duration: .4, ease: 'power3.out', overwrite: true });
      if (open) gsap.fromTo(mobileNavRef.current.querySelectorAll('a'), { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: .3, stagger: .05, delay: .08, ease: 'power2.out' });
    }, mobileNavRef);
    return () => context.revert();
  }, [open]);
  return <header className={`navbar ${open ? 'menu-open' : ''}`}>
    <a className="brand" href="#home" onClick={close}><span>MV</span><strong>Manas Vyas</strong></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <a key={item.href} href={item.href}><span>{item.number}</span> {item.label}</a>)}</nav>
    <a className="nav-cta" href="#contact">Let's Talk <ArrowUpRight size={15} /></a>
    <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav ref={mobileNavRef} className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item) => <a key={item.href} href={item.href} onClick={close}><span>{item.number}</span>{item.label}</a>)}</nav>
  </header>;
}
