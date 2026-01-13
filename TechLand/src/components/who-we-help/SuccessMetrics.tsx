import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import industrySuccess from "@/assets/industry-success.jpg";

const SuccessMetrics = () => {
  const metrics = [
    {
      metric: "200+",
      label: "Projects Shipped",
      description: "From MVPs to enterprise platform rebuilds"
    },
    {
      metric: "48hr",
      label: "Average Onboarding",
      description: "Time for engineers to start contributing code"
    },
    {
      metric: "87%",
      label: "Contract Extensions",
      description: "Clients who extend engagements beyond initial scope"
    },
    {
      metric: "4.8/5",
      label: "Client Rating",
      description: "Based on post-project feedback surveys"
    }
  ];

  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={industrySuccess} 
          alt="Success stories across industries" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-4">By The Numbers</Badge>
          <h2 className="text-4xl font-bold mb-6">What Working With Us Looks Like</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We track what matters: how fast we ramp up, how long clients stick around, and whether they'd recommend us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300 bg-background/95 backdrop-blur-sm border-primary/10">
              <div className="mb-4">
                <div className="text-4xl font-bold text-primary mb-4">{stat.metric}</div>
                <div className="font-semibold mb-3 text-lg">{stat.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;