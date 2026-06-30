import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, RoundedBox } from '@react-three/drei';
import { Suspense, useRef } from 'react';

/* Sacola tipo camiseta — mini */
function TShirtBagMini({ color = '#ffffff', accent = '#FF6600' }) {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.6) * 0.4;
  });

  const mat = (
    <meshPhysicalMaterial
      color={color}
      roughness={0.45}
      clearcoat={0.4}
      sheen={0.8}
      sheenColor="#fff"
      sheenRoughness={0.5}
      transmission={0.05}
      thickness={0.2}
    />
  );

  return (
    <group ref={ref}>
      {/* corpo */}
      <RoundedBox args={[1.5, 1.9, 0.16]} radius={0.06} smoothness={4}>
        {mat}
      </RoundedBox>
      {/* alças */}
      <group position={[-0.42, 1.2, 0]}>
        <mesh><boxGeometry args={[0.2, 0.65, 0.16]} />{mat}</mesh>
        <mesh position={[0, 0.32, 0]}><boxGeometry args={[0.2, 0.05, 0.16]} />{mat}</mesh>
      </group>
      <group position={[0.42, 1.2, 0]}>
        <mesh><boxGeometry args={[0.2, 0.65, 0.16]} />{mat}</mesh>
        <mesh position={[0, 0.32, 0]}><boxGeometry args={[0.2, 0.05, 0.16]} />{mat}</mesh>
      </group>
      {/* impressão (faixa) */}
      <mesh position={[0, 0, 0.085]}>
        <planeGeometry args={[1.0, 0.4]} />
        <meshStandardMaterial color={accent} />
      </mesh>
      <mesh position={[0, 0, 0.086]}>
        <planeGeometry args={[0.85, 0.18]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
    </group>
  );
}

/* Rolo de plástico */
function Roll({ color = '#FF6600' }) {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) ref.current.rotation.z = s.clock.elapsedTime * 0.8;
  });
  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <cylinderGeometry args={[0.7, 0.7, 1.4, 64]} />
        <meshPhysicalMaterial color={color} roughness={0.3} clearcoat={0.6} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 1.45, 32]} />
        <meshStandardMaterial color="#1a1a1f" />
      </mesh>
    </group>
  );
}

/* Sacola boca lisa (alça vazada / fitilho) */
function FlatBag({ color = '#ffffff' }) {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.6) * 0.35;
  });
  const mat = (
    <meshPhysicalMaterial color={color} roughness={0.45} clearcoat={0.4} sheen={0.7} sheenColor="#fff" transmission={0.05} thickness={0.2} />
  );
  return (
    <group ref={ref}>
      <RoundedBox args={[1.5, 1.7, 0.15]} radius={0.05} smoothness={4}>{mat}</RoundedBox>
      {/* alça vazada superior */}
      <mesh position={[0, 0.95, 0]}>
        <torusGeometry args={[0.25, 0.06, 16, 32, Math.PI]} />
        <meshPhysicalMaterial color={color} roughness={0.45} clearcoat={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[1.0, 0.5]} />
        <meshStandardMaterial color="#FF6600" />
      </mesh>
    </group>
  );
}

export default function ProductMini({ variant = 'tshirt', color = '#ffffff' }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.3, 4], fov: 36 }} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.85} />
        <directionalLight position={[3, 4, 4]} intensity={1.2} />
        <directionalLight position={[-3, 2, -1]} intensity={0.45} color="#ffd0d4" />
        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
          {variant === 'tshirt' && <TShirtBagMini color={color} />}
          {variant === 'roll' && <Roll color="#FF6600" />}
          {variant === 'flat' && <FlatBag color={color} />}
        </Float>
        <ContactShadows position={[0, -1.4, 0]} opacity={0.3} scale={6} blur={2.4} far={2.5} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
