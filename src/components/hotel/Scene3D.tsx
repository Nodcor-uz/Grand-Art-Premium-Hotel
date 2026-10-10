import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

function Building({
  position,
  size,
  windows,
}: {
  position: [number, number, number];
  size: [number, number, number];
  windows: number;
}) {
  const panes = useMemo(() => {
    const list: [number, number, number][] = [];
    const cols = Math.max(3, Math.round(size[0] * 1.4));
    const rows = Math.max(2, Math.round(size[1] * 1.1));
    const startX = -size[0] / 2 + 0.45;
    const startY = -size[1] / 2 + 0.55;
    const stepX = (size[0] - 0.9) / Math.max(1, cols - 1);
    const stepY = (size[1] - 0.9) / Math.max(1, rows - 1);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if ((r + c) % 5 === 0) continue;
        list.push([startX + c * stepX, startY + r * stepY, size[2] / 2 + 0.02]);
      }
    }
    return list.slice(0, windows);
  }, [size, windows]);

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#e6dccb" roughness={0.62} metalness={0.04} />
      </mesh>
      <mesh position={[0, size[1] / 2 + 0.08, 0]}>
        <boxGeometry args={[size[0] + 0.12, 0.16, size[2] + 0.12]} />
        <meshStandardMaterial color="#d7cbb6" roughness={0.55} />
      </mesh>
      {panes.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.28, 0.38, 0.04]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#2a221c" : "#3d4a55"}
            emissive={i % 4 === 0 ? "#c9a66b" : "#000000"}
            emissiveIntensity={i % 4 === 0 ? 0.35 : 0}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.7, 6]} />
        <meshStandardMaterial color="#4a3728" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.95, 0]}>
        <dodecahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial color="#5c6b46" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Water() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, 0.04, 0.4]}>
      <circleGeometry args={[1.35, 32]} />
      <meshStandardMaterial
        color="#3a6670"
        metalness={0.72}
        roughness={0.12}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

function Courtyard() {
  return (
    <>
      <color attach="background" args={["#1a1612"]} />
      <fog attach="fog" args={["#1a1612", 12, 28]} />
      <hemisphereLight args={["#f0e6d2", "#2a241c", 0.85]} />
      <directionalLight position={[6, 10, 4]} intensity={1.7} color="#fff1d6" />
      <pointLight position={[-2, 2.2, 1]} intensity={0.55} color="#c45a4a" />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[28, 28]} />
        <meshStandardMaterial color="#cfc3ae" roughness={0.95} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#d9d0bf" roughness={0.85} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-1.6, 0.03, -0.8]}>
        <planeGeometry args={[2.4, 1.6]} />
        <meshStandardMaterial color="#5d6a45" roughness={0.9} />
      </mesh>

      <Water />

      <Building position={[-4.2, 1.7, -1.1]} size={[3.4, 3.4, 2.2]} windows={18} />
      <Building position={[4.1, 1.35, -0.4]} size={[2.6, 2.7, 2]} windows={12} />
      <Building position={[0.2, 1.1, -4.2]} size={[6.4, 2.2, 2.1]} windows={16} />

      <Tree position={[-1.5, 0, 1.6]} />
      <Tree position={[1.8, 0, 1.1]} />
      <Tree position={[-2.4, 0, -1.8]} />
      <Tree position={[2.6, 0, -2.2]} />
      <Tree position={[0.8, 0, 2.4]} />

      <OrbitControls
        enablePan={false}
        minDistance={6}
        maxDistance={14}
        minPolarAngle={0.7}
        maxPolarAngle={1.25}
        autoRotate
        autoRotateSpeed={0.45}
        target={[0, 0.6, 0]}
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [7.4, 4.6, 8.2], fov: 38 }}
      gl={{ antialias: true, alpha: false }}
      className="h-full w-full touch-none"
    >
      <Courtyard />
    </Canvas>
  );
}
