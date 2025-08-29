import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Award,
  CheckCircle,
  Building,
  Users,
  ArrowLeft,
  ExternalLink,
  FileText,
  Shield,
  Globe,
  GraduationCap
} from "lucide-react";
import bannerBg from "@/assets/banner-bg.jpg";

const OfficialCertification = () => {
  const certifications = [
    {
      title: "PIER Certified Education Agent",
      issuer: "Pacific Institute of Education and Research",
      country: "Australia",
      description: "Official certification to represent Australian universities and process student applications with direct university partnerships.",
      benefits: [
        "Direct access to 50+ Australian universities",
        "Fast-track application processing",
        "Exclusive scholarship opportunities",
        "Official agent recognition"
      ],
      validUntil: "2025",
      certNumber: "PIER-NEP-2023-047",
      icon: "🇦🇺"
    },
    {
      title: "British Council Education Partner",
      issuer: "British Council Nepal",
      country: "United Kingdom",
      description: "Authorized partner for UK education promotion, IELTS registration, and student guidance services.",
      benefits: [
        "IELTS test registration authority",
        "UK education program promotion",
        "Pre-departure briefing sessions",
        "Alumni network access"
      ],
      validUntil: "2024",
      certNumber: "BC-NEP-EDU-2023-129",
      icon: "🇬🇧"
    },
    {
      title: "Licensed Education Consultant",
      issuer: "Government of Nepal - Ministry of Education",
      country: "Nepal",
      description: "Official government license to operate as an international education consultancy in Nepal.",
      benefits: [
        "Legal authorization to operate",
        "Government compliance certificate",
        "Student protection assurance",
        "Quality service standards"
      ],
      validUntil: "2026",
      certNumber: "MOE-IEC-2023-0156",
      icon: "🏛️"
    },
    {
      title: "ICEF Agency Member",
      issuer: "International Consultants for Education and Fairs",
      country: "International",
      description: "Membership in the global network of education agents with quality assurance and professional standards.",
      benefits: [
        "Global agent network access",
        "Quality assurance certification",
        "International best practices",
        "Professional development support"
      ],
      validUntil: "2024",
      certNumber: "ICEF-MEMBER-2023-8947",
      icon: "🌍"
    }
  ];

  const complianceStandards = [
    {
      title: "Data Protection Compliance",
      description: "Full compliance with data protection regulations for student information security",
      icon: Shield
    },
    {
      title: "Ethical Standards",
      description: "Adherence to international ethical standards in education consultancy",
      icon: CheckCircle
    },
    {
      title: "Quality Assurance", 
      description: "Regular audits and quality assessments by partner organizations",
      icon: Award
    },
    {
      title: "Professional Development",
      description: "Continuous training and certification updates for our team members",
      icon: GraduationCap
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
            OFFICIAL CERTIFICATIONS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Official Certifications & Licenses
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Verified credentials ensuring quality and trustworthy services
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Authorized & Certified Education Consultancy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fly High International Education Consultancy holds official certifications and licenses 
              from government bodies and international education organizations. These credentials ensure 
              that our services meet the highest standards of quality, ethics, and compliance.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Government Licensed
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-primary mr-2" />
                Internationally Certified
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                Quality Assured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Official Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each certification represents our commitment to providing authorized, 
              quality education consultancy services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <Badge variant="outline">{cert.country}</Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {cert.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="w-4 h-4 mr-2" />
                    {cert.issuer}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {cert.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Certificate #:</span>
                        <p className="font-mono text-xs text-foreground mt-1">{cert.certNumber}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Valid Until:</span>
                        <p className="font-semibold text-foreground mt-1">{cert.validUntil}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain strict compliance with international standards and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{standard.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Certificate Verification</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground mb-6">
                  All our certifications can be verified through the respective issuing authorities. 
                  We encourage students and parents to verify our credentials for complete peace of mind.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Document Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      Physical certificates available for inspection at our office
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Online Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      Certificate numbers can be verified on issuer websites
                    </p>
                  </div>
                </div>
                
                <Button asChild variant="outline" className="mr-4">
                  <Link to="/contact">
                    <FileText className="w-4 h-4 mr-2" />
                    Request Certificate Copies
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Trust in Our Certified Expertise
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our official certifications guarantee that you receive authentic, quality education 
            consultancy services backed by recognized authorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Get Certified Guidance</Link>
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

export default OfficialCertification;