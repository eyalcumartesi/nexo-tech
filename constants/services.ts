// src/data/services.ts
import { Service } from "@/types/services";
import { Brain, Code, Layers } from "lucide-react";

export const services: Service[] = [
	{
		icon: Code,
		title: "Desarrollo Personalizado",
		description:
			"Soluciones digitales de vanguardia diseñadas para el futuro de tu negocio.",
		color: "from-blue-500 to-blue-600",
		command: "nexo construir --modo=futuro",
		keywords: ["Innovación", "Escalabilidad", "Rendimiento"],
		features: ["Cloud-Native", "Microservicios", "API-First"],
	},
	{
		icon: Layers,
		title: "Integración de Sistemas",
		description:
			"Transformamos sistemas existentes en soluciones modernas manteniendo el valor empresarial.",
		color: "from-purple-500 to-purple-600",
		command: "nexo transformar --preservar-logica",
		keywords: ["Integración", "Modernización", "Migración"],
		features: [
			"Cero Tiempo Muerto",
			"Integridad de Datos",
			"Transición Fluida",
		],
	},
	{
		icon: Brain,
		title: "Soluciones de IA",
		description:
			"Aprovecha el poder de la inteligencia artificial para automatizar y optimizar tus procesos.",
		color: "from-cyan-500 to-blue-500",
		command: "nexo optimizar --con=ia",
		keywords: ["Inteligencia", "Automatización", "Aprendizaje"],
		features: ["Machine Learning", "Redes Neuronales", "Visión Artificial"],
	},
];
