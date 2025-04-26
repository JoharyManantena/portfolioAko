
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Sphere, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Custom shaders
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    float noise = sin(vPosition.x * 10.0 + time) * cos(vPosition.y * 10.0 + time) * sin(vPosition.z * 10.0 + time);
    noise = (noise + 1.0) * 0.5;
    
    vec3 gradientColor = mix(color1, color2, vUv.y);
    gradientColor = mix(gradientColor, color3, noise * 0.5);
    
    gl_FragColor = vec4(gradientColor, 1.0);
  }
`;

// Create ShaderMaterial
const GradientShaderMaterial = {
  uniforms: {
    time: { value: 0 },
    color1: { value: new THREE.Color() },
    color2: { value: new THREE.Color() },
    color3: { value: new THREE.Color() }
  },
  vertexShader,
  fragmentShader,
  transparent: true
};

// Extend with our custom shader material
extend({ GradientShaderMaterial: new THREE.ShaderMaterial(GradientShaderMaterial) });

// Add type for the extended elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gradientShaderMaterial': any;
    }
  }
}

const GradientSphere = ({ position, scale, color1, color2, color3 }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current && materialRef.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
      materialRef.current.uniforms.color1.value = new THREE.Color(color1);
      materialRef.current.uniforms.color2.value = new THREE.Color(color2);
      materialRef.current.uniforms.color3.value = new THREE.Color(color3);
    }
  });

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.5} // Rotation intensity
      floatIntensity={0.5} // Float intensity
    >
      <mesh
        ref={mesh}
        position={position}
        scale={hovered ? scale * 1.1 : scale}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial 
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          uniforms={{
            time: { value: 0 },
            color1: { value: new THREE.Color(color1) },
            color2: { value: new THREE.Color(color2) },
            color3: { value: new THREE.Color(color3) }
          }}
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />

      {/* Background color */}
      <color attach="background" args={["#f8fafc"]} />

      {/* Multiple gradient spheres positioned throughout the scene */}
      <GradientSphere 
        position={[-2, 1, -2]} 
        scale={1.5} 
        color1="#6366F1" 
        color2="#8B5CF6" 
        color3="#06B6D4" 
      />
      <GradientSphere 
        position={[2, -1, -3]} 
        scale={1.2} 
        color1="#8B5CF6" 
        color2="#06B6D4" 
        color3="#6366F1" 
      />
      <GradientSphere 
        position={[-1, -2, -1]} 
        scale={0.8} 
        color1="#06B6D4" 
        color2="#6366F1" 
        color3="#8B5CF6" 
      />
      <GradientSphere 
        position={[2.5, 2, -2]} 
        scale={0.6} 
        color1="#6366F1" 
        color2="#06B6D4" 
        color3="#8B5CF6" 
      />

      {/* Disable controls for a fixed view */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default HeroCanvas;
