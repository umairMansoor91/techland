import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target } from "lucide-react";
import worldMapElegant from "@/assets/world-map-elegant.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={worldMapElegant}
          alt="Global reach across industries and markets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">Who We Help</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Built for Teams That Ship Fast
          </h1>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Whether you're a 10-person startup racing to product-market fit or an enterprise modernizing legacy systems, we embed engineers who understand your stack, your deadlines, and your business.
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="px-8 text-white border-white/30 hover:bg-white/10"
              onClick={() => window.location.href = '/readers-corner'}
            >
              See Client Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;