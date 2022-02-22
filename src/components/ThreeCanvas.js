import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LaptopModel from "./LaptopModel";
import IphoneModel from "./IphoneModel";
import StageModel from "./StageModel";
import SplashText from "./SplashText";

export default function ThreeCanvas() {
  return (
    <Canvas
      className="ThreeCanvas"
      camera={{ fov: 30, position: [0, 0, 10] }}
      shadows
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={["#E5E5E5", 0, 50]} />
        <ambientLight intensity={1} color="white" />
        <directionalLight
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          position={[0, 3, 2]}
        />
        <SplashText />
        <LaptopModel></LaptopModel>
        <IphoneModel></IphoneModel>
        <StageModel></StageModel>
      </Suspense>
    </Canvas>
  );
}
