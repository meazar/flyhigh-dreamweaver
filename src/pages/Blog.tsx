import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import bannerBg from "@/assets/banner-bg.jpg";
import studyAbroadImg from "@/assets/blog/study-abroad-tips.jpg";
import studyUkImg from "@/assets/blog/study-uk.jpg";
import studyCanadaImg from "@/assets/blog/study-canada.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Ten Reasons Why You Should Study In The UK",
      excerpt: "Discover the top benefits of pursuing higher education in the United Kingdom and why it's a popular choice among international students worldwide.",
      image: studyUkImg,
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "Study Destinations",
      featured: true
    },
    {
      id: 2,
      title: "Master's In Canada With Placement Opportunities",
      excerpt: "Learn about the best Master's programs in Canada that offer excellent placement opportunities and promising career prospects.",
      image: studyCanadaImg,
      date: "Dec 10, 2023",
      readTime: "7 min read",
      category: "Career Guidance",
      featured: false
    },
    {
      id: 3,
      title: "Complete Guide To Study Abroad Process",
      excerpt: "A comprehensive guide covering everything you need to know about studying abroad, from application to visa approval.",
      image: studyAbroadImg,
      date: "Dec 5, 2023",
      readTime: "10 min read",
      category: "Application Tips",
      featured: false
    },
    {
      id: 4,
      title: "Top Five English Language Tests Accepted By Universities Worldwide",
      excerpt: "Comprehensive overview of IELTS, TOEFL, PTE, and other English proficiency tests required for international admissions.",
      image: studyAbroadImg,
      date: "Nov 28, 2023",
      readTime: "6 min read",
      category: "Test Preparation",
      featured: false
    },
    {
      id: 5,
      title: "Ten Reasons To Study In The USA",
      excerpt: "Explore why the United States remains the top destination for international students seeking world-class education.",
      image: studyUkImg,
      date: "Nov 22, 2023",
      readTime: "8 min read",
      category: "Study Destinations",
      featured: false
    },
    {
      id: 6,
      title: "Scholarship Opportunities for International Students",
      excerpt: "Discover various scholarship programs available for international students and how to apply for them successfully.",
      image: studyCanadaImg,
      date: "Nov 15, 2023",
      readTime: "9 min read",
      category: "Financial Aid",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Study Destinations", 
    "Application Tips",
    "Career Guidance",
    "Test Preparation",
    "Financial Aid"
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
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Study Abroad Insights & Tips
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover valuable insights, tips, and student experiences to guide your study abroad journey
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === "All Posts" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="mb-12 overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-accent text-accent-foreground">
                    Featured Article
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button asChild className="w-fit">
                    <Link to={`/blog/${post.id}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
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

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;