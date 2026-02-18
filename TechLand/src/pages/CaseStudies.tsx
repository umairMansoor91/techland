import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";
import caseStudyVersatileSolutions from "@/assets/case-study-versatile-solutions.jpg";
import caseStudyTradeAmerica from "@/assets/case-study-trade-america.jpg";
import caseStudyEduGenius from "@/assets/case-study-edugenius.jpg";
import caseStudyTramericaa from "@/assets/case-study-tramericaa.jpg";
import readersCornerHero from "@/assets/readers-corner-hero.jpg";

interface CaseStudyItem {
  title: string;
  description: string;
  image: string;
  link: string;
  readTime: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    title: "Ormond Dental: AI-Powered Scheduling Transformation",
    description: "How a Voice AI Agent eliminated 30+ minute wait times, recovered 2,090 missed calls per month, and generated $120K in incremental annual revenue for a multi-location dental practice.",
    image: caseStudyHealthcare,
    link: "/case-study/barrington-orthopedic",
    readTime: "10 min read"
  },
  {
    title: "TRAMERICAA: Scaling an Amazon Business with Smart Analytics",
    description: "How we built an Amazon analytics and automation platform to streamline operations and drive growth.",
    image: caseStudyTramericaa,
    link: "/case-study/tramericaa",
    readTime: "14 min read"
  },
  {
    title: "E-commerce Platform Transformation",
    description: "How we helped a retail business increase their online sales through a complete digital transformation and modern e-commerce platform.",
    image: caseStudyEcommerce,
    link: "/case-study/ecommerce",
    readTime: "12 min read"
  },
  {
    title: "Healthcare System Modernization",
    description: "Revolutionizing patient care through advanced healthcare technology solutions, improving efficiency and patient outcomes.",
    image: caseStudyHealthcare,
    link: "/case-study/healthcare",
    readTime: "12 min read"
  },
  {
    title: "AI-Powered Sales Automation for Versatile Solutions",
    description: "Transforming sales operations with intelligent calling systems, advanced analytics, and self-optimizing tools that improved conversions.",
    image: caseStudyVersatileSolutions,
    link: "/case-study/versatile-solutions",
    readTime: "12 min read"
  },
  {
    title: "Trade America: Streamlining Logistics Operations",
    description: "Transforming supply chain operations with intelligent route optimization and predictive market analysis.",
    image: caseStudyTradeAmerica,
    link: "/case-study/trade-america",
    readTime: "14 min read"
  },
  {
    title: "EduGenius: AI-Powered Learning Platform",
    description: "Transforming education delivery with an intelligent LMS featuring personalized learning paths and institutional support tools.",
    image: caseStudyEduGenius,
    link: "/case-study/edugenius",
    readTime: "16 min read"
  },
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | TechLand - Real-World Success Stories</title>
        <meta
          name="description"
          content="Explore TechLand's case studies showcasing real-world digital transformation, AI automation, and technology solutions across industries."
        />
        <meta name="keywords" content="case studies, digital transformation, AI solutions, success stories, technology projects" />
        <link rel="canonical" href="/case-studies" />
        <meta property="og:title" content="Case Studies | TechLand - Real-World Success Stories" />
        <meta property="og:description" content="Explore TechLand's case studies showcasing real-world digital transformation and AI solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/case-studies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | TechLand" />
        <meta name="twitter:description" content="Real-world success stories from TechLand's digital transformation projects." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-hero overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={readersCornerHero}
              alt="Case studies and success stories background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-hero/90 via-hero/80 to-secondary/60"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Success Stories</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-hero-text mb-6">
                Case <span className="gradient-text">Studies</span>
              </h1>

              <p className="text-xl text-hero-text/80 mb-8 max-w-2xl mx-auto">
                Real-world success stories showcasing how we've helped businesses transform their operations with AI, automation, and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card border-border/50 overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="lg:w-2/5 relative overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:bg-gradient-to-r lg:from-transparent lg:to-background/40"></div>

                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 bg-accent/90 text-accent-foreground backdrop-blur-sm">
                            <BookOpen className="w-3 h-3" />
                            <span>Case Study</span>
                          </span>
                        </div>

                        <div className="absolute bottom-4 right-4">
                          <span className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {study.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                            {study.title}
                          </h3>

                          <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                            {study.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <Link to={study.link} className="flex-1">
                            <Button variant="outline" className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                              <span>Read Case Study</span>
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
