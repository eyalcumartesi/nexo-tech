import { FC } from "react";
import { Float } from "@react-three/drei";
import { MeshTransmissionMaterial } from "@react-three/drei";

export const AnimatedSphere: FC = () => {
	return (
		<Float
			speed={4}
			rotationIntensity={1}
			floatIntensity={2}
			floatingRange={[-0.1, 0.1]}
		>
			<mesh>
				<torusKnotGeometry args={[1, 0.3, 100, 16]} />
				<MeshTransmissionMaterial
					backside
					samples={4}
					thickness={0.5}
					roughness={0}
					transmission={1}
					ior={1.5}
					chromaticAberration={0.5}
					anisotropy={1}
					distortion={1}
					distortionScale={0.1}
					temporalDistortion={0.1}
					metalness={0.1}
				/>
			</mesh>
		</Float>
	);
};
