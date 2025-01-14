"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { CheckCircle, XCircle } from "lucide-react";

interface FormData {
	name: string;
	email: string;
	message: string;
	service: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

const ContactSection = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
		service: "desarrollo",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "El nombre es requerido";
		}

		if (!formData.email.trim()) {
			newErrors.email = "El email es requerido";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Email inválido";
		}

		if (!formData.message.trim()) {
			newErrors.message = "El mensaje es requerido";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: "" });

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Error al enviar el mensaje");
			}

			setSubmitStatus({
				type: "success",
				message: "¡Mensaje enviado correctamente!",
			});
			setFormData({
				name: "",
				email: "",
				message: "",
				service: "desarrollo",
			});
		} catch (error) {
			setSubmitStatus({
				type: "error",
				message:
					error instanceof Error ? error.message : "Error al enviar el mensaje",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="py-24 bg-blue-50/90 min-h-screen">
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
								href="mailto:eyalcumartesi02@icloud.com"
								className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors"
							>
								<Mail className="w-6 h-6 text-blue-600" />
								<div>
									<div className="font-medium">Email</div>
									<div className="text-gray-600">
										eyalcumartesi02@icloud.com
									</div>
								</div>
							</a>

							<a
								href="tel:+507 6980 3030"
								className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors"
							>
								<Phone className="w-6 h-6 text-blue-600" />
								<div>
									<div className="font-medium">Teléfono</div>
									<div className="text-gray-600">+507 6980-3030</div>
								</div>
							</a>

							<div className="flex items-center gap-4 p-4 bg-white rounded-xl">
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
					<div className="bg-white p-8 rounded-2xl shadow-sm">
						{submitStatus.type && (
							<div
								className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
									submitStatus.type === "success"
										? "bg-green-50 text-green-800 border border-green-200"
										: "bg-red-50 text-red-800 border border-red-200"
								}`}
							>
								{submitStatus.type === "success" ? (
									<CheckCircle className="w-5 h-5 text-green-500" />
								) : (
									<XCircle className="w-5 h-5 text-red-500" />
								)}
								<p className="text-sm">{submitStatus.message}</p>
							</div>
						)}

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
									className={`w-full p-3 rounded-xl border ${
										errors.name ? "border-red-500" : "border-gray-200"
									} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none`}
									placeholder="Tu nombre"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">{errors.name}</p>
								)}
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
									className={`w-full p-3 rounded-xl border ${
										errors.email ? "border-red-500" : "border-gray-200"
									} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none`}
									placeholder="tu@email.com"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">{errors.email}</p>
								)}
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
									className={`w-full p-3 rounded-xl border ${
										errors.message ? "border-red-500" : "border-gray-200"
									} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none`}
									placeholder="Cuéntanos sobre tu proyecto"
								/>
								{errors.message && (
									<p className="mt-1 text-sm text-red-500">{errors.message}</p>
								)}
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
							>
								{isSubmitting ? "Enviando..." : "Enviar Mensaje"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
