import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-6 inset-x-0 z-50">
      <nav className="relative max-w-3xl mx-auto px-6">
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              <div className="w-8 h-8">
                <img src="/images/logo.png" alt="Fly on the Wall Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Fly on the Wall
              </span>
            </button>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#project" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                Our Work
              </a>
              <a href="#team" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                Team
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                Contact
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 animate-fade-in md:hidden">
            <div className="flex flex-col space-y-4 items-center">
              <a href="#project" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                Our Work
              </a>
              <a href="#team" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                Team
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation; 