// src/components/ServiceCard.tsx
import { FC } from "react";
import { motion } from "framer-motion";
import { Service } from "@/types/services";
import { FloatingCard } from "./FloatingCard";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
	service: Service;
	isActive: boolean;
	onClick: () => void;
	delay: number;
}

export const ServiceCard: FC<ServiceCardProps> = ({
	service,
	isActive,
	onClick,
	delay,
}) => {
	const Icon = service.icon;

	return (
		<FloatingCard delay={delay}>
			<motion.div
				className={`p-6 cursor-pointer transition-colors duration-300 rounded-xl ${
					isActive ? "bg-blue-50/50 hover:bg-blue-50/70" : "hover:bg-gray-50/50"
				}`}
				onClick={onClick}
				whileHover={{ x: 10 }}
				whileTap={{ scale: 0.98 }}
			>
				<div className="flex items-start gap-4">
					<motion.div
						className={`p-3 rounded-xl shadow-lg bg-gradient-to-br ${
							service.color === "from-blue-500 to-blue-600"
								? "from-blue-500 to-blue-600"
								: service.color === "from-purple-500 to-purple-600"
								? "from-purple-500 to-purple-600"
								: "from-cyan-500 to-blue-500"
						}`}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Icon className="w-6 h-6 text-white " strokeWidth={2} />
					</motion.div>
					<div className="flex-1">
						<h3 className="text-xl font-semibold text-gray-900">
							{service.title}
						</h3>
						<p className="mt-2 text-gray-600">{service.description}</p>
						<div className="mt-4 flex flex-wrap gap-2">
							{service.keywords.map((keyword, kidx) => (
								<motion.span
									key={kidx}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: delay + kidx * 0.1 }}
									className="px-3 py-1 text-sm rounded-full bg-blue-100/50 text-blue-700 hover:bg-blue-100/70 transition-colors"
								>
									{keyword}
								</motion.span>
							))}
						</div>
					</div>
					<motion.div
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
						className="flex items-center"
					>
						{isActive && <ChevronRight className="w-5 h-5 text-blue-500" />}
					</motion.div>
				</div>
			</motion.div>
		</FloatingCard>
	);
};
