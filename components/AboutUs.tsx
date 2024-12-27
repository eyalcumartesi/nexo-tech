"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Target } from "lucide-react";

// Animation variants
const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
};

const slideIn = {
	initial: { opacity: 0, x: -20 },
	animate: { opacity: 1, x: 0 },
};

const scaleIn = {
	initial: { scale: 0.8, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
};

const AboutUs = () => {
	// Memoized data
	const stats = useMemo(
		() => [
			{ number: "200+", label: "Proyectos Exitosos" },
			{ number: "50+", label: "Expertos Tech" },
			{ number: "98%", label: "Satisfacción" },
			{ number: "24/7", label: "Soporte" },
		],
		[]
	);

	const approaches = useMemo(
		() => [
			{
				title: "Innovación Constante",
				description:
					"Nos mantenemos a la vanguardia de las últimas tecnologías.",
				icon: Rocket,
				color: "bg-blue-500",
			},
			{
				title: "Soluciones a Medida",
				description:
					"Desarrollamos estrategias personalizadas para cada cliente.",
				icon: Target,
				color: "bg-purple-500",
			},
			{
				title: "Excelencia Técnica",
				description: "Nuestro equipo está formado por expertos en tecnología.",
				icon: Code2,
				color: "bg-pink-500",
			},
		],
		[]
	);

	const technologies = useMemo(
		() => [
			"React",
			"Node.js",
			"Python",
			"AWS",
			"Docker",
			"Kubernetes",
			"TensorFlow",
			"PostgreSQL",
			"MongoDB",
			"Redis",
		],
		[]
	);

	return (
		<div className="relative bg-black text-white overflow-hidden">
			<div className="grid md:grid-cols-2 min-h-[80vh]">
				{/* Left Column */}
				<div className="relative p-6 md:p-12 lg:p-16">
					{/* Background Pattern */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
						<div
							className="absolute inset-0 opacity-20 mix-blend-overlay"
							aria-hidden="true"
						>
							<svg className="w-full h-full" viewBox="0 0 100 100">
								<pattern
									id="grid"
									width="8"
									height="8"
									patternUnits="userSpaceOnUse"
								>
									<path
										d="M 8 0 L 0 0 0 8"
										fill="none"
										stroke="white"
										strokeWidth="0.5"
									/>
								</pattern>
								<rect width="100%" height="100%" fill="url(#grid)" />
							</svg>
						</div>
					</div>

					{/* Content */}
					<div className="relative z-10 h-full flex flex-col justify-between">
						<div className="mb-12 md:mb-0">
							<motion.h2
								variants={slideIn}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
								className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
							>
								Innovación
								<br />
								sin Límites
							</motion.h2>
							<motion.p
								variants={fadeIn}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
								className="text-lg md:text-xl max-w-md"
							>
								Transformamos ideas en soluciones tecnológicas que impulsan el
								futuro de los negocios en Panamá y Latinoamérica.
							</motion.p>
						</div>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 gap-4 md:gap-8">
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									variants={fadeIn}
									initial="initial"
									whileInView="animate"
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="group relative"
								>
									<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300" />
									<div className="relative bg-black p-4 md:p-6 rounded-lg">
										<div className="text-2xl md:text-4xl font-bold">
											{stat.number}
										</div>
										<div className="text-xs md:text-sm text-gray-400">
											{stat.label}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className="bg-zinc-900 p-6 md:p-12 lg:p-16 relative">
					{/* Decorative Gradients */}
					<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-20" />
					<div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500 to-pink-500 blur-3xl opacity-20" />

					{/* Content */}
					<div className="relative z-10 space-y-8 md:space-y-12">
						{/* Approaches */}
						<div>
							<h3 className="text-xl md:text-2xl font-semibold mb-6">
								Nuestro Enfoque
							</h3>
							<div className="space-y-4">
								{approaches.map((item, index) => {
									const Icon = item.icon;
									return (
										<motion.div
											key={index}
											variants={fadeIn}
											initial="initial"
											whileInView="animate"
											viewport={{ once: true }}
											transition={{ delay: index * 0.2 }}
											className="flex items-start gap-4 p-4 md:p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:bg-zinc-800/70 transition-colors duration-300"
										>
											<div className={`p-3 rounded-lg ${item.color} shrink-0`}>
												<Icon className="w-5 h-5 md:w-6 md:h-6" />
											</div>
											<div>
												<h4 className="text-base md:text-lg font-semibold mb-2">
													{item.title}
												</h4>
												<p className="text-sm md:text-base text-gray-400">
													{item.description}
												</p>
											</div>
										</motion.div>
									);
								})}
							</div>
						</div>

						{/* Technologies */}
						<div>
							<h3 className="text-xl md:text-2xl font-semibold mb-6">
								Tecnologías
							</h3>
							<div className="flex flex-wrap gap-2 md:gap-3">
								{technologies.map((tech, index) => (
									<motion.div
										key={tech}
										variants={scaleIn}
										initial="initial"
										whileInView="animate"
										viewport={{ once: true }}
										transition={{ delay: index * 0.05 }}
										className="px-3 py-1.5 md:px-4 md:py-2 bg-zinc-800 rounded-lg text-xs md:text-sm border border-zinc-700/50 hover:border-zinc-600 transition-colors duration-300"
									>
										{tech}
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
