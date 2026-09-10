import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';
import './Projects.css';

export function Projects() {
  return <section id="projects" className="projects-section"><div className="section-shell section-block"><div className="section-kicker"><span>04</span><p>Selected work</p></div><div className="section-intro"><h2>Featured <em>Projects</em></h2><p>Concept projects for businesses that want a clearer digital presence.<br />These are placeholders for future client work.</p></div><div className="projects-grid">{projects.map((project, index) => <ScrollReveal key={project.title} delay={index * 100}><article className={`project-card ${project.tone}`}><div className="project-art"><img className="project-preview" src={project.image} alt={`${project.title} concept preview`} loading="lazy" /><div className="project-art-top"><span>{project.number}</span><ExternalLink size={18} /></div><span className="art-label">concept / {index + 1}</span></div><div className="project-details"><div><h3>{project.title}</h3><p>{project.description}</p><div className="tech-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><a href="#contact" className="project-link" aria-label={`Discuss ${project.title}`}><ArrowUpRight size={18} /></a></div></article></ScrollReveal>)}</div></div></section>;
}
