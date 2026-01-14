import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, Lightbulb, CheckCircle2, Rocket, Shield, Zap, Handshake, TrendingUp } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import leadershipMeeting from "@/assets/leadership-meeting.jpg";
import officeCulture from "@/assets/office-culture.jpg";

const WhoWeAre = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace emerging technologies and creative problem-solving to build solutions that give you a real competitive edge."
    },
    {
      icon: Users,
      title: "True Partnership",
      description: "Your success is our success. We integrate with your team, align with your goals, and measure ourselves by your outcomes."
    },
    {
      icon: Award,
      title: "Quality Obsessed",
      description: "Every line of code, every design decision, every deliverable meets rigorous standards—because your reputation depends on it."
    },
    {
      icon: Heart,
      title: "Radical Transparency",
      description: "No surprises. Clear communication, honest timelines, and straightforward pricing from day one to launch day."
    }
  ];

  const pillars = [
    {
      icon: Zap,
      title: "Ship Faster",
      description: "Agile sprints, pre-built components, and parallel workstreams get you to market weeks ahead of schedule."
    },
    {
      icon: Handshake,
      title: "Partner Deeply",
      description: "Embedded teams, shared channels, weekly syncs—we become an extension of your organization."
    },
    {
      icon: TrendingUp,
      title: "Scale Confidently",
      description: "Cloud-native architecture, automated testing, and CI/CD pipelines built for your growth trajectory."
    }
  ];

  const leaders = [
    {
      name: "Umair Mansoor",
      initials: "UM",
      role: "Chief Executive Officer",
      bio: "Leads TechLand's vision for AI-driven digital transformation, with 15+ years building products that scale globally.",
      gradient: "from-primary to-accent"
    },
    {
      name: "Hamza Rashid",
      initials: "HR",
      role: "Chief Operations Officer",
      bio: "Orchestrates delivery excellence across teams, ensuring every project ships on time without compromising quality.",
      gradient: "from-accent to-primary"
    },
    {
      name: "Tim Krug",
      initials: "TK",
      role: "Chief Financial Officer",
      bio: "Drives sustainable growth through strategic financial planning and operational efficiency.",
      gradient: "from-primary/80 to-accent/80"
    },
    {
      name: "Dave Sanders",
      initials: "DS",
      role: "Chief Business Officer",
      bio: "Builds lasting client partnerships and expands TechLand's reach into new markets and industries.",
      gradient: "from-accent/80 to-primary/80"
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
              <Badge className="mb-6">About TechLand</Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                We Build Technology That <span className="gradient-text">Solves Real Problems</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded with a mission to bridge the gap between ambitious ideas and market-ready products, TechLand brings together engineers, designers, and strategists who are obsessed with building software that actually works.
              </p>

              {/* Key Differentiators */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">End-to-End Ownership</span>
                    <span className="text-muted-foreground"> — From concept to deployment, we handle the entire product lifecycle so you can focus on growth.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Startup Speed, Enterprise Quality</span>
                    <span className="text-muted-foreground"> — We move fast without cutting corners on security, scalability, or maintainability.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">No Vendor Lock-in</span>
                    <span className="text-muted-foreground"> — You own your code, your data, and your infrastructure. We build for your independence.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teamCollaboration}
                  alt="TechLand team collaborating on innovative solutions"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <Card className="absolute -bottom-6 -left-6 p-5 bg-card/95 backdrop-blur-sm border-primary/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-muted-foreground">Client Retention Rate</div>
                  </div>
                </div>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                AI-First Approach
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Decorative background orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Mission Card - Full Width with Gradient Border */}
          <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-[1px] mb-12">
            <div className="bg-card rounded-3xl p-8 md:p-12">
              {/* Mission Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
                  We help ambitious businesses <span className="gradient-text">ship great software faster</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Not just code that works—solutions that drive measurable results: more users, more revenue, fewer headaches.
                </p>
              </div>

              {/* Three Pillars */}
              <div className="grid md:grid-cols-3 gap-6">
                {pillars.map((pillar, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted/80 transition-colors group">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision + Image Row */}
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Vision Card - 2/5 width */}
            <Card className="lg:col-span-2 p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 flex flex-col justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the technology partner that growth-focused companies trust to turn bold ideas into products users love—on time, on budget, and built to scale.
              </p>
            </Card>

            {/* Image - 3/5 width */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden group min-h-[280px]">
              <img
                src={officeCulture}
                alt="TechLand team collaborating in modern workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/90 text-sm font-medium">Building the future, one sprint at a time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What <span className="gradient-text">Drives Us</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Four principles that guide every project and relationship
            </p>
          </div>

          {/* Values Grid - 2x2 */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="text-4xl font-bold mb-6">Visionary <span className="gradient-text">Leaders</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the minds behind TechLand's innovative solutions and strategic direction
            </p>
          </div>

          {/* Leadership Team Image */}
          <div className="relative mb-16 rounded-2xl overflow-hidden group">
            <img
              src={leadershipMeeting}
              alt="TechLand leadership team in strategic meeting"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Strategic Leadership</h3>
              <p className="text-white/80">Guiding innovation and driving digital transformation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leaders.map((leader, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className={`w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300`}>
                  <span className="text-2xl font-bold text-white">{leader.initials}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{leader.name}</h3>
                <Badge variant="outline" className="mb-3 text-xs">{leader.role}</Badge>
                <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
              </Card>
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

export default WhoWeAre;
