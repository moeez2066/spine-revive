import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const treatments = [
    "Back Pain",
    "Neck Pain",
    "Sciatica",
    "Slipped Disk",
    "Fibromyalgia",
    "View All",
  ];

  const quickLinks = [
    { label: "Why KKT", href: "#why-kkt" },
    { label: "Treatment Process", href: "#process" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Appointment", href: "/appointment" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">KKT</span>
              </div>
              <div>
                <span className="font-serif font-semibold text-lg">KKT Australia</span>
              </div>
            </div>
            
            <p className="text-background/70 mb-6 text-sm leading-relaxed">
              A global leader in non-surgical orthopedic & spine care providing lasting relief through advanced technology and proven protocols.
            </p>
            
            <Link to="/appointment">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Treatments</h4>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#treatments"
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Contacts</h4>
            <p className="text-background/70 text-sm mb-6">
              If you have any questions or need help, feel free to contact us for medical assistance.
            </p>
            
            <div className="space-y-4">
              <a
                href="tel:1300558558"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>1300 558 558</span>
              </a>
              
              <a
                href="mailto:info@kktaustralia.com.au"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@kktaustralia.com.au</span>
              </a>
              
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Sydney, Melbourne, Brisbane, Australia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>©2025 KKT Australia, All Rights Reserved.</p>
            
            <div className="flex items-center gap-4">
              <span>Orthopedic Spine Center</span>
              <span className="hidden md:inline">–</span>
              <span className="hidden md:inline">Non-Surgical Treatment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
