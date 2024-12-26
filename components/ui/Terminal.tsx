import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TerminalProps } from "./types";

const TYPING_SPEED = 50;

export const Terminal: FC<TerminalProps> = ({ command, className = "" }) => {
	const [text, setText] = useState("");
	const fullText = `$ ${command}`;

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		let currentIndex = 0;

		const typeText = () => {
			if (currentIndex <= fullText.length) {
				setText(fullText.slice(0, currentIndex));
				currentIndex++;
				timeout = setTimeout(typeText, TYPING_SPEED);
			}
		};

		typeText();
		return () => clearTimeout(timeout);
	}, [command, fullText]);

	return (
		<div
			className={`bg-gray-900 rounded-lg p-4 font-mono text-sm ${className}`}
		>
			<div className="flex gap-1.5 mb-3">
				<div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
				<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
				<div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="text-green-400"
			>
				{text}
				<motion.span
					animate={{ opacity: [1, 0] }}
					transition={{ duration: 0.8, repeat: Infinity }}
				>
					_
				</motion.span>
			</motion.div>
		</div>
	);
};
