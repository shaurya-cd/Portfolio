import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <div className="errorCont">
                <div className="model3" >
                    <Spline scene="/scene3.splinecode" id='scene3' />
                </div>

                <div className="notFound">
                    <div className="nfleft">
                        <div className="txt1">404 ! </div> 
                        <div className="txt1">&nbsp; page not found</div>
                    </div>
                    <div className="nfright">
                         <Link className='link' to="/"><button className='reachUs'>take me HOME :)</button></Link>  
                    </div>
                </div>
            </div>

        </>
    )
}
