"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const team = [
	{
		name: "Eyal Cumartersi",
		role: "Senior Tech Advisor",
		bio: "Experto en tecnologías emergentes y transformación digital. Líder en la implementación de soluciones innovadoras para empresas en Panamá y Latinoamérica.",
		expertise: [
			"Arquitectura de Sistemas",
			"IA & Machine Learning",
			"Cloud Computing",
		],
		image: "/team/eyal.png",
		linkedin: "https://linkedin.com/in/eyalcumartesi",
		email: "eyalcumartesi02@icloud.com",
	},
	{
		name: "David Garzon",
		role: "Director de Ventas",
		bio: "Especialista en desarrollo de negocios con más de una década de experiencia en el sector tecnológico. Enfocado en crear relaciones estratégicas y soluciones personalizadas.",
		expertise: [
			"Desarrollo de Negocios",
			"Estrategia Comercial",
			"Consultoría Tecnológica",
		],
		image: "/team/david.jpeg",
		linkedin: "https://www.linkedin.com/in/davidgarzon18/",
		email: "davidgarzon18@gmail.com",
	},
];

interface TeamMember {
	name: string;
	role: string;
	bio: string;
	expertise: string[];
	image: string;
	linkedin: string;
	email: string;
}

const TeamMemberCard = ({
	member,
	index,
}: {
	member: TeamMember;
	index: number;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2 }}
			className="relative"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-3xl transform -rotate-1" />
			<div className="absolute inset-0 bg-white rounded-3xl shadow-xl" />

			{/* Content */}
			<div className="relative p-8 md:p-10">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					{/* Image Column */}
					<div className="relative">
						<div className="aspect-square rounded-2xl overflow-hidden">
							<Image
								src={member.image}
								alt={member.name}
								fill
								className="object-cover"
							/>
						</div>
						{/* Social Links */}
						<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
							<motion.a
								href={member.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ y: -2 }}
								className="p-3 bg-blue-600 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
							>
								<Linkedin className="w-5 h-5" />
							</motion.a>
							<motion.a
								href={`mailto:${member.email}`}
								whileHover={{ y: -2 }}
								className="p-3 bg-gray-900 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
							>
								<Mail className="w-5 h-5" />
							</motion.a>
						</div>
					</div>

					{/* Info Column */}
					<div className="space-y-6">
						<div>
							<h3 className="text-2xl font-bold">{member.name}</h3>
							<p className="text-blue-600 font-medium">{member.role}</p>
						</div>

						<p className="text-gray-600">{member.bio}</p>

						<div className="space-y-3">
							<h4 className="text-sm font-semibold text-gray-900">
								Áreas de Expertise
							</h4>
							<div className="flex flex-wrap gap-2">
								{member.expertise.map((skill, idx) => (
									<span
										key={idx}
										className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<motion.button
							whileHover={{ gap: "0.75rem" }}
							className="flex items-center gap-2 text-blue-600 font-medium"
						>
							Agendar una llamada
							<ArrowUpRight className="w-4 h-4" />
						</motion.button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
//
const TeamSection = () => {
	return (
		<div className="py-24">
			<div className="max-w-6xl mx-auto px-4">
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="text-4xl md:text-5xl font-bold mb-6"
					>
						Conoce a Nuestro{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
							Equipo
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-xl text-gray-600"
					>
						Combinando experiencia técnica y visión comercial para transformar
						el futuro de tu negocio
					</motion.p>
				</div>

				{/* Team Grid */}
				<div className="grid md:grid-cols-2 gap-8 md:gap-12">
					{team.map((member, idx) => (
						<TeamMemberCard key={idx} member={member} index={idx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TeamSection;
