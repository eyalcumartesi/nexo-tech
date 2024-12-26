"use client";

import React from "react";
import { motion } from "framer-motion";

import { Code2, Rocket, Target } from "lucide-react";

const AboutUs = () => {
	const stats = [
		{ number: "200+", label: "Proyectos Exitosos" },
		{ number: "50+", label: "Expertos Tech" },
		{ number: "98%", label: "Satisfacción" },
		{ number: "24/7", label: "Soporte" },
	];

	return (
		<section className="relative bg-black text-white">
			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2">
				{/* Left Column - Interactive Content */}
				<div className="relative h-screen lg:h-auto">
					{/* Background Video or Image */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
						<div className="absolute inset-0 opacity-20 mix-blend-overlay">
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
					<div className="relative z-10 h-full flex flex-col justify-between p-12">
						<div>
							<motion.h2
								initial={{ x: -20, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								className="text-7xl font-bold mb-8"
							>
								Innovación
								<br />
								sin Límites
							</motion.h2>
							<motion.p
								initial={{ y: 20, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="text-xl max-w-md"
							>
								Transformamos ideas en soluciones tecnológicas que impulsan el
								futuro de los negocios en Panamá y Latinoamérica.
							</motion.p>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-2 gap-8">
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									initial={{ y: 20, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ delay: index * 0.1 }}
									className="relative"
								>
									<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition" />
									<div className="relative bg-black p-6 rounded-lg">
										<div className="text-4xl font-bold">{stat.number}</div>
										<div className="text-sm text-gray-400">{stat.label}</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Right Column - Visual Content */}
				<div className="bg-zinc-900 h-screen lg:h-auto p-12 relative">
					{/* Decorative Elements */}
					<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-20" />
					<div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500 to-pink-500 blur-3xl opacity-20" />

					{/* Content */}
					<div className="relative z-10 h-full flex flex-col justify-between">
						<div className="space-y-12">
							<div>
								<h3 className="text-2xl font-semibold mb-6">Nuestro Enfoque</h3>
								<div className="space-y-4">
									{[
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
											description:
												"Nuestro equipo está formado por expertos en tecnología.",
											icon: Code2,
											color: "bg-pink-500",
										},
									].map((item, index) => {
										const Icon = item.icon;
										return (
											<motion.div
												key={index}
												initial={{ x: 20, opacity: 0 }}
												whileInView={{ x: 0, opacity: 1 }}
												transition={{ delay: index * 0.2 }}
												className="flex items-start gap-4 p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50"
											>
												<div className={`p-3 rounded-lg ${item.color}`}>
													<Icon className="w-6 h-6" />
												</div>
												<div>
													<h4 className="text-lg font-semibold mb-2">
														{item.title}
													</h4>
													<p className="text-gray-400">{item.description}</p>
												</div>
											</motion.div>
										);
									})}
								</div>
							</div>

							<div>
								<h3 className="text-2xl font-semibold mb-6">Tecnologías</h3>
								<div className="flex flex-wrap gap-3">
									{[
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
									].map((tech, index) => (
										<motion.div
											key={tech}
											initial={{ scale: 0, opacity: 0 }}
											whileInView={{ scale: 1, opacity: 1 }}
											transition={{ delay: index * 0.05 }}
											className="px-4 py-2 bg-zinc-800 rounded-lg text-sm border border-zinc-700/50"
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
		</section>
	);
};

export default AboutUs;
