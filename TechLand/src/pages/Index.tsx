import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IndustryCarousel from "@/components/IndustryCarousel";
import Services from "@/components/Services";
import FeaturedInsights from "@/components/FeaturedInsights";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <IndustryCarousel />
      <Services />
      <FeaturedInsights />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
