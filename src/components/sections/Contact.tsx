import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
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
        description: "Please try again or email us directly at flyonthewalldev@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Build Something Amazing</h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Have a project in mind? Want to collaborate? Or just curious about what we're building? We'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#FF6F61]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#FF6F61]" />
                </div>
                <span className="text-slate-300">flyonthewalldev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#FF6F61]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#FF6F61]" />
                </div>
                <span className="text-slate-300">Boulder, CO</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-2">First Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="bg-slate-700/30 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#FF6F61] focus:ring-[#FF6F61]/20"
                    placeholder="Marty"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-2">Last Name</label>
                  <Input 
                    name="lastName"
                    className="bg-slate-700/30 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#FF6F61] focus:ring-[#FF6F61]/20"
                    placeholder="McFly"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="bg-slate-700/30 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#FF6F61] focus:ring-[#FF6F61]/20"
                  placeholder="marty@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="bg-slate-700/30 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#FF6F61] focus:ring-[#FF6F61]/20 min-h-[120px]"
                  placeholder="Tell us about your project or just say hello..."
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-[#FF6F61] hover:bg-[#FF5A4A] text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              <p className="text-sm text-slate-400 text-center">
                We'll never share your information with anyone.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 