import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Target,
  PenTool,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  ArrowDown
} from "lucide-react";

const HowWeDeliver = () => {
  const journeySteps = [
    {
      phase: "Phase 1",
      icon: Phone,
      title: "Discovery Call",
      subtitle: "Let's Talk",
      description: "It all starts with a conversation. We listen to your ideas, challenges, and vision. No jargon, no pressure — just a genuine discussion about what you're trying to achieve.",
      details: [
        "30-minute introductory call",
        "Understand your business context",
        "Identify key challenges and opportunities",
        "Discuss timeline and budget expectations"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Phase 2",
      icon: Target,
      title: "Understanding Your Goals",
      subtitle: "Deep Dive",
      description: "We dig deeper into your business objectives, pain points, and what success looks like for you. This is where we align our understanding with your expectations.",
      details: [
        "Stakeholder interviews and workshops",
        "Document business requirements",
        "Map out user journeys and workflows",
        "Define success metrics and KPIs"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      phase: "Phase 3",
      icon: PenTool,
      title: "System Design & Planning",
      subtitle: "Blueprint",
      description: "Our architects craft the technical blueprint. We design a solution that's scalable, secure, and tailored to your needs — then present it for your approval.",
      details: [
        "Technical architecture design",
        "Technology stack selection",
        "Database and API design",
        "Security and scalability planning"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      phase: "Phase 4",
      icon: Code,
      title: "Development Sprints",
      subtitle: "Building",
      description: "This is where ideas become reality. We work in agile sprints, delivering working features every 2 weeks. You'll see progress, give feedback, and stay in control.",
      details: [
        "2-week agile sprint cycles",
        "Regular demos and progress updates",
        "Continuous integration & deployment",
        "Real-time collaboration and feedback"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      phase: "Phase 5",
      icon: TestTube,
      title: "Testing & Quality Assurance",
      subtitle: "Perfecting",
      description: "We don't ship until it's right. Rigorous testing ensures everything works flawlessly — from functionality and performance to security and user experience.",
      details: [
        "Automated and manual testing",
        "Performance and load testing",
        "Security vulnerability assessment",
        "User acceptance testing (UAT)"
      ],
      color: "from-rose-500 to-pink-500"
    },
    {
      phase: "Phase 6",
      icon: Rocket,
      title: "Launch & Deployment",
      subtitle: "Go Live",
      description: "The big moment. We handle the deployment with zero downtime, ensuring a smooth transition to production. Your solution goes live, and we're right there with you.",
      details: [
        "Staged rollout strategy",
        "Zero-downtime deployment",
        "Data migration and validation",
        "Go-live monitoring and support"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      phase: "Phase 7",
      icon: HeadphonesIcon,
      title: "Ongoing Partnership",
      subtitle: "Growing Together",
      description: "Our relationship doesn't end at launch. We provide continuous support, monitor performance, and help you evolve the product as your business grows.",
      details: [
        "24/7 monitoring and alerts",
        "Regular maintenance and updates",
        "Performance optimization",
        "Feature enhancements and scaling"
      ],
      color: "from-primary to-accent"
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
                From the first discovery call to ongoing partnership, we guide you through every step
                with transparency, expertise, and a relentless focus on your success.
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
                    <div className="text-2xl font-bold">7 Phases</div>
                    <div className="text-sm text-muted-foreground">End-to-End Journey</div>
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

      {/* Journey Timeline */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-4">Your Journey With Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From First Call to <span className="gradient-text">Lasting Partnership</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every successful project follows a clear path. Here's how we'll work together to bring your vision to life.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 md:-translate-x-1/2"></div>

            {journeySteps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Node */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${step.color} -translate-x-1/2 mt-8 ring-4 ring-background shadow-lg z-10`}></div>

                {/* Content Card - Alternating sides on desktop */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
                    {/* Phase Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-bold text-white bg-gradient-to-r ${step.color} px-3 py-1 rounded-full`}>
                        {step.phase}
                      </span>
                      <span className="text-sm text-muted-foreground">{step.subtitle}</span>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Arrow Connector (except last item) */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-4 hidden md:block" style={{ top: 'calc(100% - 1rem)' }}>
                    <ArrowDown className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                )}
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
