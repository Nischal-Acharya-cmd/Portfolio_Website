import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MagneticCursor from "@/components/MagneticCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MagneticCursor />
      <div className="scanline-overlay" />
      <div className="blueprint-grid" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
