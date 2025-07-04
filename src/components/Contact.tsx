import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
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
        setFormData({ name: '', lastName: '', email: '', message: '' });
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
    <section 
      id="contact" 
      className="py-24 bg-black"
    >
      <motion.div 
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Build Something Amazing</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Have a project in mind? Want to collaborate? Or just curious about what we're building? We'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-700/30 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-gray-300">Timezone: GMT-6, Boulder/USA</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">First Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="bg-slate-700/30 border-slate-600 text-white placeholder:text-slate-400 focus:border-white focus:ring-white/20"
                    placeholder="Marty"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    className="bg-slate-700/30 border-slate-600 text-white placeholder:text-slate-400 focus:border-white focus:ring-white/20"
                    placeholder="McFly"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="bg-slate-700/30 border-slate-600 text-white placeholder:text-slate-400 focus:border-white focus:ring-white/20"
                  placeholder="marty@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="bg-slate-700/30 border-slate-600 text-white placeholder:text-slate-400 focus:border-white focus:ring-white/20 min-h-[120px]"
                  placeholder="Tell us about your project or just say hello..."
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  type="submit"
                  className="flex-1 bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                <Button asChild className="flex-1 bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <a href="mailto:flyonthewalldev@gmail.com">
                    <Send className="w-4 h-4" />
                    <span>Email Us Directly</span>
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 