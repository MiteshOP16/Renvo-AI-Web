import { Sparkles } from "lucide-react";

const MarqueeSection = () => {
  const items = [
    "CLEAN",
    "ANALYSE",
    "VISUALISE",
    "DECIDE",
    "AI ASSISTED",
    "DATA QUALITY",
  ];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <Sparkles className="w-8 h-8 text-primary/20" />
            <span className="marquee-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
