import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import flyhighLogo from "@/assets/flyhigh-logo.png";
import ConsultationModal from "./ConsultationModal";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      href: "/about", 
      label: "About Us",
      dropdown: [
        { href: "/message-from-director", label: "Message From Director" },
        { href: "/why-choose-us", label: "Why Choose us?" },
        { href: "/association-partner", label: "Association Partner" },
        { href: "/our-team", label: "Our Team" },
        { href: "/official-certification", label: "Official Certification" }
      ]
    },
    { href: "/services", label: "Services" },
    { href: "/destinations", label: "Study Destinations" },
    { href: "/blog", label: "Blog" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path || (path === "/blog" && location.pathname.startsWith("/blog"));

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+977-1-4444444" className="flex items-center space-x-1 hover:text-accent transition-smooth">
              <Phone className="w-3 h-3" />
              <span>+977-1-4444444</span>
            </a>
            <a href="mailto:info@flyhigh.com.np" className="flex items-center space-x-1 hover:text-accent transition-smooth">
              <Mail className="w-3 h-3" />
              <span>info@flyhigh.com.np</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span className="text-accent font-medium">Your 100% Partner in Success</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={flyhighLogo} 
              alt="Fly High International Education Consultancy" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className={`font-medium transition-smooth flex items-center ${
                    isActive(link.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}>
                    {link.label}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border border-border shadow-elegant">
                    {link.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.href} asChild>
                        <Link
                          to={dropdownItem.href}
                          className="font-medium text-muted-foreground hover:text-primary cursor-pointer w-full"
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-smooth ${
                    isActive(link.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <ConsultationModal>
              <Button className="bg-hero-gradient hover:shadow-glow transition-all duration-300">
                Free Consultation
              </Button>
            </ConsultationModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.href} className="space-y-2">
                    <Link
                      to={link.href}
                      className={`font-medium transition-smooth ${
                        isActive(link.href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <div className="pl-4 space-y-2">
                      {link.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`font-medium transition-smooth ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <ConsultationModal>
                <Button className="bg-hero-gradient hover:shadow-glow transition-all duration-300 w-full">
                  Free Consultation
                </Button>
              </ConsultationModal>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;