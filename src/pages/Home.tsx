import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Globe, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  BookOpen,
  Plane,
  Star
} from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";
import BlogSection from "@/components/BlogSection";
import UniversitySection from "@/components/UniversitySection";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const stats = [
    { value: "500+", label: "Students Placed", icon: Users },
    { value: "98%", label: "Visa Success Rate", icon: CheckCircle },
    { value: "15+", label: "Countries", icon: Globe },
    { value: "100+", label: "Partner Universities", icon: GraduationCap },
  ];

  const services = [
    {
      title: "University Selection",
      description: "Expert guidance to find the perfect university that matches your academic goals and budget.",
      icon: BookOpen,
    },
    {
      title: "Visa Processing", 
      description: "Complete visa application support with documentation and interview preparation.",
      icon: Plane,
    },
    {
      title: "Test Preparation",
      description: "Comprehensive IELTS, TOEFL, and other standardized test preparation programs.",
      icon: Award,
    },
  ];

  const destinations = [
    { country: "Australia", universities: "50+ Universities", flag: "🇦🇺" },
    { country: "Canada", universities: "40+ Universities", flag: "🇨🇦" },
    { country: "United Kingdom", universities: "60+ Universities", flag: "🇬🇧" },
    { country: "United States", universities: "80+ Universities", flag: "🇺🇸" },
    { country: "New Zealand", universities: "25+ Universities", flag: "🇳🇿" },
    { country: "Germany", universities: "35+ Universities", flag: "🇩🇪" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-primary-foreground py-20 lg:py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground">
                  Nepal's Trusted Education Partner
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Journey to <br />
                  <span className="text-accent">World-Class Education</span><br />
                  Starts Here!
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                  Fly High International Education Consultancy supports you from choosing a course to securing university admission, assisting you at every stage of your journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="accent" className="text-lg px-8">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                  Explore Destinations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-glow">
                <h3 className="text-2xl font-semibold mb-6">Why Choose Fly High?</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                      <div className="text-3xl font-bold text-accent">{stat.value}</div>
                      <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Premium Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support throughout your study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg" className="px-8">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Blog Section */}
      <BlogSection />

      {/* Universities Section */}
      <UniversitySection />

      {/* Destinations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-muted-foreground">
              Explore world-class education opportunities across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{destination.flag}</div>
                    <Star className="w-5 h-5 text-accent fill-current" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{destination.country}</h3>
                  <p className="text-muted-foreground">{destination.universities}</p>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                    Explore Programs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/destinations">
                View All Destinations
                <Globe className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Book a free consultation with our expert counselors and take the first step towards your dream education abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="text-lg px-8">
                Book Free Consultation
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;