"use client";

import React, { useState, useRef, useCallback } from "react";
import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
} from "framer-motion";
import { GlowingText, FloatingCard, Terminal } from "./ui";
import { services } from "@/constants/services";
import { ServiceCard } from "./ui/ServiceCard";

// Animation variants for better reuse and consistency
const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

const slideIn = {
	initial: { opacity: 0, x: -10 },
	animate: { opacity: 1, x: 0 },
};

// Subcomponents for better organization

const ServiceDetails = ({ service }: { service: (typeof services)[0] }) => (
	<motion.div
		variants={fadeInUp}
		initial="initial"
		animate="animate"
		exit="exit"
		className="space-y-6"
	>
		<Terminal command={service.command} />
		<div className="space-y-4">
			<h4 className="text-lg font-semibold text-gray-900">
				Características Principales
			</h4>
			<div className="grid grid-cols-1 gap-3">
				{service.features.map((feature, idx) => (
					<motion.div
						key={idx}
						variants={slideIn}
						initial="initial"
						animate="animate"
						transition={{ delay: idx * 0.1 }}
						className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
					>
						<motion.div
							className="w-2 h-2 rounded-full bg-blue-500"
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 1, repeat: Infinity }}
						/>
						<span className="text-gray-700">{feature}</span>
					</motion.div>
				))}
			</div>
		</div>
	</motion.div>
);

export const Hero: React.FC = () => {
	const [activeService, setActiveService] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	const handleServiceChange = useCallback((index: number) => {
		setActiveService(index);
	}, []);

	return (
		<div ref={containerRef} className="relative min-h-screen">
			{/* Background Effects */}
			{/* <div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0">
					<Canvas camera={{ position: [0, 0, 5] }}>
						<Scene scrollProgress={scrollYProgress.get()} />
					</Canvas>
				</div>
				<motion.div
					style={{ y: bgY }}
					className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"
				/>
			</div> */}

			{/* Content */}
			<div className="relative">
				{/* Hero Header */}
				<motion.div
					style={{ y: textY }}
					className="container mx-auto px-4 text-center mb-24"
				>
					<motion.h1
						className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
						variants={fadeInUp}
						initial="initial"
						animate="animate"
					>
						<GlowingText>Transforma tu Empresa</GlowingText>
						<br />
						<span className="text-gray-900">con Tecnología</span>
					</motion.h1>
					<motion.p
						className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
						variants={fadeInUp}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.3 }}
					>
						Soluciones personalizadas que impulsan la innovación y el
						crecimiento
					</motion.p>
				</motion.div>

				{/* Services Grid */}
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
						{/* Service Cards */}
						<div className="space-y-6">
							{services.map((service, idx) => (
								<ServiceCard
									key={idx}
									service={service}
									isActive={activeService === idx}
									onClick={() => handleServiceChange(idx)}
									delay={idx * 0.2}
								/>
							))}
						</div>

						{/* Active Service Details */}
						<div className="sticky top-24">
							<FloatingCard className="overflow-hidden">
								<div className="p-8 space-y-6">
									<AnimatePresence mode="wait">
										<ServiceDetails
											key={activeService}
											service={services[activeService]}
										/>
									</AnimatePresence>
								</div>
							</FloatingCard>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
