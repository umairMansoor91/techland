import { BookOpen, Users, GraduationCap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ArticleMetadata from "@/components/blog/ArticleMetadata";
import caseStudyEduGenius from "@/assets/case-study-edugenius.jpg";
import blogAiFuture from "@/assets/blog-ai-future.jpg";
import caseStudyTradeAmerica from "@/assets/case-study-trade-america.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";

const CaseStudyEduGenius = () => {
  const headings = [
    { id: "challenge", text: "The Challenge", level: 2 },
    { id: "approach", text: "Our Approach", level: 2 },
    { id: "individual-module", text: "Individual Learning Module", level: 3 },
    { id: "institutional-module", text: "Institutional Module", level: 3 },
    { id: "ai-implementation", text: "How the AI Works", level: 3 },
    { id: "technology", text: "Technology Stack", level: 2 },
    { id: "results", text: "Results", level: 2 },
    { id: "impact", text: "What's Next", level: 2 },
  ];

  const relatedArticles = [
    {
      title: "Trade America: Streamlining Logistics Operations",
      description: "Transforming supply chain operations with intelligent route optimization and predictive market analysis",
      image: caseStudyTradeAmerica,
      link: "/case-study/trade-america",
      category: "Case Study" as const
    },
    {
      title: "Healthcare System Modernization",
      description: "Improving patient care through modern healthcare technology solutions",
      image: caseStudyHealthcare,
      link: "/case-study/healthcare",
      category: "Case Study" as const
    },
    {
      title: "The Future of AI in Enterprise Applications",
      description: "Trends and opportunities in artificial intelligence for business transformation",
      image: blogAiFuture,
      link: "/blog/ai-future",
      category: "Blog" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ArticleMetadata
        title="EduGenius: Building a Smarter Learning Management System"
        description="How we helped an EdTech startup build an LMS with personalized learning paths and tools for both individual learners and educational institutions."
        image={caseStudyEduGenius}
        url="/case-study/edugenius"
        type="case-study"
        publishedDate="2024-04-15T00:00:00Z"
        author="TechLand Team"
        tags={["Education", "AI", "LMS", "Personalized Learning", "EdTech"]}
      />
      
      <Navigation />
      
      <BlogHeader
        title="EduGenius: Building a Smarter Learning Management System"
        description="How we helped an EdTech startup create an adaptive learning platform for students and institutions"
        author="TechLand Team"
        readingTime="12 min"
        category="Case Study"
        tags={["Education", "AI", "LMS", "Personalized Learning", "EdTech"]}
        image={caseStudyEduGenius}
        imageAlt="EduGenius learning management system dashboard"
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
                    EduGenius came to us with a clear problem: they wanted to build a learning management system that actually adapts to how students learn. Most LMS platforms treat every student the same way, which doesn't work well for online education where students need more support to stay engaged.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    "We kept hearing the same feedback from instructors," explains Lisa Chen, founder of EduGenius. "Students were struggling, but there was no easy way to identify who needed help until it was too late. We wanted a system that could flag at-risk students early and give instructors better tools to support them."
                  </p>

                  <div className="bg-destructive/5 border border-destructive/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-destructive mb-4">Key Problems to Solve</h4>
                    <ul className="space-y-3">
                      <li className="text-lg text-muted-foreground"><strong>High dropout rates</strong> - students losing motivation without personalized guidance</li>
                      <li className="text-lg text-muted-foreground"><strong>Limited visibility</strong> - instructors couldn't easily track student progress at scale</li>
                      <li className="text-lg text-muted-foreground"><strong>Generic content</strong> - no way to adapt material to different learning speeds</li>
                      <li className="text-lg text-muted-foreground"><strong>Manual processes</strong> - instructors spending too much time on administrative tasks</li>
                      <li className="text-lg text-muted-foreground"><strong>Career disconnect</strong> - courses not clearly connected to career outcomes</li>
                    </ul>
                  </div>
                  
                  <h2 id="approach" className="text-3xl font-bold gradient-text mb-6 mt-12">Our Approach</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We built the platform with two distinct user groups in mind: individual learners who want self-paced education, and institutions that need to manage courses and track student progress. Each module was designed to solve specific problems without over-complicating the user experience.
                  </p>

                  <h3 id="individual-module" className="text-2xl font-semibold text-foreground mb-4 mt-8">Individual Learning Module</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    For individual learners, we focused on creating a system that adapts to each student's progress and provides helpful guidance along the way:
                  </p>

                  <ul className="space-y-3 my-6">
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Personalized Learning Paths</strong> - Recommends courses and materials based on stated goals and completed work</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Adaptive Difficulty</strong> - Adjusts quiz and assignment difficulty based on performance</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Practice Interview Tool</strong> - Lets students practice answering common interview questions with feedback</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Career Resources</strong> - Connects coursework to relevant job opportunities and skills in demand</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Progress Dashboard</strong> - Clear visualization of completed work and areas needing attention</li>
                  </ul>

                  <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-8 italic text-lg text-foreground">
                    <p className="mb-2">
                      "I like that the system remembers where I left off and suggests what to work on next. It keeps me on track without feeling overwhelming."
                    </p>
                    <footer className="text-sm text-muted-foreground">— Student feedback from beta testing</footer>
                  </blockquote>

                  <h3 id="institutional-module" className="text-2xl font-semibold text-foreground mb-4 mt-8">Institutional Module</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    For institutions and instructors, we built tools to reduce administrative burden and provide better visibility into student progress:
                  </p>

                  <ul className="space-y-3 my-6">
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Automated Grading</strong> - Handles objective assessments automatically, with instructor review for subjective work</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">At-Risk Student Alerts</strong> - Flags students who are falling behind based on engagement and performance</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Course Analytics</strong> - Shows which content students engage with and where they struggle</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Communication Tools</strong> - Bulk messaging and announcement features for instructors</li>
                    <li className="text-lg text-muted-foreground"><strong className="text-foreground">Student Support Queue</strong> - Organizes student questions and support requests in one place</li>
                  </ul>
                  
                  <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-primary mb-4">Module Overview</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left p-4 font-semibold text-foreground">Module</th>
                            <th className="text-left p-4 font-semibold text-foreground">Primary Users</th>
                            <th className="text-left p-4 font-semibold text-foreground">Main Features</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-4 text-muted-foreground font-medium">Individual</td>
                            <td className="p-4 text-muted-foreground">Self-paced learners</td>
                            <td className="p-4 text-muted-foreground">Learning paths, interview practice, progress tracking</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-4 text-muted-foreground font-medium">Institutional</td>
                            <td className="p-4 text-muted-foreground">Schools, instructors</td>
                            <td className="p-4 text-muted-foreground">Grading tools, analytics, student alerts</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h3 id="ai-implementation" className="text-2xl font-semibold text-foreground mb-4 mt-8">How the AI Works</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The AI components serve specific purposes rather than trying to do everything. We use machine learning models to analyze student performance patterns and recommend content, while natural language processing powers the interview practice tool and helps categorize student questions for support staff.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The at-risk student detection works by tracking engagement metrics—login frequency, assignment completion rates, time spent on materials—and comparing them to patterns from students who previously dropped out or struggled. When the system detects concerning patterns, it alerts the instructor so they can reach out proactively.
                  </p>
                  
                  <h2 id="technology" className="text-3xl font-bold gradient-text mb-6 mt-12">Technology Stack</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    We chose technologies that would scale well as the platform grows while keeping the development process manageable:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-card p-8 rounded-2xl border">
                      <h4 className="text-xl font-bold text-foreground mb-4">Frontend & Backend</h4>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground">• React with TypeScript for the web interface</li>
                        <li className="text-muted-foreground">• Node.js for API services</li>
                        <li className="text-muted-foreground">• PostgreSQL for structured data</li>
                        <li className="text-muted-foreground">• Redis for caching and session management</li>
                      </ul>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border">
                      <h4 className="text-xl font-bold text-foreground mb-4">AI & Infrastructure</h4>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground">• Python for ML model development</li>
                        <li className="text-muted-foreground">• OpenAI API for interview practice features</li>
                        <li className="text-muted-foreground">• AWS for cloud hosting</li>
                        <li className="text-muted-foreground">• Docker for containerized deployments</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h2 id="results" className="text-3xl font-bold gradient-text mb-6 mt-12">Results</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    After launching the platform and gathering feedback from initial users, EduGenius has seen encouraging results. The numbers below reflect data from their first year of operation.
                  </p>

                  <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl my-8">
                    <h4 className="text-xl font-bold text-primary mb-4">Key Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">28%</div>
                        <div className="text-lg text-muted-foreground">Improvement in course completion rates</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">35%</div>
                        <div className="text-lg text-muted-foreground">Reduction in student support tickets</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">12K+</div>
                        <div className="text-lg text-muted-foreground">Active learners on platform</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">45+</div>
                        <div className="text-lg text-muted-foreground">Partner institutions</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-accent mb-4">Student Feedback</h4>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground">• 82% found the learning path recommendations helpful</li>
                        <li className="text-muted-foreground">• Interview practice tool rated highly by job seekers</li>
                        <li className="text-muted-foreground">• Progress tracking keeps students motivated</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-secondary mb-4">Instructor Feedback</h4>
                      <ul className="space-y-2">
                        <li className="text-muted-foreground">• At-risk alerts help catch struggling students earlier</li>
                        <li className="text-muted-foreground">• Automated grading saves significant time on quizzes</li>
                        <li className="text-muted-foreground">• Analytics provide useful insights into course content</li>
                      </ul>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-8 italic text-lg text-foreground">
                    <p className="mb-2">
                      "The platform has made a real difference in how we support students. Being able to see who's struggling before they fail a course means we can actually help them instead of just watching them drop out."
                    </p>
                    <footer className="text-sm text-muted-foreground">— Lisa Chen, Founder, EduGenius</footer>
                  </blockquote>
                  
                  <h2 id="impact" className="text-3xl font-bold gradient-text mb-6 mt-12">What's Next</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    EduGenius continues to grow and improve the platform based on user feedback. Current focus areas include expanding the interview practice tool to cover more industries and improving the at-risk detection algorithms as they collect more data.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    They're also working on mobile apps to make learning more accessible for students who primarily use phones, and exploring partnerships with corporate training departments who face similar challenges with employee learning programs.
                  </p>

                  <div className="bg-muted/30 border p-6 rounded-xl my-8">
                    <p className="text-lg italic text-foreground mb-4">
                      "The goal was never to replace instructors—it was to give them better tools. When instructors can spend less time on grading and administrative work, they can spend more time actually teaching and mentoring students."
                    </p>
                    <p className="text-sm text-muted-foreground">— EduGenius Team</p>
                  </div>

                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    This project reinforced something we've seen across industries: AI works best when it handles specific, well-defined tasks rather than trying to automate everything. The features that resonated most with users were the ones that solved concrete problems—identifying struggling students, reducing time spent on repetitive grading, and helping learners stay on track.
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Building an EdTech Product?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We'd be happy to discuss your project and how we might be able to help.
              </p>
              <a href="/lets-talk-business" className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Let's Talk
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

export default CaseStudyEduGenius;