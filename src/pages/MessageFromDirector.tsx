import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Quote, ArrowLeft } from "lucide-react";
import bannerBg from "@/assets/banner-bg.jpg";

const MessageFromDirector = () => {
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
            LEADERSHIP MESSAGE
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Message From Director
          </h1>
          <p className="text-xl text-primary-foreground/90">
            A personal message from our leadership team
          </p>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Director Photo */}
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                      <div className="text-6xl">👨‍💼</div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Mr. Ram Prasad Sharma</h3>
                    <p className="text-muted-foreground mb-4">Managing Director</p>
                    <Badge variant="outline">15+ Years Experience</Badge>
                  </div>

                  {/* Message Content */}
                  <div className="lg:col-span-2">
                    <Quote className="w-12 h-12 text-primary mb-6" />
                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                      <p className="text-lg leading-relaxed">
                        Welcome to Fly High International Education Consultancy. As the Managing Director, 
                        I am honored to lead a team dedicated to transforming educational dreams into reality.
                      </p>
                      
                      <p>
                        For over 15 years, we have been Nepal's most trusted education partner, helping 
                        thousands of students achieve their academic goals abroad. Our commitment goes beyond 
                        just placement - we provide comprehensive support from course selection to visa approval, 
                        ensuring every student's journey is smooth and successful.
                      </p>
                      
                      <p>
                        Our success is measured not just by the number of students we place, but by their 
                        achievements and the positive impact they create globally. With a 98% visa success 
                        rate and partnerships with over 100 universities worldwide, we continue to set 
                        new standards in international education consultancy.
                      </p>
                      
                      <p>
                        At Fly High, we believe that every student deserves access to world-class education. 
                        Our experienced counselors work tirelessly to match students with the right programs 
                        and institutions that align with their career aspirations and financial capabilities.
                      </p>
                      
                      <p className="font-medium text-foreground">
                        I invite you to join thousands of successful students who have trusted us with their 
                        educational journey. Together, let's make your dreams take flight.
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start Your Educational Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let our experienced team guide you to the right path
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to About
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessageFromDirector;