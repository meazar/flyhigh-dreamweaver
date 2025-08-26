import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    destination: "University of Melbourne, Australia",
    image: "👩‍🎓",
    testimonial: "Fly High made my dream of studying in Australia a reality. Their expert guidance through the visa process was exceptional, and I got accepted to my dream university!",
    course: "Master's in Computer Science"
  },
  {
    name: "Ramesh Thapa",
    destination: "University of Toronto, Canada", 
    image: "👨‍🎓",
    testimonial: "The team at Fly High provided incredible support throughout my journey. From university selection to visa approval, everything was handled professionally.",
    course: "MBA"
  },
  {
    name: "Sita Gurung",
    destination: "University of Manchester, UK",
    image: "👩‍🎓",
    testimonial: "I was confused about which country to choose, but Fly High's counselors helped me make the right decision. Now I'm successfully pursuing my Master's in the UK!",
    course: "Master's in Data Science"
  },
  {
    name: "Aman Shrestha",
    destination: "University of Sydney, Australia",
    image: "👨‍🎓",
    testimonial: "Outstanding service from start to finish. The team helped me secure a scholarship and guided me through every step of the application process.",
    course: "Master's in Engineering"
  },
  {
    name: "Pooja Adhikari",
    destination: "University of British Columbia, Canada",
    image: "👩‍🎓",
    testimonial: "Thanks to Fly High, I'm now studying at one of Canada's top universities. Their personalized approach made all the difference in my success.",
    course: "Master's in Business Administration"
  }
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Success stories from students who achieved their dreams with Fly High
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm border-l-4 border-l-accent h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                        <p className="text-sm text-accent font-medium">{testimonial.destination}</p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSlider;