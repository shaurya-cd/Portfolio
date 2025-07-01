import Spline from '@splinetool/react-spline';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useRef } from 'react';


export default function Hero() {


      const plinkRef = useRef()

        const menuClick = () => {
            if (plinkRef.current) {
            plinkRef.current.classList.toggle('show');

            gsap.from(plinkRef.current, {
                x: 10,
                duration: 0.4,
                ease: 'power2.out',
            });
            }
        };

        const closeClick = () => {
            if (plinkRef.current) {
            plinkRef.current.classList.toggle('show');
            }
        };


  return (
    <>

      <Nav />
      <div className="heroCont">
        <div className="model">
          <Spline scene="/scene3.splinecode" id='scene3'/>
        </div>

        <div className="info">

          <div className="title">
            <div className="txt1">Beyond the Screen</div>
            <div className="txt2">Digital Growth Engines for Real Businesses</div>
          </div>
          <div className="subtitle" style={{fontSize:'1.2rem'}}>
            We’re DevsCrest: From jaw-dropping portfolio sites to high-conversion tools like real-time
            chat, landing pages, and social campaigns, we turn browsers into loyal customers. Every
            solution is engineered to fill seats, boost orders, and scale your legacy—no fluff, just
            measurable results. <br />
            <b>Let’s architect your digital legacy together.</b>

          </div>

          <div className="interactions">
            
            <div className="menu" onClick={menuClick}><button className='reachUs' id='btn2'><Link to="/projects">See Projects</Link> </button></div>

                      <div className="ptlinks" ref={plinkRef}>
                        <div className="close" onClick={closeClick}><i class="ri-close-large-fill"></i></div>
                        <Link to='/w-projects'>Websites</Link>
                        <Link to='/v-projects'>Videos</Link>
                        <Link to='/branding'>Branding Solutions</Link>
                        <Link to='/d-projects'>Social Media Marketing</Link>
                    </div>

          </div>

        </div>
      </div></>
  )
}
