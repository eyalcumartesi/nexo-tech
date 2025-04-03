"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedBackground from "./AnimatedBackground";

const BackgroundContainer = () => {
	return (
		<div className="absolute inset-0 -z-10">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<AnimatedBackground />
			</Canvas>
			<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
		</div>
	);
};

export default BackgroundContainer;
