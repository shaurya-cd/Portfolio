import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';


function Nav() {

    const { setShowProjects } = useContext(StoreContext);

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
            <div className="navCont">
                <div className="navLeft">
                    {/* <img src="#" className="logo" /> */}
                    <Link to="/"><div className="CompanyName">DevsCrest</div></Link>
                </div>
                <div className="navRight">
                    <Link className="link" to="/">Home</Link>
                    <Link className='link' to="/about">About Us</Link>

                    <div className="menu" onClick={()=>setShowProjects(true)}>Projects</div>


                    <button className='reachUs' id='btn1'><Link to="/contact">Reach Us</Link></button>
                </div>
            </div>
            {/* <hr /> */}
        </>
    )
}

export default Nav