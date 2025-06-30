import React from 'react'
import Nav from './Nav'

function V_Projects() {
  return (
    <div className="v-projects" id='v-projects'>
        <Nav />

        <div className="video-projects" >
            <div className="v-title">
                <h1>Video Projects</h1>
                <p>Edits that speak louder than words — a reel of crafted visuals.</p>
            </div>
            <div className="v-content">
                <div className="long-form">
                    <iframe src="https://drive.google.com/file/d/1jx30De4WACCwOzjoZQpSGLPtnBXIC9WC/preview" width="350" height="280" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1lyiqfW06AAFjEmMOWgD2Ck1wvA4cu00m/preview" width="350" height="280" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/15L21Pv7qAT5yPWMmORR3gl1VuM01Lxvg/preview" width="350" height="280" allow="autoplay"></iframe>
                </div>
                <div className="short-form">
                    <iframe src="https://drive.google.com/file/d/1RlLMRkcr8Ovjf0Dgbt-Wys4AK-5DoQ3h/preview" width="240" height="400" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1innVNh3m7ldqdPjzsHydgv5NcrdoUCqj/preview" width="240" height="400" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1O1uCdUrZuME2OXGKDi0kFSBNsMwfmpY4/preview" width="240" height="400" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1MylINdxpVG6MgIUd8RKes7CVL1IBFm7s/preview" width="240" height="400" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/11QB1aOEvWOM1OgvX8DAoSZoiBFBOfHQ5/preview" width="240" height="400" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1nJ0qjjEMTS2o6gr1HJZeiz9w4PY_9Uxq/preview" width="240" height="400" allow="autoplay"></iframe>
                </div>
                <div className="short-form">

                </div>
            </div>
        </div>

    </div>
  )
}

export default V_Projects