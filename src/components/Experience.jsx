import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'


const Experience = (props)=> {
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.y += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
  
    <mesh {...props} ref={meshRef}
    scale={active ? 1.5 : 1}
    onClick={(event) => setActive(!active)}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}>
      <capsuleGeometry/>
      {/* <meshNormalMaterial/> */}
      {/* <meshStandardMaterial  color={'hotpink'}/> */}
      <meshStandardMaterial  color={hovered ? 'firebrick' : props.color}/>
      
    </mesh>
  
  )
}

export default Experience

