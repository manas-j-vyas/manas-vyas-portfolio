import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { About } from './components/About/About.jsx';
import { Skills } from './components/Skills/Skills.jsx';
import { Services } from './components/Services/Services.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Process } from './components/Process/Process.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Footer } from './components/Footer/Footer.jsx';

export default function App() {
  return <><Navbar /><main><Hero /><About /><Skills /><Services /><Projects /><Process /><Contact /></main><Footer /></>;
}
