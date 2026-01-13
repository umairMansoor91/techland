import { Helmet } from "react-helmet-async";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import legalAbstract from "@/assets/legal-abstract.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - TechLand</title>
        <meta name="description" content="Privacy Policy for TechLand - Learn how we collect, use, and protect your personal information and data." />
        <meta name="keywords" content="privacy policy, data protection, personal information, TechLand, confidentiality" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={legalAbstract} 
              alt="Abstract background representing data privacy and security" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">Legal</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Your privacy is our priority. Learn how we protect and handle your personal information.
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
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you contact us, request services, 
                  or subscribe to our communications. This may include your name, email address, phone number, 
                  company information, and project requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We also automatically collect certain technical information about your device and how you interact 
                  with our website, including IP address, browser type, operating system, and usage patterns.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Delivering requested services and communicating about projects</li>
                  <li>Sending updates about our services and industry insights</li>
                  <li>Analyzing usage patterns to improve our website and services</li>
                  <li>Protecting against fraud and ensuring security</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>With trusted service providers who assist in operating our business</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                  <li>In connection with a business transaction such as a merger or acquisition</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  However, no method of transmission over the internet or electronic storage is 100% secure. 
                  While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, 
                  unless a longer retention period is required or permitted by law.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When we no longer need your personal information, we will securely delete or anonymize it.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to rectify inaccurate personal information</li>
                  <li>The right to erase your personal information in certain circumstances</li>
                  <li>The right to restrict processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website does not use cookies or similar tracking technologies. We respect your privacy 
                  and do not track your browsing behavior or collect personal data through cookies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our website functions fully without the need for cookies, ensuring your privacy is maintained 
                  while you browse our content and services.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website may contain links to third-party websites or services. We are not responsible for 
                  the privacy practices of these third parties.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review the privacy policies of any third-party services you access through our website.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  These countries may have different data protection laws than your country.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When we transfer your information internationally, we ensure appropriate safeguards are in place 
                  to protect your personal information.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us through our website contact form.
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;