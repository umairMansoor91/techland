import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Heart, Lightbulb, CheckCircle2, Rocket, Shield } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import leadershipMeeting from "@/assets/leadership-meeting.jpg";
import officeCulture from "@/assets/office-culture.jpg";
import ceoMuhammad from "@/assets/ceo-muhammad.jpg";
import cooNuman from "@/assets/coo-numan.jpg";
import cpoUmair from "@/assets/cpo-umair.jpg";
import ctoMoazam from "@/assets/cto-moazam.jpg";

const WhoWeAre = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace emerging technologies and creative thinking to deliver solutions that keep you ahead of the curve."
    },
    {
      icon: Users,
      title: "True Partnership",
      description: "Your success is our success. We work alongside you as an extension of your team, not just a vendor."
    },
    {
      icon: Award,
      title: "Quality Obsessed",
      description: "Every line of code, every design pixel, every deliverable meets our rigorous quality standards."
    },
    {
      icon: Heart,
      title: "Radical Transparency",
      description: "No hidden agendas. Clear communication, honest timelines, and straightforward pricing always."
    },
    {
      icon: Target,
      title: "Outcome Focused",
      description: "We measure our work by your business results — increased revenue, reduced costs, happier users."
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "Diverse perspectives from our worldwide team bring fresh ideas and 24/7 support capabilities."
    }
  ];

  const leaders = [
    {
      name: "Muhammad Ibn Abdul Aziz",
      role: "Chief Executive Officer",
      bio: "Visionary leader driving digital transformation and AI innovation across global markets",
      image: ceoMuhammad
    },
    {
      name: "Numan Khurshid",
      role: "Chief Operations Officer",
      bio: "Operations expert ensuring seamless delivery and operational excellence",
      image: cooNuman
    },
    {
      name: "Umair Mansoor",
      role: "Chief Products Officer",
      bio: "Product strategist crafting innovative solutions that drive customer success",
      image: cpoUmair
    },
    {
      name: "Muhammad Moazam",
      role: "Chief Technical Officer",
      bio: "Technology architect building next-generation AI and digital platforms",
      image: ctoMoazam
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Building Technology That <span className="gradient-text">Drives Results</span></h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We exist to help businesses leverage technology as a competitive advantage. Our mission is to deliver solutions that don't just work — they transform how you operate, compete, and grow.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Speed to Market</h3>
                    <p className="text-muted-foreground">Launch faster with our agile development approach and pre-built components</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Your Team, Extended</h3>
                    <p className="text-muted-foreground">We integrate seamlessly with your workflow, culture, and communication style</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <Globe className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Built to Scale</h3>
                    <p className="text-muted-foreground">Architecture designed to grow with your business from day one</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl mb-6 group">
                <img
                  src={officeCulture}
                  alt="TechLand office culture and workspace"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 -mt-16 relative z-10 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the go-to technology partner for growth-focused businesses — recognized for turning ambitious ideas into products that users love and markets embrace.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-14 animate-slide-up">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What <span className="gradient-text">Drives Us</span> Forward</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project, every decision, and every relationship we build
            </p>
          </div>

          {/* Values Grid - 2 rows of 3 */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5 text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
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
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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
