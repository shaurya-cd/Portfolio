import Spline from '@splinetool/react-spline';
import Nav2 from './Nav2';
import dshorn from '../../public/dshorn.jpg'
import tf from '../../public/tf.jpg'

function D_projects() {
  return (
    <div className="d-projects">
        <Nav2 />

        <div className="contProject sm1" id='projects'>
                <div className="model2">
                    <Spline scene="/scene2.splinecode" id='scene2' />
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