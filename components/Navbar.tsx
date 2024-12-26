"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LightbulbIcon, Phone, MenuIcon, X } from "lucide-react";
import Image from "next/image";

interface NavItem {
	name: string;
	href: string;
	icon: React.ElementType;
	color: string;
}

const navItems: NavItem[] = [
	{
		name: "Inicio",
		href: "/",
		icon: Home,
		color: "from-blue-600 to-cyan-500",
	},
	{
		name: "Proyectos",
		href: "/proyectos",
		icon: LightbulbIcon,
		color: "from-purple-600 to-pink-500",
	},
	{
		name: "Contacto",
		href: "/contact",
		icon: Phone,
		color: "from-green-500 to-emerald-500",
	},
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hoveredItem, setHoveredItem] = useState<number | null>(null);
	const pathname = usePathname();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
			{/* Desktop Navigation */}
			<div className="max-w-7xl mx-auto">
				<div className="relative flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="relative z-10">
						<motion.div
							className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Image
								src="/logos/namelogo.png"
								alt="Nexotech"
								width={120}
								height={40}
							/>
						</motion.div>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-2">
						<div className="relative p-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
							{/* Background Gradient */}
							<motion.div
								className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-20 transition-opacity duration-300"
								style={{
									background:
										hoveredItem !== null
											? `linear-gradient(to right, ${navItems[hoveredItem].color})`
											: "none",
								}}
							/>

							{/* Navigation Items */}
							<div className="relative flex gap-2">
								{navItems.map((item, idx) => {
									const Icon = item.icon;
									const isActive = pathname === item.href;

									return (
										<Link key={item.href} href={item.href}>
											<motion.div
												className={`relative px-4 py-2 rounded-xl cursor-pointer ${
													isActive ? "text-white" : "text-gray-700"
												}`}
												onHoverStart={() => setHoveredItem(idx)}
												onHoverEnd={() => setHoveredItem(null)}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												{isActive && (
													<motion.div
														className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color}`}
														layoutId="activeNav"
														transition={{
															type: "spring",
															bounce: 0.2,
															duration: 0.6,
														}}
													/>
												)}
												<div className="relative flex items-center gap-2">
													<Icon className="w-4 h-4" />
													<span className="font-medium">{item.name}</span>
												</div>
											</motion.div>
										</Link>
									);
								})}
							</div>
						</div>
					</div>

					{/* Mobile Menu Button */}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => setIsOpen(!isOpen)}
						className="relative z-10 md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20"
					>
						{isOpen ? <X /> : <MenuIcon />}
					</motion.button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="absolute inset-x-0 top-full p-4 md:hidden"
					>
						<div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
							<div className="flex flex-col gap-2">
								{navItems.map((item) => {
									const Icon = item.icon;
									const isActive = pathname === item.href;

									return (
										<Link key={item.href} href={item.href}>
											<motion.div
												className={`p-3 rounded-xl cursor-pointer ${
													isActive
														? "bg-gradient-to-r text-white"
														: "hover:bg-white/10"
												} ${item.color}`}
												whileHover={{ x: 10 }}
												whileTap={{ scale: 0.98 }}
											>
												<div className="flex items-center gap-3">
													<Icon className="w-5 h-5" />
													<span className="font-medium">{item.name}</span>
												</div>
											</motion.div>
										</Link>
									);
								})}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
