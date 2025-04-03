"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedBackground = () => {
	const ref = useRef<THREE.Points>(null);
	const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x -= delta / 10;
			ref.current.rotation.y -= delta / 15;
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				position={new THREE.Vector3().fromArray(Array.from(sphere))}
				stride={3}
				frustumCulled={false}
			>
				<PointMaterial
					transparent
					color="#2563eb"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

export default AnimatedBackground;
