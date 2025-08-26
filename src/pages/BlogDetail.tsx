import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share, 
  BookOpen, 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import studyUkImg from "@/assets/blog/study-uk.jpg";
import studyCanadaImg from "@/assets/blog/study-canada.jpg";
import studyAbroadImg from "@/assets/blog/study-abroad-tips.jpg";

const BlogDetail = () => {
  const { id } = useParams();

  // Mock blog data - in real app, fetch based on ID
  const blogPost = {
    id: 1,
    title: "Ten Reasons Why You Should Study In The UK",
    content: `
      <div class="prose max-w-none">
        <p class="lead">The United Kingdom has long been a premier destination for international students seeking world-class education. With its rich academic heritage, diverse cultural landscape, and excellent career prospects, the UK offers unparalleled opportunities for personal and professional growth.</p>
        
        <h2>1. World-Renowned Universities</h2>
        <p>The UK is home to some of the world's oldest and most prestigious universities, including Oxford, Cambridge, and Imperial College London. These institutions consistently rank among the top universities globally and offer exceptional academic programs across all disciplines.</p>
        
        <h2>2. Shorter Course Duration</h2>
        <p>One of the significant advantages of studying in the UK is the shorter duration of courses. Most undergraduate programs take three years to complete, while master's programs typically last just one year, allowing you to enter the workforce sooner.</p>
        
        <h2>3. Rich Cultural Heritage</h2>
        <p>The UK offers a unique blend of historical significance and modern innovation. From ancient castles to cutting-edge research facilities, students can immerse themselves in a culture that values both tradition and progress.</p>
        
        <h2>4. Gateway to Europe</h2>
        <p>Located strategically in Europe, the UK provides easy access to explore other European countries. This geographical advantage allows students to experience diverse cultures and expand their global perspective.</p>
        
        <h2>5. English Language Advantage</h2>
        <p>Studying in an English-speaking country provides an immersive language learning experience, helping international students improve their English proficiency while pursuing their academic goals.</p>
        
        <h2>6. Post-Study Work Opportunities</h2>
        <p>The UK offers excellent post-study work opportunities through the Graduate Route visa, allowing international students to work in the UK for two years after completing their studies.</p>
        
        <h2>7. Diverse Student Community</h2>
        <p>UK universities attract students from all over the world, creating a diverse and multicultural learning environment that enhances the overall educational experience.</p>
        
        <h2>8. Quality Assurance</h2>
        <p>The UK has rigorous quality assurance systems in place to ensure that all universities maintain high standards of education and research.</p>
        
        <h2>9. Research Opportunities</h2>
        <p>The UK is at the forefront of research and innovation, offering students numerous opportunities to participate in groundbreaking research projects.</p>
        
        <h2>10. Strong Alumni Networks</h2>
        <p>UK universities have extensive alumni networks worldwide, providing valuable connections and career opportunities for graduates.</p>
        
        <h2>Conclusion</h2>
        <p>Studying in the UK offers a transformative educational experience that combines academic excellence with cultural enrichment. If you're considering pursuing higher education abroad, the UK should definitely be at the top of your list.</p>
      </div>
    `,
    image: studyUkImg,
    date: "Dec 15, 2023",
    readTime: "5 min read",
    category: "Study Destinations",
    author: {
      name: "Sarah Johnson",
      role: "Education Counselor",
      avatar: "SJ"
    }
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Master's In Canada With Placement Opportunities",
      image: studyCanadaImg,
      date: "Dec 10, 2023",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Complete Guide To Study Abroad Process",
      image: studyAbroadImg,
      date: "Dec 5, 2023",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary">
                {blogPost.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {blogPost.author.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{blogPost.author.name}</p>
                    <p className="text-sm text-muted-foreground">{blogPost.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>Article</span>
                  </div>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <Separator className="my-12" />

            {/* Author Bio */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {blogPost.author.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {blogPost.author.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">{blogPost.author.role}</p>
                    <p className="text-muted-foreground">
                      Sarah is an experienced education counselor with over 8 years of experience helping students achieve their study abroad dreams. She specializes in UK university applications and visa processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((post) => (
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
                      <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
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
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;