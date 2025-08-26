import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import oxfordImg from "@/assets/universities/oxford.jpg";
import harvardImg from "@/assets/universities/harvard.jpg";
import torontoImg from "@/assets/universities/toronto.jpg";
import melbourneImg from "@/assets/universities/melbourne.jpg";

const UniversitySection = () => {
  const universities = [
    {
      name: "University of Oxford",
      country: "United Kingdom",
      ranking: "#2 World Ranking",
      image: oxfordImg,
      description: "One of the world's oldest and most prestigious universities, offering exceptional academic programs across all disciplines.",
      programs: "500+ Programs",
      acceptance: "17% Acceptance Rate",
      tuition: "£9,250-£37,510/year"
    },
    {
      name: "Harvard University",
      country: "United States",
      ranking: "#1 World Ranking",
      image: harvardImg,
      description: "America's oldest institution of higher education, renowned for producing world leaders and Nobel Prize winners.",
      programs: "450+ Programs",
      acceptance: "5% Acceptance Rate",
      tuition: "$54,002/year"
    },
    {
      name: "University of Toronto",
      country: "Canada",
      ranking: "#18 World Ranking",
      image: torontoImg,
      description: "Canada's top university offering world-class education with excellent research opportunities and diverse programs.",
      programs: "700+ Programs",
      acceptance: "43% Acceptance Rate",
      tuition: "CAD $58,160/year"
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      ranking: "#14 World Ranking",
      image: melbourneImg,
      description: "Australia's leading university known for its innovative teaching methods and strong industry connections.",
      programs: "400+ Programs",
      acceptance: "70% Acceptance Rate",
      tuition: "AUD $44,736/year"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Top Partner Universities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore world-renowned universities where our students have successfully gained admission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {universities.map((university, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={university.image} 
                  alt={university.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {university.ranking}
                  </Badge>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {university.name}
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{university.country}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {university.description}
                </p>
                <div className="grid grid-cols-1 gap-2 mb-4">
                  <div className="flex items-center text-sm">
                    <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">{university.programs}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    <span className="font-medium">{university.acceptance}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-4 h-4 mr-2 text-green-600 font-bold">$</span>
                    <span className="font-medium">{university.tuition}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="lg" className="px-8">
            <Link to="/destinations">
              View All Universities
              <GraduationCap className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;