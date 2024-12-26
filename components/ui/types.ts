import { ReactNode } from "react";

export interface GlowingTextProps {
	children: ReactNode;
	className?: string;
}

export interface FloatingCardProps {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export interface TerminalProps {
	command: string;
	className?: string;
}
