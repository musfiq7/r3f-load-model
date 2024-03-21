import React from 'react'

import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { Suspense } from "react";


const Model = () => {
    const gltf = useLoader(GLTFLoader, "mushroom_new.glb")
    return (
        <>
            <primitive  position={[0, 0, 0]} object={gltf.scene} />
        </>
    );
};







function App() {
  return (
    <>
    <Canvas>
        <Suspense>
            <Model/>
        </Suspense>

    </Canvas>
    
    </>
  )
}

export default App


