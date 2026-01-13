import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Lightbulb,
  Code,
  Rocket,
  Shield,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Globe,
  Award,
  Settings
} from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import methodologyWorkflow from "@/assets/methodology-workflow.jpg";
import qualityAssurance from "@/assets/quality-assurance.jpg";
import clientSuccess from "@/assets/client-success.jpg";

const HowWeDeliver = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamCollaboration} 
            alt="TechLand team delivering projects with proven methodologies" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">How We Deliver</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Proven Methodologies for Exceptional Results
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Our structured approach combines agile methodologies, cutting-edge technologies, and industry best practices to ensure successful project delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 text-white border-white/30 hover:bg-white/10"
                onClick={() => window.location.href = '/terms-of-service'}
              >
                Terms of Conditions
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 text-white border-white/30 hover:bg-white/10"
                onClick={() => window.location.href = '/privacy-policy'}
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold mb-6">Six-Phase Delivery Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive approach that ensures every project is delivered on time, within budget, and exceeds expectations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                phase: "01",
                icon: Search,
                title: "Discovery & Analysis",
                duration: "2-4 weeks",
                description: "Deep dive into your business requirements, existing systems, and strategic objectives to create a comprehensive project foundation.",
                deliverables: ["Requirements Document", "Technical Assessment", "Project Roadmap", "Risk Analysis"]
              },
              {
                phase: "02",
                icon: Lightbulb,
                title: "Strategy & Design",
                duration: "3-6 weeks",
                description: "Develop detailed technical architecture, user experience design, and implementation strategy aligned with your business goals.",
                deliverables: ["System Architecture", "UI/UX Designs", "Technical Specifications", "Implementation Plan"]
              },
              {
                phase: "03",
                icon: Code,
                title: "Development & Integration",
                duration: "6-16 weeks",
                description: "Agile development with regular sprints, continuous integration, and iterative feedback to ensure quality and alignment.",
                deliverables: ["MVP Release", "Feature Iterations", "Integration Testing", "Performance Optimization"]
              },
              {
                phase: "04",
                icon: Shield,
                title: "Testing & Quality Assurance",
                duration: "2-4 weeks",
                description: "Comprehensive testing including functionality, performance, security, and user acceptance to ensure production readiness.",
                deliverables: ["Test Reports", "Security Audit", "Performance Benchmarks", "User Training"]
              },
              {
                phase: "05",
                icon: Rocket,
                title: "Deployment & Launch",
                duration: "1-2 weeks",
                description: "Seamless deployment with minimal downtime, data migration, and go-live support to ensure smooth transition.",
                deliverables: ["Production Deployment", "Data Migration", "Go-Live Support", "Launch Documentation"]
              },
              {
                phase: "06",
                icon: Settings,
                title: "Support & Optimization",
                duration: "Ongoing",
                description: "Continuous monitoring, optimization, and support to ensure peak performance and evolving business needs.",
                deliverables: ["24/7 Monitoring", "Performance Reports", "Feature Updates", "Optimization Recommendations"]
              }
            ].map((phase, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 group relative">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-primary bg-primary/10 rounded-full px-3 py-1">
                        Phase {phase.phase}
                      </span>
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>
                    <div>
                      <h4 className="font-medium mb-3 text-sm">Key Deliverables:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            <span className="text-xs text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < 5 && (
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamCollaboration} 
            alt="Team collaboration showcasing our methodologies" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Methodologies</Badge>
            <h2 className="text-4xl font-bold mb-6">Industry-Leading Approaches</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine proven methodologies with innovative practices to deliver optimal results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Agile Development",
                icon: Zap,
                description: "Iterative development with regular sprints, continuous feedback, and adaptive planning for maximum flexibility.",
                benefits: ["Faster Time-to-Market", "Continuous Improvement", "Stakeholder Collaboration", "Risk Mitigation"]
              },
              {
                title: "DevOps Integration",
                icon: Globe,
                description: "Seamless integration of development and operations for automated deployment and continuous delivery.",
                benefits: ["Automated Deployment", "Continuous Integration", "Infrastructure as Code", "Monitoring & Alerts"]
              },
              {
                title: "Design Thinking",
                icon: Lightbulb,
                description: "Human-centered approach focusing on user needs, creative problem-solving, and iterative design.",
                benefits: ["User-Centric Design", "Innovation Focus", "Problem-Solution Fit", "Enhanced UX"]
              },
              {
                title: "Lean Startup",
                icon: Target,
                description: "Build-measure-learn approach for rapid validation and iteration based on real user feedback.",
                benefits: ["Rapid Validation", "MVP Approach", "Data-Driven Decisions", "Resource Optimization"]
              },
              {
                title: "Quality Assurance",
                icon: Shield,
                description: "Comprehensive testing strategies including automated testing, security audits, and performance optimization.",
                benefits: ["Automated Testing", "Security First", "Performance Optimization", "Code Quality"]
              },
              {
                title: "Project Management",
                icon: Users,
                description: "Certified project managers using industry-standard frameworks for successful delivery and communication.",
                benefits: ["Clear Communication", "Risk Management", "Timeline Adherence", "Stakeholder Alignment"]
              }
            ].map((methodology, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group bg-background/95 backdrop-blur-sm border-primary/10">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <methodology.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{methodology.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{methodology.description}</p>
                </div>
                
                <div className="space-y-2">
                  {methodology.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge className="mb-4">Quality Standards</Badge>
              <h2 className="text-4xl font-bold mb-6">Excellence in Every Detail</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our commitment to quality is reflected in our certifications, standards, and continuous improvement processes that ensure exceptional delivery.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Certified Processes</h3>
                    <p className="text-muted-foreground">International standards compliance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Security First</h3>
                    <p className="text-muted-foreground">Enterprise-grade security measures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Target className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Continuous Improvement</h3>
                    <p className="text-muted-foreground">Regular process optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={qualityAssurance} 
                  alt="Quality assurance team ensuring excellence" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 -mt-16 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Quality Promise</h3>
                  <p className="text-muted-foreground">
                    Every project meets international standards with rigorous testing, security audits, and performance optimization to ensure exceptional results.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                standard: "ISO 27001",
                description: "Information Security Management certified processes"
              },
              {
                standard: "CMMI Level 3",
                description: "Capability Maturity Model Integration for process excellence"
              },
              {
                standard: "PMP Certified",
                description: "Project Management Professional certified team leads"
              },
              {
                standard: "SOC 2 Type II",
                description: "Security, Availability, and Confidentiality compliance"
              }
            ].map((standard, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{standard.standard}</h3>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={clientSuccess} 
            alt="Client success and performance excellence" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Performance Metrics</Badge>
            <h2 className="text-4xl font-bold mb-6">Measurable Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself with industry-leading performance metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "95%",
                label: "On-Time Delivery",
                description: "Projects delivered within agreed timelines"
              },
              {
                metric: "98%",
                label: "Quality Score",
                description: "Client satisfaction with delivered solutions"
              },
              {
                metric: "24/7",
                label: "Support Coverage",
                description: "Round-the-clock monitoring and support"
              },
              {
                metric: "15min",
                label: "Response Time",
                description: "Average incident response time"
              }
            ].map((metric, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.metric}</div>
                  <div className="font-semibold mb-2">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Experience Our Delivery Excellence</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us to experience world-class project delivery and exceptional results
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeDeliver;