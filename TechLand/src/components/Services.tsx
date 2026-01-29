import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    title: "Generative AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop"
  },
  {
    title: "Dynamics 365 ERP",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop"
  },
  {
    title: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop"
  },
  {
    title: "Staff Augmentation",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
  },
  {
    title: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=600&fit=crop"
  },
  {
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop"
  },
  {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=600&fit=crop"
  },
  {
    title: "Custom Software Development",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&h=600&fit=crop"
  },
  {
    title: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=600&fit=crop"
  },
  {
    title: "Data Analytics & Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
  },
  {
    title: "MS Dynamics 365 CRM",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
  },
  {
    title: "Power Apps",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&h=600&fit=crop"
  },
  {
    title: "Cloud Application",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop"
  },
  {
    title: "Cloud Maintenance & Integration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop"
  },
  {
    title: "Metaverse",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=600&fit=crop"
  },
  {
    title: "Augmented Reality",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=600&fit=crop"
  },
  {
    title: "Blockchain & Cryptography",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=600&fit=crop"
  },
  {
    title: "Game Development",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=600&fit=crop"
  },
  {
    title: "Web3 Gaming",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=600&fit=crop"
  },
  {
    title: "AR/VR/XR Gaming",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=600&fit=crop"
  },
  {
    title: "Gaming Art & Design",
    image: "https://images.unsplash.com/photo-1569017388730-020b5f80a004?w=600&h=600&fit=crop"
  },
  {
    title: "Quality Assurance",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop"
  },
  {
    title: "SaaS",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop"
  },
  {
    title: "Cloud Migration & Cloud Ops",
    image: "https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?w=600&h=600&fit=crop"
  },
  {
    title: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop"
  },
  {
    title: "Design & Development",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=600&fit=crop"
  },
  {
    title: "Maintenance & Support",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop"
  },
  {
    title: "Automation & Apps",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
  },
  {
    title: "Salesforce Services",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=600&fit=crop"
  }
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const visibleServices = showAll ? services : services.slice(0, 8);

  const handleToggle = () => {
    if (showAll) {
      // Scrolling up when collapsing
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll(!showAll);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="group relative animate-slide-up cursor-pointer"
              style={{ animationDelay: `${(index % 8) * 0.05}s` }}
            >
              {/* Service Card */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent group-hover:from-primary/70 group-hover:via-primary/30 transition-all duration-500"></div>

                {/* Service Name - Top Left */}
                <div className="absolute inset-0 p-4 md:p-5">
                  <h3 className="text-white text-base md:text-lg lg:text-xl font-black uppercase tracking-wide leading-tight drop-shadow-lg max-w-[90%]">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        {services.length > 8 && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={handleToggle}
              className="group border-primary/30 hover:border-primary hover:bg-primary hover:text-white"
            >
              {showAll ? (
                <>
                  View Less
                  <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View More Services
                  <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Process Section */}
        <div className="bg-gradient-to-br from-muted/30 to-accent/10 rounded-3xl p-8 md:p-12 mt-20">
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
