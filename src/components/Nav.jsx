import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <div className="navCont">
                <div className="navLeft">
                    {/* <img src="#" className="logo" /> */}
                    <div className="CompanyName"><Link to="/">DevsCrest</Link></div>
                </div>
                <div className="navRight">

                    <Link className='link' to="/projects">Projects</Link>    
                    <button className='reachUs' id='btn1'><Link to="/contact">Reach Us</Link></button>
                </div>
            </div>
            {/* <hr /> */}
        </>
    )
}

export default Nav