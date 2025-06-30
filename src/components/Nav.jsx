import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Nav() {

        const navigate = useNavigate();

        const handleChange = (e) => {
            const selectedRoute = e.target.value;
            if (selectedRoute) {
            navigate(selectedRoute);
            }
        }

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

                    <select name="p-category" id="p-category" onChange={handleChange} defaultValue="">
                        <option value="" disabled>Projects</option>
                        <option value="/w-projects">Websites</option>
                        <option value="/v-projects">Videos</option>
                        <option value="/branding">Branding Solutions</option>
                        <option value="/d-projects">Social Media Marketing</option>
                    </select>

                    <button className='reachUs' id='btn1'><Link to="/contact">Reach Us</Link></button>
                </div>
            </div>
            {/* <hr /> */}
        </>
    )
}

export default Nav