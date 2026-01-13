import { Button } from "@/components/ui/button";
import customSoftwareImg from "@/assets/service-custom-software.jpg";
import mobileAppImg from "@/assets/service-mobile-app.jpg";
import cloudSolutionsImg from "@/assets/service-cloud-solutions.jpg";
import artificialIntelligenceImg from "@/assets/service-artificial-intelligence.jpg";
import dataAnalyticsImg from "@/assets/service-data-analytics.jpg";
import digitalTransformationImg from "@/assets/service-digital-transformation.jpg";

const services = [
  {
    image: customSoftwareImg,
    title: "Custom Software Development",
    description: "Tailored solutions built from the ground up to meet your specific business requirements and scale with your growth.",
    features: ["Full-stack development", "API integrations", "Legacy system modernization"]
  },
  {
    image: mobileAppImg,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: ["iOS & Android apps", "Cross-platform solutions", "Progressive web apps"]
  },
  {
    image: cloudSolutionsImg,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to enhance performance, security, and cost-efficiency.",
    features: ["Cloud migration", "DevOps automation", "Microservices architecture"]
  },
  {
    image: artificialIntelligenceImg,
    title: "AI Consultancy",
    description: "Intelligent solutions that leverage machine learning and AI to automate processes and drive innovation.",
    features: ["Machine learning models", "Natural language processing", "Computer vision solutions"]
  },
  {
    image: dataAnalyticsImg,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and machine learning solutions.",
    features: ["Business intelligence", "Predictive analytics", "Real-time dashboards"]
  },
  {
    image: digitalTransformationImg,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies to modernize operations and accelerate innovation.",
    features: ["Process automation", "Digital strategy", "Change management"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Outline Wrapper */}
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-primary/20 via-primary-glow/10 to-accent/20 p-[2px] group-hover:from-primary/40 group-hover:via-primary-glow/20 group-hover:to-accent/40 transition-all duration-500">
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full backdrop-blur-sm border-2 border-border">
                {/* Image */}
                <div className="w-full h-48 rounded-xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>


                  {/* Enhanced Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-muted/30 to-accent/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", description: "Crafting the perfect solution approach" },
              { step: "03", title: "Development", description: "Building with cutting-edge technologies" },
              { step: "04", title: "Delivery", description: "Launching and ongoing optimization" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;