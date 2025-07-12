import { useState } from 'react';
import { Send, TrendingUp, Building, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our monthly NCR market insights and architecture trends.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  const keywords = [
    { icon: Building, text: "NCR Real Estate" },
    { icon: BarChart3, text: "Project Feasibility" },
    { icon: TrendingUp, text: "Market Trends" },
    { icon: Building, text: "Sustainable Design" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-accent to-accent-dark text-accent-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Stay Ahead in NCR Real Estate
            </h2>
            <p className="text-xl text-accent-foreground/90 mb-8 leading-relaxed">
              Get monthly insights on architecture trends, market analysis, and development 
              opportunities in the National Capital Region straight to your inbox.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60 focus:border-accent-foreground"
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="h-12 px-8 bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-medium"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-accent/30 border-t-accent rounded-full animate-spin mr-2" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-accent-foreground/70">
              Join 500+ industry professionals. Unsubscribe anytime.
            </p>
          </div>

          {/* Rotating Keywords */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold mb-4">What You'll Get:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keywords.map((keyword, index) => (
                <div
                  key={keyword.text}
                  className="flex items-center space-x-3 p-4 bg-accent-foreground/10 rounded-lg backdrop-blur-sm hover:bg-accent-foreground/20 transition-colors"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="w-10 h-10 bg-accent-foreground/20 rounded-lg flex items-center justify-center">
                    <keyword.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="font-medium">{keyword.text}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                <span>Monthly market analysis and trends</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                <span>Exclusive project insights and case studies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                <span>Early access to new service offerings</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                <span>Invitations to industry events and webinars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;