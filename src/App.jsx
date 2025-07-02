import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import About from './components/About.jsx';
import V_Projects from './components/V_Projects.jsx';
import Branding from './components/Branding.jsx';
import D_projects from './components/D_projects.jsx';
import ProjectsPopUp from './components/ProjectsPopUp.jsx';
import { StoreContext } from './context/StoreContext.jsx';

function App() {

        const {showProjects,setShowProjects} = useContext(StoreContext);

  return (
    <div>
        {showProjects?<ProjectsPopUp setShowProjects={setShowProjects}/>:<></>}
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/w-projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/v-projects" element={<V_Projects />} />
            <Route path="/d-projects" element={<D_projects />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="*" element={<Error />} />
        </Routes>

    </div>
  )
}

export default App