import { Service } from "@/types/services";

export interface FloatingParticleProps {
	count: number;
	color: string;
	speed: number;
}

export interface AnimatedSphereProps {
	targetPosition: [number, number, number];
	color: string;
}

export interface SceneProps {
	activeService: number;
	scrollProgress: number;
	services: Service[];
}
