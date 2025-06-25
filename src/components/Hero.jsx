import Spline from '@splinetool/react-spline';
import Nav from './Nav';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <>

      <Nav />
      <div className="heroCont">
        <div className="model">
          {/* <Spline scene="/scene.splinecode" id='scene' /> */}
          <Spline scene="/scene3.splinecode" id='scene3' />
        </div>

        <div className="info">

          <div className="title">
            <div className="txt1">CREATIVE</div>
            <div className="txt2">PORTFOLIO</div>
          </div>
          <div className="subtitle">
            Welcome to DevsCrest — where innovation meets functionality.
            We specialize in crafting immersive 3D websites and powerful full-stack applications that help modern brands stand out in the digital world. Whether you're launching a new venture or scaling your digital capabilities, we turn bold ideas into seamless, high-performing web experiences.
            Let’s build something extraordinary together.
          </div>

          <div className="interactions">
            <button className='reachUs' id='btn2'><Link to="/projects">See Projects</Link> </button>
          </div>

        </div>
      </div></>
  )
}
