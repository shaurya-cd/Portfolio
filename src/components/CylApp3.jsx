import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Cyl3 from './Cyl3.jsx'

function CylApp3() {
  return (
    <div className="cylWrapper">
      <button className='newbtn' onClick={() => window.open("https://www.instagram.com/dshornanimez?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")}>
      <Canvas flat camera={{ fov: 70 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl3 />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>

      {/* Button Below Canvas */}
      <div className="buttonContainer">
        
          Visit Project
        
      </div>
      </button>
    </div>
  )
}

export default CylApp3
