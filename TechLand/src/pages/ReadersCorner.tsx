import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";

// Assets imports
import blogAIFuture from "@/assets/blog-ai-future.jpg";
import blogCloudComputing from "@/assets/blog-cloud-computing.jpg";
import blogCybersecurity from "@/assets/blog-cybersecurity.jpg";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";
import caseStudyVersatileSolutions from "@/assets/case-study-versatile-solutions.jpg";
import caseStudyTradeAmerica from "@/assets/case-study-trade-america.jpg";
import caseStudyEduGenius from "@/assets/case-study-edugenius.jpg";
import caseStudyTramericaa from "@/assets/case-study-tramericaa.jpg";
import readersCornerHero from "@/assets/readers-corner-hero.jpg";

interface Article {
  title: string;
  description: string;
  image: string;
  link: string;
  category: "Blog" | "Case Study";
  readTime: string;
}

const articles: Article[] = [
  {
    title: "TRAMERICAA: Scaling an Amazon Business with Smart Analytics",
    description: "How we built an Amazon analytics and automation platform to streamline operations and drive growth.",
    image: caseStudyTramericaa,
    link: "/case-study/tramericaa",
    category: "Case Study",
    readTime: "14 min read"
  },
  {
    title: "The Future of AI in Enterprise Applications",
    description: "Explore the latest AI trends that are reshaping business operations and discover how companies can leverage artificial intelligence for competitive advantage.",
    image: blogAIFuture,
    link: "/blog/ai-future",
    category: "Blog",
    readTime: "6 min read"
  },
  {
    title: "How Cloud Computing Can Transform Small Businesses",
    description: "Understanding the benefits of cloud migration and how it can transform your business operations, reduce costs, and improve scalability.",
    image: blogCloudComputing,
    link: "/blog/cloud-computing",
    category: "Blog",
    readTime: "5 min read"
  },
  {
    title: "Building Robust Cybersecurity for Modern Enterprises",
    description: "Essential cybersecurity strategies to protect your business from evolving threats and ensure data integrity in the digital age.",
    image: blogCybersecurity,
    link: "/blog/cybersecurity",
    category: "Blog",
    readTime: "7 min read"
  },
  {
    title: "E-commerce Platform Transformation",
    description: "How we helped a retail business increase their online sales through a complete digital transformation and modern e-commerce platform.",
    image: caseStudyEcommerce,
    link: "/case-study/ecommerce",
    category: "Case Study",
    readTime: "12 min read"
  },
  {
    title: "Healthcare System Modernization",
    description: "Revolutionizing patient care through advanced healthcare technology solutions, improving efficiency and patient outcomes.",
    image: caseStudyHealthcare,
    link: "/case-study/healthcare",
    category: "Case Study",
    readTime: "12 min read"
  },
  {
    title: "AI-Powered Sales Automation for Versatile Solutions",
    description: "Transforming sales operations with intelligent calling systems, advanced analytics, and self-optimizing tools that improved conversions.",
    image: caseStudyVersatileSolutions,
    link: "/case-study/versatile-solutions",
    category: "Case Study",
    readTime: "12 min read"
  },
  {
    title: "Trade America: Streamlining Logistics Operations",
    description: "Transforming supply chain operations with intelligent route optimization and predictive market analysis.",
    image: caseStudyTradeAmerica,
    link: "/case-study/trade-america",
    category: "Case Study",
    readTime: "14 min read"
  },
  {
    title: "EduGenius: AI-Powered Learning Platform",
    description: "Transforming education delivery with an intelligent LMS featuring personalized learning paths and institutional support tools.",
    image: caseStudyEduGenius,
    link: "/case-study/edugenius",
    category: "Case Study",
    readTime: "16 min read"
  }
];

const ReadersCorner = () => {
  return (
    <>
      <Helmet>
        <title>Reader's Corner | TechLand - Insights & Case Studies</title>
        <meta 
          name="description" 
          content="Explore our latest blog posts and case studies covering AI trends, technology insights, and real-world success stories from TechLand." 
        />
        <meta name="keywords" content="tech blog, AI insights, case studies, digital transformation, software development" />
        <link rel="canonical" href="/readers-corner" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Reader's Corner | TechLand - Insights & Case Studies" />
        <meta property="og:description" content="Explore our latest blog posts and case studies covering AI trends, technology insights, and real-world success stories." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/readers-corner" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reader's Corner | TechLand" />
        <meta name="twitter:description" content="Explore our latest blog posts and case studies covering AI trends and technology insights." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative bg-hero overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={readersCornerHero}
              alt="Abstract knowledge and learning background"
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
                <span className="text-sm font-medium text-primary">Knowledge Hub</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-hero-text mb-6">
                Reader's <span className="gradient-text">Corner</span>
              </h1>
              
              <p className="text-xl text-hero-text/80 mb-8 max-w-2xl mx-auto">
                Dive into our collection of insights, case studies, and thought leadership pieces that explore the future of technology and business innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              {/* Articles in Row Layout */}
              <div className="space-y-8">
                {articles.map((article, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card border-border/50 overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="lg:w-2/5 relative overflow-hidden">
                        <img 
                          src={article.image}
                          alt={article.title}
                          className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:bg-gradient-to-r lg:from-transparent lg:to-background/40"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`
                            px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1
                            ${article.category === "Blog" 
                              ? "bg-primary/90 text-primary-foreground backdrop-blur-sm" 
                              : "bg-accent/90 text-accent-foreground backdrop-blur-sm"
                            }
                          `}>
                            {article.category === "Blog" ? <FileText className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                            <span>{article.category}</span>
                          </span>
                        </div>

                        {/* Read Time */}
                        <div className="absolute bottom-4 right-4">
                          <span className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                            {article.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                            {article.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Link to={article.link} className="flex-1">
                            <Button variant="outline" className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                              <span>Read {article.category === "Blog" ? "Article" : "Case Study"}</span>
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

export default ReadersCorner;