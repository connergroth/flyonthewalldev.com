import { Github, ExternalLink, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/50 bg-black backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white font-semibold text-xl tracking-tight hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                Fly on the Wall, LLC
              </button>
            </div>
            <a href="mailto:hello@flyonthewalldev.com" className="text-slate-400 hover:text-white transition-colors">
              hello@flyonthewalldev.com
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
                <a href="https://pulseplan.app" className="text-slate-400 hover:text-white transition-colors">
                  PulsePlan
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