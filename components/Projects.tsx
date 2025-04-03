"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowRight,
	Quote,
	Zap,
	Users,
	Globe,
	Database,
	Code,
	LineChart,
	Building2,
	Target,
} from "lucide-react";
import Image from "next/image";

const successCases = [
	{
		title: "Monse Ventures",
		client: "Marketplace de Marketing en Web3",
		description:
			"Plataforma innovadora que conecta empresas con servicios de marketing en el ecosistema Web3, ofreciendo paneles personalizados para diferentes roles.",
		metrics: [
			{ label: "Empresas Registradas", value: "50+", icon: Building2 },
			{ label: "Paneles Personalizados", value: "3", icon: Code },
			{ label: "Tecnologías", value: "4", icon: Globe },
		],
		tags: ["Web3", "E-commerce", "Next.js", "Blockchain"],
		image: "/projects/monseventures.png",
		link: "https://monseventures.com",
	},
	{
		title: "Credicorp Securities Admin",
		client: "Sistema de Gestión de Portafolios",
		description:
			"Sistema integral para la gestión y administración de portafolios financieros, con automatización completa de reportes y análisis.",
		metrics: [
			{ label: "Automatización", value: "100%", icon: Zap },
			{ label: "Eficiencia", value: "3X", icon: LineChart },
			{ label: "Tecnologías", value: "3", icon: Database },
		],
		tags: ["Fintech", "React", "Node.js", "PostgreSQL"],
		image: "/projects/credicorp-admin.jpeg",
		link: "https://credicorpbank.com",
	},
	{
		title: "CarePulse",
		client: "Sistema de Gestión para Clínicas",
		description:
			"Solución completa para la gestión de clínicas médicas, incluyendo administración de pacientes, inventarios y múltiples vistas especializadas.",
		metrics: [
			{ label: "Pacientes/Mes", value: "500+", icon: Users },
			{ label: "Optimización", value: "2X", icon: Target },
			{ label: "Vistas", value: "3", icon: Code },
		],
		tags: ["Healthcare", "Angular", "Django", "MySQL"],
		image: "/projects/carepulse.png",
		link: "https://carepulse-seven-khaki.vercel.app/",
	},
];

const testimonials = [
	{
		quote:
			"La plataforma desarrollada por Nexo Technologies nos permitió revolucionar la forma en que conectamos empresas con servicios de marketing en Web3.",
		author: "Equipo Monse Ventures",
		position: "Plataforma Web3",
		company: "Monse Ventures",
		image: "/projects/monseventures.png",
	},
	{
		quote:
			"La automatización y eficiencia que logramos con el sistema de gestión de portafolios superó todas nuestras expectativas.",
		author: "Equipo Credicorp",
		position: "Gestión de Portafolios",
		company: "Credicorp Securities",
		image: "/projects/credicorp-admin.jpeg",
	},
	{
		quote:
			"CarePulse transformó completamente la gestión de nuestra clínica, mejorando significativamente la experiencia tanto para pacientes como para el personal.",
		author: "Equipo CarePulse",
		position: "Gestión Clínica",
		company: "CarePulse",
		image: "/projects/carepulse.png",
	},
];

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
};

const Projects = () => {
	const [activeCase, setActiveCase] = useState(0);

	return (
		<div className="container mx-auto px-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					className="text-center mb-16"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
				>
					<h2 className="text-4xl font-bold mb-6">Proyectos Destacados</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Descubre cómo hemos ayudado a empresas a transformar sus operaciones
						a través de soluciones tecnológicas innovadoras.
					</p>
				</motion.div>

				{/* Success Cases */}
				<div className="grid lg:grid-cols-2 gap-12 mb-24">
					{/* Case Navigation */}
					<div className="space-y-4">
						{successCases.map((case_, idx) => (
							<motion.button
								key={idx}
								onClick={() => setActiveCase(idx)}
								className={`w-full text-left p-6 rounded-2xl transition-all ${
									activeCase === idx
										? "bg-blue-600 text-white shadow-lg"
										: "bg-white hover:bg-gray-50 shadow-sm"
								}`}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<h3 className="text-xl font-bold mb-2">{case_.title}</h3>
								<p
									className={`mb-4 ${
										activeCase === idx ? "text-blue-100" : "text-gray-600"
									}`}
								>
									{case_.client}
								</p>
								<div className="flex flex-wrap gap-2">
									{case_.tags.map((tag, tagIdx) => (
										<span
											key={tagIdx}
											className={`px-3 py-1 rounded-full text-sm ${
												activeCase === idx
													? "bg-blue-500 text-white"
													: "bg-gray-100 text-gray-600"
											}`}
										>
											{tag}
										</span>
									))}
								</div>
							</motion.button>
						))}
					</div>

					{/* Case Details */}
					<AnimatePresence mode="wait">
						<motion.div
							key={activeCase}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							className="bg-white rounded-2xl shadow-lg overflow-hidden"
						>
							<div className="aspect-video relative">
								<Image
									src={successCases[activeCase].image}
									alt={successCases[activeCase].title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold mb-4">
									{successCases[activeCase].title}
								</h3>
								<p className="text-gray-600 mb-6">
									{successCases[activeCase].description}
								</p>
								<div className="grid grid-cols-3 gap-6">
									{successCases[activeCase].metrics.map((metric, idx) => {
										const Icon = metric.icon;
										return (
											<div key={idx} className="text-center">
												<Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
												<div className="text-2xl font-bold text-gray-900">
													{metric.value}
												</div>
												<div className="text-sm text-gray-600">
													{metric.label}
												</div>
											</div>
										);
									})}
								</div>
								<a
									href={successCases[activeCase].link}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
								>
									Ver Proyecto
									<ArrowRight className="w-4 h-4" />
								</a>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Testimonials */}
				<div className="text-center mb-16">
					<h3 className="text-2xl font-bold mb-12">
						Lo que dicen nuestros clientes
					</h3>
					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, idx) => (
							<motion.div
								key={idx}
								variants={fadeInUp}
								initial="initial"
								animate="animate"
								transition={{ delay: idx * 0.2 }}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="w-16 h-16 relative mx-auto mb-6 rounded-full overflow-hidden">
									<Image
										src={testimonial.image}
										alt={testimonial.author}
										fill
										className="object-cover"
									/>
								</div>
								<Quote className="w-8 h-8 text-blue-600 mx-auto mb-4" />
								<p className="text-gray-600 mb-6 italic">
									&quot;{testimonial.quote}&quot;
								</p>
								<div>
									<div className="font-semibold">{testimonial.author}</div>
									<div className="text-sm text-gray-600">
										{testimonial.position}
									</div>
									<div className="text-sm text-gray-500">
										{testimonial.company}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA */}
				<motion.div
					variants={fadeInUp}
					initial="initial"
					animate="animate"
					className="text-center"
				>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
					>
						Conversemos sobre tu Proyecto
						<ArrowRight className="w-5 h-5" />
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Projects;
