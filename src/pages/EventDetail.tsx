import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowLeft, CheckCircle, Share2 } from "lucide-react";
import bannerBg from "@/assets/banner-bg.jpg";

const EventDetail = () => {
  const { id } = useParams();

  // Mock event data - in real app, this would come from API
  const event = {
    id: 1,
    title: "USA Admissions Day",
    description: "Direct access to top institutions with on-spot profile assessment and scholarship guidance. Connect with university representatives from leading American universities and get your applications fast-tracked.",
    fullDescription: "Join us for an exclusive USA Admissions Day where you'll have the opportunity to meet with representatives from top American universities. This virtual event offers direct access to admissions officers, scholarship coordinators, and student services teams who can provide personalized guidance for your study abroad journey.\n\nDuring this event, you'll be able to participate in one-on-one profile assessments, learn about application requirements, explore scholarship opportunities, and get answers to all your questions about studying in the USA.",
    date: "2025-09-04",
    time: "5pm to 7pm",
    mode: "Virtual (Zoom)",
    features: [
      "Direct access to university representatives",
      "On-spot profile assessment", 
      "Application fee waivers for qualified students",
      "Scholarship guidance and opportunities",
      "Fast-track application process",
      "Q&A sessions with admissions officers",
      "Information about work opportunities",
      "Visa guidance and support"
    ],
    country: "USA",
    registrationOpen: true,
    attendees: "200+ Expected",
    category: "Admissions Fair",
    agenda: [
      { time: "5:00 PM", activity: "Welcome & Event Overview" },
      { time: "5:15 PM", activity: "University Presentations" },
      { time: "5:45 PM", activity: "One-on-One Consultations" },
      { time: "6:15 PM", activity: "Scholarship Information Session" },
      { time: "6:45 PM", activity: "Q&A and Closing Remarks" }
    ],
    universities: [
      "University of California, Berkeley",
      "Arizona State University", 
      "University of Illinois Chicago",
      "San Jose State University",
      "California State University",
      "University of Alabama"
    ],
    requirements: [
      "Completed high school or equivalent",
      "Basic English proficiency",
      "Interest in studying in the USA",
      "Zoom access for virtual participation"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/events" className="inline-flex items-center text-primary-foreground hover:text-accent transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Events
            </Link>
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-accent text-accent-foreground">
                  {event.category}
                </Badge>
                <Badge variant="secondary">
                  {event.country}
                </Badge>
                <Badge variant="outline" className="bg-white/10 border-white/30 text-white">
                  Virtual Event
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {event.title}
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center text-primary-foreground">
                  <Calendar className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <div className="font-medium">{new Date(event.date).toLocaleDateString()}</div>
                    <div className="text-sm text-primary-foreground/80">Date</div>
                  </div>
                </div>
                <div className="flex items-center text-primary-foreground">
                  <Clock className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <div className="font-medium">{event.time}</div>
                    <div className="text-sm text-primary-foreground/80">Duration</div>
                  </div>
                </div>
                <div className="flex items-center text-primary-foreground">
                  <Users className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <div className="font-medium">{event.attendees}</div>
                    <div className="text-sm text-primary-foreground/80">Attendees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">About This Event</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {event.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {/* What You'll Get */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">What You'll Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Event Agenda */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Event Agenda</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex items-center border-l-4 border-l-primary pl-4 py-2">
                        <div className="flex-shrink-0 w-20 text-sm font-medium text-primary">
                          {item.time}
                        </div>
                        <div className="text-muted-foreground">
                          {item.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Participating Universities */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Participating Universities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {event.universities.map((university, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-semibold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{university}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <Card className="shadow-card sticky top-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">Register Now</CardTitle>
                  <p className="text-muted-foreground">Secure your spot today!</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span className="font-medium">Date:</span>
                      <span className="ml-auto">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <span className="font-medium">Time:</span>
                      <span className="ml-auto">{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      <span className="font-medium">Mode:</span>
                      <span className="ml-auto">{event.mode}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border space-y-3">
                    <Button variant="hero" size="lg" className="w-full">
                      Register for Free
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Event
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;