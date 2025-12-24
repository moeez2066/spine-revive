import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

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
    { label: "Locations", href: "#locations" },
    { label: "Our Doctors", href: "#team" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Appointment", href: "#appointment" },
  ];

  const cities = ["Karachi", "Lahore", "Multan", "Rawalpindi", "Faisalabad", "Peshawar"];

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
                <span className="font-serif font-semibold text-lg">KKT Pakistan</span>
              </div>
            </div>
            
            <p className="text-background/70 mb-6 text-sm leading-relaxed">
              A global leader in non-surgical orthopedic & spine care providing lasting relief through advanced technology and proven protocols.
            </p>
            
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
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
                href="tel:03481112558"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>0348 1112558</span>
              </a>
              
              <a
                href="tel:080000558"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>0800 00558</span>
              </a>
              
              <a
                href="mailto:info@kktpakistan.com"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@kktpakistan.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cities bar */}
      <div className="border-t border-background/10">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-background/60">
            {cities.map((city, index) => (
              <span key={city} className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {city}
                {index < cities.length - 1 && <span className="mx-2">–</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>©2025 KKT, All Rights Reserved.</p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a>
              <span>–</span>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <span>–</span>
              <a href="#" className="hover:text-accent transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
