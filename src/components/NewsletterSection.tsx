import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Simulate newsletter subscription
    toast({
      title: "Success!",
      description: "You've successfully subscribed to our newsletter.",
    });

    setEmail("");
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Sign up to our Newsletter</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Receive weekly newsletter with educational materials, popular books and much more!
              </p>
            </div>
            
            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="newsletter-email" className="text-sm font-medium">
                    Your Email *
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full sm:w-auto px-8"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;