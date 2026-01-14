import { CheckCircle, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

  const trustIndicators = [
    "Pre-vetted Engineers",
    "Flexible Engagement",
    "Time Zone Aligned",
    "Quick Onboarding"
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Refined Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Centered */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium tracking-wide px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Scale Your Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resource <span className="gradient-text">Augmentation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get qualified and vetted talent to accelerate your projects with engineers who integrate seamlessly into your team.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">

            {/* Left Column - Price & Benefits (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Price Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-card rounded-2xl p-8 border border-border/50 shadow-xl">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold gradient-text">$20</span>
                        <span className="text-lg text-muted-foreground">/hour</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Qualified & Vetted Talent</p>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="space-y-3">
                    {trustIndicators.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Join Us CTA Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-xl font-semibold mb-2">Want to Join Our Team?</h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Be part of our global network of talented engineers.
                  </p>
                  <Link to="/careers">
                    <Button
                      className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                    >
                      <span>Join Us</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - 4-Step Process (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-border/30 shadow-2xl h-full">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    <span className="gradient-text">4-Step</span> Verification Process
                  </h3>
                  <p className="text-muted-foreground">
                    Rigorous screening ensures you get only the best talent
                  </p>
                </div>

                <div className="relative">
                  {/* Vertical Line Connector */}
                  <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden md:block"></div>

                  <div className="space-y-5">
                    {verificationSteps.map((step, index) => (
                      <div
                        key={step.step}
                        className="relative flex items-start gap-5 bg-background/70 rounded-xl p-5 border border-border/40 hover:border-primary/50 hover:bg-background transition-all duration-300 group"
                      >
                        {/* Step Number */}
                        <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                          <span className="text-white font-bold text-sm">{step.step}</span>
                        </div>

                        {/* Content */}
                        <div className="pt-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceAugmentation;
