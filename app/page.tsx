import AboutMe from "@/components/about-me/AboutMe"
import HeroSection from "@/components/hero-section/HeroSection"
import ProcessSection from "@/components/process/Process"
import Portfolio from "@/components/projects/Portfolio"
import Services from "@/components/services/Services"
import TestimonialsSection from "@/components/testimonials/TestimonialsSection"
import Partners from "@/components/partners/Partners"
import CTA from "@/components/CTA/CTA"

export default function Home() {
	return (
		<div>
			<main id="root">
				<HeroSection />
				<Portfolio />
				<TestimonialsSection />
				<AboutMe />
				<Services />
				<ProcessSection />
				<Partners />
				<CTA />
			</main>
		</div>
	)
}
