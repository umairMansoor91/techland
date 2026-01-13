import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DeveloperApplicationForm from "@/components/DeveloperApplicationForm";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Award, MapPin, Clock, Sparkles } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import officeCulture from "@/assets/office-culture.jpg";
import leadershpMeeting from "@/assets/leadership-meeting.jpg";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      value: "ml_engineer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Lead AI/ML initiatives and develop cutting-edge solutions for enterprise clients."
    },
    {
      title: "Full Stack Developer",
      value: "fullstack",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Build end-to-end applications using modern web technologies and frameworks."
    },
    {
      title: "Frontend Developer",
      value: "senior_frontend",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Create responsive and interactive user interfaces with React, TypeScript, and modern CSS."
    },
    {
      title: "Backend Developer",
      value: "backend_python",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Develop robust server-side applications, APIs, and database architectures."
    },
    {
      title: "Data Engineer",
      value: "data_engineer",
      department: "Data & Analytics",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Build and maintain data pipelines, ETL processes, and data infrastructure at scale."
    },
    {
      title: "DevOps Engineer",
      value: "devops",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Manage cloud infrastructure, CI/CD pipelines, and deployment automation."
    },
    {
      title: "Cloud Solutions Architect",
      value: "cloud_architect",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure for enterprise applications."
    },
    {
      title: "React Native Developer",
      value: "react_native",
      department: "Mobile",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Build cross-platform mobile applications using React Native."
    },
    {
      title: "QA Engineer",
      value: "qa_engineer",
      department: "Quality",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Ensure software quality through automated and manual testing."
    },
    {
      title: "Security Engineer",
      value: "security_engineer",
      department: "Security",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Implement security best practices and conduct security assessments."
    },
    {
      title: "Project Manager",
      value: "project_manager",
      department: "Operations",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Lead cross-functional teams to deliver complex AI and digital transformation projects."
    },
    {
      title: "UX/UI Designer",
      value: "ui_ux",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Create intuitive and beautiful user experiences for enterprise AI applications."
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "Work with brilliant minds in a supportive, innovative environment"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Continuous learning, certifications, and career advancement paths"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Cutting-edge Projects",
      description: "Work on the latest AI and digital transformation technologies"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote-first culture with hybrid options and flexible schedules"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamCollaboration} 
            alt="Team collaboration and innovation at TechLand" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">Join Our Team</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Shape the Future of AI
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join a team of innovators, problem-solvers, and visionaries building tomorrow's digital solutions today.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">Our Mission</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">
              Building Tomorrow's Technology Today
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              At TechLand, we are more than just a technology company. We are architects of the future, 
              crafting intelligent solutions that transform industries and empower businesses to thrive in 
              the digital age. Our team of visionaries, engineers, and innovators work together to push 
              the boundaries of what's possible with artificial intelligence and digital transformation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={officeCulture} 
            alt="Office culture and work environment" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-4">Our Culture</Badge>
            <h2 className="text-4xl font-bold mb-6">Why Work With Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in empowering our people to do their best work in an environment that fosters innovation and growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300 bg-background/95 backdrop-blur-sm border-primary/10">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-3 text-lg">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4">Open Positions</Badge>
            <h2 className="text-4xl font-bold mb-6">Current Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities across engineering, consulting, design, and leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 border-primary/10">
                <h3 className="text-lg font-bold mb-2">{position.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {position.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{position.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Apply Now</Badge>
              <h2 className="text-4xl font-bold mb-6">Submit Your Application</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to apply for a position at TechLand
              </p>
            </div>
            <DeveloperApplicationForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-r from-primary/5 to-primary-glow/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={leadershpMeeting}
            alt="Leadership and team building"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Don't see a position that fits? We're always looking for exceptional talent to join our growing team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;