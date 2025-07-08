import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';


function Nav() {

    const { setShowProjects } = useContext(StoreContext);

    return (
        <>
            <div className="navCont">
                <div className="navLeft">
                    {/* <img src="#" className="logo" /> */}
                    <Link to="/"><div className="CompanyName"><img src="./DEVSCRESTLOGO.png" alt="" /></div></Link>
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