import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Cyl3 from './Cyl3.jsx'

function CylApp3() {
  return (
    <div className="cylWrapper">
      <button className='newbtn' onClick={() => window.open("https://food-delivery-site-six.vercel.app/", "_blank")}>
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
      </button>
    </div>
  )
}

export default CylApp3
