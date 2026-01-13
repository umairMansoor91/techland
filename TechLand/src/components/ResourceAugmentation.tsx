import { CheckCircle, Users, DollarSign } from "lucide-react";

const ResourceAugmentation = () => {
  const verificationSteps = [
    {
      step: "01",
      title: "English & Aptitude Test",
      description: "Communication skills and cognitive ability assessment"
    },
    {
      step: "02",
      title: "Basic Algorithms",
      description: "Fundamental programming and problem-solving evaluation"
    },
    {
      step: "03",
      title: "Advanced Algorithms",
      description: "Complex data structures and optimization challenges"
    },
    {
      step: "04",
      title: "Capstone Project",
      description: "Real-world project demonstrating practical expertise"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Value Proposition */}
            <div className="space-y-8">
              {/* Section Header */}
              <div>
                <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
                  Scale Your Team
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                  Resource <br /><span className="gradient-text">Augmentation</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Get qualified and vetted talent to accelerate your projects with engineers who integrate seamlessly into your team.
                </p>
              </div>

              {/* Price Card */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-xl">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg shadow-primary/20">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-bold gradient-text">$20</span>
                      <span className="text-xl text-muted-foreground font-light">/hour</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Qualified & Vetted Talent</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Pre-vetted Engineers",
                  "Flexible Engagement",
                  "Time Zone Aligned",
                  "Quick Onboarding"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-background/50 rounded-lg px-4 py-3 border border-border/20">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - 4-Step Process */}
            <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-border/20 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="gradient-text">4-Step</span> Verification
                </h3>
                <p className="text-muted-foreground">
                  Rigorous screening ensures you get the best
                </p>
              </div>

              <div className="space-y-4">
                {verificationSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className="relative flex items-start gap-5 bg-background/60 rounded-xl p-5 border border-border/30 hover:border-primary/40 hover:bg-background/80 transition-all duration-300 group"
                  >
                    {/* Step Number */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connector Line */}
                    {index < verificationSteps.length - 1 && (
                      <div className="absolute left-[2.85rem] top-[4.5rem] w-0.5 h-4 bg-gradient-to-b from-primary/40 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceAugmentation;
