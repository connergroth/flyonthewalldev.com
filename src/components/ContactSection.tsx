import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xvgadrok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at team@flyonthewalldev.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 mb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in touch</h2>
        <p className="text-xl text-fly-muted mb-8 max-w-2xl mx-auto">
          Have a question or want to work with us? Drop us a message and we'll get back to you.
        </p>
        
        <form 
          action="https://formspree.io/f/YOUR_FORM_ID" 
          method="POST"
          onSubmit={handleSubmit} 
          className="max-w-md mx-auto text-left"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-fly-muted mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full py-6"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-fly-muted mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full py-6"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-fly-muted mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="w-full min-h-[150px] py-3 px-3 text-base md:text-sm"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-fly-accent hover:bg-opacity-90 text-white text-lg py-6 mt-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
        <p className="text-sm text-fly-muted mt-4">
          We'll never share your information with anyone.
        </p>
      </div>
    </section>
  );
};

export default ContactSection; 