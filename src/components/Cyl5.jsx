import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Cyl5 = ()=> {
    let tex = useTexture("./ChatClub.png")
    let cyl5 = useRef(null)
    useFrame((state,delta)=>{
        cyl5.current.rotation.y += delta
    })
    return (
        <group rotation={[0.3,0,0]}>
        <mesh ref={cyl5} >
            <cylinderGeometry args={[
                2, 2, 2, 30, 30, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
        </group>
    )
}

export default Cyl5