import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Conditions = () => {
  const conditions = [
    {
      title: "Whiplash",
      description: "Neck injury from rapid back-and-forth movement",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Spondylosis",
      description: "Age-related wear and tear of the spinal disks",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Sciatica",
      description: "Pain radiating along the sciatic nerve",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Slipped Disk",
      description: "Displacement of spinal disk causing nerve compression",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Back Pain",
      description: "Chronic or acute pain in the back region",
      image: "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Neck Pain",
      description: "Discomfort in the cervical spine area",
      image: "https://images.unsplash.com/photo-1616279969096-54b228f6f4b8?w=400&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="treatments" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Conditions We Help with
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            We believe effective treatment begins with an{" "}
            <span className="text-primary">accurate diagnosis</span>
          </h2>
          
          <p className="text-muted-foreground">
            Our orthopedic specialists don't mask symptoms with temporary solutions. They address and diagnose the root cause of the problem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <div
              key={condition.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={condition.image} 
                  alt={condition.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground text-sm">{condition.description}</p>
                <div className="mt-4 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Conditions
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
