import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function useMouseTracker() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return mouse;
}

const NODE_COUNT = 220;
const CONNECTION_DIST = 1.4;

function BrainParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const basePositions = useRef<Float32Array | null>(null);

  const { positions, colors, lineGeo } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3);
    const col = new Float32Array(NODE_COUNT * 3);
    const purple = new THREE.Color("#bd00ff");
    const cyan = new THREE.Color("#00f3ff");

    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.6 + (Math.random() - 0.5) * 0.7;

      // Two-lobed brain shape: wider on X, split with a slight gap on Z
      const x = r * Math.sin(phi) * Math.cos(theta) * 1.35;
      const y = r * Math.cos(phi) * 0.85;
      const rawZ = r * Math.sin(phi) * Math.sin(theta);
      // Push lobes apart slightly
      const z = rawZ + (rawZ > 0 ? 0.15 : -0.15);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const depth = (y + 1.5) / 3;
      const c = purple.clone().lerp(cyan, depth * 0.6 + Math.random() * 0.3);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    // Build connection lines
    const lp: number[] = [];
    const lc: number[] = [];
    const lineCol = new THREE.Color("#00f3ff");
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DIST) {
          lp.push(pos[i*3], pos[i*3+1], pos[i*3+2], pos[j*3], pos[j*3+1], pos[j*3+2]);
          const a = 1 - dist / CONNECTION_DIST;
          lc.push(lineCol.r, lineCol.g, lineCol.b, lineCol.r * a, lineCol.g * a, lineCol.b * a);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(lp, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(lc, 3));

    basePositions.current = new Float32Array(pos);

    return { positions: pos, colors: col, lineGeo: geo };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current || !basePositions.current) return;
    const t = state.clock.elapsedTime;

    // Breathing effect
    const breath = 1 + Math.sin(t * 0.8) * 0.04;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const base = basePositions.current;
    for (let i = 0; i < NODE_COUNT; i++) {
      posAttr.setXYZ(i, base[i*3] * breath, base[i*3+1] * breath, base[i*3+2] * breath);
    }
    posAttr.needsUpdate = true;

    // Slow rotation
    pointsRef.current.rotation.y = t * 0.1;
    pointsRef.current.rotation.x = Math.sin(t * 0.06) * 0.08;
    linesRef.current.rotation.y = t * 0.1;
    linesRef.current.rotation.x = Math.sin(t * 0.06) * 0.08;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.055} vertexColors transparent opacity={0.95} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial vertexColors transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

function BrainGroup({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.12;
    target.current.y = mouse.x * 0.35;
    target.current.x = -mouse.y * 0.25;
    groupRef.current.rotation.y += (target.current.y - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (target.current.x - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <BrainParticles />
    </group>
  );
}

const AboutBrain = () => {
  const mouse = useMouseTracker();

  return (
    <div className="w-full h-80 md:h-96">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 2]} style={{ background: "transparent" }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[3, 3, 3]} color="#bd00ff" intensity={2} />
        <pointLight position={[-3, -2, 2]} color="#00f3ff" intensity={1.5} />
        <BrainGroup mouse={mouse} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={1.8} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default AboutBrain;
