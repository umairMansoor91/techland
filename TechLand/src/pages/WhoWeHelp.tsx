import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import HeroSection from "@/components/who-we-help/HeroSection";
import IndustriesGrid from "@/components/who-we-help/IndustriesGrid";
import SuccessMetrics from "@/components/who-we-help/SuccessMetrics";
import ClientTestimonials from "@/components/who-we-help/ClientTestimonials";

const WhoWeHelp = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      <IndustriesGrid />
      <SuccessMetrics />
      <ClientTestimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Talk About Your Project</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tell us what you're building and where you need help. We'll let you know if we're a good fit, no sales pitch required.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeHelp;