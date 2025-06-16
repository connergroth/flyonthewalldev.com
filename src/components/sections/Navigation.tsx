import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 py-4 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10">
            <img src="/images/logo.png" alt="Fly on the Wall Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Fly on the Wall
          </span>
        </div>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-slate-300" />
          ) : (
            <Menu className="w-6 h-6 text-slate-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 px-6 py-4 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4">
              <a href="#project" className="text-slate-300 hover:text-white transition-colors">
                Our Work
              </a>
              <a href="#team" className="text-slate-300 hover:text-white transition-colors">
                Team
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 