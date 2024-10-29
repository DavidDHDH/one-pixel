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
import Stack from "@/components/stack/Stack"

export default function Home() {
	return (
		<div>
			<main>
				<HeroSectionSoft />
				<Portfolio />
				<TestimonialsSection />
				<AboutMe /> 
				<Services />
				<ProcessSection />
				<Stack />
				<Partners />
				<CTA />
				<Footer />
			</main>
		</div>
	)
}
