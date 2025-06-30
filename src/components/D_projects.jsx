import Spline from '@splinetool/react-spline';
import CylApp3 from './CylApp3.jsx';
import CylApp4 from './CylApp4.jsx';
import Nav2 from './Nav2';

function D_projects() {
  return (
    <div className="d-projects">
        <Nav2 />

        <div className="contProject" id='projects'>
                <div className="model2">
                    <Spline scene="/scene2.splinecode" id='scene2' />
                </div>

                <div className="projectOverlay">
                    <div className="ov">
                        <div className="project1">DShoRn Animez</div>
                        <CylApp3 />
                    </div>
                    <div className="ov ov2"></div>
                    <div className="ov">
                        <div className="project2">TechnoFair</div>
                        <CylApp4 />
                    </div>
                </div>

            </div>

    </div>
  )
}

export default D_projects