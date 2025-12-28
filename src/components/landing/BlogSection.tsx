import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, ChevronRight } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      date: "October 1, 2024",
      author: "Dr. Sarah Mitchell",
      title: "Mobilize Your Spine and Say Goodbye to Stiffness!",
      excerpt: "Back stiffness is becoming increasingly common. But you cannot just agonize this forever! You need to get out of this irksome situation.",
      content: `Back stiffness is becoming increasingly common in today's sedentary lifestyle. Hours spent hunched over computers, long commutes, and lack of physical activity all contribute to this growing problem. But you don't have to suffer forever!

**Understanding Spinal Stiffness**

Spinal stiffness occurs when the muscles, ligaments, and joints of your spine become tight and inflexible. This can be caused by:
- Poor posture during work or sleep
- Lack of regular movement and stretching
- Age-related changes in spinal discs
- Muscle tension from stress

**How KKT Can Help**

KKT treatment uses sound wave technology to gently realign the spine and restore natural mobility. Our non-invasive approach helps:
- Reduce muscle tension and inflammation
- Improve spinal flexibility
- Restore proper spinal alignment
- Promote natural healing

**Tips for Daily Relief**

1. Take regular breaks from sitting every 30 minutes
2. Practice gentle stretching exercises daily
3. Maintain proper posture while working
4. Stay hydrated to keep spinal discs healthy
5. Consider ergonomic furniture for your workspace

Don't let stiffness control your life. With the right treatment and lifestyle changes, you can enjoy a more flexible, pain-free spine.`,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      date: "September 28, 2024",
      author: "Dr. James Chen",
      title: "Wait, There is Something Wrong with Your Kid's Backpack!",
      excerpt: "Many of us underestimate the very small things in our lives. Backpack weight can significantly impact your child's spinal health.",
      content: `Many parents overlook the impact of heavy backpacks on their children's developing spines. Research shows that carrying more than 10-15% of body weight can lead to serious posture problems and back pain.

**The Hidden Danger**

Children's spines are still developing, making them particularly vulnerable to:
- Postural imbalances from uneven weight distribution
- Muscle strain from carrying heavy loads
- Long-term spinal misalignment issues
- Chronic back and neck pain

**Warning Signs to Watch For**

Pay attention if your child:
- Complains of back or shoulder pain
- Leans forward when walking with their backpack
- Has red marks on shoulders from straps
- Changes their walking pattern when carrying the bag

**Best Practices for Backpack Safety**

1. Choose backpacks with wide, padded shoulder straps
2. Ensure the backpack doesn't hang below the waist
3. Use both shoulder straps - never just one
4. Pack heavier items closest to the back
5. Clean out unnecessary items regularly

**When to Seek Help**

If your child shows persistent discomfort or postural changes, consider a professional spinal assessment. Early intervention can prevent long-term problems and ensure healthy spinal development.`,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      date: "September 25, 2024",
      author: "Dr. Emily Watson",
      title: "Avoiding Plane Rides Just Because of Backache? Read This!",
      excerpt: "Everyone loves airplane rides! But back pain during long flights can be excruciating. Here's how to travel comfortably.",
      content: `Don't let back pain stop you from exploring the world! Long flights can be challenging for those with spinal issues, but with proper preparation, you can travel comfortably.

**Why Flying Causes Back Pain**

The airplane environment presents unique challenges:
- Cramped seating positions
- Limited ability to move around
- Pressure changes affecting spinal discs
- Prolonged sitting in one position
- Vibrations during flight

**Pre-Flight Preparation**

Before your journey:
1. Do gentle stretching exercises
2. Stay well-hydrated
3. Consider a lumbar support cushion
4. Wear comfortable, loose clothing
5. Take anti-inflammatory supplements if recommended

**In-Flight Comfort Tips**

During your flight:
- Request an aisle seat for easier movement
- Get up and walk every hour
- Do seated stretches regularly
- Use a neck pillow for support
- Adjust your seat for optimal comfort

**Post-Flight Recovery**

After landing:
- Walk around the airport before sitting again
- Do gentle stretches at your hotel
- Consider a warm bath to relax muscles
- Stay active during your trip

With KKT treatment, many patients find their travel tolerance improves significantly. Don't let back pain limit your adventures!`,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      date: "September 20, 2024",
      author: "Dr. Michael Torres",
      title: "The Connection Between Stress and Chronic Back Pain",
      excerpt: "Did you know that emotional stress can manifest as physical pain in your back? Understanding this connection is key to recovery.",
      content: `The mind-body connection is powerful, and nowhere is this more evident than in the relationship between stress and back pain. Understanding this connection can be a game-changer in your healing journey.

**How Stress Affects Your Spine**

When you're stressed, your body responds with:
- Muscle tension, especially in the back and shoulders
- Shallow breathing that reduces oxygen to tissues
- Inflammation that aggravates existing conditions
- Poor posture from hunching or tensing
- Reduced blood flow to spinal structures

**The Vicious Cycle**

Stress causes tension, which causes pain, which causes more stress. Breaking this cycle requires addressing both the physical and emotional components of your condition.

**Stress Management Techniques**

Incorporate these practices into your daily routine:
1. Deep breathing exercises
2. Progressive muscle relaxation
3. Mindfulness meditation
4. Regular physical activity
5. Adequate sleep and rest

**How KKT Helps**

KKT treatment not only addresses the physical aspects of spinal misalignment but also promotes relaxation through its gentle, non-invasive approach. Many patients report feeling calmer and more relaxed after their sessions.

**Creating a Holistic Approach**

Combine spinal treatment with stress management for optimal results. Your spine and your mental health are deeply connected - nurturing both leads to lasting wellness.`,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      date: "September 15, 2024",
      author: "Dr. Lisa Patel",
      title: "Desk Job? Here's How to Protect Your Spine at Work",
      excerpt: "Office workers are at high risk for spinal problems. Learn essential tips to maintain a healthy spine during your 9-to-5.",
      content: `If you spend most of your day at a desk, you're not alone - and neither is your back pain. The modern workplace presents significant challenges to spinal health, but with the right strategies, you can protect your spine.

**The Office Spine Hazards**

Common workplace issues include:
- Prolonged sitting in poor positions
- Non-ergonomic furniture and equipment
- Repetitive movements like typing
- Screen-related neck strain
- Limited opportunities for movement

**Setting Up Your Workspace**

Create an ergonomic environment:
1. Position your monitor at eye level
2. Keep your keyboard at elbow height
3. Use a chair with lumbar support
4. Keep feet flat on the floor or a footrest
5. Position frequently used items within easy reach

**Movement is Medicine**

Combat the effects of sitting:
- Set reminders to stand every 30 minutes
- Take walking breaks throughout the day
- Do desk stretches for your neck and shoulders
- Consider a standing desk or sit-stand converter
- Walk during phone calls when possible

**Exercises You Can Do at Your Desk**

Simple movements to try:
- Seated spinal twists
- Shoulder rolls and shrugs
- Neck stretches
- Seated cat-cow stretches
- Wrist and hand stretches

**When to Seek Professional Help**

If you're experiencing persistent pain despite making changes, it may be time for professional assessment. KKT treatment can help correct misalignments caused by prolonged desk work and restore your spine to optimal function.`,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [selectedArticle, setSelectedArticle] = useState(articles[0]);

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
          <p className="text-muted-foreground">
            Stay informed with the latest insights on spinal health, treatment tips, and wellness advice from our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Article List - Left Side */}
          <div className="lg:col-span-5 space-y-4">
            {articles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  selectedArticle.id === article.id
                    ? "bg-primary/10 border-primary/30 shadow-md"
                    : "bg-card border-border/50 hover:border-primary/20 hover:bg-card/80"
                }`}
              >
                <div className="flex gap-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className={`font-semibold text-sm line-clamp-2 mb-1 transition-colors ${
                      selectedArticle.id === article.id ? "text-primary" : "text-foreground"
                    }`}>
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-2 transition-colors ${
                    selectedArticle.id === article.id ? "text-primary" : "text-muted-foreground"
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Article Content - Right Side */}
          <div className="lg:col-span-7">
            <article className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
              <div className="aspect-video overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {selectedArticle.author}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {selectedArticle.title}
                </h3>
                
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h4 key={index} className="font-semibold text-foreground mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h4>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n');
                      return (
                        <ul key={index} className="list-disc list-inside space-y-1 my-4">
                          {items.map((item, i) => (
                            <li key={i}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (/^\d+\./.test(paragraph)) {
                      const items = paragraph.split('\n');
                      return (
                        <ol key={index} className="list-decimal list-inside space-y-1 my-4">
                          {items.map((item, i) => (
                            <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                          ))}
                        </ol>
                      );
                    }
                    return (
                      <p key={index} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
