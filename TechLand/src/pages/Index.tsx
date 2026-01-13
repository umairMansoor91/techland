import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IndustryCarousel from "@/components/IndustryCarousel";
import MVPSection from "@/components/MVPSection";
import Services from "@/components/Services";
import FeaturedInsights from "@/components/FeaturedInsights";
import StatsSection from "@/components/StatsSection";
import ResourceAugmentation from "@/components/ResourceAugmentation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <IndustryCarousel />
      <MVPSection />
      <Services />
      <FeaturedInsights />
      <StatsSection />
      <ResourceAugmentation />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
