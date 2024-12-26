import { FC } from "react";
import { motion } from "framer-motion";
import { GlowingTextProps } from "./types";

export const GlowingText: FC<GlowingTextProps> = ({
	children,
	className = "",
}) => (
	<motion.span
		className={`relative inline-block ${className}`}
		whileHover={{ scale: 1.05 }}
		transition={{ duration: 0.3 }}
	>
		<span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
			{children}
		</span>
		<motion.span
			className="absolute inset-0 bg-blue-500/20 blur-xl"
			animate={{
				opacity: [0.5, 0.8, 0.5],
				scale: [1, 1.05, 1],
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
			}}
		/>
	</motion.span>
);
