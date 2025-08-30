import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  MapPin, 
  Star, 
  Users,
  Globe,
  DollarSign,
  Calendar,
  Award,
  BookOpen,
  Building,
  ArrowLeft,
  ExternalLink,
  Phone,
  Mail
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { getUniversityById } from "@/data/universities";

const UniversityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const university = getUniversityById(Number(id));
  
  if (!university) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">University Not Found</h1>
          <p className="text-muted-foreground mb-8">The university you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/universities')}>
            Back to Universities
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${university.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <Button 
            variant="ghost" 
            className="self-start mb-4 text-white hover:bg-white/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Universities
          </Button>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-primary text-primary-foreground">
                {university.ranking}
              </Badge>
              <Badge className="bg-accent text-accent-foreground">
                {university.qsRanking}
              </Badge>
            </div>
            <h1 className="text-5xl font-bold text-white">{university.name}</h1>
            <div className="flex items-center text-white/90 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              {university.city}, {university.country}
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <span className="text-white/90 ml-2">5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-6 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{university.studentPopulation}</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{university.internationalStudents}</div>
              <div className="text-sm text-muted-foreground">International</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{university.acceptanceRate}</div>
              <div className="text-sm text-muted-foreground">Acceptance Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{university.established}</div>
              <div className="text-sm text-muted-foreground">Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                  <TabsTrigger value="admission">Admission</TabsTrigger>
                  <TabsTrigger value="costs">Costs</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        About {university.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {university.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Key Statistics</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Student-Faculty Ratio:</span>
                              <span className="font-medium">{university.studentRatio}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Campus Locations:</span>
                              <span className="font-medium">{university.campuses}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Global Ranking:</span>
                              <span className="font-medium">{university.ranking}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Key Highlights</h4>
                          <ul className="space-y-2 text-sm">
                            {university.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start">
                                <Award className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="programs" className="space-y-6">
                  {university.faculties.map((faculty, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          {faculty.name}
                        </CardTitle>
                        <p className="text-muted-foreground">{faculty.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {faculty.programs.map((program, programIndex) => (
                            <Badge key={programIndex} variant="secondary">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="admission" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Undergraduate Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {university.admissionRequirements.undergraduate.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Postgraduate Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {university.admissionRequirements.postgraduate.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        Application Deadlines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {university.intakes.map((intake, index) => (
                          <div key={index} className="border-l-4 border-primary pl-4">
                            <h4 className="font-semibold">{intake.semester}</h4>
                            <p className="text-muted-foreground text-sm">{intake.period}</p>
                            <p className="text-sm font-medium">Deadline: {intake.deadline}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="costs" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Cost Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b">
                          <span className="font-medium">Tuition Fees (per year)</span>
                          <span className="text-lg font-bold text-primary">{university.costs.tuition}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b">
                          <span>Living Expenses (per year)</span>
                          <span className="font-medium">{university.costs.living}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b">
                          <span>Books & Supplies (per year)</span>
                          <span className="font-medium">{university.costs.books}</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span>Health Insurance (per year)</span>
                          <span className="font-medium">{university.costs.health}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="hero" className="w-full">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Admissions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Admissions
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Counselor
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get personalized guidance from our education consultants.
                  </p>
                  <Button variant="accent" className="w-full">
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityDetail;