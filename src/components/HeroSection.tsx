import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotMascot from "@/assets/robot-mascot.png";
import gallery1 from "@/assets/Image 2.jpeg";
import gallery5 from "@/assets/Image 6.jpeg";

const HeroSection = () => {
  const tags = ["Business", "Intelligence", "Corporate"];

  return (
    <section className="hero-gradient-bg pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <p className="section-label mb-4 animate-fade-in">
              NEXT-GENERATION OF DATA CLEANING AUTOMATION 
            </p> 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
               Renvo AI That Fixes {" "}
              <span className="block">Your Data Before You Even Notice</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Empower your business with Renvo AI's cutting-edge data cleaning solutions. Experience unparalleled accuracy and efficiency as our intelligent system detects and resolves data issues in real-time, ensuring your insights are always reliable and actionable.
            </p>

            {/* Search Bar */}

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <span className="text-sm text-muted-foreground">Popular Tags</span>
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Robot Mascot */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating images */}
            <div className="absolute top-0 left-0 lg:left-10 w-20 h-20 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-xl animate-float-delayed z-20">
              <img src={gallery5} alt="AI Art" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-20 right-0 lg:right-0 w-16 h-16 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-xl animate-float z-20">
              <img src={gallery1} alt="AI Art" className="w-full h-full object-cover" />
            </div>
            
            {/* Main Robot */}
            <div className="relative animate-float">
              <img
                src={robotMascot}
                alt="AI Robot Mascot"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
