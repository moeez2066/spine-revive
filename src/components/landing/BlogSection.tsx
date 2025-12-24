import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      date: "October 1, 2017",
      author: "dev",
      title: "Mobilize Your Spine and Say Goodbye to Stiffness!",
      excerpt: "Back stiffness is becoming increasingly common. But you cannot just agonize this forever! You need to get out of this irksome sitch. You definitely require some fruitful tips to relish pain-free moments.",
    },
    {
      date: "October 2, 2017",
      author: "dev",
      title: "Wait, There is Something Wrong with Your Kid's Backpack!",
      excerpt: "Many of us underestimate the very small things in our lives. Backpack is an utmost example. Whether you are going to school or you are going to travel, backpack will be there.",
    },
    {
      date: "October 2, 2017",
      author: "dev",
      title: "Avoiding Plane Rides Just Because of Backache? Read This!",
      excerpt: "Everyone adores airplane rides! You will love to go to Switzerland and France via airplane. But this back pain, it really hurts right? Imagine you are going to this beautiful trip.",
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-6">
            Health Essentials
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Articles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📰</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                </div>
                
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                
                <Button variant="link" className="p-0 h-auto text-primary font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
