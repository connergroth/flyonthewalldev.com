import { Mail, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10">
                <img src="/images/logo.png" alt="Fly on the Wall Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Fly on the Wall</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Quietly building loud ideas. A student-led startup creating AI-powered tools that solve real problems.
            </p>
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
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/flyonthewalldev" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  GitHub 
                </a>
              </li>
              <li>
                <a href="mailto:flyonthewalldev@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  Email
                </a>
              </li>
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
        
        <div className="text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Fly on the Wall, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 