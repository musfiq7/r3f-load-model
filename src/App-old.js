
 import { Canvas } from "@react-three/fiber";
import "./App.css";
import  Experience  from "./components/Experience";

 import { OrbitControls } from "@react-three/drei";
 
function App() {
  // const styles = {
  //   main: {
  //     backgroundColor: "#f1f1f1",
  //     width: "100%",
  //   },
  //   inputText: {
  //     padding: "10px",
  //     color: "red",
  //   }
  return (
    <Canvas>
    {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
      {/* <Experience color={'black'}  position={[-1.2, 0, 0]} />
      <Experience color={'orange'} position={[1.2, 0, 0]}/>
      <Experience color={'hotpink'}  position={[5.2, 0, 0]}/>
      <Experience color={'royalblue'} position={[8.2, 0, 0]}/>
      <Experience color={'purple'} position={[-3.2, 0, 0]}/>
      <Experience color={'green'} position={[12.2, 0, 0]}/>
      <Experience color={'yellow'} position={[16.2, 0, 0]}/> */}
    
      <ambientLight intensity={Math.PI/2} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;

