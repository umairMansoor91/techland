import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Search,
  Code,
  Rocket,
  HeadphonesIcon,
  CheckCircle2,
  Zap,
  Shield,
  Users
} from "lucide-react";

const HowWeDeliver = () => {
  const deliveryStages = [
    {
      step: "01",
      icon: Search,
      title: "Discover",
      description: "Deep-dive into your requirements, goals, and technical landscape"
    },
    {
      step: "02",
      icon: Code,
      title: "Design & Build",
      description: "Architect solutions and develop with agile sprints and continuous feedback"
    },
    {
      step: "03",
      icon: Rocket,
      title: "Deploy",
      description: "Rigorous testing, seamless launch, and smooth production transition"
    },
    {
      step: "04",
      icon: HeadphonesIcon,
      title: "Support",
      description: "Ongoing monitoring, optimization, and dedicated support partnership"
    }
  ];

  const metrics = [
    { value: "95%", label: "On-Time Delivery" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Coverage" },
    { value: "15min", label: "Response Time" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <Badge className="mb-6">How We Deliver</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                A Process Built for <span className="gradient-text">Results</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our streamlined 4-stage framework transforms your vision into reality with precision,
                transparency, and a relentless focus on quality delivery.
              </p>

              {/* Key Highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Agile Delivery</span>
                    <span className="text-muted-foreground"> — Iterative sprints with continuous feedback loops.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Quality First</span>
                    <span className="text-muted-foreground"> — Rigorous testing at every stage of development.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Transparent Process</span>
                    <span className="text-muted-foreground"> — Clear communication and visibility throughout.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Team collaborating on project delivery"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <Card className="absolute -bottom-6 -left-6 p-5 bg-card/95 backdrop-blur-sm border-primary/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4-Stage</div>
                    <div className="text-sm text-muted-foreground">Proven Framework</div>
                  </div>
                </div>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                95% On-Time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Workflow */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">4-Stage</span> Delivery Framework
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project follows our proven methodology for consistent, exceptional results
            </p>
          </div>

          {/* Workflow Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliveryStages.map((stage) => (
              <div
                key={stage.step}
                className="flex items-start gap-5 bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:border-primary/50 hover:bg-card transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <stage.icon className="w-6 h-6 text-white" />
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {stage.step}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-4">Why It Works</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built on <span className="gradient-text">Proven Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our delivery framework is designed around what actually matters: clear communication, iterative progress, and quality outcomes.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "No Surprises",
                    description: "Regular updates and demos keep you informed at every step. You always know where your project stands."
                  },
                  {
                    title: "Flexible Scope",
                    description: "Agile approach means we can adapt to changing requirements without derailing the timeline."
                  },
                  {
                    title: "Quality Gates",
                    description: "Each stage has clear criteria that must be met before moving forward."
                  },
                  {
                    title: "Post-Launch Support",
                    description: "Our relationship doesn't end at deployment. We provide ongoing support and optimization."
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
                  src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&h=600&fit=crop"
                  alt="Agile team workflow and collaboration"
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

export default HowWeDeliver;
