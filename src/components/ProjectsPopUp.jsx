import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';

function ProjectsPopUp() {

    const { setShowProjects } = useContext(StoreContext);

  return (
    <div>
        <div className="show">
            <div className="close" onClick={()=>setShowProjects(false)}><i class="ri-close-large-fill"></i></div>
            <Link to='/w-projects'>Websites</Link>
            <Link to='/v-projects'>Videos</Link>
            <Link to='/branding'>Branding Solutions</Link>
            <Link to='/d-projects'>Social Media Marketing</Link>
        </div>
    </div>
  )
}

export default ProjectsPopUp