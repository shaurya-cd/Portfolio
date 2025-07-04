import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Cyl4 from './Cyl4.jsx'

function CylApp4() {
  return (
    <div className="cylWrapper">
      <button className='newbtn' onClick={() => window.open("https://food-delivery-admin-panel-one.vercel.app/", "_blank")}>
      <Canvas flat camera={{ fov: 70 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl4 />
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

export default CylApp4
