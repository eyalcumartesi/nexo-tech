"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		service: "desarrollo",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log(formData);
	};

	return (
		<div className="py-24 bg-blue-50/90 h-screen">
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-start">
					{/* Contact Info */}
					<div>
						<h2 className="text-4xl font-bold mb-8">
							Conversemos sobre tu
							<br />
							<span className="text-blue-600">Próximo Proyecto</span>
						</h2>

						<p className="text-lg text-gray-600 mb-12">
							Estamos aquí para ayudarte a transformar tu visión en realidad.
							Contáctanos y descubre cómo podemos impulsar tu negocio.
						</p>

						<div className="space-y-6">
							<a
								href="mailto:info@nexotech.com"
								className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
							>
								<Mail className="w-6 h-6 text-blue-600" />
								<div>
									<div className="font-medium">Email</div>
									<div className="text-gray-600">info@nexotech.com</div>
								</div>
							</a>

							<a
								href="tel:+50712345678"
								className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
							>
								<Phone className="w-6 h-6 text-blue-600" />
								<div>
									<div className="font-medium">Teléfono</div>
									<div className="text-gray-600">+507 123 4567</div>
								</div>
							</a>

							<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
								<MapPin className="w-6 h-6 text-blue-600" />
								<div>
									<div className="font-medium">Ubicación</div>
									<div className="text-gray-600">
										Panama City Financial District
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-gray-50 p-8 rounded-2xl">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Servicio de Interés
								</label>
								<select
									value={formData.service}
									onChange={(e) =>
										setFormData({ ...formData, service: e.target.value })
									}
									className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
								>
									<option value="desarrollo">Desarrollo Personalizado</option>
									<option value="integracion">Integración de Sistemas</option>
									<option value="ai">Soluciones AI</option>
									<option value="consultoria">Consultoría Tech</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Nombre
								</label>
								<input
									type="text"
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
									placeholder="Tu nombre"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Email
								</label>
								<input
									type="email"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
									placeholder="tu@email.com"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Mensaje
								</label>
								<textarea
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
									rows={4}
									className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
									placeholder="Cuéntanos sobre tu proyecto"
								/>
							</div>

							<motion.button
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								type="submit"
								className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
							>
								Enviar Mensaje
							</motion.button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
