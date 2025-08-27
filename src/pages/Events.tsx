import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import bannerBg from "@/assets/banner-bg.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "USA Admissions Day",
      description: "Direct access to top institutions with on-spot profile assessment and scholarship guidance. Connect with university representatives from leading American universities.",
      date: "2025-09-04",
      time: "5pm to 7pm",
      mode: "Virtual (Zoom)",
      features: ["Application Fee Waivers", "Scholarships", "Fast Offers", "On-Spot Profile Assessment"],
      country: "USA",
      registrationOpen: true,
      attendees: "200+ Expected",
      category: "Admissions Fair"
    },
    {
      id: 2,
      title: "UK Admissions Day",
      description: "Spotlight on AI & Management Courses curated for future-ready careers. Learn about the latest trends in artificial intelligence and management programs.",
      date: "2025-09-11",
      time: "4pm to 6pm",
      mode: "Virtual (Zoom)",
      features: ["AI & Management Focus", "Future-Ready Careers", "Fast Track Applications", "Industry Insights"],
      country: "UK",
      registrationOpen: true,
      attendees: "150+ Expected",
      category: "Admissions Fair"
    },
    {
      id: 3,
      title: "Australia-New Zealand Fair",
      description: "Explore opportunities in Australia and New Zealand with leading universities. Discover work visa opportunities and permanent residency pathways.",
      date: "2025-09-18",
      time: "3pm to 6pm",
      mode: "In-Person",
      features: ["Multiple Universities", "On-Spot Decisions", "PR Pathway Info", "Work Visa Guidance"],
      country: "Australia",
      registrationOpen: true,
      attendees: "300+ Expected",
      category: "Education Fair"
    },
    {
      id: 4,
      title: "IELTS Preparation Workshop",
      description: "Intensive IELTS preparation workshop with expert trainers. Learn proven strategies to achieve your target band score.",
      date: "2025-09-25",
      time: "10am to 4pm",
      mode: "In-Person",
      features: ["Mock Tests", "Score Analysis", "Speaking Practice", "Writing Tips"],
      country: "All",
      registrationOpen: true,
      attendees: "50+ Expected",
      category: "Workshop"
    },
    {
      id: 5,
      title: "Canada Study Visa Seminar",
      description: "Comprehensive seminar on Canada study visa process, requirements, and success strategies. Get insights from visa experts.",
      date: "2025-10-02",
      time: "2pm to 4pm",
      mode: "Virtual (Zoom)",
      features: ["Visa Requirements", "Documentation Guide", "Interview Tips", "Success Stories"],
      country: "Canada",
      registrationOpen: true,
      attendees: "180+ Expected",
      category: "Seminar"
    },
    {
      id: 6,
      title: "Scholarship Opportunities Webinar",
      description: "Discover scholarship opportunities across various countries and learn how to apply successfully.",
      date: "2025-10-09",
      time: "6pm to 8pm",
      mode: "Virtual (Zoom)",
      features: ["Scholarship Database", "Application Tips", "Success Stories", "Q&A Session"],
      country: "All",
      registrationOpen: true,
      attendees: "250+ Expected",
      category: "Webinar"
    }
  ];

  const categories = ["All", "Admissions Fair", "Education Fair", "Workshop", "Seminar", "Webinar"];
  const countries = ["All", "USA", "UK", "Australia", "Canada"];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-accent text-accent-foreground mb-4">
              UPCOMING EVENTS
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Exclusive Education Fairs, Webinars,<br />
              <span className="text-accent">and Networking Opportunities</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join our events to connect with university representatives, get expert guidance, and take the next step in your study abroad journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-primary mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl">
                      {event.country === "USA" ? "🇺🇸" : 
                       event.country === "UK" ? "🇬🇧" : 
                       event.country === "Australia" ? "🇦🇺" : 
                       event.country === "Canada" ? "🇨🇦" : "🌍"}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
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

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.mode}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.attendees}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {event.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {event.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{event.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex gap-2">
                    <Button asChild variant="hero" className="flex-1">
                      <Link to={`/events/${event.id}`}>
                        Learn More
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Miss Out!</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events and exclusive opportunities.
          </p>
          <Button variant="accent" size="lg" className="px-8">
            Subscribe to Updates
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;