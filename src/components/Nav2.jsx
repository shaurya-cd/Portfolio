import { Link } from 'react-router-dom';

function Nav2() {
    return (
        <>
            <div className="navCont-project">
                <div className="navLeft">
                    {/* <img src="#" className="logo" /> */}
                    <div className="CompanyName"><Link to="/">DevsCrest</Link></div>
                </div>
                <div className="navRight">
                    <Link className="link" to="/">Home</Link>
                    <Link className='link' to="/about">About Us</Link>
                    <Link className='link' to="/projects">Projects</Link>    
                    <button className='reachUs' id='btn1'><Link to="/contact">Reach Us</Link></button>
                </div>
            </div>
            {/* <hr /> */}
        </>
    )
}

export default Nav2