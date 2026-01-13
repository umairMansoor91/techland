import { Button } from "@/components/ui/button";
import {
  Rocket,
  Palette,
  Code2,
  Cloud,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const MVPSection = () => {
  const phases = [
    { icon: Palette, label: "Design" },
    { icon: Code2, label: "Development" },
    { icon: Cloud, label: "Deployment" }
  ];

  const features = [
    "Full UI/UX Design",
    "Responsive Web App",
    "Cloud Deployment",
    "30 Days Support"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

      {/* Floating orbs - subtle */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Main content card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/50 p-8 md:p-12 overflow-hidden">

            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left side - Content */}
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5 border border-primary/20">
                  <Rocket className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Fast Track</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                  Launch Your <span className="gradient-text">MVP</span>
                </h2>

                <p className="text-muted-foreground mb-6">
                  From concept to market-ready product in just 30 days.
                  Design, development, and deployment — all included.
                </p>

                {/* Features list */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="/lets-talk-business">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 py-5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Rocket className="w-4 h-4 mr-2" />
                    Start Your MVP
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              {/* Right side - Visual */}
              <div className="relative">
                {/* Stats display */}
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50">

                  {/* Timeline header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {phases.map((phase, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <phase.icon className="w-4 h-4 text-white" />
                          </div>
                          {index < phases.length - 1 && (
                            <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-accent mx-1"></div>
                          )}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">30 Days</span>
                  </div>

                  {/* Big numbers */}
                  <div className="text-center space-y-1 mb-4">
                    <div className="text-5xl md:text-6xl font-black gradient-text">$2,000</div>
                    <p className="text-sm text-muted-foreground">Starting price</p>
                  </div>

                  {/* Bottom info */}
                  <div className="flex justify-center gap-6 pt-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">30</div>
                      <div className="text-xs text-muted-foreground">Days</div>
                    </div>
                    <div className="w-px bg-border/50"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">3</div>
                      <div className="text-xs text-muted-foreground">Phases</div>
                    </div>
                    <div className="w-px bg-border/50"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">1</div>
                      <div className="text-xs text-muted-foreground">Team</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  FAST TRACK
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MVPSection;
