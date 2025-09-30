import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { IndustriesSection } from "@/components/industries-section"
import { TimelineSection } from "@/components/timeline-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <TimelineSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
