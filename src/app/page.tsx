import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import LiveDemosSection from "@/components/LiveDemosSection";
import SkillsSection from "@/components/SkillsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <LiveDemosSection />
      <SkillsSection />
      <ArchitectureSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
