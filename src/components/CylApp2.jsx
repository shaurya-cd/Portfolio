import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Cyl2 from './Cyl2.jsx'

function CylApp2() {
  return (
    <div className="cylWrapper">
      <Canvas flat camera={{ fov: 70 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl2 />
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
        <button className='newbtn' onClick={() => window.open("https://mohito-junction.vercel.app/", "_blank")}>
          Visit Project
        </button>
      </div>
    </div>
  )
}

export default CylApp2
