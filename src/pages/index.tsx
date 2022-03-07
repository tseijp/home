import React, { Suspense } from 'react';
import Head from '@docusaurus/Head'
import Layout from '@theme/Layout';
import { Text } from "@react-three/drei";
import { useMove } from "@use-gesture/react";
import { Instanced, Flow } from "react-mol";
import { Canvas, useFrame } from "@react-three/fiber";
import type { DocusaurusConfig } from '@docusaurus/types';
const { sin, cos, random } = Math;

const position = (t = 0, s = 0, x = 0, y = 0, z = 0) => [
  (x - 0.5 - cos(t * s + x) - sin((t * s) / 1)) * (x * 100 + 50),
  (y - 0.5 - sin(t * s + y) - cos((t * s) / 3)) * (y * 100 + 50),
  (z - 0.5 - cos(t * s + z) - sin((t * s) / 5)) * (z * 100 + 50)
];

const rotation = (t = 0, s = 0) => Array(3).fill(cos(t * s) * 5);

function Group() {
  const move = React.useRef({ x: 0, y: 0 });

  useMove(({ xy: [x, y] }) => (move.current = { x, y }), { target: window });

  useFrame(({ camera, scene, size }) => {
    const dx = -(move.current.x - 0.5 * size.width) / 500 - camera.position.x;
    const dy = (move.current.y - 0.5 * size.height) / 500 - camera.position.y;
    camera.position.x += dx / 20;
    camera.position.y += dy / 20;
    camera.lookAt(scene.position);
  });

  return (
    <Instanced>
      <dodecahedronBufferGeometry args={[1, 0]} />
      <meshStandardMaterial />
      {[...Array(1000)].map((_, i) => (
        <Flow
          key={i}
          color="black"
          args={[...Array(4)].map(random)}
          position={position as any}
          rotation={rotation as any}
          scale={rotation as any}
        />
      ))}
    </Instanced>
  );
}

export default function App (props: {config: DocusaurusConfig}) {
  const { config: siteConfig } = props
  return (
    <Layout noFooter>
      <Head>
        <title>
          {siteConfig.title} {siteConfig.titleDelimiter} {siteConfig.tagline}
        </title>
      </Head>
      <Canvas camera={[0, 0, 5] as any} style={{ top: 0, left: 0, zIndex: -1, position: "absolute" }}>
        <ambientLight intensity={0.3} />
        <color attach="background" args={["#212121"]} />
        <gridHelper position={[0, 0, 0]} args={[100, 50]} />
        <pointLight position={[100, 100, 100]} intensity={2.2} />
        <pointLight position={[-100, -100, -100]} intensity={5} />
        <Group />
        <Suspense fallback={null}>
          <Text color={"#e2e2e2"} fontSize={2} lineHeight={2}>
            TSEI.JP
          </Text>
        </Suspense>
      </Canvas>
    </Layout>
  );
}
