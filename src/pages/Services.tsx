import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Award, 
  Plane, 
  CreditCard,
  Users,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: GraduationCap,
      title: "University Selection & Admission",
      description: "Expert guidance to choose the right university and course based on your academic profile, career goals, and budget.",
      features: [
        "Academic profile evaluation",
        "University matching algorithm",
        "Application document preparation",
        "Admission interview preparation",
        "Course selection guidance"
      ]
    },
    {
      icon: FileText,
      title: "Visa Processing & Documentation",
      description: "Complete visa application support with 98% success rate, including all required documentation and interview preparation.",
      features: [
        "Document checklist and verification",
        "Visa application form assistance", 
        "Financial documentation guidance",
        "Embassy interview preparation",
        "Visa tracking and follow-up"
      ]
    },
    {
      icon: BookOpen,
      title: "Test Preparation (IELTS/TOEFL/PTE)",
      description: "Comprehensive test preparation programs with expert trainers and proven methodologies to achieve your target scores.",
      features: [
        "Diagnostic tests and score analysis",
        "Personalized study plans",
        "Mock tests and practice sessions",
        "Speaking practice with native speakers",
        "Score improvement guarantee"
      ]
    },
    {
      icon: Award,
      title: "Scholarship Guidance",
      description: "Identify and apply for scholarships, grants, and financial aid opportunities to reduce your education costs.",
      features: [
        "Scholarship database access",
        "Eligibility assessment",
        "Application essay writing support",
        "Interview preparation for scholarships",
        "Merit-based scholarship applications"
      ]
    },
    {
      icon: Plane,
      title: "Pre-Departure Support",
      description: "Complete preparation for your international journey including accommodation, travel, and orientation guidance.",
      features: [
        "Accommodation arrangements",
        "Travel booking assistance",
        "Airport pickup coordination",
        "Cultural orientation sessions",
        "Emergency contact setup"
      ]
    },
    {
      icon: CreditCard,
      title: "Education Loans & Financial Planning",
      description: "Assistance with education loan applications and financial planning for your international education journey.",
      features: [
        "Loan eligibility assessment",
        "Bank liaison and documentation",
        "Financial planning consultation", 
        "Currency exchange guidance",
        "Cost estimation and budgeting"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Career Counseling",
      description: "Professional guidance to align your education choices with career objectives.",
      icon: Users
    },
    {
      title: "Application Tracking",
      description: "Real-time updates on your application status and next steps.",
      icon: Clock
    },
    {
      title: "Post-Arrival Support", 
      description: "Continued assistance even after you reach your destination country.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-accent text-accent-foreground mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Comprehensive <span className="text-accent">Education Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              From university selection to post-arrival support, we provide end-to-end services to ensure your study abroad journey is smooth and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a successful study abroad experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Additional Support Services</h2>
            <p className="text-lg text-muted-foreground">
              Extra services to ensure your complete success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to start your study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "Initial assessment of your goals and requirements"
              },
              {
                step: "02", 
                title: "Documentation",
                description: "Gather and prepare all necessary documents"
              },
              {
                step: "03",
                title: "Application Process",
                description: "Submit applications to selected universities"
              },
              {
                step: "04",
                title: "Visa & Departure",
                description: "Process visa and prepare for departure"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and let our experts create a personalized plan for your study abroad journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="px-8">
              Book Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;