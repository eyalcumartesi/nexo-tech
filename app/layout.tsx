// app/layout.tsx
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BackgroundScene } from "@/components/BackgroundScene";
import Footer from "@/components/Footer";

// Local font declarations
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

// SEO and site configuration
export const siteConfig = {
	name: "Nexo Technology",
	description:
		"Custom technology solutions, legacy system integration, and AI implementation for businesses in Panama and beyond. Transform your business with expert tech consulting.",
	url: "https://nexotechnology.com",
	ogImage: "https://nexotechnology.com/og.jpg",
	links: {
		twitter: "https://twitter.com/nexotechnology",
		github: "https://github.com/nexotechnology",
		linkedin: "https://linkedin.com/company/nexotechnology",
	},
};

// Metadata configuration
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Technology Consulting",
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
			name: "Nexo Technology",
			url: siteConfig.url,
		},
	],
	icons: {
		// Basic favicons
		icon: [
			{ url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicons/favicon.ico", sizes: "48x48" },
		],
		// Apple Touch Icons
		apple: [
			{
				url: "/favicons/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		// Other Icons
		other: [
			{
				rel: "mask-icon",
				url: "/favicons/safari-pinned-tab.svg",
				color: "#2563eb", // Blue color for Safari pinned tab
			},
		],
	},
	creator: "Nexo Technology",
	openGraph: {
		type: "website",
		locale: "en_US",
		alternateLocale: "es_PA",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
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
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@nexotechnology",
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
	verification: {
		google: "your-google-verification-code",
		yandex: "your-yandex-verification-code",
	},
};

// Viewport configuration
export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0F172A" },
	],
	colorScheme: "light dark",
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable}`}
			suppressHydrationWarning
		>
			<body className="min-h-screen bg-background font-sans antialiased">
				{/* Background Scene */}
				<BackgroundScene />

				{/* Navigation */}
				<nav className="relative z-50">
					<Navbar />
				</nav>

				{/* Main Content */}
				<main className="relative z-10 flex min-h-screen flex-col">
					{children}
				</main>

				{/* Optional: Footer */}
				<footer className="relative z-10">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
