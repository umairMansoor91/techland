import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import blogCloudComputing from "@/assets/blog-cloud-computing.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";
import blogAiFuture from "@/assets/blog-ai-future.jpg";
import blogCybersecurity from "@/assets/blog-cybersecurity.jpg";

const insights = [
  {
    type: "Case Study",
    title: "Enabling Seamless Resale Operations Across E-Commerce",
    description: "How we transformed a traditional retail business into a modern e-commerce platform",
    image: caseStudyEcommerce,
    category: "E-Commerce",
    link: "/case-study/ecommerce"
  },
  {
    type: "Blog",
    title: "How Cloud Computing Can Transform Small Businesses",
    description: "Exploring the benefits and implementation strategies for small business cloud adoption",
    image: blogCloudComputing,
    category: "Cloud Technology",
    link: "/blog/cloud-computing"
  },
  {
    type: "Case Study",
    title: "Healthcare Innovation Through Digital Patient Management",
    description: "Streamlining patient care with cutting-edge digital solutions",
    image: caseStudyHealthcare,
    category: "Healthcare",
    link: "/case-study/healthcare"
  },
  {
    type: "Blog",
    title: "Agentic AI: From Pilots to Production in 2026",
    description: "How enterprises are moving from AI experimentation to real-world deployment",
    image: blogAiFuture,
    category: "Agentic AI",
    link: "/blog/agentic-ai"
  },
  {
    type: "Blog",
    title: "Building Robust Cybersecurity for Modern Enterprises",
    description: "Best practices and strategies for comprehensive digital security",
    image: blogCybersecurity,
    category: "Security",
    link: "/blog/cybersecurity"
  }
];

const FeaturedInsights = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-2/5 space-y-6 lg:space-y-8">
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
                Featured <span className="gradient-text">Insights</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                Stories of our transformations across Services and Industries
              </p>
              <p className="text-base lg:text-lg text-muted-foreground font-medium tracking-wide">
                From Concept to Completion
              </p>
            </div>
          </div>

          {/* Right Column - Responsive Grid */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
              {insights.map((insight, index) => (
                <Link
                  key={index}
                  to={insight.link}
                  className="group relative overflow-hidden rounded-lg cursor-pointer h-48 sm:h-56 lg:h-48 transition-all duration-300 hover:shadow-xl block"
                >
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                      {insight.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">
                      {insight.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;