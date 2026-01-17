import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, Lightbulb, CheckCircle2, Rocket, Shield, Zap, Handshake, TrendingUp, Code2, Brain, Building2, Calendar, MapPin, Quote } from "lucide-react";
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
      bio: "15+ years in software engineering. Previously led engineering teams at enterprise SaaS companies. Founded TechLand to bridge the gap between technical talent and business outcomes.",
      gradient: "from-primary to-accent"
    },
    {
      name: "Hamza Rashid",
      initials: "HR",
      role: "Chief Operations Officer",
      bio: "Former delivery lead at consulting firms serving Fortune 500 clients. Specializes in scaling engineering teams and establishing repeatable delivery processes.",
      gradient: "from-accent to-primary"
    },
    {
      name: "Tim Krug",
      initials: "TK",
      role: "Chief Financial Officer",
      bio: "20+ years in financial leadership across technology and professional services. Ensures sustainable growth while maintaining competitive pricing for clients.",
      gradient: "from-primary/80 to-accent/80"
    },
    {
      name: "Dave Sanders",
      initials: "DS",
      role: "Chief Business Officer",
      bio: "Built and sold two technology consultancies. Focuses on long-term client relationships and expanding TechLand's presence in North America and Europe.",
      gradient: "from-accent/80 to-primary/80"
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Embed senior engineers directly into your team. You manage priorities, we provide the talent—React, Node, Python, cloud infrastructure, and more.",
      features: ["Dedicated engineers", "Your tools & processes", "Flexible scaling"]
    },
    {
      icon: Brain,
      title: "AI & SaaS Consultancy",
      description: "End-to-end product development from discovery to deployment. We build custom software, integrate AI capabilities, and help you launch faster.",
      features: ["Full product teams", "AI integration", "Architecture design"]
    }
  ];

  const companyStats = [
    { value: "2019", label: "Founded", icon: Calendar },
    { value: "2000+", label: "Engineers", icon: Code2 },
    { value: "100+", label: "Projects Delivered", icon: Building2 },
    { value: "30+", label: "Countries", icon: MapPin }
  ];

  const testimonial = {
    quote: "TechLand's team integrated seamlessly with ours. They understood our codebase quickly and started contributing within the first week. No hand-holding required.",
    author: "Engineering Director",
    company: "Series B Fintech Startup"
  };

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
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2019, TechLand provides staff augmentation and AI/SaaS consultancy for companies that need to build and ship software without the overhead of traditional hiring. We embed experienced developers into your team or build complete products, your choice, your timeline.
              </p>

              {/* Key Differentiators */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">End-to-End Ownership</span>
                    <span className="text-muted-foreground"> From concept to deployment, we handle the entire product lifecycle so you can focus on growth.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Startup Speed, Enterprise Quality</span>
                    <span className="text-muted-foreground"> We move fast without cutting corners on security, scalability, or maintainability.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">No Vendor Lock-in</span>
                    <span className="text-muted-foreground"> You own your code, your data, and your infrastructure. We build for your independence.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="TechLand team collaborating on innovative solutions"
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
                    <div className="text-2xl font-bold">2000+</div>
                    <div className="text-sm text-muted-foreground">Engineers Available</div>
                  </div>
                </div>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Since 2019
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pioneering Trust and Innovation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Pioneering Trust and <span className="gradient-text">Innovation</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-light text-muted-foreground">
                TechLand's Journey
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We take pride in helping businesses unlock new possibilities with intelligent, AI-driven solutions.
              </p>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="text-primary text-2xl font-bold mt-1">🔹</div>
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Two Service Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">How We Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Ways to <span className="gradient-text">Work With Us</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need to extend your team or build a product from scratch, we have a model that fits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Staff Augmentation Card */}
            <div className="group relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
                alt="Staff Augmentation"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Staff Augmentation</h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Embed senior engineers directly into your team. You manage priorities, we provide the talent.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">Dedicated engineers</Badge>
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">Your tools & processes</Badge>
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">Flexible scaling</Badge>
                </div>
              </div>
            </div>

            {/* AI & SaaS Consultancy Card */}
            <div className="group relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop"
                alt="AI & SaaS Consultancy"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">AI & SaaS Consultancy</h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  End-to-end product development from discovery to deployment. We build custom software and integrate AI capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">Full product teams</Badge>
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">AI integration</Badge>
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">Architecture design</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Industries we serve</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Travel & Hospitality", "Public Sector", "Telecommunication", "Retail & CPG", "Oil, Gas & Energy", "Startups", "E-commerce", "Healthcare"].map((industry) => (
                <Badge key={industry} variant="outline" className="text-sm px-4 py-1">{industry}</Badge>
              ))}
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

      {/* Values Section - Two Columns */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Values Content */}
            <div>
              <Badge className="mb-4">Our Values</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What <span className="gradient-text">Drives Us</span></h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We believe great software comes from teams that care deeply about their craft and the people they serve.
              </p>

              <div className="space-y-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=900&fit=crop"
                  alt="Team collaboration and values"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-lg font-medium leading-relaxed">
                    "We don't just write code. We solve problems, build relationships, and create lasting impact."
                  </p>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="text-4xl font-bold mb-6">Leadership <span className="gradient-text">Team</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced operators who have built and scaled technology teams
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
              <h3 className="text-2xl font-bold mb-2">Our Leadership</h3>
              <p className="text-white/80">Hands-on leaders who still write code and talk to clients</p>
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
