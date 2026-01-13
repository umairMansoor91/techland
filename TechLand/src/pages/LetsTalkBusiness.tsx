import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientInquiryForm from "@/components/ClientInquiryForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";
import heroVision from "@/assets/hero-vision.jpg";

const LetsTalkBusiness = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroVision} 
            alt="Professional business meeting and collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">Let's Connect</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Connect with our experts to discuss your digital transformation journey. We're here to turn your vision into reality.
            </p>
            <Button
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="px-8 bg-white text-primary hover:bg-white/90"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Get Started</Badge>
              <h2 className="text-4xl font-bold mb-6">Let's Start the Conversation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and let's discuss how we can help accelerate your business growth with cutting-edge technology solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 mb-16">
              {/* Inquiry Form - Takes more space */}
              <div className="lg:col-span-3">
                <ClientInquiryForm />
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Response Time Card */}
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary-glow/10 border-primary/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24-48 hours
                    </p>
                  </div>
                </Card>

                {/* Expert Team Card */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Consultation</h4>
                      <p className="text-muted-foreground">Get matched with the right specialist for your project needs</p>
                    </div>
                  </div>
                </Card>

                {/* Global Support Card */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Global Support</h4>
                      <p className="text-muted-foreground">24/7 support available for enterprise clients</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Why Partner With TechLand?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have transformed their businesses with our expertise
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "70+ certified professionals with deep industry expertise"
                  },
                  {
                    icon: CheckCircle2,
                    title: "Proven Results",
                    description: "300+ successful projects with measurable business impact"
                  },
                  {
                    icon: ArrowLeft,
                    title: "End-to-End Service",
                    description: "From strategy to deployment and ongoing support"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LetsTalkBusiness;