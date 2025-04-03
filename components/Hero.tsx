"use client";

import React, { useState, useRef, useCallback } from "react";
import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
} from "framer-motion";
import { GlowingText, FloatingCard } from "./ui";
import { services } from "@/constants/services";
import { ArrowRight, Code, CheckCircle2 } from "lucide-react";
import BackgroundContainer from "./three/BackgroundContainer";

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

const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
};

const stats = [
	{ value: "5+", label: "Empresas Digitalizadas" },
	{ value: "40%", label: "Reducción Operativa" },

	{ value: "100%", label: "Satisfacción del Cliente" },
	{ value: "24/7", label: "Soporte Técnico" },
];

const StatsSection = () => (
	<motion.div
		variants={fadeIn}
		initial="initial"
		animate="animate"
		className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
	>
		{stats.map((stat, idx) => (
			<motion.div
				key={idx}
				variants={fadeInUp}
				initial="initial"
				animate="animate"
				transition={{ delay: idx * 0.1 }}
				className="text-center"
			>
				<div className="text-4xl font-bold text-blue-600 mb-2">
					{stat.value}
				</div>
				<div className="text-gray-600">{stat.label}</div>
			</motion.div>
		))}
	</motion.div>
);

// Subcomponents for better organization
const ServiceDetails = ({ service }: { service: (typeof services)[0] }) => (
	<motion.div
		variants={fadeInUp}
		initial="initial"
		animate="animate"
		exit="exit"
		className="space-y-8"
	>
		<div className="flex items-center gap-4 mb-6">
			<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
				<Code className="w-6 h-6 text-blue-600" />
			</div>
			<div>
				<h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
				<p className="text-gray-600">{service.description}</p>
			</div>
		</div>

		<div className="space-y-6">
			<div>
				<h4 className="text-lg font-semibold text-gray-900 mb-4">
					Características Principales
				</h4>
				<div className="grid grid-cols-1 gap-4">
					{service.features.map((feature, idx) => (
						<motion.div
							key={idx}
							variants={slideIn}
							initial="initial"
							animate="animate"
							transition={{ delay: idx * 0.1 }}
							className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							<CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<span className="text-gray-700">{feature}</span>
						</motion.div>
					))}
				</div>
			</div>

			<div>
				<h4 className="text-lg font-semibold text-gray-900 mb-4">
					Tecnologías Utilizadas
				</h4>
				<div className="flex flex-wrap gap-2">
					{service.keywords.map((keyword, idx) => (
						<span
							key={idx}
							className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600"
						>
							{keyword}
						</span>
					))}
				</div>
			</div>

			<div className="pt-4">
				<a
					href="#contact"
					className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
				>
					Solicitar Información
					<ArrowRight className="w-4 h-4" />
				</a>
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
			<BackgroundContainer />

			{/* Content */}
			<div className="relative">
				{/* Hero Header */}
				<motion.div
					style={{ y: textY }}
					className="container mx-auto px-4 text-center mb-12"
				>
					<motion.h1
						className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
						variants={fadeInUp}
						initial="initial"
						animate="animate"
					>
						<GlowingText>Digitaliza tus Procesos</GlowingText>
						<br />
						<span className="text-gray-900">con Nexo </span>
					</motion.h1>
					<motion.p
						className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
						variants={fadeInUp}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.3 }}
					>
						Ayudamos a empresas a liberar a sus equipos para enfocarse en
						actividades de mayor valor
					</motion.p>
					<motion.div
						variants={fadeInUp}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.6 }}
					>
						<a
							href="#contact"
							className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
						>
							Conversemos sobre tu Proyecto
						</a>
					</motion.div>
				</motion.div>

				{/* Stats Section */}
				<StatsSection />

				{/* Services Section */}
				<div className="container mx-auto px-4 mt-24">
					<motion.div
						variants={fadeInUp}
						initial="initial"
						animate="animate"
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-bold mb-6">Nuestros Servicios</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Soluciones tecnológicas innovadoras para transformar tu negocio
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
						{/* Service Cards */}
						<div className="space-y-4">
							{services.map((service, idx) => (
								<motion.button
									key={idx}
									onClick={() => handleServiceChange(idx)}
									className={`w-full text-left p-6 rounded-2xl transition-all ${
										activeService === idx
											? "bg-blue-600 text-white shadow-lg"
											: "bg-white hover:bg-gray-50 shadow-sm"
									}`}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="flex items-center gap-4">
										<div
											className={`w-12 h-12 rounded-xl flex items-center justify-center ${
												activeService === idx ? "bg-blue-500" : "bg-blue-100"
											}`}
										>
											<Code
												className={`w-6 h-6 ${
													activeService === idx ? "text-white" : "text-blue-600"
												}`}
											/>
										</div>
										<div>
											<h3 className="text-xl font-bold mb-1">
												{service.title}
											</h3>
											<p
												className={`${
													activeService === idx
														? "text-blue-100"
														: "text-gray-600"
												}`}
											>
												{service.description}
											</p>
										</div>
									</div>
								</motion.button>
							))}
						</div>

						{/* Active Service Details */}
						<div className="sticky top-24">
							<FloatingCard className="overflow-hidden">
								<div className="p-8">
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
