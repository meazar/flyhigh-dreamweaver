import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowLeft,
  Mail,
  Phone,
  Award,
  GraduationCap,
  Users,
  Globe
} from "lucide-react";
import bannerBg from "@/assets/banner-bg.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mr. Ram Prasad Sharma",
      position: "Managing Director",
      experience: "15+ Years",
      specialization: "Education Consultancy & Student Placement",
      description: "Leading the organization with extensive experience in international education consulting and strategic partnerships.",
      avatar: "👨‍💼",
      qualifications: ["MBA in Education Management", "Certified Education Consultant"],
      email: "director@flyhigh.com.np",
      phone: "+977-1-4444440"
    },
    {
      name: "Ms. Sita Kumari Poudel", 
      position: "Senior Education Counselor",
      experience: "12+ Years",
      specialization: "USA & Canada Programs",
      description: "Expert counselor specializing in North American universities with proven track record in student placements.",
      avatar: "👩‍🎓",
      qualifications: ["Master's in International Relations", "PIER Certified Agent"],
      email: "sita@flyhigh.com.np",
      phone: "+977-1-4444441"
    },
    {
      name: "Mr. Krishna Bahadur Thapa",
      position: "Australia & UK Specialist", 
      experience: "10+ Years",
      specialization: "Australia & UK Universities",
      description: "Specialized in Australian and UK education systems with extensive knowledge of visa requirements.",
      avatar: "👨‍🏫",
      qualifications: ["Master's in Education", "British Council Certified"],
      email: "krishna@flyhigh.com.np", 
      phone: "+977-1-4444442"
    },
    {
      name: "Ms. Radha Sharma",
      position: "Visa Processing Manager",
      experience: "8+ Years", 
      specialization: "Student Visa Applications",
      description: "Expert in visa documentation and processing with high success rates across multiple countries.",
      avatar: "👩‍💼",
      qualifications: ["Bachelor's in Law", "Immigration Consultant"],
      email: "radha@flyhigh.com.np",
      phone: "+977-1-4444443"
    },
    {
      name: "Mr. Arjun Karki",
      position: "Test Preparation Coordinator",
      experience: "6+ Years",
      specialization: "IELTS & TOEFL Training", 
      description: "Experienced trainer helping students achieve required scores in English proficiency tests.",
      avatar: "👨‍🎯",
      qualifications: ["Master's in English Literature", "IELTS Trainer Certified"],
      email: "arjun@flyhigh.com.np",
      phone: "+977-1-4444444"
    },
    {
      name: "Ms. Sunita Adhikari",
      position: "Student Support Manager",
      experience: "5+ Years",
      specialization: "Pre & Post Departure Support",
      description: "Dedicated to providing comprehensive support from application to post-arrival assistance.",
      avatar: "👩‍🤝‍👨",
      qualifications: ["Bachelor's in Social Work", "Student Counseling Certificate"],
      email: "sunita@flyhigh.com.np", 
      phone: "+977-1-4444445"
    }
  ];

  const teamStats = [
    { number: "6+", label: "Expert Counselors", icon: Users },
    { number: "50+", label: "Years Combined Experience", icon: Award },
    { number: "15+", label: "Countries Covered", icon: Globe },
    { number: "500+", label: "Students Guided", icon: GraduationCap },
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
            OUR DEDICATED TEAM
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Experienced professionals dedicated to your educational success
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Professional Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who will guide you through every step 
              of your international education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <div className="text-4xl">{member.avatar}</div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <p className="text-primary font-medium">{member.position}</p>
                  <Badge variant="outline" className="mt-2">
                    {member.experience}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Specialization:</h4>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Qualifications:</h4>
                    <ul className="space-y-1">
                      {member.qualifications.map((qual, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <Award className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Mail className="w-3 h-3 text-primary mr-2" />
                      {member.email}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Phone className="w-3 h-3 text-primary mr-2" />
                      {member.phone}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Our Team Values</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Student-Centric</h3>
                    <p className="text-sm text-muted-foreground">
                      Every decision we make is focused on student success and satisfaction.
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      We maintain the highest standards in all our services and interactions.
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Global Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      We stay updated with global education trends to provide the best guidance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Work with Our Expert Team?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our dedicated professionals are here to guide you through every step of your 
            international education journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Schedule a Consultation</Link>
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

export default OurTeam;