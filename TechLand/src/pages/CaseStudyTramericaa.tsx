import { BarChart3, Target, Zap, TrendingUp, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ArticleMetadata from "@/components/blog/ArticleMetadata";
import caseStudyTramericaa from "@/assets/case-study-tramericaa.jpg";
import blogAiFuture from "@/assets/blog-ai-future.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";

const CaseStudyTramericaa = () => {
  const headings = [
    { id: "challenge", text: "The Challenge", level: 2 },
    { id: "approach", text: "Our Approach", level: 2 },
    { id: "phase-1", text: "Phase 1: Market Intelligence Foundation", level: 3 },
    { id: "phase-2", text: "Phase 2: Automation Engine Development", level: 3 },
    { id: "phase-3", text: "Phase 3: PPC Optimization System", level: 3 },
    { id: "technology", text: "Technology Stack", level: 2 },
    { id: "results", text: "Transformative Results", level: 2 },
    { id: "partnership", text: "Scaling Together", level: 2 },
  ];

  const relatedArticles = [
    {
      title: "Transforming Healthcare Technology Infrastructure",
      description: "A comprehensive digital transformation in the healthcare sector",
      date: "December 20, 2023",
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
        title="TRAMERICAA: Scaling an Amazon Business with Smart Analytics"
        description="How we built an Amazon analytics and automation platform to streamline operations and drive growth"
        image={caseStudyTramericaa}
        url="/case-study/tramericaa"
        type="case-study"
        publishedDate="2025-01-15T00:00:00Z"
        author="TechLand Team"
        tags={["Amazon FBA", "Market Analysis", "Automation", "PPC Management", "E-commerce"]}
      />

      <Navigation />

      <BlogHeader
        title="TRAMERICAA: Scaling an Amazon Business with Smart Analytics"
        description="How we built an Amazon analytics and automation platform to streamline operations and drive growth"
        author="TechLand Team"
        readingTime="14 min"
        category="Case Study"
        tags={["Amazon FBA", "Market Analysis", "Automation", "PPC Management"]}
        image={caseStudyTramericaa}
        imageAlt="TRAMERICAA Amazon Market Analysis Platform"
      />

      {/* Results Summary */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Project Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-2xl border">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">127%</div>
                <p className="text-muted-foreground">Revenue Growth</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">34%</div>
                <p className="text-muted-foreground">PPC Cost Reduction</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">65%</div>
                <p className="text-muted-foreground">Time Saved on Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    TRAMERICAA came to us as a growing Amazon seller facing the classic scaling dilemma. With over 500 products across multiple categories, they were drowning in data but starving for insights. Their small team was spending 12+ hours daily on manual tasks that should have been automated.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "We knew there were opportunities everywhere," explains Maria, TRAMERICAA's founder. "But we couldn't see the forest for the trees. Every morning started with hours of spreadsheet analysis, and by evening, we still didn't know which products to promote or how much to bid on our PPC campaigns."
                  </p>
                  
                  <div className="bg-destructive/5 border border-destructive/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-destructive mb-4">🚨 The Breaking Point</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground"><strong>Manual market analysis</strong> - 4+ hours daily analyzing competitor pricing and trends</li>
                      <li className="text-lg text-muted-foreground"><strong>Inefficient PPC management</strong> - $50k monthly ad spend with unclear ROI</li>
                      <li className="text-lg text-muted-foreground"><strong>Listing optimization chaos</strong> - No systematic approach to keyword research and content updates</li>
                      <li className="text-lg text-muted-foreground"><strong>Inventory blind spots</strong> - Frequent stockouts on winning products</li>
                      <li className="text-lg text-muted-foreground"><strong>Team burnout</strong> - 70-hour work weeks with diminishing returns</li>
                    </ul>
                  </div>
                  
                  <h2 id="approach" className="text-3xl font-bold gradient-text mb-6 mt-12">Our Approach</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We envisioned a comprehensive Amazon intelligence platform that would transform TRAMERICAA from reactive firefighters into proactive market strategists. Our solution needed to handle three critical areas: market analysis, process automation, and PPC optimization.
                  </p>
                  
                  <h3 id="phase-1" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 1: Market Intelligence Foundation</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We built a market analysis dashboard that tracks key competitors across TRAMERICAA's main product categories. The system monitors pricing trends, keyword rankings, review patterns, and seasonal demand shifts to help identify opportunities early.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-primary mb-4">🎯 Key Features Developed</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground"><strong>Competitive Intelligence Dashboard</strong> - Real-time competitor price and ranking tracking</li>
                      <li className="text-lg text-muted-foreground"><strong>Demand Forecasting</strong> - Historical data analysis for seasonal planning and inventory decisions</li>
                      <li className="text-lg text-muted-foreground"><strong>Keyword Opportunity Scanner</strong> - Discovery of high-value, low-competition keywords</li>
                      <li className="text-lg text-muted-foreground"><strong>Market Gap Analysis</strong> - Identification of underserved niches and product opportunities</li>
                    </ul>
                  </div>
                  
                  <h3 id="phase-2" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 2: Automation Engine Development</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The automation suite handles the entire product lifecycle - from initial listing creation to ongoing optimization. We developed intelligent workflows that adapt based on performance data and market conditions.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "Watching the system update our product listings with optimized keywords was a game-changer," Maria recalls. "Tasks that used to take our team a full day now happen in a couple of hours with minimal oversight."
                  </p>
                  
                  <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-accent mb-4">🤖 Automation Capabilities</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground"><strong>Listing Templates</strong> - Streamlined creation with keyword-optimized templates</li>
                      <li className="text-lg text-muted-foreground"><strong>Price Monitoring</strong> - Alerts and suggestions based on competitor pricing</li>
                      <li className="text-lg text-muted-foreground"><strong>Inventory Alerts</strong> - Restock notifications based on sales velocity</li>
                      <li className="text-lg text-muted-foreground"><strong>Review Monitoring</strong> - Dashboard for tracking and responding to customer feedback</li>
                    </ul>
                  </div>
                  
                  <h3 id="phase-3" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 3: PPC Optimization System</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The PPC management module helps optimize campaigns based on performance data. It provides bid recommendations, flags underperforming keywords for review, and surfaces new advertising opportunities based on search term reports.
                  </p>
                  
                  <div className="bg-secondary/5 border border-secondary/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-foreground mb-4">📊 PPC Management Features</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground"><strong>Bid Recommendations</strong> - Data-driven suggestions to optimize ACoS</li>
                      <li className="text-lg text-muted-foreground"><strong>Keyword Harvesting</strong> - Search term analysis to discover profitable keywords</li>
                      <li className="text-lg text-muted-foreground"><strong>Negative Keyword Management</strong> - Identification and exclusion of wasteful traffic</li>
                      <li className="text-lg text-muted-foreground"><strong>Campaign Reporting</strong> - Clear dashboards for budget tracking and performance analysis</li>
                    </ul>
                  </div>
                  
                  <h2 id="technology" className="text-3xl font-bold gradient-text mb-6 mt-12">Technology Stack</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-card p-8 rounded-2xl border">
                      <h4 className="text-xl font-bold text-foreground mb-4">Data & Analytics</h4>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground">• Python for data processing</li>
                        <li className="text-muted-foreground">• PostgreSQL database</li>
                        <li className="text-muted-foreground">• Amazon SP-API integration</li>
                        <li className="text-muted-foreground">• Scheduled data sync jobs</li>
                      </ul>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border">
                      <h4 className="text-xl font-bold text-foreground mb-4">Platform & Infrastructure</h4>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground">• React dashboard interface</li>
                        <li className="text-muted-foreground">• Node.js backend services</li>
                        <li className="text-muted-foreground">• AWS cloud hosting</li>
                        <li className="text-muted-foreground">• CI/CD deployment pipeline</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h2 id="results" className="text-3xl font-bold gradient-text mb-6 mt-12">Transformative Results</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Over the course of 12 months, TRAMERICAA transformed their operations. The combination of better market insights, automated workflows, and optimized advertising created a foundation for sustainable, scalable growth.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl">
                      <BarChart3 className="w-12 h-12 text-primary mb-4" />
                      <h4 className="text-xl font-bold text-primary mb-4">Business Growth</h4>
                      <ul className="space-y-3">
                        <li className="text-lg text-muted-foreground"><strong>127% revenue increase</strong> in 12 months</li>
                        <li className="text-lg text-muted-foreground"><strong>85% more products</strong> ranking on page one</li>
                        <li className="text-lg text-muted-foreground"><strong>12% average profit margin</strong> improvement</li>
                      </ul>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl">
                      <DollarSign className="w-12 h-12 text-accent mb-4" />
                      <h4 className="text-xl font-bold text-accent mb-4">Cost Optimization</h4>
                      <ul className="space-y-3">
                        <li className="text-lg text-muted-foreground"><strong>34% reduction</strong> in PPC advertising costs</li>
                        <li className="text-lg text-muted-foreground"><strong>65% time savings</strong> on manual operations</li>
                        <li className="text-lg text-muted-foreground"><strong>$45k annual savings</strong> in operational costs</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-primary mb-4">💬 Client Testimonial</h4>
                    <blockquote className="text-lg italic text-muted-foreground mb-4">
                      "TechLand didn't just build us software—they built us a competitive advantage. We went from working 70-hour weeks to having a system that works around the clock. Our revenue has grown significantly, but more importantly, we have our lives back."
                    </blockquote>
                    <cite className="text-primary font-semibold">— Maria Rodriguez, Founder of TRAMERICAA</cite>
                  </div>
                  
                  <h2 id="partnership" className="text-3xl font-bold gradient-text mb-6 mt-12">Scaling Together</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Our partnership with TRAMERICAA continues to evolve. With the core platform stable and delivering results, we're now focused on expanding their product catalog and exploring opportunities on additional e-commerce channels.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    This case study shows what's possible when the right technology meets a team ready to embrace change. TRAMERICAA's success came not just from the tools we built, but from their commitment to using data-driven insights to guide their business decisions.
                  </p>
                  
                  <div className="bg-card p-8 rounded-2xl border mt-12 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Streamline Your Amazon Operations?</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Let's discuss how custom tools can help your business grow more efficiently.
                    </p>
                    <a href="/lets-talk-business" className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Get in Touch
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles articles={relatedArticles} />
      <Footer />
    </div>
  );
};

export default CaseStudyTramericaa;