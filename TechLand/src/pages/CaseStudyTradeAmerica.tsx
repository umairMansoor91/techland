import { TrendingUp, Truck, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ArticleMetadata from "@/components/blog/ArticleMetadata";
import caseStudyTradeAmerica from "@/assets/case-study-trade-america.jpg";
import blogAiFuture from "@/assets/blog-ai-future.jpg";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";

const CaseStudyTradeAmerica = () => {
  const headings = [
    { id: "challenge", text: "The Challenge", level: 2 },
    { id: "approach", text: "Our Approach", level: 2 },
    { id: "phase-1", text: "Phase 1: Analyzing the Supply Chain", level: 3 },
    { id: "phase-2", text: "Phase 2: Building Predictive Intelligence", level: 3 },
    { id: "phase-3", text: "Phase 3: Market Analysis & Optimization", level: 3 },
    { id: "technology", text: "Technology Stack", level: 2 },
    { id: "results", text: "Transformational Results", level: 2 },
    { id: "future", text: "Scaling for the Future", level: 2 },
  ];

  const relatedArticles = [
    {
      title: "E-commerce Platform Transformation",
      description: "How we helped ShopTech increase their online sales by 300% through digital transformation",
      date: "February 20, 2024",
      image: caseStudyEcommerce,
      link: "/case-study/ecommerce",
      category: "Case Study" as const
    },
    {
      title: "Healthcare System Modernization",
      description: "Revolutionizing patient care through advanced healthcare technology solutions",
      date: "January 25, 2024",
      image: caseStudyHealthcare,
      link: "/case-study/healthcare",
      category: "Case Study" as const
    },
    {
      title: "The Future of AI in Enterprise Applications",
      description: "Trends and opportunities in artificial intelligence for business transformation",
      date: "March 15, 2024",
      image: blogAiFuture,
      link: "/blog/ai-future",
      category: "Blog" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ArticleMetadata
        title="Trade America: AI-Powered Logistics Revolution"
        description="How we transformed Trade America's logistics operations with predictive route optimization and market analysis tools, reducing costs by 35% and improving delivery times by 40%."
        image={caseStudyTradeAmerica}
        url="/case-study/trade-america"
        type="case-study"
        publishedDate="2024-04-01T00:00:00Z"
        author="Mind Tech AI"
        tags={["Logistics", "AI", "Route Optimization", "Supply Chain", "Manufacturing", "Analytics"]}
      />
      
      <Navigation />
      
      <BlogHeader
        title="Trade America: AI-Powered Logistics Revolution"
        description="Transforming supply chain operations with intelligent route optimization and predictive market analysis"
        author="TechLand Team"
        readingTime="14 min"
        category="Case Study"
        tags={["Logistics", "AI", "Route Optimization", "Supply Chain", "Manufacturing", "Analytics"]}
        image={caseStudyTradeAmerica}
        imageAlt="Trade America logistics dashboard showing route optimization and analytics"
      />

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <TableOfContents headings={headings} />
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="max-w-none space-y-8">
                  <h2 id="challenge" className="text-3xl font-bold gradient-text mb-6">The Challenge</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Trade America, a rapidly growing logistics and manufacturing company, was drowning in the complexity of their operations. With over 500 delivery routes across 12 states and a diverse product portfolio, they were struggling to maintain efficiency while scaling their business.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "We were making decisions based on gut feeling and spreadsheets from the 90s," recalls David Thompson, Trade America's Operations Director. "Our drivers were spending hours on inefficient routes, our inventory was either too high or too low, and we had no real insight into market trends that could help us stay competitive."
                  </p>
                  
                  <div className="bg-destructive/5 border border-destructive/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-destructive mb-4">🚨 The Pain Points</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground"><strong>Route inefficiency</strong> - drivers averaging 15% more miles than necessary</li>
                      <li className="text-lg text-muted-foreground"><strong>Inventory imbalances</strong> - $2.3M tied up in slow-moving stock</li>
                      <li className="text-lg text-muted-foreground"><strong>Market blindness</strong> - missing opportunities due to lack of real-time market data</li>
                      <li className="text-lg text-muted-foreground"><strong>Manual processes</strong> - 40+ hours weekly spent on route planning</li>
                      <li className="text-lg text-muted-foreground"><strong>Customer dissatisfaction</strong> - 23% of deliveries arriving late</li>
                      <li className="text-lg text-muted-foreground"><strong>Rising fuel costs</strong> - 18% increase in operational expenses</li>
                    </ul>
                  </div>
                  
                  <h2 id="approach" className="text-3xl font-bold gradient-text mb-6 mt-12">Our Approach</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Rather than implementing a one-size-fits-all solution, we took a deep dive into Trade America's unique operational challenges. Our approach focused on building intelligent systems that could learn from their data and continuously optimize performance.
                  </p>
                  
                  <h3 id="phase-1" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 1: Analyzing the Supply Chain</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We started by mapping every aspect of Trade America's supply chain, from supplier relationships to final delivery. Our team spent three weeks analyzing historical data, interviewing drivers, and identifying bottlenecks that weren't visible in traditional reporting.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The discovery phase revealed that while Trade America had been collecting data for years, they weren't leveraging it strategically. Hidden patterns in delivery times, seasonal demand fluctuations, and customer behavior were sitting untapped in their systems.
                  </p>
                  
                  <h3 id="phase-2" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 2: Building Predictive Intelligence</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We developed a comprehensive AI-powered platform that transformed how Trade America operates:
                  </p>
                  <ul className="space-y-3 my-6">
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Smart Route Optimization</strong> - Real-time traffic, weather, and delivery priority algorithms</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Predictive Maintenance</strong> - Vehicle health monitoring to prevent breakdowns</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Dynamic Inventory Management</strong> - AI-driven demand forecasting and stock optimization</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Driver Performance Analytics</strong> - Personalized insights to improve efficiency</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Customer Communication Hub</strong> - Automated updates and delivery tracking</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Cost Analysis Engine</strong> - Real-time profitability tracking per route and product</li>
                  </ul>
                  
                  <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-8 italic text-lg text-foreground">
                    <p className="mb-2">
                      "The system doesn't just tell us what happened—it predicts what will happen and helps us make smarter decisions before problems arise."
                    </p>
                    <footer className="text-sm text-muted-foreground">— David Thompson, Operations Director</footer>
                  </blockquote>
                  
                  <h3 id="phase-3" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 3: Market Analysis & Optimization</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The final piece was building a market intelligence system that aggregates data from multiple sources—economic indicators, competitor pricing, seasonal trends, and regional demand patterns—to provide actionable insights for strategic decision-making.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    This wasn't just about automation; it was about empowering Trade America's team with superintelligence. The platform presents complex data in intuitive dashboards that anyone can understand and act upon, from executive leadership to front-line operators.
                  </p>
                  
                  <h2 id="technology" className="text-3xl font-bold gradient-text mb-6 mt-12">Technology Stack</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We built a robust, scalable solution using cutting-edge technologies:
                  </p>
                  
                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-4 font-semibold text-foreground">Component</th>
                          <th className="text-left p-4 font-semibold text-foreground">Technology</th>
                          <th className="text-left p-4 font-semibold text-foreground">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">AI Engine</td>
                          <td className="p-4 text-muted-foreground">Python + TensorFlow</td>
                          <td className="p-4 text-muted-foreground">Machine learning models and predictions</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">Frontend</td>
                          <td className="p-4 text-muted-foreground">React + TypeScript</td>
                          <td className="p-4 text-muted-foreground">Interactive dashboards and analytics</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">Backend</td>
                          <td className="p-4 text-muted-foreground">Node.js + GraphQL</td>
                          <td className="p-4 text-muted-foreground">API orchestration and business logic</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">Database</td>
                          <td className="p-4 text-muted-foreground">PostgreSQL + InfluxDB</td>
                          <td className="p-4 text-muted-foreground">Transactional and time-series data</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">Infrastructure</td>
                          <td className="p-4 text-muted-foreground">AWS + Kubernetes</td>
                          <td className="p-4 text-muted-foreground">Scalable cloud infrastructure</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">Real-time Data</td>
                          <td className="p-4 text-muted-foreground">Apache Kafka + Redis</td>
                          <td className="p-4 text-muted-foreground">Streaming data and caching</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h2 id="results" className="text-3xl font-bold gradient-text mb-6 mt-12">Transformational Results</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The impact was immediate and measurable. Within three months of implementation, Trade America was operating like a completely different company—more efficient, more profitable, and more competitive than ever before.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-primary mb-4">🎯 The Results Speak for Themselves</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">35%</div>
                        <div className="text-lg text-muted-foreground">Reduction in operational costs</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">40%</div>
                        <div className="text-lg text-muted-foreground">Improvement in delivery times</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">28%</div>
                        <div className="text-lg text-muted-foreground">Reduction in fuel consumption</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">$1.8M</div>
                        <div className="text-lg text-muted-foreground">Freed up from inventory optimization</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">96%</div>
                        <div className="text-lg text-muted-foreground">On-time delivery rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">150+</div>
                        <div className="text-lg text-muted-foreground">Hours saved weekly on planning</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    But beyond the numbers, the transformation changed how Trade America operates at every level. Drivers now start their days with optimized routes that consider real-time conditions. Managers have visibility into operations they never had before. And customers receive proactive updates and consistently reliable service.
                  </p>
                  
                  <div className="bg-muted/30 border p-6 rounded-xl my-8">
                    <p className="text-lg italic text-foreground mb-4">
                      "Our drivers love the new system because it makes their jobs easier and more predictable. Our customers love us because we're reliable. And I love it because we're finally running a data-driven business that can compete with anyone."
                    </p>
                    <p className="text-sm text-muted-foreground">— Sarah Mitchell, CEO, Trade America</p>
                  </div>
                  
                  <h2 id="future" className="text-3xl font-bold gradient-text mb-6 mt-12">Scaling for the Future</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The success at Trade America has opened doors to expansion opportunities they never imagined. With their operations running efficiently and profitably, they're now exploring new markets and considering strategic acquisitions.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We continue to enhance the platform with new capabilities: blockchain integration for supply chain transparency, IoT sensors for real-time cargo monitoring, and advanced AI models that can predict market shifts weeks in advance. The system learns and adapts continuously, becoming more intelligent with every day of operation.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "This isn't just about logistics anymore," explains David Thompson. "We're using predictive analytics to guide our entire business strategy. The platform has become our competitive advantage and our roadmap for growth."
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Trade America's transformation demonstrates that AI isn't just for tech giants—it's for any business ready to embrace intelligent operations and data-driven decision making. The future belongs to companies that can adapt, predict, and optimize, and Trade America is leading the way in their industry.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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

export default CaseStudyTradeAmerica;