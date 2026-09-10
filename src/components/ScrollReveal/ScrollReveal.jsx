import { useScrollReveal } from '../../hooks/useScrollReveal.js';

export function ScrollReveal({ children, className = '', delay = 0, animation = 'fade-up' }) {
  const [ref, visible] = useScrollReveal();
  return <div ref={ref} className={`reveal ${animation} ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}
