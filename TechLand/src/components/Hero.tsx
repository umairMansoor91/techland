import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-vision.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const words = ["Create", "Empower", "Transform", "Innovate", "Elevate", "Design", "Craft", "Inspire", "Reimagine", "Launch"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-hero via-hero to-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Advanced technology workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-hero/90 via-hero/80 to-secondary/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto animate-slide-up">
          {/* Tagline */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/60"></div>
            <span className="inline-flex items-center gap-3 text-hero-text/90">
              <span className="text-sm md:text-base font-light tracking-[0.2em] uppercase">Empowering Businesses</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm md:text-base font-light tracking-[0.2em] uppercase">Inspiring Innovation</span>
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/60"></div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-extralight text-hero-text leading-[1.1] tracking-tight mb-8">
            <span className="block">We build AI that delivers</span>
            <span className="block mt-1">
              <span className="gradient-text font-medium">measurable transformation.</span>
            </span>
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-primary-glow"></div>
            <span className="text-hero-text/70 text-sm md:text-base font-light tracking-wider">
              Vetted Talent • Seamless Integration • Global Reach
            </span>
          </div>
          
          {/* Enterprise Focus Items */}
          <div className="flex flex-wrap gap-3">
            {[
              "Enterprise Focus",
              "Data Platforms",
              "Zero Trust",
              "GenAI Innovation",
              "Cloud Native"
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-hero-text/80 text-sm font-medium hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-hero-text/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;