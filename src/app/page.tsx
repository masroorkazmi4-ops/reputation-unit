import { Navbar, NavbarSpacer } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar />
      <NavbarSpacer />

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <CapabilitiesSection />
        <WhyUsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
