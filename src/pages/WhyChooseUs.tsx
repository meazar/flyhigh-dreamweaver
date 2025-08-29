import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Award, 
  Users, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  ArrowLeft,
  Star,
  Clock,
  Shield
} from "lucide-react";
import bannerBg from "@/assets/banner-bg.jpg";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "98% Visa Success Rate",
      description: "Our exceptional track record speaks for itself with one of the highest visa approval rates in Nepal."
    },
    {
      icon: Users,
      title: "500+ Students Placed",
      description: "Over 500 satisfied students have started their international education journey with our guidance."
    },
    {
      icon: Globe,
      title: "15+ Countries Available",
      description: "Access to top universities across USA, UK, Canada, Australia, New Zealand, Germany and more."
    },
    {
      icon: GraduationCap,
      title: "100+ Partner Universities",
      description: "Direct partnerships with leading institutions worldwide for streamlined admission processes."
    },
    {
      icon: Briefcase,
      title: "15+ Years Experience",
      description: "Decades of expertise in international education consulting and student placement services."
    },
    {
      icon: Clock,
      title: "End-to-End Support",
      description: "Comprehensive assistance from course selection to post-arrival support in your chosen destination."
    },
    {
      icon: Shield,
      title: "Authorized Agents",
      description: "Officially certified agents for major education providers with proper licensing and credentials."
    },
    {
      icon: Star,
      title: "Personalized Counseling",
      description: "One-on-one guidance tailored to your academic background, interests, and career goals."
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Students", icon: Users },
    { number: "98%", label: "Visa Success", icon: CheckCircle },
    { number: "15+", label: "Countries", icon: Globe },
    { number: "100+", label: "Universities", icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-accent text-accent-foreground mb-4">
            OUR EXCELLENCE
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Why Choose Fly High?
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Discover what makes us Nepal's most trusted education consultancy
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With years of experience and a commitment to excellence, we provide unmatched 
              support for your international education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              What Our Students Say
            </h3>
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="text-4xl text-primary mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-lg text-muted-foreground italic mb-6">
                  "Fly High made my dream of studying in Australia a reality. Their guidance throughout 
                  the application process was exceptional, and I got admission to my preferred university 
                  with a scholarship. Highly recommended!"
                </blockquote>
                <div className="font-semibold text-foreground">Priya Sharma</div>
                <div className="text-sm text-muted-foreground">Master's in IT, University of Melbourne</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Begin Your Success Story?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who trusted us with their educational journey. 
            Let's make your international education dreams come true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Start Your Journey Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to About
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;