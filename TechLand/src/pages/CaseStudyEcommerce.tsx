import { TrendingUp, Users, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ArticleMetadata from "@/components/blog/ArticleMetadata";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import blogAiFuture from "@/assets/blog-ai-future.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";

const CaseStudyEcommerce = () => {
  const headings = [
    { id: "challenge", text: "The Challenge", level: 2 },
    { id: "approach", text: "Our Approach", level: 2 },
    { id: "phase-1", text: "Phase 1: Understanding the Heart of the Business", level: 3 },
    { id: "phase-2", text: "Phase 2: Building More Than a Store", level: 3 },
    { id: "phase-3", text: "Phase 3: Making the Magic Happen", level: 3 },
    { id: "technology", text: "Technology Stack", level: 2 },
    { id: "results", text: "The Amazing Results", level: 2 },
    { id: "partnership", text: "Growing Together", level: 2 },
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
        title="Enabling Seamless Resale Operations Across E-Commerce"
        description="How we transformed a traditional retail business into a modern e-commerce platform"
        image={caseStudyEcommerce}
        url="/case-study/ecommerce"
        type="case-study"
        publishedDate="2024-01-15T00:00:00Z"
        author="Mind Tech AI Team"
        tags={["E-commerce", "Digital Transformation", "Retail", "Platform Development", "Business Growth"]}
      />
      
      <Navigation />
      
      <BlogHeader
        title="Enabling Seamless Resale Operations Across E-Commerce"
        description="How we transformed a traditional retail business into a modern e-commerce platform"
        author="TechLand Team"
        readingTime="8 min"
        category="Case Study"
        tags={["E-commerce", "Digital Transformation", "Retail", "Platform Development"]}
        image={caseStudyEcommerce}
        imageAlt="E-commerce Transformation Case Study"
      />

      {/* Results Summary */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Project Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-2xl border">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <p className="text-muted-foreground">Revenue Increase</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">18%</div>
                <p className="text-muted-foreground">Conversion Rate</p>
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
                    Meet RetailRevive, a family-owned electronics and home goods retailer that had been thriving in their local community for over 15 years. Like many traditional retailers, they found themselves at a crossroads when the pandemic hit, forcing them to rethink their entire business strategy.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "We had loyal customers who knew us personally, but suddenly everyone was shopping online," recalls Sarah, the company's founder. "We had a basic website that was essentially a digital brochure, but no way to actually sell our products online."
                  </p>
                  
                  <div className="bg-destructive/5 border border-destructive/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-destructive mb-4">🚨 The Reality Check</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground"><strong>45% drop in sales</strong> during the first 6 months of 2020</li>
                      <li className="text-lg text-muted-foreground"><strong>Zero online sales capability</strong> - customers couldn't buy anything online</li>
                      <li className="text-lg text-muted-foreground"><strong>Inventory chaos</strong> - no real-time tracking between store and potential online sales</li>
                      <li className="text-lg text-muted-foreground"><strong>Customer disconnect</strong> - losing touch with loyal customers who couldn't visit the store</li>
                      <li className="text-lg text-muted-foreground"><strong>Staff uncertainty</strong> - team members worried about job security</li>
                    </ul>
                  </div>
                  
                  <h2 id="approach" className="text-3xl font-bold gradient-text mb-6 mt-12">Our Approach</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Instead of rushing into a quick-fix solution, we took time to understand RetailRevive's unique strengths and challenges. We knew that preserving their personal touch while scaling online was key to their success.
                  </p>
                  
                  <h3 id="phase-1" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 1: Understanding the Heart of the Business</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We spent two weeks shadowing the RetailRevive team, talking to customers, and understanding what made them special. Turns out, it wasn't just about selling products—it was about being trusted advisors who helped customers find exactly what they needed.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "Our customers don't just buy from us, they trust us," Sarah explained. "When Mrs. Johnson needs a new coffee maker, she doesn't want to read 100 reviews online—she wants to know what I think will work best for her."
                  </p>
                  
                  <h3 id="phase-2" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 2: Building More Than a Store</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We didn't just build an e-commerce platform—we created a digital extension of their personal service. Here's what made it special:
                  </p>
                  <ul className="space-y-3 my-6">
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">"Ask Sarah" feature</strong> - customers could get personal product recommendations</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Local delivery scheduling</strong> - same personal touch, delivered to your door</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Customer history tracking</strong> - remember preferences just like in-store</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Virtual consultations</strong> - video calls for complex purchases</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Community wishlist</strong> - neighbors could see what others loved</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Easy returns</strong> - drop off at the store or schedule pickup</li>
                  </ul>
                  
                  <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-8 italic text-lg text-foreground">
                    <p className="mb-2">
                      "It's like having our store in everyone's pocket, but it still feels like us. Our customers love that they can shop at 11 PM and still get that personal touch."
                    </p>
                    <footer className="text-sm text-muted-foreground">— Sarah, RetailRevive Founder</footer>
                  </blockquote>
                  
                  <h3 id="phase-3" className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 3: Making the Magic Happen</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The technical migration was the easy part—the real challenge was helping the team embrace their new digital superpowers. We trained every staff member to become "digital ambassadors," comfortable with video calls, online chat, and social media engagement.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Launch day was nerve-wracking, but within hours, orders started pouring in. The first online customer? Mrs. Johnson, ordering her new coffee maker with a note: "Sarah, I trust your judgment—surprise me!" 
                  </p>
                  
                  <h2 id="technology" className="text-3xl font-bold gradient-text mb-6 mt-12">Technology Stack</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The solution was built using modern, scalable technologies:
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
                          <td className="p-4 text-muted-foreground">Frontend</td>
                          <td className="p-4 text-muted-foreground">React + TypeScript</td>
                          <td className="p-4 text-muted-foreground">User interface and experience</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">Backend</td>
                          <td className="p-4 text-muted-foreground">Node.js + Express</td>
                          <td className="p-4 text-muted-foreground">API and business logic</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">Database</td>
                          <td className="p-4 text-muted-foreground">PostgreSQL + Redis</td>
                          <td className="p-4 text-muted-foreground">Data storage and caching</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 text-muted-foreground">Infrastructure</td>
                          <td className="p-4 text-muted-foreground">AWS + Docker</td>
                          <td className="p-4 text-muted-foreground">Scalable cloud hosting</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h2 id="results" className="text-3xl font-bold gradient-text mb-6 mt-12">The Amazing Results</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The transformation exceeded everyone's wildest expectations. Within just six months, RetailRevive went from struggling to survive to becoming the talk of their industry.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-primary mb-4">🎉 The Numbers Tell the Story</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">300%</div>
                        <div className="text-lg text-muted-foreground">Revenue increase (yes, really!)</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">2,500+</div>
                        <div className="text-lg text-muted-foreground">Happy online customers</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">18%</div>
                        <div className="text-lg text-muted-foreground">Conversion rate (industry avg is 2%)</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">5</div>
                        <div className="text-lg text-muted-foreground">New team members hired</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    But the real success stories are the human ones. Like when a customer moved across the country and still orders from RetailRevive because "no one else gets me like Sarah does." Or when a local business started referring their employees to RetailRevive for home office setups.
                  </p>
                  
                  <h2 id="partnership" className="text-3xl font-bold gradient-text mb-6 mt-12">Growing Together</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The best part? This story is still being written. We're not just their tech team—we've become part of the RetailRevive family. Every month, we sit down with Sarah and her team to plan new features, celebrate wins, and tackle challenges together.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Recently, they launched a "RetailRevive Recommends" subscription box, and they're planning to open a second location. "We went from worrying about closing down to planning our expansion," Sarah laughs. "If you had told me three years ago that we'd be shipping products nationwide, I would have thought you were crazy."
                  </p>
                  
                  <div className="bg-muted/30 border p-6 rounded-xl my-8">
                    <p className="text-lg italic text-foreground mb-4">
                      "Working with Mind Tech AI wasn't just about building a website—it was about reimagining what our business could become. They didn't just give us the tools; they helped us believe we could use them."
                    </p>
                    <p className="text-sm text-muted-foreground">— The entire RetailRevive team</p>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    This transformation proves that with the right approach, even the smallest businesses can compete with giants. It's not about having the biggest budget or the fanciest features—it's about understanding what makes you special and amplifying it through technology.
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

export default CaseStudyEcommerce;