import Spline from '@splinetool/react-spline';
import Nav from './Nav'

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="contactCont">
        <div className="model3">
          <Spline scene="/scene3.splinecode" id='scene3' />
        </div>

        <div className="mainContact">


          <div className="c c1">


            <div className="c11">

              <h2>Get in Touch</h2> <br />
              <p>We'd love to hear about your project. Whether you’re ready to start or just exploring, drop us a message.</p> <br />

              <div class="contact-info">
                <div class="info-block">

                  <h3>Email - &nbsp; </h3>
                  <p><a href="mailto:Devscrest.Solutions@gmail.com">Devscrest.Solutions@gmail.com</a></p>
                </div><br />
                <div class="info-block">
                  <h3>Location -&nbsp; </h3>
                  <p>India (Remote-friendly)</p>
                </div><br />
                <div class="info-block">
                  <h3>Working Hours -&nbsp; </h3>
                  <p>Mon - Fri: 10 AM - 7 PM IST</p>
                </div>
              </div>
            </div>


          </div>

          <div className="C"></div>
          <div className="c"></div>
        </div>

      </div>

    </>
  )
}
