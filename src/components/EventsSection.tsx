import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import usaBg from "@/assets/events/usa-bg.jpg";
import ukBg from "@/assets/events/uk-bg.jpg";
import australiaBg from "@/assets/events/australia-bg.jpg";

const EventsSection = () => {
  const getCountryBackground = (country: string) => {
    switch(country) {
      case "USA": return usaBg;
      case "UK": return ukBg;
      case "Australia": return australiaBg;
      default: return usaBg;
    }
  };

  const events = [
    {
      id: 1,
      title: "USA Admissions Day",
      description: "Direct access to top institutions with on-spot profile assessment and scholarship guidance.",
      date: "2025-09-04",
      time: "5pm to 7pm",
      mode: "Virtual (Zoom)",
      features: ["Application Fee Waivers", "Scholarships", "Fast Offers"],
      image: "/lovable-uploads/511f3ce8-43ef-49a5-883e-553ba9dfeac3.png",
      registrationOpen: true,
      country: "USA"
    },
    {
      id: 2,
      title: "UK Admissions Day",
      description: "Spotlight on AI & Management Courses curated for future-ready careers.",
      date: "2025-09-11",
      time: "4pm to 6pm",
      mode: "Virtual (Zoom)",
      features: ["AI & Management Focus", "Future-Ready Careers", "Fast Track Applications"],
      image: "/lovable-uploads/c5694e12-6afa-4f39-b2a1-7770dd304265.png",
      registrationOpen: true,
      country: "UK"
    },
    {
      id: 3,
      title: "Australia-New Zealand Fair",
      description: "Explore opportunities in Australia and New Zealand with leading universities.",
      date: "2025-09-18",
      time: "3pm to 6pm",
      mode: "In-Person",
      features: ["Multiple Universities", "On-Spot Decisions", "PR Pathway Info"],
      image: "/lovable-uploads/a423dd3f-d251-4a68-9b64-b50eee2f0592.png",
      registrationOpen: true,
      country: "Australia"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <Badge className="bg-accent text-accent-foreground mb-4">
                UPCOMING EVENTS
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Exclusive Education Fairs, Webinars,
              </h2>
              <h2 className="text-4xl font-bold text-accent">
                and Networking Opportunities
              </h2>
            </div>
            <Button asChild variant="hero" size="lg" className="px-8">
              <Link to="/events">
                View All Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div 
                  className="aspect-video bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                  style={{ backgroundImage: `url(${getCountryBackground(event.country)})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20"></div>
                  <div className="relative z-10 text-6xl drop-shadow-lg">
                    {event.country === "USA" ? "🇺🇸" : event.country === "UK" ? "🇬🇧" : "🇦🇺"}
                  </div>
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    {event.country}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {event.time}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {event.mode}
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {event.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button asChild variant="hero" className="w-full">
                    <Link to={`/events/${event.id}`}>
                      Register Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;