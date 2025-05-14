import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "We'll let you know when we launch something new.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-20 px-4 mb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Want to see what we launch next?</h2>
        <p className="text-xl text-fly-muted mb-8 max-w-2xl mx-auto">
          Join our newsletter to stay in the loop with our latest projects, updates, and occasional fly puns that we just can't resist.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow text-lg py-6"
          />
          <Button 
            type="submit" 
            className="bg-fly-accent hover:bg-opacity-90 text-white text-lg py-6 px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join the Buzz'}
          </Button>
        </form>
        <p className="text-sm text-fly-muted mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
