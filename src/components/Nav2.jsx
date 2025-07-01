import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Nav2() {

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
            <div className="navCont-project">
                <div className="navLeft">
                    {/* <img src="#" className="logo" /> */}
                    <Link to="/"><div className="CompanyName">DevsCrest</div></Link>
                </div>
                <div className="navRight">
                    <Link className="link" to="/">Home</Link>
                    <Link className='link' to="/about">About Us</Link>
                    
                    <div className="menu" onClick={menuClick}>Projects</div>

                    <div className="ptlinks" ref={plinkRef}>
                        <div className="close" onClick={closeClick}><i class="ri-close-large-fill"></i></div>
                        <Link to='/w-projects'>Websites</Link>
                        <Link to='/v-projects'>Videos</Link>
                        <Link to='/branding'>Branding Solutions</Link>
                        <Link to='/d-projects'>Social Media Marketing</Link>
                    </div>

                    <button className='reachUs' id='btn1'><Link to="/contact">Reach Us</Link></button>
                </div>
            </div>
        </>
    )
}

export default Nav2