import { LucideIcon } from "lucide-react";

export interface Service {
	icon: LucideIcon;
	title: string;
	description: string;
	color: string;
	command: string;
	keywords: string[];
	features: string[];
}
