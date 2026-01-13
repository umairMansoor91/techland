import { ArrowRight, MessageCircle } from "lucide-react";
import QuickContactForm from "@/components/QuickContactForm";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-hero via-secondary to-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Message */}
            <div className="text-center lg:text-left animate-slide-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text mb-6 leading-tight">
                Every breakthrough starts with a decision — <span className="gradient-text">yours.</span>
              </h2>

              <p className="text-lg md:text-xl text-hero-text/90 mb-8 leading-relaxed">
                At TechLand, we don't just build businesses — we build bonds that last.
                Every solution we create is rooted in trust, collaboration, and innovation.
              </p>

              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="/lets-talk-business"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Prefer a detailed form?
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Right side - Quick Form */}
            <div className="bg-card/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
