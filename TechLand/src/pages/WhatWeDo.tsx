import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Code, 
  Database, 
  Cpu,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Users, Award, Star, Lightbulb, Globe, Target, TrendingUp, Heart } from "lucide-react";
import heroTech from "@/assets/hero-tech.jpg";
import whatWeDoHero from "@/assets/what-we-do-hero.jpg";
import blogAIFuture from "@/assets/blog-ai-future.jpg";
import blogCloudComputing from "@/assets/blog-cloud-computing.jpg";
import blogCybersecurity from "@/assets/blog-cybersecurity.jpg";
import officeCulture from "@/assets/office-culture.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={whatWeDoHero} 
            alt="TechLand advanced technology solutions and development environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">What We Do</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Transforming Ideas Into Digital Reality
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              We deliver comprehensive technology solutions that drive innovation, enhance efficiency, and accelerate growth across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise & Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Our Expertise</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Leading-Edge Technology Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience in cutting-edge technology implementation, we specialize in transforming complex business challenges into elegant digital solutions. Our expertise spans from artificial intelligence to enterprise-grade applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Brain className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI-First Approach</h3>
                    <p className="text-muted-foreground">Integrating intelligent automation into every solution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Globe className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scalable Architecture</h3>
                    <p className="text-muted-foreground">Building solutions that grow with your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Security-First Design</h3>
                    <p className="text-muted-foreground">Enterprise-grade security in every implementation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={teamCollaboration} 
                  alt="TechLand team collaborating on innovative solutions" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 -mt-16 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Innovation Philosophy</h3>
                  <p className="text-muted-foreground">
                    We believe technology should amplify human potential. Every solution we create is designed to unlock new possibilities and drive meaningful business transformation.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={officeCulture} 
            alt="Professional achievements and success metrics" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl font-bold mb-6">Delivering Measurable Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions drive real business value with proven outcomes across all industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                metric: "300+",
                label: "Projects Delivered",
                description: "Successful implementations worldwide"
              },
              {
                metric: "92%",
                label: "Cost Reduction",
                description: "Average operational savings achieved"
              },
              {
                metric: "18x",
                label: "Performance Boost",
                description: "Average system performance improvement"
              },
              {
                metric: "99.9%",
                label: "Uptime Achieved",
                description: "Reliability across all deployments"
              }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 bg-background/95 backdrop-blur-sm">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Certified partners with leading technology providers and award-winning solutions."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "70+ certified professionals with deep expertise across all technology domains."
              },
              {
                icon: Heart,
                title: "Client Success",
                description: "95% client retention rate with long-term partnerships spanning multiple projects."
              }
            ].map((achievement, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group bg-background/95 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Core Services</Badge>
            <h2 className="text-4xl font-bold mb-6">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI implementation to digital transformation, we provide end-to-end solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Custom AI solutions including predictive analytics, natural language processing, computer vision, and intelligent automation systems.",
                features: ["Custom AI Models", "Predictive Analytics", "NLP Solutions", "Computer Vision"],
                image: blogAIFuture
              },
              {
                icon: Smartphone,
                title: "Digital Transformation",
                description: "End-to-end digital transformation services to modernize your business processes and enhance customer experiences.",
                features: ["Process Automation", "Digital Strategy", "Legacy Modernization", "Change Management"],
                image: officeCulture
              },
              {
                icon: Code,
                title: "Custom Software Development",
                description: "Bespoke software solutions built with cutting-edge technologies to meet your unique business requirements.",
                features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
                image: teamCollaboration
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Cloud migration, optimization, and management services to enhance scalability, security, and cost-efficiency.",
                features: ["Cloud Migration", "Infrastructure Optimization", "Multi-cloud Strategy", "DevOps Integration"],
                image: blogCloudComputing
              },
              {
                icon: Database,
                title: "Data Analytics & BI",
                description: "Transform raw data into actionable insights with advanced analytics, reporting, and business intelligence solutions.",
                features: ["Data Warehousing", "Real-time Analytics", "Business Intelligence", "Data Visualization"],
                image: heroTech
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
                features: ["Security Assessment", "Threat Detection", "Compliance Management", "Incident Response"],
                image: blogCybersecurity
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} illustration`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Client Success Stories</Badge>
            <h2 className="text-4xl font-bold mb-6">Transforming Businesses Worldwide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from industry leaders who have achieved remarkable results with our technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "TechLand's custom AI solution increased our operational efficiency by 75% and reduced processing time from hours to minutes.",
                author: "Jennifer Chen",
                role: "CTO, TechCorp Industries",
                industry: "Manufacturing",
                rating: 5
              },
              {
                quote: "Their cloud migration strategy saved us $2M annually while improving our system performance by 300%. Outstanding execution.",
                author: "Marcus Rodriguez",
                role: "IT Director, GlobalFinance",
                industry: "Financial Services", 
                rating: 5
              },
              {
                quote: "The AI-powered analytics platform they built gave us insights we never had before, directly contributing to 40% revenue growth.",
                author: "Dr. Sarah Williams",
                role: "Head of Innovation, HealthTech Solutions",
                industry: "Healthcare",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <Badge variant="outline" className="text-xs mt-1">{testimonial.industry}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Technology Stack</Badge>
            <h2 className="text-4xl font-bold mb-6">Cutting-Edge Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver robust, scalable, and future-ready solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "AI & ML",
                technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "Hugging Face", "MLflow"]
              },
              {
                category: "Frontend",
                technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"]
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Python", "Java", "Go", "Microservices"]
              },
              {
                category: "Cloud & DevOps",
                technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"]
              }
            ].map((stack, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={officeCulture} 
            alt="Professional work environment and processes" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery from concept to deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Deep dive into your business needs, challenges, and goals to create a comprehensive strategy."
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Create detailed technical specifications, architecture designs, and project roadmaps."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous testing, quality assurance, and iterative improvements."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Seamless deployment with ongoing support, monitoring, and optimization services."
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 group bg-background/95 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                  </div>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive your digital transformation journey
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="px-8"
                onClick={() => window.location.href = '/lets-talk-business'}
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;