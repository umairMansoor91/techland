import { Helmet } from "react-helmet-async";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import legalAbstract from "@/assets/legal-abstract.jpg";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - TechLand</title>
        <meta name="description" content="Terms of Service for TechLand - Review our terms and conditions for using our technology services and solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={legalAbstract} 
              alt="Abstract background representing legal terms and conditions" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">Legal</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
                Terms of Service
              </h1>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Review our terms and conditions for using our technology services and solutions.
              </p>
              <div className="text-white/60">
                Last updated: December 2024
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using TechLand's services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TechLand provides custom software development, mobile app development, cloud solutions, cybersecurity services, 
                  data analytics, and digital transformation consulting services to businesses and organizations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Copyright & Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, materials, and intellectual property provided by TechLand, including but not limited to software code, 
                  documentation, designs, and methodologies, remain the exclusive property of TechLand unless otherwise specified in writing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Upon full payment for custom development services, clients receive ownership rights to the specific deliverables 
                  created for their project, excluding any proprietary frameworks, tools, or methodologies developed by TechLand.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unauthorized reproduction, distribution, or use of our proprietary materials is strictly prohibited and may result in legal action.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Clients are responsible for providing accurate and complete information necessary for project completion, 
                  including timely feedback, approvals, and access to required systems or data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Clients must ensure they have the legal right to use any third-party materials, data, or content provided to TechLand 
                  for integration into their projects.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms are specified in individual project agreements. Late payments may incur additional charges 
                  and may result in suspension of services until payment is received.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are quoted in USD unless otherwise specified. Additional costs for third-party services, 
                  licenses, or tools required for project completion are the client's responsibility.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Disclaimer & Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TechLand provides services "as is" without any warranties, express or implied. We make no guarantees regarding 
                  the performance, reliability, or suitability of our solutions for any particular purpose.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In no event shall TechLand be liable for any indirect, incidental, special, or consequential damages arising from 
                  the use of our services, even if we have been advised of the possibility of such damages.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our total liability for any claims arising from our services shall not exceed the total amount paid by the client 
                  for the specific services giving rise to the claim.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TechLand respects the confidential nature of client information and maintains strict confidentiality protocols. 
                  We will not disclose any confidential information without prior written consent.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain confidentiality of sensitive information shared during the course of the business relationship.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Either party may terminate the service agreement with 30 days written notice. Upon termination, 
                  all outstanding payments become immediately due.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  TechLand reserves the right to terminate services immediately in case of breach of terms, 
                  non-payment, or misuse of services.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be 
                  limited or eliminated to the minimum extent necessary so that the Terms of Service shall otherwise remain in 
                  full force and effect and enforceable. The remaining provisions will continue to be valid and enforceable.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the United Arab Emirates. 
                  Any disputes arising from these terms shall be resolved through arbitration in Dubai, UAE.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you consent to the jurisdiction and venue of the courts in Dubai, UAE for any legal proceedings.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TechLand reserves the right to modify these Terms of Service at any time. Updated terms will be posted on our website 
                  and will become effective immediately upon posting.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Continued use of our services after any such changes constitutes your acceptance of the new Terms of Service.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-2"><strong>Email:</strong> info@techland.com</p>
                  <p className="text-muted-foreground mb-2"><strong>Phone:</strong> (+971) 561803315</p>
                  <p className="text-muted-foreground"><strong>Address:</strong> Sharjah Media City, Dubai, UAE</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;