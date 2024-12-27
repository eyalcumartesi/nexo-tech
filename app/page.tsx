import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TeamSection from "@/components/TeamSection";

export default function Home() {
	return (
		<>
			<section className="pt-36">
				<Hero />
			</section>
			<div className="bg-blue-50/50 ">
				<section id="about" className="pb-24">
					<AboutUs />
				</section>
				<section id="projects" className="pb-24">
					<Projects />
				</section>
				<section id="team" className="pb-24">
					<TeamSection />
				</section>
				<section id="contact">
					<ContactSection />
				</section>
			</div>
		</>
	);
}
