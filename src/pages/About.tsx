import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Target, Eye, Heart } from "lucide-react";
import bannerBg from "@/assets/banner-bg.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent guidance with your best interests at heart."
    },
    {
      icon: Users,
      title: "Student-Centered",
      description: "Every decision we make puts our students' success first."
    },
  ];

  const team = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Managing Director",
      experience: "15+ years in international education",
      education: "PhD in Education Management",
    },
    {
      name: "Ms. Priya Patel",
      position: "Senior Counselor",
      experience: "12+ years in visa processing",
      education: "Masters in International Relations",
    },
    {
      name: "Mr. David Johnson",
      position: "IELTS Coordinator",
      experience: "10+ years in test preparation",
      education: "CELTA Certified Trainer",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Fly High International
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Your trusted partner in achieving study abroad dreams with expert guidance and personalized support
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Fly High International Education Consultancy began with a simple mission: to make quality international education accessible to every deserving Nepali student. What started as a small office in Kathmandu has grown into Nepal's most trusted education consultancy.
                </p>
                <p>
                  Over the years, we have successfully placed over 500 students in top universities across 15 countries. Our 98% visa success rate speaks volumes about our commitment to excellence and our deep understanding of international education systems.
                </p>
                <p>
                  Today, we continue to evolve, embracing new technologies and methodologies to provide the best possible guidance to our students. Our experienced team of counselors, visa experts, and test preparation specialists work tirelessly to ensure every student's success.
                </p>
              </div>
              <Button variant="hero" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
            <div className="relative">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Students Placed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Visa Success</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">12</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-elegant border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower Nepali students with access to world-class international education opportunities by providing expert guidance, personalized support, and comprehensive services that ensure their academic and professional success abroad.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="w-8 h-8 text-accent mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be Nepal's leading international education consultancy, recognized for our integrity, excellence, and commitment to transforming lives through education, while contributing to the country's human resource development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {member.position}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground text-sm">
                    <Award className="w-4 h-4 inline mr-1" />
                    {member.experience}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <Globe className="w-4 h-4 inline mr-1" />
                    {member.education}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you towards achieving your international education goals.
          </p>
          <Button variant="accent" size="lg" className="px-8">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;