import { FC } from "react";
import { OrbitControls } from "@react-three/drei";
import { AnimatedSphere } from "./AnimatedSphere";
import { FloatingParticles } from "./FloatingParticles";

interface SceneProps {
	scrollProgress?: number;
}

export const Scene: FC<SceneProps> = ({ scrollProgress = 0 }) => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
			<AnimatedSphere />
			<FloatingParticles
				count={100}
				color="#2563EB"
				speed={0.4 + scrollProgress * 0.3}
			/>
			<OrbitControls enableZoom={false} />
		</>
	);
};
