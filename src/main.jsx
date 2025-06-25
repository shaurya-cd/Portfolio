import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import About from './components/About.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
)
