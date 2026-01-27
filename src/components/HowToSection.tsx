import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiWoman from "@/assets/Image 7.jpeg";

const HowToSection = () => {
  const steps = [
    {
      title: "Upload Your Data",
      description: "Connect your files, databases, or data sources in seconds. Our AI instantly begins analyzing structure, patterns, and quality.",
    },
    {
      title: "Detect & Fix Issues",
      description: "The agent automatically identifies missing values, duplicates, inconsistencies, and anomalies — then cleans them intelligently.",
    },
    {
      title: "Download Clean, Ready Data",
      description: "Export high-quality, analysis-ready data or push it directly to your analytics and AI pipelines.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aiWoman}
                alt="AI Generated Portrait"
                className="w-full h-auto object-cover"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-primary rounded-3xl -z-10 opacity-20" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <p className="section-label mb-4">OPEN MANUAL CLEANING STUDIO</p>
            <h2 className="section-title mb-8">
              How to <span className="text-gradient">clean</span>
              <br />
              <span className="text-gradient">Confidential</span> Data
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://cleaningagent2.streamlit.app/" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary mt-10 group">
                  Start Cleaning Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
