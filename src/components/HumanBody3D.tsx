import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface HumanModelProps {
  highlightedOrgan?: 'brain' | 'heart' | null;
  onOrganHover?: (organ: string | null) => void;
}

function HumanModel({ highlightedOrgan }: HumanModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/human-body2.glb');
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material) {
            const mat = child.material as THREE.MeshStandardMaterial;
            mat.transparent = true;
            mat.opacity = 0.35;
            mat.wireframe = true;
            mat.color = new THREE.Color('#ffffff');
            mat.emissive = new THREE.Color('#4a9eda');
            mat.emissiveIntensity = 0.1;
          }
        }
      });
      setModelReady(true);
    }
  }, [scene]);

  useFrame((state) => {
    if (groupRef.current && modelReady) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive
        object={scene}
        scale={1.8}
        position={[0, -1.5, 0]}
        rotation={[0, 0, 0]}
      />

      {highlightedOrgan === 'brain' && (
        <mesh position={[0, 0.85, 0.05]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial
            color="#EB586C"
            emissive="#EB586C"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      )}

      {highlightedOrgan === 'heart' && (
        <mesh position={[-0.08, 0.35, 0.1]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial
            color="#EB586C"
            emissive="#EB586C"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      )}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />
      <pointLight position={[0, 2, 3]} intensity={0.3} color="#44E6FD" />
    </>
  );
}

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 1.5}
      rotateSpeed={0.5}
    />
  );
}

interface HumanBody3DProps {
  className?: string;
  highlightedOrgan?: 'brain' | 'heart' | null;
}

export default function HumanBody3D({ className = '', highlightedOrgan = null }: HumanBody3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Lights />
        <CameraController />
        <HumanModel highlightedOrgan={highlightedOrgan} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/human-body2.glb');
