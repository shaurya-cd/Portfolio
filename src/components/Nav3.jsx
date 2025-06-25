import { Link } from 'react-router-dom';

function Nav3() {
    return (
        <>
            <div className="navCont2" style={{backgroundColor: "black"}}>
                <div className="navLeft">
                    {/* <img src="#" className="logo" /> */}
                    <div className="CompanyName"><Link to="/">DevsCrest</Link></div>
                </div>
                <div className="navRight" id='nav3right' style={{paddingLeft:"2rem", paddingRight:"2rem"}}>
                    <Link className='link' to="/">Home</Link>    
                    <Link className='link' to="/projects">Projects</Link>   
                </div>
            </div>
            {/* <hr /> */}
        </>
    )
}

export default Nav3