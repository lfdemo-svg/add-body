import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function BrainModel() {
  const groupRef = useRef<THREE.Group>(null);
  const [points, setPoints] = useState<THREE.Vector3[]>([]);

  useEffect(() => {
    const generateBrainPoints = () => {
      const pts: THREE.Vector3[] = [];
      const brainShape = (theta: number, phi: number) => {
        const r = 1;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta) * 0.8;
        const z = r * Math.cos(phi) * 1.2;

        const wrinkle = 0.05 * Math.sin(theta * 8) * Math.sin(phi * 6);
        return new THREE.Vector3(
          x + wrinkle,
          y + wrinkle,
          z
        );
      };

      for (let i = 0; i < 2500; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const point = brainShape(theta, phi);

        const inLeft = point.x < 0;
        const inRight = point.x >= 0;
        const random = Math.random();

        if ((inLeft && random > 0.1) || (inRight && random > 0.1)) {
          pts.push(point);
        }
      }

      const cerebrumLeft: THREE.Vector3[] = [];
      const cerebrumRight: THREE.Vector3[] = [];

      for (let i = 0; i < 800; i++) {
        const theta = Math.random() * Math.PI - Math.PI / 2;
        const phi = Math.random() * Math.PI;
        const r = 0.95 + Math.random() * 0.1;

        const x = r * Math.cos(theta) * 0.45;
        const y = r * Math.sin(theta) * 0.7;
        const z = r * Math.cos(phi) * 0.9 + 0.1;

        if (Math.random() > 0.5) {
          cerebrumLeft.push(new THREE.Vector3(x - 0.45, y, z));
        } else {
          cerebrumRight.push(new THREE.Vector3(-x + 0.45, y, z));
        }
      }

      setPoints([...pts, ...cerebrumLeft, ...cerebrumRight]);
    };

    generateBrainPoints();
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.2, -0.3, 0]}>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.012, 6, 6]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.45 + Math.random() * 0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[-3, 2, 4]} intensity={0.8} color="#e0f0ff" />
      <pointLight position={[2, 1, 2]} intensity={0.3} color="#44E6FD" />
    </>
  );
}

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 2.5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 1.5}
      rotateSpeed={0.5}
    />
  );
}

interface Brain3DProps {
  className?: string;
}

export default function Brain3D({ className = '' }: Brain3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Lights />
        <CameraController />
        <BrainModel />
      </Canvas>
    </div>
  );
}
