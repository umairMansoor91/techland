import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import industry images
import travelImage from "@/assets/industry-travel.jpg";
import publicImage from "@/assets/industry-public.jpg";
import telecomImage from "@/assets/industry-telecom.jpg";
import retailImage from "@/assets/industry-retail.jpg";
import energyImage from "@/assets/industry-energy.jpg";
import startupImage from "@/assets/industry-startup.jpg";
import ecommerceImage from "@/assets/industry-ecommerce.jpg";
import healthcareImage from "@/assets/industry-healthcare.jpg";

const industries = [
  {
    name: "Travel & Hospitality",
    image: travelImage,
    description: "Transform guest experiences with digital solutions for booking, management, and personalized services.",
    accent: "primary"
  },
  {
    name: "Public Sector",
    image: publicImage,
    description: "Modernize government services with secure, scalable solutions for citizen engagement and operations.",
    accent: "secondary"
  },
  {
    name: "Telecommunication",
    image: telecomImage,
    description: "Enable next-generation connectivity with advanced network management and customer solutions.",
    accent: "accent"
  },
  {
    name: "Retail & CPG",
    image: retailImage,
    description: "Revolutionize retail operations with omnichannel solutions and smart inventory management.",
    accent: "primary-glow"
  },
  {
    name: "Oil, Gas, and Energy",
    image: energyImage,
    description: "Optimize energy operations with IoT solutions, predictive analytics, and safety systems.",
    accent: "secondary"
  },
  {
    name: "Startups",
    image: startupImage,
    description: "Launch faster with MVP development, scalable architecture, and growth-focused solutions.",
    accent: "primary"
  },
  {
    name: "E-commerce",
    image: ecommerceImage,
    description: "Build powerful online stores with seamless payment integration and customer analytics.",
    accent: "accent"
  },
  {
    name: "Healthcare & Pharmaceuticals",
    image: healthcareImage,
    description: "Improve patient care with digital health solutions, telemedicine, and data analytics.",
    accent: "secondary"
  }
];

const IndustryCarousel = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Industries We <span className="gradient-text">Transform</span>
          </h2>
        </div>

        {/* Industry Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="relative h-32 md:h-40 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-sm md:text-base font-semibold text-foreground leading-tight">
                    {industry.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Industry?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the companies that have already transformed their operations with our cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryCarousel;