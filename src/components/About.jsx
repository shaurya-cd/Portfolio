import React from 'react'
import Nav from './Nav'
import Spline from '@splinetool/react-spline';

function About() {
  
  return (
    <>
        <Nav />
        <div className='about-us'>
          <Spline scene="/scene4.splinecode" id='scene4' />
        </div>
    </>
  )
}

export default About