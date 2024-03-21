import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader,useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useRef, useState } from 'react'
import { ScrollControls } from '@react-three/drei'
import { Scroll } from '@react-three/drei'
import "./App.css";
import Interface from './components/Interface'

export default function App() {
  // const gltf = useLoader(GLTFLoader, 'Stalked-jelly.gltf');
  // const gltf = useLoader(GLTFLoader, 'Stalked-jelly.gltf');
  // const gltf = useLoader(GLTFLoader, 'monkey.glb');
    // const gltf = useLoader(GLTFLoader, 'forest.glb');
     const gltf = useLoader(GLTFLoader, 'mushroom_new.glb');
    //  const gltf = useLoader(GLTFLoader, 'Ghost_Skull.glb');
    //const gltf = useLoader(GLTFLoader, 'branise.gltf');
  
  

  return (
    <>
    {/* <Canvas camera={{ position: [-0.59, 1, 2] }} shadows> */}
    {/* <Canvas camera={{ position: [2, 1, 2] }} shadows> */}
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 32 }}>
    {/* <Canvas shadows camera={{ position: [0, 0, 10], fov: 62 }}> */}
      <directionalLight
        // position={[3.3, 1.0, 4.4]}
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      {/* <primitive
        object={gltf.scene}
        position={[-2,- 2, 0]}
        children-0-castShadow
      /> */}
        <ScrollControls pages={3} damping={0.1} >
        <primitive
        object={gltf.scene}
        // position={[2,-4, 0]}
        position={[0,-0.2, 0]}
        children-0-castShadow
        // rotation
      />
      <Scroll html>
     <Interface/>
      </Scroll>
        </ScrollControls>
      {/* <Circle args={[3]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle> */}
      <OrbitControls target={[0, 0, 0]} autoRotate enableZoom={false}/>
      {/* <axesHelper args={[5]} /> */}
      <Stats />
      
    </Canvas>
    {/* <h1>hello world</h1> */}
    </>
  )
}