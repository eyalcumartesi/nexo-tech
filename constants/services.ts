// src/data/services.ts
import { Service } from "@/types/services";
import { Brain, Code, Layers, LineChart } from "lucide-react";

export const services: Service[] = [
	{
		icon: Code,
		title: "Automatización de Procesos",
		description:
			"Eliminamos tareas repetitivas con tecnología avanzada, permitiendo a tu equipo enfocarse en actividades estratégicas.",
		color: "from-blue-500 to-blue-600",
		command: "nexo automatizar --proceso=repetitivo",
		keywords: ["Automatización", "Eficiencia", "Productividad"],
		features: [
			"Workflow Automation",
			"RPA (Robotic Process Automation)",
			"Integración con Sistemas Existentes",
		],
	},
	{
		icon: Layers,
		title: "Integraciones Financieras",
		description:
			"Conectamos plataformas bancarias y contables para un flujo de trabajo sin interrupciones.",
		color: "from-purple-500 to-purple-600",
		command: "nexo integrar --sistema=financiero",
		keywords: ["Integración", "Finanzas", "Contabilidad"],
		features: [
			"APIs Bancarias",
			"Sistemas Contables",
			"Reportes Automatizados",
		],
	},
	{
		icon: Brain,
		title: "Desarrollo de Software a Medida",
		description:
			"Soluciones tecnológicas personalizadas que se adaptan perfectamente a las necesidades específicas de tu empresa.",
		color: "from-cyan-500 to-blue-500",
		command: "nexo desarrollar --modo=personalizado",
		keywords: ["Personalización", "Innovación", "Escalabilidad"],
		features: ["Arquitectura Moderna", "Cloud-Native", "Seguridad Empresarial"],
	},
	{
		icon: LineChart,
		title: "Consultoría en Transformación Digital",
		description:
			"Estrategia y ejecución completa para la digitalización de tu empresa, desde la planificación hasta la implementación.",
		color: "from-green-500 to-emerald-600",
		command: "nexo transformar --estrategia=digital",
		keywords: ["Estrategia", "Transformación", "Innovación"],
		features: [
			"Análisis de Procesos",
			"Plan de Implementación",
			"Capacitación de Equipos",
		],
	},
];
