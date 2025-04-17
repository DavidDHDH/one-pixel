"use client";

import AboutMe from "@/components/about-me/AboutMe";
import CTA from "@/components/CTA/CTA";
import FaqSection from "@/components/faq/FaqSection";
import Footer from "@/components/footer/Footer";
import HeroSectionSoft from "@/components/hero-section/HeroSectionSoft";
import Partners from "@/components/partners/Partners";
import ProcessSection from "@/components/process/Process";
import Portfolio from "@/components/projects/Portfolio";
import Services from "@/components/services/Services";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import WhySection from "@/components/why-section/WhySection";
export default function Home() {
  return (
    <div>
      <main>
        <HeroSectionSoft />
        <Partners />
        <Portfolio />
        <TestimonialsSection />
        <Services />
        <ProcessSection />
        <WhySection />
        <AboutMe /> 
        <FaqSection />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
