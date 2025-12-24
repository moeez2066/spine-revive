import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ali Ehsan",
      condition: "Sciatica Treatment",
      quote: "When I first came in here, I was in a wheelchair. Now, Alhamdulillah, I run around and go to the gym. I was suffering from sciatica for the past 3-4 years. I used to visit different doctors and various hospitals, but there was no relief. Eventually, someone told me about KKT.",
      fullQuote: "I came here, and after consulting with doctors, I was prescribed KKT treatment. Now, I can do everything on my own. So, I would highly recommend KKT treatment to everyone. If you are in pain and advised surgery, I'd suggest visiting KKT first. Highly recommended!",
    },
  ];

  const treatmentImages = [
    "Upper Back Pain Treatment",
    "Treatment For Bulging Disc",
    "Sciatica Treatment",
    "Neck Pain Treatment",
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Success Stories
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inspiring Stories!
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main testimonial */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            
            <Quote className="w-10 h-10 text-primary/30 mb-4" />
            
            <blockquote className="text-foreground text-lg leading-relaxed mb-4">
              "{testimonials[0].quote}"
            </blockquote>
            
            <p className="text-muted-foreground mb-6">
              "{testimonials[0].fullQuote}"
            </p>
            
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-primary text-xl">
                  {testimonials[0].name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonials[0].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[0].condition}</div>
              </div>
            </div>
          </div>

          {/* Treatment images grid */}
          <div className="grid grid-cols-2 gap-4">
            {treatmentImages.map((treatment, index) => (
              <div
                key={treatment}
                className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center p-4 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💆</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{treatment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
