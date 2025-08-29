import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Award, 
  Building, 
  Globe, 
  Users, 
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Handshake
} from "lucide-react";
import bannerBg from "@/assets/banner-bg.jpg";

const AssociationPartner = () => {
  const associations = [
    {
      name: "PIER (Pacific Institute of Education and Research)",
      type: "Education Network",
      country: "Australia",
      description: "Official partner providing direct access to Australian universities with streamlined admission processes.",
      benefits: ["Direct University Access", "Fast Track Applications", "Scholarship Opportunities"],
      logo: "🏛️"
    },
    {
      name: "British Council Nepal",
      type: "Educational Organization",
      country: "United Kingdom", 
      description: "Authorized partner for UK education programs, IELTS testing, and scholarship guidance.",
      benefits: ["UK Education Programs", "IELTS Testing Center", "Scholarship Guidance"],
      logo: "🇬🇧"
    },
    {
      name: "EducationUSA Nepal",
      type: "US Government Initiative",
      country: "United States",
      description: "Official US government resource for accurate information about higher education in the USA.",
      benefits: ["Official US Information", "Pre-departure Briefings", "Alumni Network"],
      logo: "🇺🇸"
    },
    {
      name: "Canadian Education Centre",
      type: "Education Promotion",
      country: "Canada",
      description: "Promoting Canadian education and facilitating student mobility between Nepal and Canada.",
      benefits: ["Canadian Programs", "Student Mobility", "Cultural Exchange"],
      logo: "🇨🇦"
    }
  ];

  const certifications = [
    {
      title: "PIER Certified Agent",
      issuer: "Pacific Institute of Education and Research",
      description: "Certified to represent Australian universities and process applications",
      icon: Award
    },
    {
      title: "IELTS Registration Partner", 
      issuer: "British Council Nepal",
      description: "Authorized to register students for IELTS examinations",
      icon: CheckCircle
    },
    {
      title: "Education Fair Organizer",
      issuer: "Multiple Universities",
      description: "Licensed to organize international education fairs and events",
      icon: Building
    },
    {
      title: "Student Visa Consultant",
      issuer: "Government of Nepal",
      description: "Licensed education consultant for international student placements",
      icon: Users
    }
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
            PARTNERSHIPS & ASSOCIATIONS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Partners & Associations
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Trusted partnerships that enhance our service quality and reliability
          </p>
        </div>
      </section>

      {/* Associations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our partnerships with leading educational organizations worldwide ensure you receive 
              authentic guidance and premium services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {associations.map((association, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{association.logo}</div>
                    <Badge variant="outline" className="ml-4">
                      {association.country}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {association.name}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="w-4 h-4 mr-1" />
                    {association.type}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {association.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Benefits:</h4>
                    {association.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team holds various certifications ensuring compliance and quality service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Partnership Advantages</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">For Students:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Direct access to partner universities
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Faster application processing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Exclusive scholarship opportunities
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Authentic program information
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Service Quality:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Verified partner credentials
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Regular training and updates
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Quality assurance standards
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Ongoing support network
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Experience Partnership Benefits
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our strong partnerships translate into better opportunities and smoother processes for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Get Expert Guidance</Link>
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

export default AssociationPartner;