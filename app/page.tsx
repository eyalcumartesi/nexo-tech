import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TeamSection from "@/components/TeamSection";

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<Projects />
			<TeamSection />
			<ContactSection />
		</>
	);
}
