"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	Linkedin,
	Instagram,
	Facebook,
	Twitter,
	Mail,
	Phone,
	MapPin,
	ArrowRight,
	Globe,
} from "lucide-react";

const footerLinks = {
	servicios: [
		{ name: "Desarrollo Personalizado", href: "/servicios/desarrollo" },
		{ name: "Integración de Sistemas", href: "/servicios/integracion" },
		{ name: "Soluciones AI", href: "/servicios/ai" },
		{ name: "Consultoría Tech", href: "/servicios/consultoria" },
	],
	empresa: [
		{ name: "Sobre Nosotros", href: "/nosotros" },
		{ name: "Equipo", href: "/equipo" },
		{ name: "Casos de Éxito", href: "/proyectos" },
		{ name: "Blog", href: "/blog" },
	],
	legal: [
		{ name: "Política de Privacidad", href: "/privacidad" },
		{ name: "Términos y Condiciones", href: "/terminos" },
		{ name: "Política de Cookies", href: "/cookies" },
	],
};

const socialLinks = [
	{
		icon: Linkedin,
		href: "https://linkedin.com/company/nexotech",
		label: "LinkedIn",
	},
	{
		icon: Instagram,
		href: "https://instagram.com/nexotech",
		label: "Instagram",
	},
	{ icon: Facebook, href: "https://facebook.com/nexotech", label: "Facebook" },
	{ icon: Twitter, href: "https://twitter.com/nexotech", label: "Twitter" },
];

const Footer = () => {
	return (
		<footer className="bg-gray-50 border-t border-gray-100">
			{/* Main Footer */}
			<div className="max-w-7xl mx-auto px-4 py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
					{/* Company Info */}
					<div className="lg:col-span-2 space-y-8">
						<Link href="/">
							<h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
								Nexo Tech
							</h2>
						</Link>
						<p className="text-gray-600 max-w-sm">
							Transformando el futuro digital de las empresas en Panamá y
							Latinoamérica con soluciones tecnológicas innovadoras.
						</p>

						{/* Contact Info */}
						<div className="space-y-4">
							<div className="flex items-center gap-3 text-gray-600">
								<Mail className="w-5 h-5 text-blue-600" />
								<a
									href="mailto:info@nexotech.com"
									className="hover:text-blue-600 transition-colors"
								>
									info@nexotech.com
								</a>
							</div>
							<div className="flex items-center gap-3 text-gray-600">
								<Phone className="w-5 h-5 text-blue-600" />
								<a
									href="tel:+50712345678"
									className="hover:text-blue-600 transition-colors"
								>
									+507 123 4567
								</a>
							</div>
							<div className="flex items-center gap-3 text-gray-600">
								<MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
								<span>Panama City Financial District, PH Nexo Tower</span>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex gap-4">
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<motion.a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 bg-white rounded-full border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
										whileHover={{ y: -2 }}
										aria-label={social.label}
									>
										<Icon className="w-5 h-5" />
									</motion.a>
								);
							})}
						</div>
					</div>

					{/* Links Sections */}
					<div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
						{/* Services */}
						<div>
							<h3 className="text-lg font-semibold mb-6">Servicios</h3>
							<ul className="space-y-4">
								{footerLinks.servicios.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
										>
											{link.name}
											<ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Company */}
						<div>
							<h3 className="text-lg font-semibold mb-6">Empresa</h3>
							<ul className="space-y-4">
								{footerLinks.empresa.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
										>
											{link.name}
											<ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Legal */}
						<div>
							<h3 className="text-lg font-semibold mb-6">Legal</h3>
							<ul className="space-y-4">
								{footerLinks.legal.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
										>
											{link.name}
											<ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-gray-600 text-sm">
							© {new Date().getFullYear()} Nexo Tech. Todos los derechos
							reservados.
						</div>
						<div className="flex items-center gap-3 text-sm text-gray-600">
							<Globe className="w-4 h-4" />
							<select className="bg-transparent border-none focus:ring-0 cursor-pointer">
								<option value="es">Español</option>
								<option value="en">English</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
