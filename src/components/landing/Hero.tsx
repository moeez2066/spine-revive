import { Button } from "@/components/ui/button";
import { MapPin, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const stats = [
    {
      icon: MapPin,
      value: "28",
      label: "Worldwide Centers",
      description: "Global network of advanced KKT orthopedic spine centers offering expert, non-surgical spinal care worldwide.",
    },
    {
      icon: Users,
      value: "100,000+",
      label: "Treatments Done",
      description: "Thousands have found relief through personalized, science-driven orthopedic and spine care.",
    },
    {
      icon: Trophy,
      value: "97%",
      label: "Success Rate",
      description: "High success rate with lasting pain relief, improved posture, and proven patient satisfaction.",
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&auto=format&fit=crop&q=80" 
          alt="Modern medical facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/100 to-background/0" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            Worldwide Presence
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Designed to{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-teal-dark bg-clip-text text-transparent">
              Realign Your Life
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Australia's premier orthopedic clinic offering breakthrough non-invasive treatment tailored for individuals with spine-related disorders.
          </p>
          
          <Link to="/appointment">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-glow animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-primary mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
