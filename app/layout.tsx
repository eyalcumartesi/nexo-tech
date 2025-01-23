// app/layout.tsx
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BackgroundScene } from "@/components/BackgroundScene";
import Footer from "@/components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

export const siteConfig = {
	name: "Nexopa | Consultoría Tecnológica en Panamá",
	description: {
		es: "Soluciones tecnológicas personalizadas, integración de sistemas legacy y implementación de IA para empresas en Panamá. Transforme su negocio con nuestra consultoría experta.",
		en: "Custom technology solutions, legacy system integration, and AI implementation for businesses in Panama. Transform your business with expert tech consulting.",
	},
	url: "https://nexopa.com",
	ogImage: "https://nexopa.com/og.jpg",
	email: "eyal@nexopa.com",
	links: {
		linkedin: "https://linkedin.com/company/nexopa",
	},
};

export const metadata: Metadata = {
	metadataBase: new URL("https://nexopa.com"),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: `${siteConfig.description.es} | ${siteConfig.description.en}`,
	keywords: [
		"Nexo Technologies",
		"Consultoría Tecnológica",
		"Transformación Digital",
		"Soluciones de IA",
		"Integración de Sistemas Legacy",
		"Desarrollo de Software a Medida",
		"Tecnología Panamá",
		"Soluciones Empresariales",
		"Consultoría Tech Panamá",
		"Consultoría Panamá",
		// English Keywords
		"Technology Consulting Panama",
		"Digital Transformation",
		"AI Solutions",
		"Legacy System Integration",
		"Custom Software Development",
		"Panama Tech",
		"Enterprise Solutions",
		"Tech Consulting Panama",
	],
	authors: [
		{
			name: "Nexo Technologies",
			url: siteConfig.url,
		},
	],
	creator: "Nexopa",
	openGraph: {
		type: "website",
		locale: "es_PA",
		alternateLocale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description.es,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	alternates: {
		languages: {
			"es-PA": "/es",
			"en-US": "/en",
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#2563eb",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="es"
			className={`${geistSans.variable} ${geistMono.variable}`}
			suppressHydrationWarning
		>
			<body className="min-h-screen bg-background font-sans antialiased">
				<BackgroundScene />
				<nav className="relative z-50">
					<Navbar />
				</nav>
				<main className="relative z-10 flex min-h-screen flex-col">
					{children}
				</main>
				<footer className="relative z-10">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
