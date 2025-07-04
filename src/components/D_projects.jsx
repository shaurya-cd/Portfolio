import Spline from '@splinetool/react-spline';
import Nav from './Nav';
import dshorn from '../../public/dshorn.jpg'
import tf from '../../public/tf.jpg'

function D_projects() {
  return (
    <div className="d-projects">
        <Nav />
        <div className="contProject1 sm1" id='projects'>
                <div className="model2">
                    <Spline scene="/scene3.splinecode" id='scene3'/>
                </div>

                <div className="d-title">
                    <h1>Social Media Marketing</h1>
                    <p>Turning social platforms into brand powerhouses.</p>
                </div>

                <div className="projectOverlay1">
                    <div className="dshorn">
                        <a href='https://www.instagram.com/dshornanimez?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img src={dshorn} alt="" /></a>  
                    </div>
                    <div className="tf">
                        <a href='https://www.instagram.com/techno.fair?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img src={tf} alt="" /></a>
                       
                    </div>
                </div>

            </div>

    </div>
  )
}

export default D_projects