import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  DollarSign, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  MapPin,
  Calendar
} from "lucide-react";
import bannerBg from "@/assets/banner-bg.jpg";

const Destinations = () => {
  const destinations = [
    {
      country: "Australia",
      flag: "🇦🇺",
      description: "World-class education with excellent post-study work opportunities and pathway to permanent residency.",
      universities: "50+ Partner Universities",
      tuitionRange: "$20,000 - $45,000 AUD",
      duration: "1-4 years",
      workRights: "20 hrs/week during study",
      intakeSeasons: ["February", "July", "November"],
      topCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
      popularCourses: ["Engineering", "Business", "IT", "Healthcare"],
      highlights: [
        "Post-study work visa up to 4 years",
        "World's top-ranked universities",
        "Multicultural environment",
        "Strong job market for graduates"
      ]
    },
    {
      country: "Canada", 
      flag: "🇨🇦",
      description: "Affordable world-class education with excellent immigration opportunities and safe environment.",
      universities: "40+ Partner Universities",
      tuitionRange: "$15,000 - $35,000 CAD",
      duration: "1-4 years",
      workRights: "20 hrs/week during study",
      intakeSeasons: ["September", "January", "May"],
      topCities: ["Toronto", "Vancouver", "Montreal", "Calgary"],
      popularCourses: ["Computer Science", "Business", "Engineering", "Healthcare"],
      highlights: [
        "Post-graduation work permit",
        "Pathway to permanent residency",
        "High quality of life",
        "Affordable education costs"
      ]
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧", 
      description: "Home to world's oldest universities with rich academic tradition and diverse cultural experience.",
      universities: "60+ Partner Universities",
      tuitionRange: "$18,000 - $50,000 GBP",
      duration: "1-3 years",
      workRights: "20 hrs/week during study",
      intakeSeasons: ["September", "January"],
      topCities: ["London", "Manchester", "Edinburgh", "Birmingham"],
      popularCourses: ["Business", "Law", "Medicine", "Arts & Design"],
      highlights: [
        "Shorter course duration",
        "Rich cultural heritage",
        "Gateway to Europe",
        "Globally recognized degrees"
      ]
    },
    {
      country: "United States",
      flag: "🇺🇸",
      description: "Home to the world's top universities with cutting-edge research and diverse academic programs.",
      universities: "80+ Partner Universities", 
      tuitionRange: "$25,000 - $60,000 USD",
      duration: "2-4 years",
      workRights: "On-campus employment",
      intakeSeasons: ["Fall", "Spring", "Summer"],
      topCities: ["New York", "Los Angeles", "Boston", "Chicago"],
      popularCourses: ["Technology", "Business", "Medicine", "Research"],
      highlights: [
        "World's top-ranked universities",
        "Extensive research opportunities",
        "Diverse academic programs",
        "Strong alumni networks"
      ]
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      description: "Peaceful country with excellent education system and beautiful natural environment.",
      universities: "25+ Partner Universities",
      tuitionRange: "$22,000 - $35,000 NZD", 
      duration: "1-4 years",
      workRights: "20 hrs/week during study",
      intakeSeasons: ["February", "July"],
      topCities: ["Auckland", "Wellington", "Christchurch"],
      popularCourses: ["Agriculture", "Engineering", "Tourism", "Environmental Studies"],
      highlights: [
        "Safe and peaceful environment",
        "Beautiful natural landscapes",
        "Work visa opportunities",
        "English-speaking country"
      ]
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      description: "Free or low-cost education at world-renowned universities with strong engineering and research programs.",
      universities: "35+ Partner Universities",
      tuitionRange: "€0 - €20,000 EUR",
      duration: "2-4 years", 
      workRights: "120 full days/year",
      intakeSeasons: ["October", "April"],
      topCities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
      popularCourses: ["Engineering", "Computer Science", "Business", "Research"],
      highlights: [
        "Tuition-free education",
        "Strong engineering programs",
        "Central location in Europe",
        "Excellent research facilities"
      ]
    }
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
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-accent text-accent-foreground mb-4">
              Study Destinations
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Explore <span className="text-accent">World-Class</span> Education Opportunities
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Choose from our carefully selected destinations offering excellent education, career opportunities, and life experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">300+</div>
              <div className="text-muted-foreground">Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-muted-foreground">
              Discover the perfect destination for your international education journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{destination.flag}</span>
                      <div>
                        <CardTitle className="text-2xl">{destination.country}</CardTitle>
                        <p className="text-muted-foreground">{destination.universities}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-accent fill-current" />
                      <Star className="w-5 h-5 text-accent fill-current" />
                      <Star className="w-5 h-5 text-accent fill-current" />
                      <Star className="w-5 h-5 text-accent fill-current" />
                      <Star className="w-5 h-5 text-accent fill-current" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Key Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <DollarSign className="w-4 h-4 text-primary mr-2" />
                        <span className="font-medium">Tuition: </span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">{destination.tuitionRange}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-primary mr-2" />
                        <span className="font-medium">Duration: </span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">{destination.duration}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 text-primary mr-2" />
                        <span className="font-medium">Work Rights: </span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">{destination.workRights}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 text-primary mr-2" />
                        <span className="font-medium">Intakes: </span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">{destination.intakeSeasons.join(", ")}</p>
                    </div>
                  </div>

                  {/* Top Cities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      Top Cities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.topCities.map((city, cityIndex) => (
                        <Badge key={cityIndex} variant="outline">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Popular Courses */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <GraduationCap className="w-4 h-4 text-primary mr-2" />
                      Popular Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.popularCourses.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {destination.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="hero" className="w-full">
                    Explore {destination.country} Universities
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Can't Decide Which Destination?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert counselors who will help you choose the perfect destination based on your goals and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="px-8">
              Get Personalized Guidance
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Download Country Comparison
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;