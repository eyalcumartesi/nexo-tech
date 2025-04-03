"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValue } from "framer-motion";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";

// Types for better type safety
type ShapeRef = THREE.Mesh | null;

// Animated shapes component with proper typing
const AnimatedShapes = ({ scrollYProgress }: { scrollYProgress: number }) => {
	const sphereRef = useRef<ShapeRef>(null);
	const torusRef = useRef<ShapeRef>(null);
	const coneRef = useRef<ShapeRef>(null);

	// Get device viewport dimensions
	const { viewport } = useThree();

	// Mouse movement with proper typing
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// Handle mouse movement with proper event typing
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			// Convert to normalized values between -1 and 1
			const x = (e.clientX / window.innerWidth) * 2 - 1;
			const y = (e.clientY / window.innerHeight) * 2 - 1;

			mouseX.set(x * 0.1); // Reduce effect strength
			mouseY.set(-y * 0.1); // Invert Y axis
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY]);

	useFrame((state, delta) => {
		// Scroll-based animations with null checks
		if (sphereRef.current) {
			// Move sphere based on scroll
			sphereRef.current.position.x = -2 + scrollYProgress * 4;
			sphereRef.current.position.y = Math.sin(scrollYProgress * Math.PI) * 0.5;
			sphereRef.current.rotation.z += delta * 0.2;

			// Mouse interaction
			sphereRef.current.position.x += mouseX.get();
			sphereRef.current.position.y += mouseY.get();
		}

		if (torusRef.current) {
			torusRef.current.position.x = 2 - scrollYProgress * 3;
			torusRef.current.position.y =
				-1 + Math.cos(scrollYProgress * Math.PI) * 0.5;
			torusRef.current.rotation.x += delta * 0.1;
			torusRef.current.rotation.y += delta * 0.15;

			// Mouse interaction
			torusRef.current.position.x += mouseX.get() * 1.5;
			torusRef.current.position.y += mouseY.get() * 1.5;
		}

		if (coneRef.current) {
			coneRef.current.position.x =
				-1 + Math.sin(scrollYProgress * Math.PI * 2) * 2;
			coneRef.current.position.y = 1.5 - scrollYProgress * 1;
			coneRef.current.rotation.z += delta * 0.3;

			// Mouse interaction
			coneRef.current.position.x += mouseX.get() * 0.8;
			coneRef.current.position.y += mouseY.get() * 0.8;
		}
	});

	// Responsive sizing based on viewport
	const sphereSize = Math.min(1, viewport.width / 5);
	const torusSize = Math.min(0.8, viewport.width / 6);
	const coneSize = Math.min(0.6, viewport.width / 8);

	return (
		<>
			{/* Main blue sphere */}
			<Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
				<mesh ref={sphereRef} position={[-2, 0, 0]}>
					<sphereGeometry args={[sphereSize, 32, 32]} />
					<MeshDistortMaterial
						color="#2563EB"
						envMapIntensity={0.8}
						clearcoat={0.8}
						clearcoatRoughness={0.2}
						metalness={0.2}
						distort={0.2}
					/>
				</mesh>
			</Float>

			{/* Torus knot shape */}
			<Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.2}>
				<mesh ref={torusRef} position={[2, -1, -1]}>
					<torusKnotGeometry args={[torusSize, torusSize * 0.3, 100, 16]} />
					<MeshDistortMaterial
						color="#4F46E5"
						roughness={0.1}
						metalness={0.8}
						transmission={0.5}
						transparent
						opacity={0.8}
						distort={0.1}
					/>
				</mesh>
			</Float>

			{/* Additional smaller shape */}
			<Float speed={3} rotationIntensity={1} floatIntensity={0.7}>
				<mesh ref={coneRef} position={[-1, 1.5, -2]}>
					<dodecahedronGeometry args={[coneSize, 0]} />
					<MeshDistortMaterial
						color="#8B5CF6"
						roughness={0.3}
						metalness={0.5}
						transparent
						opacity={0.7}
						distort={0.4}
					/>
				</mesh>
			</Float>
		</>
	);
};

// Scene auto-resizer with proper typing
const SceneResponsive = ({ children }: { children: React.ReactNode }) => {
	const { viewport, camera } = useThree();

	useEffect(() => {
		// Adjust camera to maintain scene visibility
		camera.position.z = Math.max(5, 7 - viewport.width * 0.2);
		camera.updateProjectionMatrix();
	}, [viewport.width, camera]);

	return <>{children}</>;
};

export const BackgroundScene = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll();
	const scrollY = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<div ref={containerRef} className="fixed inset-0 pointer-events-none">
			<div className="absolute inset-0">
				<Canvas
					style={{ background: "transparent" }}
					camera={{ position: [0, 0, 5], fov: 50 }}
					dpr={[1, 2]}
					gl={{ antialias: true, alpha: true }}
				>
					<SceneResponsive>
						<AnimatedShapes scrollYProgress={scrollY.get()} />
						<Environment preset="city" />
						<ambientLight intensity={0.3} />
						<pointLight position={[10, 10, 10]} intensity={0.5} />
					</SceneResponsive>
				</Canvas>
			</div>

			{/* Multiple gradient overlays for more complex background effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/95" />
			<div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-indigo-50/30" />

			{/* Dynamic dot pattern */}
			<div className="absolute inset-0 opacity-[0.02] bg-[url('/dot-pattern.svg')] dark:opacity-[0.02]" />

			{/* Optional noise texture for subtle grain effect */}
			<div className="absolute inset-0 bg-noise-texture opacity-[0.015] mix-blend-overlay" />
		</div>
	);
};
