import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySlider from "@/components/GallerySlider";
import FeaturesSection from "@/components/FeaturesSection";
import MarqueeSection from "@/components/MarqueeSection";
import TwoWaysSection from "@/components/TwoWaysSection";
import HowToSection from "@/components/HowToSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <GallerySlider />
        <FeaturesSection />
        <MarqueeSection />
        <TwoWaysSection />
        <HowToSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
