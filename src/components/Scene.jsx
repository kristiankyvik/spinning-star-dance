import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import StarShape from './StarShape';

const Scene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <StarShape />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;