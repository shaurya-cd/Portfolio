import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';

function Nav2() {

    const {setShowProjects} = useContext(StoreContext);

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
                    
                    <div className="menu" onClick={()=>setShowProjects(true)}>Projects</div>


                    <button className='reachUs' id='btn1'><Link to="/contact">Reach Us</Link></button>
                </div>
            </div>
        </>
    )
}

export default Nav2