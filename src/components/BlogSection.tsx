import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import studyAbroadImg from "@/assets/blog/study-abroad-tips.jpg";
import studyUkImg from "@/assets/blog/study-uk.jpg";
import studyCanadaImg from "@/assets/blog/study-canada.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Ten Reasons Why You Should Study In The UK",
      excerpt: "Discover the top benefits of pursuing higher education in the United Kingdom and why it's a popular choice among international students.",
      image: studyUkImg,
      date: "Dec 15, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Master's In Canada With Placement Opportunities",
      excerpt: "Learn about the best Master's programs in Canada that offer excellent placement opportunities and career prospects.",
      image: studyCanadaImg,
      date: "Dec 10, 2023",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Complete Guide To Study Abroad Process",
      excerpt: "A comprehensive guide covering everything you need to know about studying abroad, from application to visa approval.",
      image: studyAbroadImg,
      date: "Dec 5, 2023",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-sm text-accent font-medium mb-2">BLOG / ARTICLES</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Study abroad tips, insights <br />
              <span className="text-accent">and student experiences</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="px-6">
            <Link to="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-accent font-medium">
                  <Link to={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;