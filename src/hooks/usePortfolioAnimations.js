import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export function usePortfolioAnimations(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray('.gsap-section');
      const revealTargets = gsap.utils.toArray('.gsap-reveal, .about-section .reveal, .contact-section .reveal');
      const heroTargets = gsap.utils.toArray('.hero .reveal');

      if (reducedMotion) {
        gsap.set([...sections, ...revealTargets, ...heroTargets], { clearProps: 'all', opacity: 1, y: 0, x: 0, scale: 1 });
        return;
      }

      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTimeline
        .fromTo('.hero', { opacity: 0 }, { opacity: 1, duration: .35 })
        .fromTo('.hero .eyebrow', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .45 }, '-=.1')
        .fromTo('.hero h1', { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: .65 }, '-=.28')
        .fromTo('.hero-description', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .45 }, '-=.3')
        .fromTo('.hero-actions', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .4 }, '-=.2')
        .fromTo('.hero-visual-wrap', { opacity: 0, scale: .94, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: .7 }, '-=.35')
        .fromTo('.hero-location', { opacity: 0 }, { opacity: 1, duration: .35 }, '-=.2');

      revealTargets.forEach((target) => {
        gsap.fromTo(target, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: target, start: 'top 84%', once: true } });
      });

      gsap.utils.toArray('.skills-grid, .services-grid, .projects-grid, .highlight-grid, .timeline').forEach((group) => {
        const cards = group.children;
        gsap.fromTo(cards, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .55, stagger: .08, ease: 'power2.out', scrollTrigger: { trigger: group, start: 'top 82%', once: true } });
      });

      gsap.utils.toArray('.project-preview').forEach((image) => {
        gsap.fromTo(image, { scale: 1.08, yPercent: -2 }, { scale: 1, yPercent: 2, ease: 'none', scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      gsap.to('.scroll-progress', { scaleX: 1, ease: 'none', scrollTrigger: { scrub: .25, start: 0, end: 'max' } });
      ScrollTrigger.create({ start: 'top -20', end: 'max', onUpdate: (self) => root.querySelector('.navbar')?.classList.toggle('is-scrolled', self.scroll() > 20) });
    }, root);
    return () => context.revert();
  }, [rootRef]);
}
