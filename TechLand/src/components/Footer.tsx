import { Cpu } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        "Custom Software Development",
        "Mobile App Development",
        "Cloud Solutions",
        "Cybersecurity",
        "Data Analytics",
        "Digital Transformation"
      ]
    },
    {
      title: "Industries",
      links: [
        "Travel & Hospitality",
        "Healthcare",
        "E-commerce",
        "Startups",
        "Public Sector",
        "Retail & CPG"
      ]
    },
    {
      title: "Company",
      links: [
        { text: "Who We Are", href: "/who-we-are" },
        { text: "What We Do", href: "/what-we-do" },
        { text: "Who We Help", href: "/who-we-help" },
        { text: "How We Deliver", href: "/how-we-deliver" },
        { text: "Careers", href: "/careers" },
        { text: "Reader's Corner", href: "/readers-corner" }
      ]
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Cpu 
                className="h-8 w-8 text-primary"
              />
              <span className="text-2xl font-bold gradient-text">TechLand</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-md">
              We help companies redefine the future through technology. Transform your business 
              with cutting-edge software solutions tailored to your needs.
            </p>
            
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {typeof link === 'object' ? (
                      <a 
                        href={link.href}
                        className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <span className="text-secondary-foreground/70">
                        {link}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} TechLand. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/terms-of-service" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/privacy-policy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;