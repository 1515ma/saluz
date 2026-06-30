import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

/* ---------- Sacola plástica tipo CAMISETA ---------- */
function TShirtBag({ position = [0, 0, 0], rotation = [0, 0, 0], color = '#ffffff', scale = 1 }) {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
  });

  // Material plástico translúcido típico das sacolas brancas
  const material = (
    <meshPhysicalMaterial
      color={color}
      roughness={0.45}
      metalness={0.02}
      clearcoat={0.4}
      clearcoatRoughness={0.5}
      transmission={0.05}
      thickness={0.2}
      sheen={0.8}
      sheenColor={'#ffffff'}
      sheenRoughness={0.6}
    />
  );

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      {/* corpo da sacola */}
      <RoundedBox args={[1.6, 2.0, 0.18]} radius={0.06} smoothness={4} castShadow receiveShadow>
        {material}
      </RoundedBox>

      {/* alça ESQUERDA (formato camiseta) */}
      <group position={[-0.45, 1.25, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.22, 0.7, 0.18]} />
          {material}
        </mesh>
        <mesh position={[0, 0.35, 0]} castShadow>
          <boxGeometry args={[0.22, 0.05, 0.18]} />
          {material}
        </mesh>
      </group>

      {/* alça DIREITA (formato camiseta) */}
      <group position={[0.45, 1.25, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.22, 0.7, 0.18]} />
          {material}
        </mesh>
        <mesh position={[0, 0.35, 0]} castShadow>
          <boxGeometry args={[0.22, 0.05, 0.18]} />
          {material}
        </mesh>
      </group>

      {/* "RECORTE" do centro (a área entre as alças - bocal) */}
      <mesh position={[0, 1.15, 0.0]}>
        <boxGeometry args={[0.6, 0.18, 0.2]} />
        <meshBasicMaterial color="#fff" transparent opacity={0} />
      </mesh>

      {/* fundo arredondado (efeito sacola caindo) */}
      <mesh position={[0, -1.0, 0]} castShadow>
        <boxGeometry args={[1.6, 0.06, 0.2]} />
        {material}
      </mesh>

      {/* faixa sutil vermelha (impressão personalizada) */}
      <mesh position={[0, 0.0, 0.092]}>
        <planeGeometry args={[1.2, 0.45]} />
        <meshStandardMaterial color={color === '#ffffff' ? '#fef6f7' : '#ffffff'} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

/* ---------- Esfera distorcida decorativa ---------- */
function GlowOrb({ position = [0, 0, 0], scale = 1 }) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#FF6600"
        distort={0.4}
        speed={2}
        roughness={0.25}
        metalness={0.3}
        opacity={0.85}
        transparent
      />
    </mesh>
  );
}

/* ---------- Pilha de sacolas (representando empilhamento) ---------- */
function BagStack({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} position={[0, -1.6 + i * 0.08, 0]} rotation={[0, 0, 0]} castShadow>
          <boxGeometry args={[2.2, 0.06, 1.6]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.4} clearcoat={0.4} sheen={0.6} sheenColor="#fff" />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- Mouse follow rig ---------- */
function Rig({ children }) {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const x = (state.pointer.x * Math.PI) / 18;
    const y = (state.pointer.y * Math.PI) / 22;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.05);
  });
  return <group ref={group}>{children}</group>;
}

export default function BagScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 6, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-5, 3, -2]} intensity={0.7} color="#ffd0d4" />
        <pointLight position={[0, 2, 3]} intensity={1.0} color="#ffffff" />

        <Rig>
          {/* orb vermelho atrás */}
          <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
            <GlowOrb position={[0, 0, -2.8]} scale={1.7} />
          </Float>

          {/* sacola central */}
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.1}>
            <TShirtBag position={[0, 0.2, 0]} rotation={[0.05, -0.2, 0.03]} color="#ffffff" />
          </Float>

          {/* sacola lateral esquerda (atrás) */}
          <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.3}>
            <TShirtBag position={[-2.0, 0.4, -0.6]} rotation={[0.05, 0.5, -0.15]} color="#fafafa" scale={0.85} />
          </Float>

          {/* sacola lateral direita */}
          <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.0}>
            <TShirtBag position={[2.0, -0.1, -0.4]} rotation={[-0.03, -0.55, 0.12]} color="#ffffff" scale={0.9} />
          </Float>

          {/* pilha pequena */}
          <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.5}>
            <BagStack position={[0.4, -1.7, 0.6]} />
          </Float>
        </Rig>

        <ContactShadows position={[0, -2.1, 0]} opacity={0.35} scale={10} blur={2.4} far={3} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
