// src/components/BackgroundScene.tsx
"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, Float } from "@react-three/drei";

const AnimatedSphere = ({ scrollYProgress }: { scrollYProgress: number }) => {
	const meshRef = useRef<THREE.Mesh>(null);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const basePosition: [number, number, number] = [-2, 0, 0]; // Starting position

	useEffect(() => {
		if (meshRef.current) {
			// Move sphere based on scroll
			meshRef.current.position.x = basePosition[0] + scrollYProgress * 4;
			meshRef.current.rotation.y = scrollYProgress * Math.PI * 2;
		}
	}, [basePosition, scrollYProgress]);

	return (
		<Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
			<mesh ref={meshRef} position={basePosition}>
				<torusKnotGeometry args={[1, 0.3, 100, 16]} />
				<meshPhysicalMaterial
					roughness={0.2}
					metalness={0.8}
					color="#2563EB"
					envMapIntensity={0.8}
					transmission={0.5}
					transparent
					opacity={0.9}
				/>
			</mesh>
		</Float>
	);
};

export const BackgroundScene = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll();

	return (
		<div ref={containerRef} className="fixed inset-0 pointer-events-none">
			<div className="absolute inset-0">
				<Canvas camera={{ position: [0, 0, 5] }}>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} />
					<AnimatedSphere scrollYProgress={scrollYProgress.get()} />
					<Environment preset="city" />
				</Canvas>
			</div>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
		</div>
	);
};
