import Spline from '@splinetool/react-spline';
import CylApp1 from './CylApp1.jsx';
import CylApp2 from './CylApp2.jsx';
import Nav from './Nav';
import CylApp3 from './CylApp3.jsx';
import CylApp4 from './CylApp4.jsx';
function Projects() {
    return (
        <>
        <Nav />
        <div className="website-project">
            <div className="contProject" id='projects'>
                <div className="model2">
                    <Spline scene="/scene3.splinecode" id='scene3'/>
                </div>
                <div className="projectOverlay">
                    <div className="ov">
                        <div className="project1">Gym Website</div>
                        <CylApp1 />
                    </div>
                    <div className="ov ov2"></div>
                    <div className="ov">
                        <div className="project2">Restaurant Website</div>
                        <CylApp2 />
                    </div>
                </div>
                <div className="projectOverlay">
                    <div className="ov">
                        <div className="project1">Food Ordering App</div>
                        <CylApp3 />
                    </div>
                    <div className="ov ov2"></div>
                    <div className="ov">
                        <div className="project2">Food App Admin Panel</div>
                        <CylApp4 />
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Projects
