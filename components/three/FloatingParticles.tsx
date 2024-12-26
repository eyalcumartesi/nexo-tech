import { Sparkles } from "@react-three/drei";
import { FloatingParticleProps } from "./types";

export const FloatingParticles = ({
	count,
	color,
	speed,
}: FloatingParticleProps) => {
	return (
		<Sparkles
			count={count}
			scale={6}
			size={2}
			speed={speed}
			color={color}
			opacity={0.5}
			noise={1.5}
		/>
	);
};
