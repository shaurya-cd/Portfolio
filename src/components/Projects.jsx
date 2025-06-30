import Spline from '@splinetool/react-spline';
import CylApp1 from './CylApp1.jsx';
import CylApp2 from './CylApp2.jsx';
import Nav2 from './Nav2';
function Projects() {
    return (
        <>
        <Nav2 />
            <div className="contProject" id='projects'>
                <div className="model2">
                    <Spline scene="/scene2.splinecode" id='scene2' />
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

            </div>
        </>
    )
}

export default Projects
