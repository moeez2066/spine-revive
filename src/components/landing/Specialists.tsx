import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";

const Specialists = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Expert Care
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get to Know Our{" "}
              <span className="text-primary">Specialists</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our highly qualified team at our orthopedic and spine center brings extensive expertise and is dedicated to treating the most common and disruptive orthopedic conditions with precision and care.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Meet our Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-card rounded-2xl shadow-card border border-border/50 flex items-center justify-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Stethoscope className="w-8 h-8 text-primary" />
                    </div>
                    <div className="font-serif font-semibold text-foreground">Dr. Specialist</div>
                    <div className="text-sm text-muted-foreground">Orthopedic Expert</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
