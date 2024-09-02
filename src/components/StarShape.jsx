import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';

const StarShape = () => {
  const starRef = useRef();

  useFrame((state, delta) => {
    starRef.current.rotation.y += delta * 0.5;
    starRef.current.rotation.x += delta * 0.3;
  });

  return (
    <group ref={starRef}>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="yellow" emissive="orange" />
      </Sphere>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

export default StarShape;