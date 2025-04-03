"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Shield } from "lucide-react";
import Image from "next/image";

interface Value {
	icon: React.ElementType;
	title: string;
	description: string;
}

const values: Value[] = [
	{
		icon: Lightbulb,
		title: "Innovación",
		description:
			"Buscamos constantemente nuevas formas de resolver desafíos empresariales con tecnología de vanguardia.",
	},
	{
		icon: Zap,
		title: "Eficiencia",
		description:
			"Optimizamos cada proceso para maximizar el valor y minimizar el esfuerzo.",
	},
	{
		icon: Shield,
		title: "Transparencia",
		description:
			"Mantenemos una comunicación clara y honesta en cada etapa del proyecto.",
	},
];

const AboutUs: React.FC = () => {
	const staggerDelay = 0.1;

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * staggerDelay,
				duration: 0.5,
				ease: "easeOut",
			},
		}),
	};

	const fadeIn = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6 },
		},
	};

	const slideIn = {
		hidden: { x: -60, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 15,
			},
		},
	};

	return (
		<section className="py-24 relative overflow-hidden">
			{/* Abstract Background Elements */}
			<div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<motion.div
						className="text-center mb-24"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={fadeIn}
					>
						<span className="text-blue-600 font-medium tracking-wider text-sm uppercase mb-3 inline-block">
							QUIÉNES SOMOS
						</span>
						<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
							Nuestra Historia y Visión
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							En <span className="font-semibold">Nexo Technologies</span>,
							creemos en el poder de la tecnología para transformar empresas y
							liberar el potencial humano.
						</p>
					</motion.div>

					{/* Story Section */}
					<div className="grid md:grid-cols-2 gap-16 items-center mb-32">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={slideIn}
						>
							<span className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-4 inline-block">
								NUESTRA HISTORIA
							</span>
							<h2 className="text-3xl font-bold mb-6">
								De la visión a la transformación digital
							</h2>
							<p className="text-gray-600 mb-6 text-lg">
								Fundada en Panamá, Nexo Technologies nació de la visión de un
								grupo de expertos en tecnología y finanzas que identificaron la
								necesidad de transformar los procesos administrativos y
								financieros de las empresas latinoamericanas.
							</p>
							<p className="text-gray-600 mb-8 text-lg">
								Hoy, nos enorgullece ser líderes en la digitalización de
								procesos empresariales, ayudando a organizaciones a alcanzar su
								máximo potencial a través de soluciones tecnológicas
								innovadoras.
							</p>
						</motion.div>

						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={fadeIn}
							className="relative"
						>
							<div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
								<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 mix-blend-overlay z-10" />
								<div className="relative w-full h-full">
									<Image
										src="/images/about-us.jpg"
										alt="Nuestro equipo trabajando juntos"
										fill
										className="object-cover"
										priority
									/>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Values Section */}
					<motion.div
						className="text-center mb-24"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={fadeIn}
					>
						<span className="text-blue-600 font-medium tracking-wider text-sm uppercase mb-3 inline-block">
							LO QUE NOS DEFINE
						</span>
						<h2 className="text-4xl font-bold mb-16">Nuestros Valores</h2>

						<div className="grid md:grid-cols-3 gap-8">
							{values.map((value, index: number) => (
								<motion.div
									key={index}
									custom={index}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, margin: "-50px" }}
									variants={cardVariants}
									whileHover={{ y: -8, transition: { duration: 0.3 } }}
									className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
								>
									<div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl mx-auto mb-6">
										<value.icon className="w-8 h-8" />
									</div>
									<h3 className="text-xl font-bold mb-4">{value.title}</h3>
									<p className="text-gray-600">{value.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Call to Action */}
					<motion.div
						className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-2xl"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={fadeIn}
					>
						<h3 className="text-3xl font-bold mb-4">
							¿Listo para transformar tu negocio?
						</h3>
						<p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
							Descubre cómo nuestras soluciones tecnológicas pueden impulsar el
							crecimiento y la eficiencia de tu empresa.
						</p>
						<motion.a
							href="/#contact"
							className="inline-block bg-white text-blue-600 font-medium px-8 py-3 rounded-lg shadow-lg"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
						>
							Contáctanos hoy
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
