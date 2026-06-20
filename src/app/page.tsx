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
import { SectionTransition } from "@/components/layout/section-transition";
import { MotionSection } from "@/components/layout/motion-section";
import { CursorOrb } from "@/components/visuals/cursor-orb";

export default function Home() {
  return (
    <div className="page-shell">
      <SectionTransition />
      <Navbar />
      <NavbarSpacer />

      <main id="main-content">
        <HeroSection />
        <MotionSection targetId="services">
          <ServicesSection />
        </MotionSection>
        <MotionSection targetId="work">
          <PortfolioSection />
        </MotionSection>
        <MotionSection targetId="process">
          <ProcessSection />
        </MotionSection>
        <MotionSection targetId="capabilities">
          <CapabilitiesSection />
        </MotionSection>
        <MotionSection targetId="why-us">
          <WhyUsSection />
        </MotionSection>
        <MotionSection targetId="faq">
          <FAQSection />
        </MotionSection>
        <MotionSection targetId="contact">
          <ContactSection />
        </MotionSection>
      </main>

      <Footer />
      <CursorOrb />
    </div>
  );
}
