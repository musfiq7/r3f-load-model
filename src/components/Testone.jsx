import { OrbitControls } from "@react-three/drei"

const Testone = () => {
  return (
    <>
    <OrbitControls />
    <mesh >
    
    <sphereGeometry args={[1, 32]} />
   
    
      <meshNormalMaterial />
    </mesh>
   
  </>
  )
}

export default Testone