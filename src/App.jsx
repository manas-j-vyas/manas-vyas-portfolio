import { useRef } from 'react';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Position } from './components/Position/Position.jsx';
import { Marquee } from './components/Marquee/Marquee.jsx';
import { About } from './components/About/About.jsx';
import { Skills } from './components/Skills/Skills.jsx';
import { Services } from './components/Services/Services.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Process } from './components/Process/Process.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { SEO } from './components/SEO/SEO.jsx';
import { CustomCursor } from './components/CustomCursor/CustomCursor.jsx';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress.jsx';
import { usePortfolioAnimations } from './hooks/usePortfolioAnimations.js';

export default function App() {
  const rootRef = useRef(null);
  usePortfolioAnimations(rootRef);
  return <div ref={rootRef}><SEO /><ScrollProgress /><CustomCursor /><Navbar /><main><Hero /><Position /><Marquee /><About /><Skills /><Services /><Projects /><Process /><Contact /></main><Footer /></div>;
}
