import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import blogAIFuture from "@/assets/blog-ai-future.jpg";
import blogCloudComputing from "@/assets/blog-cloud-computing.jpg";
import blogCybersecurity from "@/assets/blog-cybersecurity.jpg";
import readersCornerHero from "@/assets/readers-corner-hero.jpg";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Agentic AI: From Pilots to Production in 2026",
    description: "How enterprises are moving from AI experimentation to real-world deployment, and what it takes to succeed in the 60% that delivers results.",
    image: blogAIFuture,
    link: "/blog/agentic-ai",
    readTime: "8 min read"
  },
  {
    title: "The Future of AI in Enterprise Applications",
    description: "Explore the latest AI trends that are reshaping business operations and discover how companies can leverage artificial intelligence for competitive advantage.",
    image: blogAIFuture,
    link: "/blog/ai-future",
    readTime: "6 min read"
  },
  {
    title: "How Cloud Computing Can Transform Small Businesses",
    description: "Understanding the benefits of cloud migration and how it can transform your business operations, reduce costs, and improve scalability.",
    image: blogCloudComputing,
    link: "/blog/cloud-computing",
    readTime: "5 min read"
  },
  {
    title: "Building Robust Cybersecurity for Modern Enterprises",
    description: "Essential cybersecurity strategies to protect your business from evolving threats and ensure data integrity in the digital age.",
    image: blogCybersecurity,
    link: "/blog/cybersecurity",
    readTime: "7 min read"
  },
];

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blog | TechLand - Technology Insights & Thought Leadership</title>
        <meta
          name="description"
          content="Explore TechLand's blog for the latest insights on AI, cloud computing, cybersecurity, and digital transformation."
        />
        <meta name="keywords" content="tech blog, AI insights, cloud computing, cybersecurity, digital transformation" />
        <link rel="canonical" href="/blogs" />
        <meta property="og:title" content="Blog | TechLand - Technology Insights & Thought Leadership" />
        <meta property="og:description" content="Explore TechLand's blog for the latest insights on AI, cloud computing, cybersecurity, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/blogs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | TechLand" />
        <meta name="twitter:description" content="Explore TechLand's blog for the latest insights on AI, cloud computing, and cybersecurity." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-hero overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={readersCornerHero}
              alt="Technology blog and insights background"
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
                <span className="text-sm font-medium text-primary">Blog</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-hero-text mb-6">
                Our <span className="gradient-text">Blog</span>
              </h1>

              <p className="text-xl text-hero-text/80 mb-8 max-w-2xl mx-auto">
                Insights, trends, and thought leadership on the latest in technology, AI, cloud computing, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card border-border/50 overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="lg:w-2/5 relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:bg-gradient-to-r lg:from-transparent lg:to-background/40"></div>

                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                            <FileText className="w-3 h-3" />
                            <span>Blog</span>
                          </span>
                        </div>

                        <div className="absolute bottom-4 right-4">
                          <span className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                            {post.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <Link to={post.link} className="flex-1">
                            <Button variant="outline" className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                              <span>Read Article</span>
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

export default Blogs;
