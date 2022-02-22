export default function StageModel() {
  return (
    <mesh
      position={[0, -2.5, 7]}
      rotation={[-1.5, 0, 0]}
      scale={[100, 100, 10]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" />
      <meshPhongMaterial attach="material" color="#E5E5E5" />
    </mesh>
  );
}
