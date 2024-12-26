"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { projects } from "@/constants/projects";

// Componentes separados para mejor organización
interface ProjectMetricProps {
	metric: string;
	label: string;
}

const ProjectMetric = ({ metric, label }: ProjectMetricProps) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		className="text-white"
	>
		<div className="text-2xl md:text-3xl font-bold">{metric}</div>
		<div className="text-xs md:text-sm opacity-80">{label}</div>
	</motion.div>
);

interface NavigationButtonsProps {
	onPrev: () => void;
	onNext: () => void;
}

const NavigationButtons = ({ onPrev, onNext }: NavigationButtonsProps) => (
	<div className="flex gap-4">
		<button
			onClick={onPrev}
			className="p-3 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
		>
			<ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
		</button>
		<button
			onClick={onNext}
			className="p-3 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
		>
			<ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
		</button>
	</div>
);

const ProjectGallery = () => {
	const [activeProject, setActiveProject] = useState(0);
	const galleryRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: galleryRef,
		offset: ["start end", "end start"],
	});

	const nextProject = () =>
		setActiveProject((prev) => (prev + 1) % projects.length);
	const prevProject = () =>
		setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);

	return (
		<section
			ref={galleryRef}
			className="min-h-screen bg-white relative overflow-hidden py-10 md:py-20"
		>
			{/* Timeline (hidden on mobile) */}
			<div className="hidden md:block absolute top-0 left-0 w-2 h-full">
				<div className="sticky top-0 h-screen flex items-center">
					<motion.div
						className="w-0.5 bg-gray-200 h-full relative"
						style={{ scaleY: scrollYProgress }}
					>
						{projects.map((_, idx) => (
							<motion.div
								key={idx}
								className={`absolute w-4 h-4 -left-1.5 rounded-full transition-colors duration-300
                  ${idx === activeProject ? "bg-blue-500" : "bg-gray-300"}`}
								style={{ top: `${(idx / (projects.length - 1)) * 100}%` }}
								whileHover={{ scale: 1.5 }}
								onClick={() => setActiveProject(idx)}
							/>
						))}
					</motion.div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-[95vw] md:max-w-[90vw] mx-auto md:pl-20">
				{/* Header and Navigation */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-0">
					<div className="md:col-span-3 flex flex-col gap-6">
						<div>
							<h2 className="text-4xl md:text-6xl font-bold leading-tight">
								Nuestros
								<br />
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
									Proyectos
								</span>
							</h2>
							<p className="text-lg md:text-xl text-gray-600 mt-4 md:mt-6">
								Transformando ideas en soluciones tecnológicas que impulsan el
								futuro.
							</p>
						</div>

						{/* Navigation Controls */}
						<div className="flex justify-between items-center">
							<NavigationButtons onPrev={prevProject} onNext={nextProject} />
							<span className="text-gray-400">
								{activeProject + 1} / {projects.length}
							</span>
						</div>
					</div>

					{/* Project Content */}
					<div className="md:col-span-9">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeProject}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-8"
							>
								{/* Project Image */}
								<div className="md:col-span-5 relative h-[40vh] md:h-[60vh] group">
									<div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
										<Image
											src={projects[activeProject].image}
											alt={projects[activeProject].title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
									</div>

									{/* Floating Metrics */}
									<div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex justify-between">
										{projects[activeProject].impact.map((item, idx) => (
											<ProjectMetric key={idx} {...item} />
										))}
									</div>
								</div>

								{/* Project Info */}
								<div className="md:col-span-3 flex flex-col justify-between">
									<div className="space-y-4 md:space-y-6">
										<div className="flex items-center gap-4">
											<span className="text-blue-600 font-semibold">
												{projects[activeProject].category}
											</span>
											<span className="text-gray-400">
												{projects[activeProject].year}
											</span>
										</div>

										<div>
											<h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
												{projects[activeProject].title}
											</h3>
											<p className="text-lg md:text-xl text-gray-600">
												{projects[activeProject].subtitle}
											</p>
										</div>

										<div className="flex flex-wrap gap-2">
											{projects[activeProject].tech.map((tech, idx) => (
												<span
													key={idx}
													className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 rounded-full text-sm"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									<motion.button
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="w-full p-3 md:p-4 mt-6 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium"
									>
										Ver Caso de Estudio
									</motion.button>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Project Previews */}
				<div className="mt-8 hidden  md:mt-16 md:grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
					{projects.map((project, idx) => (
						<motion.div
							key={idx}
							className={`relative h-24 md:h-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
								idx === activeProject ? "md:col-span-2" : "col-span-1"
							}`}
							onClick={() => setActiveProject(idx)}
							whileHover={{ scale: 1.05 }}
						>
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black/30 flex items-end p-3 md:p-4">
								<div className="text-white text-xs md:text-sm font-medium">
									{project.title}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectGallery;
