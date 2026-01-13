import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Building, 
  Phone, 
  ShoppingBag, 
  Zap, 
  Rocket, 
  ShoppingCart, 
  Heart,
  Gamepad2
} from "lucide-react";
import sectionDivider from "@/assets/section-divider.jpg";

const IndustriesGrid = () => {
  const industries = [
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Hotels and airlines need systems that don't crash during peak booking season. We build reservation platforms and guest apps that handle the traffic spikes and integrate with your existing PMS.",
      solutions: ["Booking Platforms", "Guest Mobile Apps", "PMS Integration", "Revenue Systems"]
    },
    {
      icon: Building,
      title: "Public Sector",
      description: "Government IT moves slowly for good reasons, but citizens expect modern digital services. We help agencies launch secure portals and streamline internal workflows without the typical contractor overhead.",
      solutions: ["Citizen Portals", "Case Management", "Document Workflows", "Compliance Tools"]
    },
    {
      icon: Phone,
      title: "Telecommunications",
      description: "Telecom billing is notoriously complex. Our teams have untangled legacy BSS/OSS systems and built customer dashboards that actually reduce support tickets.",
      solutions: ["Billing Systems", "Customer Portals", "Network Dashboards", "Support Automation"]
    },
    {
      icon: ShoppingBag,
      title: "Retail & CPG",
      description: "Inventory sync across 50 stores and an e-commerce site is a nightmare without the right backend. We've built real-time inventory systems that prevent overselling and stockouts.",
      solutions: ["Inventory Sync", "POS Integration", "Order Management", "Vendor Portals"]
    },
    {
      icon: Zap,
      title: "Oil, Gas & Energy",
      description: "Field operations generate massive amounts of sensor data. We build dashboards and alerting systems that help your teams spot equipment issues before they become expensive problems.",
      solutions: ["Sensor Dashboards", "Field Apps", "Maintenance Tracking", "Safety Reporting"]
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "You've raised a seed round and need to ship fast. We plug in engineers who've done this before, no ramp-up time needed. Focus on your product while we handle the code.",
      solutions: ["MVP Development", "Technical Co-pilot", "Architecture Review", "Launch Support"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Black Friday traffic spikes. Cart abandonment. Payment gateway headaches. We've seen it all and built platforms that handle millions in transactions without going down.",
      solutions: ["Storefront Development", "Checkout Optimization", "Payment Integration", "Search & Filters"]
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "HIPAA compliance isn't optional, and neither is uptime for patient-facing apps. We build secure telehealth platforms and clinical tools that pass audits and actually get used.",
      solutions: ["Patient Portals", "Telehealth Apps", "EHR Integration", "Clinical Workflows"]
    },
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment",
      description: "Multiplayer backends need to handle thousands of concurrent players without lag. We build game servers, matchmaking systems, and player analytics that scale with your player base.",
      solutions: ["Game Backends", "Matchmaking", "Leaderboards", "Player Analytics"]
    }
  ];

  return (
    <>
      {/* Industries Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4">Industries We Serve</Badge>
            <h2 className="text-4xl font-bold mb-6">We've Worked Across Verticals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Different industries have different headaches. Here's where our engineers have shipped production code and solved real problems.
            </p>
          </div>
          
          {/* First row - 3 industries */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {industries.slice(0, 3).map((industry, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 group bg-background/95 backdrop-blur-sm border-primary/10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{industry.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary mb-4">Key Solutions:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.solutions.map((solution, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs justify-center hover:bg-primary/10 transition-colors">
                        {solution}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Visual Break */}
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <img 
              src={sectionDivider} 
              alt="Industry connections and technology integration" 
              className="w-full h-32 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20"></div>
          </div>

          {/* Second row - 3 industries */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {industries.slice(3, 6).map((industry, index) => (
              <Card key={index + 3} className="p-8 hover:shadow-elegant transition-all duration-300 group bg-background/95 backdrop-blur-sm border-primary/10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{industry.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary mb-4">Key Solutions:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.solutions.map((solution, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs justify-center hover:bg-primary/10 transition-colors">
                        {solution}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Third row - 3 industries */}
          <div className="grid md:grid-cols-3 gap-8">
            {industries.slice(6, 9).map((industry, index) => (
              <Card key={index + 6} className="p-8 hover:shadow-elegant transition-all duration-300 group bg-background/95 backdrop-blur-sm border-primary/10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{industry.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary mb-4">Key Solutions:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.solutions.map((solution, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs justify-center hover:bg-primary/10 transition-colors">
                        {solution}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesGrid;