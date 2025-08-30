import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  GraduationCap, 
  MapPin, 
  Star, 
  Users,
  Search,
  Filter,
  ArrowRight,
  Globe,
  DollarSign
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bannerBg from "@/assets/banner-bg.jpg";
import { universities, getUniversitiesByCountry } from "@/data/universities";

const UniversityList = () => {
  const navigate = useNavigate();
  const { country } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedRanking, setSelectedRanking] = useState("all");

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || uni.level.includes(selectedLevel);
    const matchesCountry = !country || uni.country.toLowerCase() === country.toLowerCase();
    return matchesSearch && matchesLevel && matchesCountry;
  });

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-accent text-accent-foreground mb-4">
              Universities
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Discover <span className="text-accent">World-Class</span> Universities
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {country ? `Top universities in ${country}` : "Explore our partner universities worldwide"}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search universities, cities, or countries..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Study Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Bachelor">Bachelor</SelectItem>
                  <SelectItem value="Master">Master</SelectItem>
                  <SelectItem value="PhD">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* University Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {filteredUniversities.length} Universities Found
            </h2>
            <p className="text-muted-foreground">
              Choose from our carefully selected partner universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university) => (
              <Card key={university.id} className="shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer group">
                <div 
                  className="relative h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${university.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {university.ranking}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <Star className="w-4 h-4 text-accent fill-current" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {university.name}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {university.city}, {university.country}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {university.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center text-muted-foreground mb-1">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Tuition
                      </div>
                      <p className="font-medium text-xs">{university.tuitionRange}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Users className="w-4 h-4 mr-1" />
                        Student Ratio
                      </div>
                      <p className="font-medium">{university.studentRatio}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      Popular Programs
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {university.programs.slice(0, 3).map((program, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                      {university.programs.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{university.programs.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => navigate(`/universities/${university.id}`)}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our education consultants can help you find the perfect university match based on your academic goals and preferences.
          </p>
          <Button variant="accent" size="lg" className="px-8">
            Get Expert Guidance
          </Button>
        </div>
      </section>
    </div>
  );
};

export default UniversityList;