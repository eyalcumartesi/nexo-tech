import { FC } from "react";
import { motion } from "framer-motion";
import { FloatingCardProps } from "./types";

export const FloatingCard: FC<FloatingCardProps> = ({
	children,
	delay = 0,
	className = "",
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ delay, duration: 0.8 }}
		className={`relative ${className}`}
	>
		<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
		<div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
			{children}
		</div>
	</motion.div>
);
