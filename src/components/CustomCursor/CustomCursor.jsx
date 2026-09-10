import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

export function CustomCursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    const canUseCursor = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches;
    if (!cursor || !canUseCursor) return undefined;
    const dot = cursor.querySelector('.cursor-dot');
    const ring = cursor.querySelector('.cursor-ring');
    const moveX = gsap.quickTo(cursor, 'x', { duration: .18, ease: 'power3' });
    const moveY = gsap.quickTo(cursor, 'y', { duration: .18, ease: 'power3' });
    const onMove = (event) => { moveX(event.clientX); moveY(event.clientY); };
    const onOver = (event) => {
      const target = event.target.closest('a, button, input, textarea, .project-card');
      if (!target) return;
      cursor.classList.remove('cursor-link', 'cursor-project');
      cursor.classList.add(target.matches('.project-card') ? 'cursor-project' : 'cursor-link');
      gsap.to(ring, { scale: target.matches('.project-card') ? 2 : 1.45, duration: .25, overwrite: true });
      gsap.to(dot, { scale: .6, duration: .25, overwrite: true });
    };
    const onOut = (event) => { if (event.relatedTarget?.closest?.('a, button, input, textarea, .project-card')) return; cursor.classList.remove('cursor-link', 'cursor-project'); gsap.to(ring, { scale: 1, duration: .25, overwrite: true }); gsap.to(dot, { scale: 1, duration: .25, overwrite: true }); };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    return () => { window.removeEventListener('pointermove', onMove); document.removeEventListener('pointerover', onOver); document.removeEventListener('pointerout', onOut); };
  }, []);
  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span className="cursor-dot" /><span className="cursor-ring" /></div>;
}
