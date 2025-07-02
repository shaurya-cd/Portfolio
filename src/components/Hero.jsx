import Spline from '@splinetool/react-spline';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';

export default function Hero() {


      const { setShowProjects } = useContext(StoreContext);

      const plinkRef = useRef()

      

  return (
    <>

      <Nav/>
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
            
            <div className="menu" onClick={()=>setShowProjects(true)}><button className='reachUs' id='btn2'>See Projects</button></div>

          </div>

        </div>
      </div></>
  )
}
