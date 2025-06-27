import React from 'react'
import Nav from './Nav'
import Spline from '@splinetool/react-spline';

function About() {
  
  return (
    <>
        <Nav />
        <div className='about-us'>
          <div className="model-cont">
            <Spline scene="/scene4.splinecode" id='scene4' />
          </div>

            <div className="info1">

          <div className="title1">
            <div className="txt3">At DevsCrest, Businesses Meet Digital Excellence.</div>
          </div>
          <div className="subtitle" style={{fontSize:'1rem'}}>
            We exist to give ambitious local businesses the unfair advantage. By merging immersive 3D
            storytelling with lean, scalable tech, we help you outshine competitors, captivate audiences,
            and drive real revenue—whether you’re a neighborhood restaurant or a growing gym or any
            business.
          <div className="ques">
            <h1>Who We Are:</h1>
            A tight-knit squad of student entrepreneurs from India’s premier institutions. We saw local
            brands struggle with generic websites and invisible social presence—so we built DevsCrest.
            Here, academic rigor meets street-smart strategy: we work faster, dig deeper into local
            markets, and obsess over your ROI because your success is our reputation.
          </div>
          <div className="ques">
            <h1>Why Choose Us:</h1>
            <ul className="about-cont-list">
              <li>Student-Driven Agility: Fresh ideas, academic-edge tools, lower costs.</li>
              <li>Industry-Specific Expertise: 50+ restaurant/gym projects with proven results.</li>
              <li>All-in-One Growth Stack: From branding to real-time chat—no patchwork solutions.</li>
              <li>Zero-Risk Start: Free audit with a 1-page growth roadmap before you commit.</li>
            </ul>
          </div>
          <br />
            <b style={{fontSize:'2rem',fontWeight:'900'}}>Let’s build more than a website—let’s build your digital dominance</b>
          </div>

          </div>
        </div>
    </>
  )
}

export default About