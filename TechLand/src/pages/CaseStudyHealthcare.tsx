import { Heart, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ArticleMetadata from "@/components/blog/ArticleMetadata";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import blogAiFuture from "@/assets/blog-ai-future.jpg";

const CaseStudyHealthcare = () => {
  const headings = [
    { id: "project-overview", text: "Project Overview", level: 2 },
    { id: "healthcare-challenges", text: "Healthcare Challenges", level: 2 },
    { id: "comprehensive-solution", text: "Our Comprehensive Solution", level: 2 },
    { id: "ehr-system", text: "Electronic Health Records (EHR) System", level: 3 },
    { id: "appointment-scheduling", text: "Intelligent Appointment Scheduling", level: 3 },
    { id: "patient-portal", text: "Patient Portal", level: 3 },
    { id: "mobile-application", text: "Mobile Application", level: 3 },
    { id: "implementation-process", text: "Implementation Process", level: 2 },
    { id: "security-compliance", text: "Security and Compliance", level: 2 },
    { id: "measurable-outcomes", text: "Measurable Outcomes", level: 2 },
    { id: "future-enhancements", text: "Future Enhancements", level: 2 },
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
        title="Healthcare Innovation Through Digital Patient Management"
        description="Streamlining patient care with cutting-edge digital solutions"
        image={caseStudyHealthcare}
        url="/case-study/healthcare"
        type="case-study"
        publishedDate="2024-03-20T00:00:00Z"
        author="Mind Tech AI Team"
        tags={["Healthcare", "Digital Transformation", "EHR", "Patient Management", "Healthcare Technology"]}
      />
      
      <Navigation />
      
      <BlogHeader
        title="Healthcare Innovation Through Digital Patient Management"
        description="Streamlining patient care with cutting-edge digital solutions"
        author="TechLand Team"
        readingTime="12 min"
        category="Case Study"
        tags={["Healthcare", "Digital Transformation", "EHR", "Patient Management"]}
        image={caseStudyHealthcare}
        imageAlt="Healthcare Digital Transformation Case Study"
      />

      {/* Results Summary */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Patient Care Improvements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <p className="text-muted-foreground">Reduced Wait Times</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <p className="text-muted-foreground">Patients Served</p>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Patient Satisfaction</p>
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
                  <h2 id="project-overview" className="text-3xl font-bold gradient-text mb-6">When Good Healthcare Gets Tangled in Red Tape</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Dr. Amanda Williams looked exhausted when we first met. As Chief Medical Officer for Valley Health System, she'd spent the morning dealing with what she called "the filing cabinet crisis"—a patient's critical test results were lost somewhere in a stack of paper files, delaying treatment by three days.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "We became doctors to heal people," she said, gesturing at the towers of paperwork covering her desk. "Instead, we spend half our time hunting for information that should be at our fingertips. My nurses are burning out, my patients are frustrated, and I'm scared we're going to make a serious mistake because someone can't find the right piece of paper."
                  </p>
                  
                  <h2 id="healthcare-challenges" className="text-3xl font-bold gradient-text mb-6 mt-12">The Paper Trail That Nearly Broke Everything</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Valley Health wasn't a small clinic—they served over 50,000 patients across four locations. But their record-keeping system belonged in 1985, not 2024. Here's what a typical Tuesday looked like before we intervened:
                  </p>
                  
                  <div className="bg-destructive/5 border border-destructive/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-destructive mb-4">📋 A Day in the Life of Chaos</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground"><strong>6:30 AM:</strong> Nurse spends 45 minutes looking for Mrs. Chen's allergy information before her surgery</li>
                      <li className="text-lg text-muted-foreground"><strong>10:15 AM:</strong> Double-booked appointment because two locations used different scheduling systems</li>
                      <li className="text-lg text-muted-foreground"><strong>1:20 PM:</strong> Doctor can't access lab results from different department, delays diagnosis</li>
                      <li className="text-lg text-muted-foreground"><strong>3:45 PM:</strong> Patient brings wrong forms because website information is outdated</li>
                      <li className="text-lg text-muted-foreground"><strong>5:30 PM:</strong> End-of-day: 3 hours of overtime just filing and organizing papers</li>
                    </ul>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "The breaking point came when a patient's diabetes medication was delayed because his prescription was filed under 'Johnson' instead of 'Johnston,'" Dr. Williams recalled. "We realized our filing system was literally putting lives at risk."
                  </p>
                  
                  <h2 id="comprehensive-solution" className="text-3xl font-bold gradient-text mb-6 mt-12">Our Comprehensive Solution</h2>
                  
                  <h3 id="ehr-system" className="text-2xl font-semibold text-foreground mb-4 mt-8">Electronic Health Records (EHR) System</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We implemented a comprehensive EHR system that digitized all patient records, enabling instant access to medical history, test results, and treatment plans from any authorized device within the healthcare network.
                  </p>
                  
                  <h3 id="appointment-scheduling" className="text-2xl font-semibold text-foreground mb-4 mt-8">Intelligent Appointment Scheduling</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Our AI-powered scheduling system optimizes appointment slots based on provider availability, patient needs, and historical data, significantly reducing wait times and improving resource utilization.
                  </p>
                  
                  <h3 id="patient-portal" className="text-2xl font-semibold text-foreground mb-4 mt-8">Patient Portal</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We developed a user-friendly patient portal allowing patients to schedule appointments, access test results, communicate with healthcare providers, and manage their health records from anywhere.
                  </p>
                  
                  <h3 id="mobile-application" className="text-2xl font-semibold text-foreground mb-4 mt-8">Mobile Application</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    A companion mobile app provides patients with appointment reminders, medication alerts, and direct communication channels with their healthcare team.
                  </p>
                  
                  <h2 id="implementation-process" className="text-3xl font-bold gradient-text mb-6 mt-12">Implementation Process</h2>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 1: Infrastructure Setup</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We established secure, HIPAA-compliant cloud infrastructure with robust data encryption, backup systems, and access controls to protect sensitive patient information.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 2: Data Migration</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Our team carefully migrated existing patient records from paper and legacy systems to the new digital platform, ensuring data integrity throughout the process.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 3: Staff Training</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We provided comprehensive training programs for healthcare staff, including doctors, nurses, and administrative personnel, ensuring smooth adoption of the new system.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Phase 4: Gradual Rollout</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The system was deployed gradually across different departments, allowing for real-time feedback and adjustments before full implementation.
                  </p>
                  
                  <h2 id="security-compliance" className="text-3xl font-bold gradient-text mb-6 mt-12">Security and Compliance</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Patient data security was our top priority throughout the project. We implemented:
                  </p>
                  <ul className="space-y-3 my-6">
                    <li className="text-lg text-muted-foreground">End-to-end encryption for all patient data</li>
                    <li className="text-lg text-muted-foreground">Multi-factor authentication for system access</li>
                    <li className="text-lg text-muted-foreground">Comprehensive audit trails for all system activities</li>
                    <li className="text-lg text-muted-foreground">Regular security assessments and updates</li>
                    <li className="text-lg text-muted-foreground">Full HIPAA compliance certification</li>
                  </ul>
                  
                  <h2 id="measurable-outcomes" className="text-3xl font-bold gradient-text mb-6 mt-12">Measurable Outcomes</h2>
                  <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-primary mb-4">📈 Key Results</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground">40% reduction in average patient wait times</li>
                      <li className="text-lg text-muted-foreground">98% patient satisfaction score</li>
                      <li className="text-lg text-muted-foreground">60% improvement in administrative efficiency</li>
                      <li className="text-lg text-muted-foreground">Eliminated paper-based record errors</li>
                      <li className="text-lg text-muted-foreground">30% increase in appointment scheduling accuracy</li>
                    </ul>
                  </div>
                  
                  <h2 id="future-enhancements" className="text-3xl font-bold gradient-text mb-6 mt-12">Future Enhancements</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We continue to work with the healthcare provider on additional innovations, including AI-powered diagnostic support tools, predictive analytics for patient outcomes, and integration with wearable health devices.
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

export default CaseStudyHealthcare;