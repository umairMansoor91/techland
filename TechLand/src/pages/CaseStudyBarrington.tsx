import { Phone, Clock, DollarSign, Users, Calendar, PhoneCall, Moon, TrendingUp, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ArticleMetadata from "@/components/blog/ArticleMetadata";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyVersatileSolutions from "@/assets/case-study-versatile-solutions.jpg";

const CaseStudyBarrington = () => {
  const headings = [
    { id: "overview", text: "Overview", level: 2 },
    { id: "the-challenge", text: "The Challenge", level: 2 },
    { id: "the-solution", text: "The Solution", level: 2 },
    { id: "key-features", text: "Key Features", level: 3 },
    { id: "impact-results", text: "Impact & Results", level: 2 },
    { id: "call-handling", text: "Call Handling", level: 3 },
    { id: "after-hours-performance", text: "After-Hours Performance", level: 3 },
    { id: "business-outcomes", text: "Business Outcomes", level: 2 },
    { id: "conclusion", text: "Conclusion", level: 2 },
  ];

  const relatedArticles = [
    {
      title: "Healthcare Innovation Through Digital Patient Management",
      description: "Streamlining patient care with cutting-edge digital solutions",
      date: "March 20, 2024",
      image: caseStudyHealthcare,
      link: "/case-study/healthcare",
      category: "Case Study" as const
    },
    {
      title: "AI-Powered Sales Automation for Versatile Solutions",
      description: "Transforming sales operations with intelligent calling systems and advanced analytics",
      date: "February 10, 2024",
      image: caseStudyVersatileSolutions,
      link: "/case-study/versatile-solutions",
      category: "Case Study" as const
    },
    {
      title: "Enabling Seamless Resale Operations Across E-Commerce",
      description: "How we transformed a traditional retail business into a modern e-commerce platform",
      date: "January 15, 2024",
      image: caseStudyEcommerce,
      link: "/case-study/ecommerce",
      category: "Case Study" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ArticleMetadata
        title="Ormond Dental: AI-Powered Scheduling Transformation"
        description="How Techland deployed a Voice AI Agent to eliminate 30+ minute wait times, recover 2,090 missed calls per month, and generate $120K in incremental annual revenue."
        image={caseStudyHealthcare}
        url="/case-study/barrington-orthopedic"
        type="case-study"
        publishedDate="2025-01-15T00:00:00Z"
        author="TechLand Team"
        tags={["Healthcare", "Voice AI", "Scheduling Automation", "EMR Integration", "Patient Experience"]}
      />

      <Navigation />

      <BlogHeader
        title="Ormond Dental: AI-Powered Scheduling Transformation"
        description="How a Voice AI Agent eliminated scheduling chaos, recovered thousands of missed calls, and unlocked $120K in annual revenue for a multi-location dental practice."
        author="TechLand Team"
        readingTime="10 min"
        category="Case Study"
        tags={["Healthcare", "Voice AI", "Scheduling Automation", "EMR Integration", "Patient Experience"]}
        image={caseStudyHealthcare}
        imageAlt="Ormond Dental AI Scheduling Case Study"
      />

      {/* Results Summary */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Key Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground text-sm">Calls Answered</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">&lt;1 min</div>
                <p className="text-muted-foreground text-sm">Wait Time (from 30+)</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <PhoneCall className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">2,090</div>
                <p className="text-muted-foreground text-sm">Calls Recovered/Month</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">$120K</div>
                <p className="text-muted-foreground text-sm">Annual Revenue Added</p>
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
                  <h2 id="overview" className="text-3xl font-bold gradient-text mb-6">Overview</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    <strong className="text-foreground">Ormond Dental</strong> is a multi-location dental practice serving the northwest suburbs of Chicago. With <strong className="text-foreground">26 providers</strong> across <strong className="text-foreground">4 clinical locations</strong> and a high daily patient volume, the organization faced significant scheduling and operational challenges that directly impacted patient experience and revenue.
                  </p>

                  <h2 id="the-challenge" className="text-3xl font-bold gradient-text mb-6 mt-12">The Challenge</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Ormond Dental encountered serious scheduling inefficiencies that were costing them patients, revenue, and staff morale.
                  </p>

                  <div className="bg-destructive/5 border border-destructive/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-destructive mb-4">Critical Pain Points</h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                          <PhoneCall className="w-5 h-5 text-destructive" />
                          30–40% Call Abandonment Rate
                        </h5>
                        <ul className="space-y-2 ml-7">
                          <li className="text-lg text-muted-foreground">Approximately <strong className="text-foreground">2,090 missed calls per month</strong></li>
                          <li className="text-lg text-muted-foreground">Patients experienced <strong className="text-foreground">30+ minute wait times</strong></li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-destructive" />
                          Scheduling Complexity
                        </h5>
                        <ul className="space-y-2 ml-7">
                          <li className="text-lg text-muted-foreground">A single mis-scheduled patient could disrupt a clinic day handling up to <strong className="text-foreground">60 patients</strong></li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-destructive" />
                          Overloaded Call Center Staff
                        </h5>
                        <ul className="space-y-2 ml-7">
                          <li className="text-lg text-muted-foreground">Risk of burnout</li>
                          <li className="text-lg text-muted-foreground">Increased potential for scheduling errors</li>
                          <li className="text-lg text-muted-foreground">Reduced capacity for handling complex patient needs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 id="the-solution" className="text-3xl font-bold gradient-text mb-6 mt-12">The Solution</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Techland deployed a <strong className="text-foreground">Voice AI Agent</strong> directly integrated into Ormond Dental's EMR system. The integration was seamless — like <em>"flipping a switch"</em> — requiring minimal effort while following the practice's complex scheduling rules.
                  </p>

                  <h3 id="key-features" className="text-2xl font-semibold text-foreground mb-4 mt-8">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Seamless EMR Integration</h4>
                      <p className="text-muted-foreground">Integrated directly into existing systems with minimal setup effort</p>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Complex Rule Following</h4>
                      <p className="text-muted-foreground">Follows Ormond Dental's intricate scheduling rules precisely</p>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Accurate Patient Matching</h4>
                      <p className="text-muted-foreground">Matches patients to the correct provider, location, and appointment type</p>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Instant Booking Access</h4>
                      <p className="text-muted-foreground">Provides immediate scheduling for patients, freeing staff for complex cases</p>
                    </div>
                  </div>

                  <h2 id="impact-results" className="text-3xl font-bold gradient-text mb-6 mt-12">Impact & Results</h2>

                  <h3 id="call-handling" className="text-2xl font-semibold text-foreground mb-4 mt-8">Call Handling</h3>
                  <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl my-6">
                    <ul className="space-y-4">
                      <li className="text-lg text-muted-foreground flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        AI agent immediately answered <strong className="text-foreground">100% of incoming scheduling calls</strong>
                      </li>
                      <li className="text-lg text-muted-foreground flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        Prevented approximately <strong className="text-foreground">2,090 calls per month</strong> from being missed
                      </li>
                      <li className="text-lg text-muted-foreground flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        Reduced wait times from <strong className="text-foreground">30+ minutes to under 5 minutes</strong>
                      </li>
                    </ul>
                  </div>

                  <h3 id="after-hours-performance" className="text-2xl font-semibold text-foreground mb-4 mt-8">After-Hours Performance</h3>
                  <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl my-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Moon className="w-6 h-6 text-accent-foreground" />
                      <h4 className="text-xl font-bold text-foreground">After-Hours Revenue Impact</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">75</div>
                        <p className="text-muted-foreground">Patients resolved tasks after hours (previously 0)</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">36</div>
                        <p className="text-muted-foreground">Appointments booked monthly during after-hours</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">$9,900</div>
                        <p className="text-muted-foreground">Additional monthly value generated</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">$120,000</div>
                        <p className="text-muted-foreground">Incremental annual revenue from after-hours bookings</p>
                      </div>
                    </div>
                  </div>

                  <h2 id="business-outcomes" className="text-3xl font-bold gradient-text mb-6 mt-12">Business Outcomes</h2>
                  <div className="space-y-4 my-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground"><strong className="text-foreground">Improved patient access and satisfaction</strong> — patients reach scheduling immediately without long holds</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground"><strong className="text-foreground">Eliminated long wait-time frustration</strong> — wait times dropped from 30+ minutes to under 5 minutes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground"><strong className="text-foreground">Reduced operational strain on staff</strong> — call center agents focus on complex cases instead of routine scheduling</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground"><strong className="text-foreground">Increased scheduling accuracy</strong> — AI follows complex rules consistently without human error</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground"><strong className="text-foreground">Created new revenue streams</strong> — captured previously lost after-hours booking opportunities</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground"><strong className="text-foreground">Strengthened scalability</strong> — solution works seamlessly across all 4 locations with 26 providers</p>
                    </div>
                  </div>

                  <h2 id="conclusion" className="text-3xl font-bold gradient-text mb-6 mt-12">Conclusion</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    By integrating a Voice AI agent directly into its EMR system, Ormond Dental transformed its scheduling operations. The result: faster patient access, reduced operational strain, significant incremental revenue, and a scalable solution aligned with complex clinical workflows.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    This case demonstrates how AI-driven automation can directly improve healthcare operations, patient experience, and financial performance — without disrupting existing systems.
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Scheduling Operations?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                See how our Voice AI solutions can eliminate missed calls, reduce wait times, and unlock new revenue for your practice.
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

export default CaseStudyBarrington;
