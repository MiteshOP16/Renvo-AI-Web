import { ImageIcon, Sparkles, Accessibility, HeadphonesIcon, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ImageIcon,
      title: "Automated Data Cleaning",
      description: "Detect duplicates, missing values, schema mismatches, and inconsistencies automatically.",
    },
    {
      icon: Sparkles,
      title: "AI-Driven Detection",
      description: "Pattern-aware models adapt to your data and improve accuracy over time.",
    },
    {
      icon: Accessibility,
      title: "Fast, Scalable Workflows",
      description: "Handle small files or large pipelines with the same speed and reliability.",
    },
    {
      icon: HeadphonesIcon,
      title: "Governance & Trust",
      description: "Ensure compliance and maintain data integrity with our governance tools.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">WHAT WE DO</p>
          <h2 className="section-title mb-6">
            Revolutionizing Data Cleaning{" "}
            <span className="text-gradient">with Renvo AI</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Renvo AI revolutionizes data cleaning by leveraging advanced AI-driven flows with human-in-the-loop
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {feature.description}
              </p>
              <button className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
