import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Cyl1 from './Cyl1.jsx'

function CylApp1() {
  return (
    <div className="cylWrapper">
      <button className='newbtn' onClick={() => window.open("https://gym-site-devscrest.vercel.app/", "_blank")}>
      <Canvas flat camera={{ fov: 70 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl1 />
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

export default CylApp1
