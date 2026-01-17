import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Shield,
  CheckCircle2,
  Rocket,
  Zap
} from "lucide-react";

const WhatWeDo = () => {

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
              <Badge className="mb-6">What We Do</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Building <span className="gradient-text">Digital Solutions</span> That Scale
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From web and mobile development to AI, blockchain, and cloud infrastructure—we deliver
                end-to-end technology services that help businesses innovate and grow.
              </p>

              {/* Key Highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Full-Stack Expertise</span>
                    <span className="text-muted-foreground"> — Web, mobile, cloud, and emerging tech under one roof.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Rapid Delivery</span>
                    <span className="text-muted-foreground"> — Agile processes that get you to market faster.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Enterprise Quality</span>
                    <span className="text-muted-foreground"> — Security, scalability, and reliability built in.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="TechLand team building innovative digital solutions"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <Card className="absolute -bottom-6 -left-6 p-5 bg-card/95 backdrop-blur-sm border-primary/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">7+</div>
                    <div className="text-sm text-muted-foreground">Service Categories</div>
                  </div>
                </div>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                25+ Services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Driving <span className="gradient-text">Business Transformation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions that empower businesses to innovate, scale, and succeed in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Digital Transformation",
                description: "Navigate the digital landscape with expert consulting. We guide businesses in leveraging AI, IoT, and emerging technologies to drive efficiency and growth.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop"
              },
              {
                title: "Customer Experience",
                description: "Craft memorable experiences through personalized, data-driven engagement. Our omnichannel platforms connect brands with customers seamlessly across all touchpoints.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop"
              },
              {
                title: "E-commerce & Mobile",
                description: "Empower your brand with robust e-commerce and mobile platforms. Our solutions enhance online presence, drive sales, and deliver exceptional user experiences.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=600&fit=crop"
              },
              {
                title: "Data Analytics",
                description: "Harness the power of data with advanced analytics. From real-time analysis to customer segmentation, our solutions help you understand behaviors and drive results.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
              },
              {
                title: "Supply Chain",
                description: "Optimize every step of your supply chain. We provide solutions for inventory management, demand forecasting, and logistics tracking for maximum efficiency.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=600&fit=crop"
              },
              {
                title: "AI & Machine Learning",
                description: "Transform your business with AI-driven insights. Our solutions automate tasks, improve efficiencies, and predict trends in customer behavior.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop"
              },
              {
                title: "Sustainability",
                description: "Meet the growing demand for sustainable practices. We help brands integrate responsible sourcing, reduce waste, and adopt eco-friendly solutions.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=600&fit=crop"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Default State - Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>

                {/* Hover State - Full Description */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-center p-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-black text-2xl font-bold mb-4 leading-tight">{service.title}</h3>
                  <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
                  <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-4">Why TechLand</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technology That <span className="gradient-text">Delivers Results</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We combine technical excellence with business understanding to build solutions that make a real impact.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "End-to-End Delivery",
                    description: "From initial concept to deployment and beyond—we handle the entire product lifecycle."
                  },
                  {
                    title: "Modern Tech Stack",
                    description: "We use cutting-edge technologies and best practices to build scalable, maintainable solutions."
                  },
                  {
                    title: "Agile & Transparent",
                    description: "Regular updates, clear communication, and iterative delivery so you're always in the loop."
                  },
                  {
                    title: "Domain Expertise",
                    description: "Deep experience across industries including fintech, healthcare, e-commerce, and more."
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="TechLand team working on innovative solutions"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Full Stack Expertise
              </div>

              {/* Floating accent */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Industries</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving <span className="gradient-text">Diverse Sectors</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our solutions power businesses across multiple industries
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Fintech & Banking",
              "Healthcare",
              "E-commerce & Retail",
              "Travel & Hospitality",
              "Telecommunications",
              "Public Sector",
              "Oil, Gas & Energy",
              "Startups & SaaS",
              "Manufacturing",
              "Education"
            ].map((industry) => (
              <Badge
                key={industry}
                variant="outline"
                className="text-sm px-5 py-2 hover:bg-primary/10 transition-colors cursor-default"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default WhatWeDo;
