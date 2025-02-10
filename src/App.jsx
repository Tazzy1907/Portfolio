import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { Html, ScrollControls, Scroll, OrbitControls, Environment, useScroll } from "@react-three/drei";
import { BMWInstance } from "../components/bmw";
import WebContent from "./webContent";
import { use, useRef } from "react";

const RotatingBMW = () => {
  const scroll = useScroll();
  const ref = useRef();

  useFrame(() => {
    // Get the current scroll progress (0 to 1)
    const scrollDelta = scroll.delta;
        
    // Update the mesh rotation
    if (Math.abs(scrollDelta) > 0.0001) {
      ref.current.rotation.y += scrollDelta * Math.PI * 2;
    }
  });

  return (
    <mesh
      ref={ref}
      rotation={[0, Math.PI, 0]}
      position={[2, -1.4, 0]}
      scale={1.2}>
      <BMWInstance />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <Environment preset="sunset" />
      <WebContent />
      <ScrollControls>
        <Scroll>
          <RotatingBMW />
        </Scroll>
      </ScrollControls>
      
    </Canvas>
  );
};

export default App;