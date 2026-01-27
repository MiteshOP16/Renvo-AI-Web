import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const TwoWaysSection = () => {
  const aiFeatures = [
    "Auto-detect schema drift, null spikes, and outliers.",
    "Generate repair plans with human-safe guardrails.",
    "Re-validate outputs and export clean datasets.",
    "Placeholder note you can edit later.",
  ];

  const manualFeatures = [
    "Step-by-step review of flagged rows and fields.",
    "Apply custom rules, regex cleans, and merges.",
    "Track approvals with audit-friendly history.",
    "Swap this bullet with your own note.",
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-4">HANDS-ON OR FULLY AUTOMATED</p>
          <h2 className="section-title mb-6">
            Two ways to create stunning, <br className="hidden sm:block" />
            AI-powered art
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let the AI run end-to-end or keep humans in the loop with a guided console—both wired with guardrails and creative control.
          </p>
          <Button variant="outline" className="btn-outline">
            Choose Your Creative Path
          </Button>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* AI Card */}
          <div className="bg-card rounded-3xl border border-border p-8 lg:p-10 card-hover">
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-6">
              AI
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Agentic AI Cleaning Studio
            </h3>
            <p className="text-muted-foreground mb-8">
              Autonomous pipeline that profiles data, fixes issues, and validates schemas with guardrails.
            </p>

            <ul className="space-y-4 mb-8">
              {aiFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full btn-primary">
              Launch AI Generator (Coming Soon)
            </Button>
          </div>

          {/* Manual/UI Card */}
          <div className="bg-card rounded-3xl border border-border p-8 lg:p-10 card-hover">
            <div className="w-14 h-14 rounded-2xl bg-secondary border-2 border-primary flex items-center justify-center text-primary font-bold text-xl mb-6">
              UI
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Manual Cleaning Studio
            </h3>
            <p className="text-muted-foreground mb-8">
              Hands-on workspace to review records, approve fixes, and apply custom rules before shipping.
            </p>

            <ul className="space-y-4 mb-8">
              {manualFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

           <a href="https://cleaningagent2.streamlit.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full btn-outline">
            Open Cleaning Studio
            </Button>
          </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
