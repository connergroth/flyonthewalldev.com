import { Github, ExternalLink, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/50 bg-black backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-white font-semibold text-lg tracking-tight">Fly on the Wall</span>
            </div>
            <a href="mailto:flyonthewalldev@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              flyonthewalldev@gmail.com
            </a>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/flyonthewalldev" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/flyonthewalldev" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://pulseplan.app" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  PulsePlan <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#team" className="text-slate-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-slate-400 text-sm border-t border-slate-800 pt-8">
          © {new Date().getFullYear()} Fly on the Wall, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 