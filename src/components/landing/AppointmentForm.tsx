import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, MapPin } from "lucide-react";

const AppointmentForm = () => {
  const centers = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Multan",
    "Faisalabad",
    "Peshawar",
  ];

  const treatments = [
    "Back Pain",
    "Neck Pain",
    "Sciatica",
    "Slipped Disk",
    "Spondylosis",
    "Whiplash",
    "Fibromyalgia",
    "Other",
  ];

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-6">
              Get Started
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Book An{" "}
              <span className="text-primary">Appointment</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From consultation to recovery, our team is here to help you! With proven, non-surgical treatments and years of expertise, our specialists diagnose, treat, and guide you towards a pain-free, healthier life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Flexible Scheduling</div>
                  <div className="text-sm text-muted-foreground">Book at your convenience</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Quick Response</div>
                  <div className="text-sm text-muted-foreground">We'll confirm within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">8 Centers Nationwide</div>
                  <div className="text-sm text-muted-foreground">Find a location near you</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-background"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-background"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="date">Select Appointment Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    className="bg-background"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Select a Center</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a Center" />
                    </SelectTrigger>
                    <SelectContent>
                      {centers.map((center) => (
                        <SelectItem key={center} value={center.toLowerCase()}>
                          {center}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>I Need Help With</Label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Choose Treatment" />
                  </SelectTrigger>
                  <SelectContent>
                    {treatments.map((treatment) => (
                      <SelectItem key={treatment} value={treatment.toLowerCase().replace(" ", "-")}>
                        {treatment}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="concerns">Please Share Your Medical Concerns</Label>
                <Textarea
                  id="concerns"
                  placeholder="Describe your symptoms or concerns..."
                  className="bg-background min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg shadow-glow"
              >
                Book Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
