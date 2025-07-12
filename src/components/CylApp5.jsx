import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Cyl5 from './Cyl5.jsx'

function CylApp5() {
  return (
    <div className="cylWrapper">
      <button className='newbtn' onClick={() => window.open("https://chat-club-alpha.vercel.app/", "_blank")}>
      <Canvas flat camera={{ fov: 70 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl5 />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
      </button>
    </div>
  )
}

export default CylApp5
