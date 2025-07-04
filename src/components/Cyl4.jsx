import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Cyl4 = ()=> {
    let tex = useTexture("./Admin.png")
    let cyl4 = useRef(null)
    useFrame((state,delta)=>{
        cyl4.current.rotation.y += delta
    })
    return (
        <group rotation={[0.3,0,0]}>
        <mesh ref={cyl4} >
            <cylinderGeometry args={[
                2, 2, 2, 30, 30, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
        </group>
    )
}

export default Cyl4