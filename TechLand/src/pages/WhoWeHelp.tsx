import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Rocket, Shield, Users } from "lucide-react";

const WhoWeHelp = () => {
  const industries = [
    {
      title: "Travel & Hospitality",
      description: "We build booking platforms and guest applications that handle seasonal traffic spikes and integrate seamlessly with property management systems.",
      solutions: ["Booking Platforms", "Guest Apps", "PMS Integration", "Revenue Systems"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=600&fit=crop"
    },
    {
      title: "Public Sector",
      description: "We help government agencies launch secure citizen portals and modernize internal workflows while maintaining compliance requirements.",
      solutions: ["Citizen Portals", "Case Management", "Document Workflows", "Compliance Tools"],
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=600&h=600&fit=crop"
    },
    {
      title: "Telecommunications",
      description: "Our teams work on billing systems and customer portals that help reduce support overhead and improve subscriber experience.",
      solutions: ["Billing Systems", "Customer Portals", "Network Tools", "Support Automation"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop"
    },
    {
      title: "Retail & E-commerce",
      description: "We develop inventory management systems and e-commerce platforms that help retailers maintain accurate stock levels across channels.",
      solutions: ["Inventory Sync", "POS Integration", "Order Management", "Storefront Development"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
    },
    {
      title: "Energy & Utilities",
      description: "We build monitoring dashboards and field applications that help operations teams track equipment performance and maintenance schedules.",
      solutions: ["Sensor Dashboards", "Field Apps", "Maintenance Tracking", "Reporting Tools"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=600&fit=crop"
    },
    {
      title: "Startups & SaaS",
      description: "We provide engineering support for early-stage companies building their first products or scaling existing platforms.",
      solutions: ["MVP Development", "Technical Advisory", "Architecture Design", "Launch Support"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop"
    },
    {
      title: "Healthcare",
      description: "We develop HIPAA-compliant patient portals and clinical tools with a focus on security, usability, and integration with existing systems.",
      solutions: ["Patient Portals", "Telehealth Apps", "EHR Integration", "Clinical Tools"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=600&fit=crop"
    },
    {
      title: "Financial Services",
      description: "We build secure fintech applications and banking platforms with strong emphasis on compliance, data protection, and transaction reliability.",
      solutions: ["Banking Apps", "Payment Systems", "Risk Dashboards", "Compliance Tools"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <Badge className="mb-6">Who We Help</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built for Teams That <span className="gradient-text">Ship Fast</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're a startup racing to product-market fit or an enterprise modernizing legacy systems,
                we provide engineering talent that understands your stack, your deadlines, and your industry.
              </p>

              {/* Key Highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Quick Onboarding</span>
                    <span className="text-muted-foreground"> — Engineers contributing code within the first week.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Team Integration</span>
                    <span className="text-muted-foreground"> — We work within your processes, not around them.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Industry Knowledge</span>
                    <span className="text-muted-foreground"> — Engineers with relevant domain experience.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Teams collaborating across industries"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <Card className="absolute -bottom-6 -left-6 p-5 bg-card/95 backdrop-blur-sm border-primary/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">8+</div>
                    <div className="text-sm text-muted-foreground">Industries Served</div>
                  </div>
                </div>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Cross-Industry Expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Industries</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Verticals We <span className="gradient-text">Understand</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Different industries have different challenges. Here's where our engineers have delivered production code and solved real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Default State - Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">{industry.title}</h3>
                  </div>
                </div>

                {/* Hover State - Full Description */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-black text-xl font-bold mb-3 leading-tight">{industry.title}</h3>
                  <div className="w-10 h-1 bg-primary rounded-full mb-3"></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.solutions.map((solution, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-md border border-gray-300 bg-gray-100 text-black font-medium">
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-4">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Working With Us <span className="gradient-text">Looks Like</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We focus on what matters: how quickly our engineers ramp up, how well they integrate with your team, and whether they deliver quality work.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Fast Ramp-Up",
                    description: "Engineers start contributing meaningful code within the first week, not after months of onboarding."
                  },
                  {
                    title: "Your Tools, Your Process",
                    description: "We adapt to your development workflow, communication style, and tech stack preferences."
                  },
                  {
                    title: "Transparent Communication",
                    description: "Regular updates, honest timelines, and proactive flagging of blockers or concerns."
                  },
                  {
                    title: "Long-Term Partnership",
                    description: "Most of our clients work with us on multiple projects over extended periods."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Team collaboration and partnership"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default WhoWeHelp;
