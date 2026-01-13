import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import clientSuccess from "@/assets/client-success.jpg";
import sarahJohnson from "@/assets/testimonial-sarah-johnson.jpg";
import michaelChen from "@/assets/testimonial-michael-chen.jpg";
import emilyRodriguez from "@/assets/testimonial-emily-rodriguez.jpg";

const ClientTestimonials = () => {
  const testimonials = [
    {
      quote: "We needed three senior React devs yesterday. TechLand had them onboarded and pushing code within the week. They felt like part of our team, not contractors watching the clock.",
      author: "Sarah Mitchell",
      role: "VP of Engineering, Finova",
      industry: "Fintech",
      image: sarahJohnson
    },
    {
      quote: "Our legacy inventory system was held together with duct tape. Their team rebuilt it piece by piece without any downtime. We went from daily fires to actually planning features again.",
      author: "Michael Torres",
      role: "Head of Technology, GreenLeaf Retail",
      industry: "Retail",
      image: michaelChen
    },
    {
      quote: "Finding engineers who understand both HIPAA compliance and modern frontend frameworks is nearly impossible. TechLand's team delivered our patient portal on time and it passed audit on the first try.",
      author: "Dr. Rachel Patel",
      role: "Digital Health Director, MediBridge",
      industry: "Healthcare",
      image: emilyRodriguez
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <Badge className="mb-4">From Our Clients</Badge>
            <h2 className="text-4xl font-bold mb-6">Don't Take Our Word For It</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The best measure of our work is whether clients come back. Most do. Here's what a few of them had to say about working with our engineering teams.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-muted-foreground">Teams from 50+ companies across North America and Europe</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-muted-foreground">Average engagement: 14 months</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={clientSuccess} 
                alt="Happy clients celebrating project success" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 bg-background/95 backdrop-blur-sm border-primary/10">
              <div className="mb-8">
                <p className="text-muted-foreground italic leading-relaxed text-lg">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.author} - ${testimonial.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground mb-2">{testimonial.role}</div>
                  <Badge variant="outline" className="text-xs">{testimonial.industry}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;