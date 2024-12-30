"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { projects } from "@/constants/projects";
import Link from "next/link";

// Types
interface Project {
	id: number;
	title: string;
	subtitle: string;
	category: string;
	year: string;
	impact: Impact[];
	tech: string[];
	link: string;
	image: string;
}

interface Impact {
	metric: string;
	label: string;
}

interface ProjectMetricProps {
	metric: string;
	label: string;
}

interface NavigationButtonsProps {
	onPrev: () => void;
	onNext: () => void;
	currentIndex: number;
	total: number;
}

interface ProjectImageProps {
	project: Project;
	priority: boolean;
}

// Animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

// Components with proper display names
const ProjectMetric: React.FC<ProjectMetricProps> = React.memo(
	({ metric, label }) => {
		const [ref, inView] = useInView({
			triggerOnce: true,
			threshold: 0.1,
		});

		return (
			<motion.div
				ref={ref}
				variants={fadeInUp}
				initial="initial"
				animate={inView ? "animate" : "initial"}
				className="text-white backdrop-blur-sm bg-black/30 p-3 rounded-lg"
			>
				<div className="text-2xl md:text-3xl font-bold tracking-tight">
					{metric}
				</div>
				<div className="text-xs md:text-sm opacity-90 font-medium">{label}</div>
			</motion.div>
		);
	}
);
ProjectMetric.displayName = "ProjectMetric";

const NavigationButtons: React.FC<NavigationButtonsProps> = React.memo(
	({ onPrev, onNext, currentIndex, total }) => (
		<div className="flex items-center gap-4">
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={onPrev}
				className="p-3 md:p-4 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all"
			>
				<ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
			</motion.button>
			<span className="text-gray-500 font-medium">
				{currentIndex + 1} / {total}
			</span>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={onNext}
				className="p-3 md:p-4 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all"
			>
				<ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
			</motion.button>
		</div>
	)
);
NavigationButtons.displayName = "NavigationButtons";

const ProjectImage: React.FC<ProjectImageProps> = React.memo(
	({ project, priority }) => (
		<div className="relative h-full w-full">
			<Image
				src={project.image}
				alt={project.title}
				fill
				sizes="(max-width: 768px) 100vw, 50vw"
				priority={priority}
				className="object-cover rounded-2xl md:rounded-3xl transition-transform duration-300 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl md:rounded-3xl" />
		</div>
	)
);
ProjectImage.displayName = "ProjectImage";

const ProjectGallery: React.FC = () => {
	const [activeProject, setActiveProject] = useState(0);
	const galleryRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: galleryRef,
		offset: ["start end", "end start"],
	});

	const handleProjectChange = useCallback((index: number) => {
		setActiveProject(index);
	}, []);

	const nextProject = useCallback(() => {
		handleProjectChange((activeProject + 1) % projects.length);
	}, [activeProject, handleProjectChange]);

	const prevProject = useCallback(() => {
		handleProjectChange(
			(activeProject - 1 + projects.length) % projects.length
		);
	}, [activeProject, handleProjectChange]);

	// Preload next image
	const nextProjectIndex = (activeProject + 1) % projects.length;

	return (
		<div
			ref={galleryRef}
			className="min-h-screen relative overflow-hidden py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white"
		>
			{/* Timeline */}
			<div className="hidden lg:block absolute top-0 left-0 w-2 h-full">
				<div className="sticky top-0 h-screen flex items-center">
					<motion.div
						className="w-0.5 bg-gray-200 h-full relative"
						style={{ scaleY: scrollYProgress }}
					>
						{projects.map((_, idx) => (
							<motion.button
								key={idx}
								className={`absolute w-4 h-4 -left-1.5 rounded-full transition-all duration-300 
                  ${
										idx === activeProject
											? "bg-blue-500 scale-125"
											: "bg-gray-300"
									}`}
								style={{ top: `${(idx / (projects.length - 1)) * 100}%` }}
								whileHover={{ scale: 1.5 }}
								onClick={() => handleProjectChange(idx)}
							/>
						))}
					</motion.div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 md:pl-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
					{/* Header Section */}
					<div className="lg:col-span-3 flex flex-col gap-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="space-y-4"
						>
							<h2 className="text-4xl md:text-6xl font-bold leading-tight">
								Nuestros
								<br />
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
									Clientes
								</span>
							</h2>
							<p className="text-lg text-gray-600 max-w-md">
								Transformando ideas en soluciones tecnológicas que impulsan el
								futuro.
							</p>
						</motion.div>

						<NavigationButtons
							onPrev={prevProject}
							onNext={nextProject}
							currentIndex={activeProject}
							total={projects.length}
						/>
					</div>

					{/* Project Content */}
					<div className="lg:col-span-9">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeProject}
								variants={fadeInUp}
								initial="initial"
								animate="animate"
								exit="exit"
								className="grid grid-cols-1 lg:grid-cols-8 gap-6 md:gap-8"
							>
								{/* Project Image */}
								<div className="lg:col-span-5 relative h-[40vh] md:h-[60vh] group rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
									<ProjectImage
										project={projects[activeProject]}
										priority={true}
									/>
									{/* Preload next image */}
									<div className="hidden">
										<ProjectImage
											project={projects[nextProjectIndex]}
											priority={false}
										/>
									</div>

									{/* Metrics */}
									<div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex justify-between gap-4">
										{projects[activeProject].impact.map((item, idx) => (
											<ProjectMetric key={idx} {...item} />
										))}
									</div>
								</div>

								{/* Project Info */}
								<div className="lg:col-span-3 flex flex-col justify-between">
									<div className="space-y-6">
										<div className="flex items-center gap-4">
											<span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
												{projects[activeProject].category}
											</span>
											<span className="text-gray-400 font-medium">
												{projects[activeProject].year}
											</span>
										</div>

										<div>
											<h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
												{projects[activeProject].title}
											</h3>
											<p className="text-lg text-gray-600">
												{projects[activeProject].subtitle}
											</p>
										</div>

										<div className="flex flex-wrap gap-2">
											{projects[activeProject].tech.map((tech, idx) => (
												<span
													key={idx}
													className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									<Link target="_blank" href={projects[activeProject].link}>
										<motion.button
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											className="w-full p-4 mt-6 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 group"
										>
											Ver Caso de Estudio
											<ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
										</motion.button>
									</Link>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Project Previews */}
				<div className="mt-12 hidden lg:grid grid-cols-6 gap-4">
					{projects.map((project, idx) => (
						<motion.button
							key={idx}
							className={`relative h-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
								idx === activeProject ? "col-span-2" : "col-span-1"
							}`}
							onClick={() => handleProjectChange(idx)}
							whileHover={{ scale: 1.05 }}
						>
							<Image
								src={project.image}
								alt={project.title}
								fill
								sizes="(max-width: 768px) 100vw, 16vw"
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
								<div className="text-white text-sm font-medium">
									{project.title}
								</div>
							</div>
						</motion.button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectGallery;
