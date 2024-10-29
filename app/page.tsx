"use client"

import AboutMe from "@/components/about-me/AboutMe"
import ProcessSection from "@/components/process/Process"
import Portfolio from "@/components/projects/Portfolio"
import Services from "@/components/services/Services"
import TestimonialsSection from "@/components/testimonials/TestimonialsSection"
import Partners from "@/components/partners/Partners"
import CTA from "@/components/CTA/CTA"
import HeroSectionSoft from "@/components/hero-section/HeroSectionSoft"
import Footer from "@/components/footer/Footer"

export default function Home() {
	return (
		<div>
			<main>
				<HeroSectionSoft />
				<Portfolio />
				<TestimonialsSection />
				<Services />
				<ProcessSection />
				<AboutMe /> 
				<Partners />
				<CTA />
				<Footer />
			</main>
		</div>
	)
}
