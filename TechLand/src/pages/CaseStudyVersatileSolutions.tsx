import { TrendingUp, Phone, BarChart3, Bot, Target, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ArticleMetadata from "@/components/blog/ArticleMetadata";
import caseStudyVersatileSolutions from "@/assets/case-study-versatile-solutions.jpg";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import blogAIFuture from "@/assets/blog-ai-future.jpg";

const CaseStudyVersatileSolutions = () => {
  const headings = [
    { id: "summary", text: "Executive Summary", level: 2 },
    { id: "challenge", text: "The Business Challenge", level: 2 },
    { id: "solution", text: "Our AI-Powered Sales Solution", level: 2 },
    { id: "ai-calling", text: "Intelligent AI Calling Bots", level: 3 },
    { id: "analytics", text: "Advanced Analytics Dashboard", level: 3 },
    { id: "optimization", text: "Self-Optimizing System", level: 3 },
    { id: "implementation", text: "Implementation Journey", level: 2 },
    { id: "architecture", text: "Technical Architecture", level: 2 },
    { id: "impact", text: "Measurable Business Impact", level: 2 },
    { id: "future", text: "Future Roadmap", level: 2 },
  ];

  const relatedArticles = [
    {
      title: "Enabling Seamless Resale Operations Across E-Commerce",
      description: "How we transformed a traditional retail business into a modern e-commerce platform",
      date: "January 15, 2024",
      image: caseStudyEcommerce,
      link: "/case-study/ecommerce",
      category: "Case Study" as const
    },
    {
      title: "The Future of AI in Business: Trends to Watch in 2024",
      description: "Exploring the latest AI trends that are reshaping business operations",
      date: "March 15, 2024",
      image: blogAIFuture,
      link: "/blog/ai-future",
      category: "Blog" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ArticleMetadata
        title="Transforming Sales Operations with AI-Powered Automation"
        description="How Versatile Solutions revolutionized their sales process with intelligent AI calling bots and analytics"
        image={caseStudyVersatileSolutions}
        url="/case-study/versatile-solutions"
        type="case-study"
        publishedDate="2024-03-20T00:00:00Z"
        author="Mind Tech AI Team"
        tags={["Sales Automation", "AI Calling Bots", "Analytics", "Machine Learning", "Sales Optimization"]}
      />
      
      <Navigation />
      
      <BlogHeader
        title="Transforming Sales Operations with AI-Powered Automation"
        description="How Versatile Solutions revolutionized their sales process with intelligent AI calling bots and analytics"
        author="TechLand Team"
        readingTime="12 min"
        category="Case Study"
        tags={["Sales Automation", "AI Calling Bots", "Analytics", "Machine Learning"]}
        image={caseStudyVersatileSolutions}
        imageAlt="AI Sales Automation Dashboard for Versatile Solutions"
      />

      {/* Results Summary */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Transformation Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-2xl border">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">340%</div>
                <p className="text-muted-foreground">Sales Conversion Increase</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">Call Volume Optimization</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">Time Savings on Manual Tasks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none prose-gray dark:prose-invert">
                
                <section id="summary" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Executive Summary</h2>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                    <p className="text-lg font-medium text-foreground mb-2">Client Overview</p>
                    <p className="text-muted-foreground">
                      <strong>Versatile Solutions</strong> is a mid-sized B2B service provider struggling with inconsistent sales performance, manual calling processes, and lack of data-driven insights. They needed a comprehensive solution to automate their inbound and outbound sales operations while maintaining personal touch with prospects.
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our partnership with Versatile Solutions resulted in a complete transformation of their sales operations through the implementation of AI-powered calling bots, comprehensive analytics dashboard, and self-optimizing systems that continuously improve performance based on real-time data and customer interactions.
                  </p>
                </section>

                <section id="challenge" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">The Business Challenge</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-card border rounded-lg p-6">
                      <Target className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Inconsistent Sales Performance</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Highly variable conversion rates across sales reps</li>
                        <li>• No standardized calling scripts or approaches</li>
                        <li>• Difficulty tracking what methods work best</li>
                        <li>• Lack of real-time performance insights</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border rounded-lg p-6">
                      <Phone className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Manual Process Inefficiencies</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Time-consuming manual dialing and note-taking</li>
                        <li>• Limited availability for follow-up calls</li>
                        <li>• Inconsistent lead nurturing processes</li>
                        <li>• High operational costs with low scalability</li>
                      </ul>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-lg text-muted-foreground">
                    "We were losing potential customers due to inconsistent follow-ups and our sales team was overwhelmed with manual tasks. We needed a solution that could scale our operations while maintaining quality."
                    <footer className="text-sm font-medium text-foreground mt-2">— Sarah Mitchell, VP of Sales, Versatile Solutions</footer>
                  </blockquote>
                </section>

                <section id="solution" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Our AI-Powered Sales Solution</h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    We developed a comprehensive AI-driven sales automation platform that combines intelligent calling bots, advanced analytics, and machine learning optimization to create a seamless, scalable sales operation.
                  </p>

                  <div id="ai-calling" className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Intelligent AI Calling Bots</h3>
                    
                    <div className="bg-card border rounded-lg p-6 mb-6">
                      <Bot className="w-8 h-8 text-primary mb-4" />
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Natural Language Processing</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Advanced conversational AI that adapts to prospect responses</li>
                        <li>• Dynamic script generation based on lead characteristics</li>
                        <li>• Real-time sentiment analysis during conversations</li>
                        <li>• Seamless handoff to human agents when needed</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted/20 rounded-lg p-6">
                        <h4 className="font-semibold mb-3 text-foreground">Inbound Call Features</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Instant lead qualification</li>
                          <li>• Automated appointment scheduling</li>
                          <li>• Product recommendation engine</li>
                          <li>• Multi-language support</li>
                        </ul>
                      </div>
                      <div className="bg-muted/20 rounded-lg p-6">
                        <h4 className="font-semibold mb-3 text-foreground">Outbound Call Features</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Optimal timing prediction</li>
                          <li>• Personalized messaging</li>
                          <li>• Follow-up sequence automation</li>
                          <li>• Compliance and do-not-call management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div id="analytics" className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Advanced Analytics Dashboard</h3>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 mb-6">
                      <BarChart3 className="w-8 h-8 text-primary mb-4" />
                      <p className="text-muted-foreground">
                        A comprehensive analytics platform that provides real-time insights into call performance, conversion rates, customer behavior patterns, and ROI metrics across all sales channels.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-card rounded-lg border">
                        <div className="text-2xl font-bold text-primary">95%</div>
                        <div className="text-sm text-muted-foreground">Call Success Rate</div>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border">
                        <div className="text-2xl font-bold text-primary">2.4x</div>
                        <div className="text-sm text-muted-foreground">Lead Quality Improvement</div>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border">
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-muted-foreground">Automated Coverage</div>
                      </div>
                    </div>
                  </div>

                  <div id="optimization" className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Self-Optimizing System</h3>
                    
                    <p className="text-muted-foreground mb-6">
                      Our machine learning algorithms continuously analyze call outcomes, customer responses, and market conditions to automatically optimize calling strategies, scripts, and timing for maximum effectiveness.
                    </p>

                    <div className="bg-card border rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-foreground">Adaptive Learning Features</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium mb-2 text-foreground">Performance Optimization</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Dynamic script refinement</li>
                            <li>• Optimal call timing prediction</li>
                            <li>• Lead scoring improvements</li>
                            <li>• Conversion rate optimization</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2 text-foreground">Market Adaptation</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Seasonal pattern recognition</li>
                            <li>• Industry trend analysis</li>
                            <li>• Competitor response modeling</li>
                            <li>• Economic indicator integration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="implementation" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Implementation Journey</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                      <div>
                        <h3 className="font-semibold text-foreground">Discovery & Analysis (Week 1-2)</h3>
                        <p className="text-muted-foreground">Comprehensive audit of existing sales processes, call patterns, and performance metrics. Identified key pain points and optimization opportunities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                      <div>
                        <h3 className="font-semibold text-foreground">Custom AI Development (Week 3-6)</h3>
                        <p className="text-muted-foreground">Built and trained custom AI models using Versatile Solutions' historical data, industry best practices, and customer behavior patterns.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                      <div>
                        <h3 className="font-semibold text-foreground">Pilot Program (Week 7-8)</h3>
                        <p className="text-muted-foreground">Launched controlled pilot with 20% of leads to test and refine the system before full deployment.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                      <div>
                        <h3 className="font-semibold text-foreground">Full Deployment (Week 9-10)</h3>
                        <p className="text-muted-foreground">Complete system rollout with comprehensive training for sales teams and ongoing optimization based on real-world performance.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="architecture" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Technical Architecture</h2>
                  
                  <div className="bg-card border rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Core Technology Stack</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-foreground">AI & Machine Learning</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Natural Language Processing (NLP)</li>
                          <li>• Conversational AI with GPT integration</li>
                          <li>• Predictive analytics models</li>
                          <li>• Real-time sentiment analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-foreground">Infrastructure</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Cloud-native architecture</li>
                          <li>• Microservices design pattern</li>
                          <li>• Real-time data processing</li>
                          <li>• Enterprise security protocols</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-foreground">Integration Capabilities</h4>
                    <p className="text-muted-foreground mb-4">
                      Seamless integration with existing CRM systems, phone infrastructure, and business tools to ensure smooth operation without disrupting current workflows.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Salesforce", "HubSpot", "Twilio", "Zoom", "Microsoft Teams", "Slack"].map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="impact" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Measurable Business Impact</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-card border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Sales Performance</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Conversion Rate</span>
                          <span className="font-semibold text-foreground">12% → 42%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Average Deal Size</span>
                          <span className="font-semibold text-foreground">+28%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Sales Cycle Length</span>
                          <span className="font-semibold text-foreground">-35%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Lead Response Time</span>
                          <span className="font-semibold text-foreground">2 hrs → 5 min</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-card border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Operational Efficiency</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Call Volume Capacity</span>
                          <span className="font-semibold text-foreground">+400%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Manual Tasks Reduction</span>
                          <span className="font-semibold text-foreground">80%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Cost per Lead</span>
                          <span className="font-semibold text-foreground">-60%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Customer Satisfaction</span>
                          <span className="font-semibold text-foreground">+45%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-lg text-muted-foreground">
                    "The AI system has transformed our sales operation beyond our expectations. We're now handling 4x more leads with better conversion rates, and our team can focus on high-value activities instead of repetitive tasks."
                    <footer className="text-sm font-medium text-foreground mt-2">— David Chen, CEO, Versatile Solutions</footer>
                  </blockquote>
                </section>

                <section id="future" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Future Roadmap</h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Our partnership with Versatile Solutions continues to evolve with planned enhancements including multi-channel automation, advanced predictive analytics, and integration with emerging sales technologies.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card border rounded-lg p-6">
                      <h4 className="font-semibold mb-3 text-foreground">Q2 2024</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Email automation integration</li>
                        <li>• Advanced lead scoring</li>
                        <li>• Custom reporting suite</li>
                      </ul>
                    </div>
                    <div className="bg-card border rounded-lg p-6">
                      <h4 className="font-semibold mb-3 text-foreground">Q3 2024</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Social media integration</li>
                        <li>• Video call capabilities</li>
                        <li>• Customer journey mapping</li>
                      </ul>
                    </div>
                    <div className="bg-card border rounded-lg p-6">
                      <h4 className="font-semibold mb-3 text-foreground">Q4 2024</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Predictive customer behavior</li>
                        <li>• Advanced AI personalization</li>
                        <li>• Global market expansion tools</li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                See how our AI-powered solutions can revolutionize your operations and drive growth.
              </p>
              <a href="/lets-talk-business" className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles articles={relatedArticles} currentCategory="Case Study" />
      <Footer />
    </div>
  );
};

export default CaseStudyVersatileSolutions;