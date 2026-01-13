import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Cpu } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Who We Are',
      href: '/who-we-are',
      hasDropdown: false
    },
    {
      label: 'What We Do',
      href: '/what-we-do',
      hasDropdown: false
    },
    {
      label: 'Who We Help',
      href: '/who-we-help',
      hasDropdown: false
    },
    {
      label: 'How We Deliver',
      href: '/how-we-deliver',
      hasDropdown: false
    },
    {
      label: 'Careers',
      href: '/careers',
      hasDropdown: false
    },
    {
      label: "Reader's Corner",
      href: '/readers-corner',
      hasDropdown: false
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2 transition-all duration-200 hover:scale-105">
              <Cpu 
                className={`h-8 w-8 transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              />
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'gradient-text' : 'text-white'
              }`}>TechLand</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={`transition-colors py-2 hover:scale-105 text-sm ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary-glow'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.location.href = '/lets-talk-business'}
            >
              Let's Talk Business
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-up">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a 
                    href={item.href} 
                    className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => window.location.href = '/lets-talk-business'}
                >
                  Let's Talk Business
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;