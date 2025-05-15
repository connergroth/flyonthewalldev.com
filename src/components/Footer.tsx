import React from 'react';
import { Github, Mail } from "lucide-react";
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-fly-DEFAULT text-white py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4 text-left">
              <Logo size={28} variant="white" />
            </div>
            <div className="mb-6 text-left">
              <p className="text-white">© {currentYear} Fly on the Wall, LLC</p>
              <p className="text-white text-sm mt-1">Built with React, Python, and friendship</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Social and Contact Links */}
            <div className="flex flex-wrap gap-6 justify-start md:justify-end">
              <a 
                href="https://github.com/flyonthewalldev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-fly-accent transition-all duration-200 hover:translate-y-[-1px] group"
                aria-label="GitHub"
              >
                <Github size={20} className="transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-fly-accent after:transition-all after:duration-200 group-hover:after:w-full">GitHub</span>
              </a>
              <a 
                href="mailto:flyonthewalldev@gmail.com" 
                className="flex items-center gap-2 text-white hover:text-fly-accent transition-all duration-200 hover:translate-y-[-1px] group"
                aria-label="Contact"
              >
                <Mail size={20} className="transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-fly-accent after:transition-all after:duration-200 group-hover:after:w-full">Contact</span>
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 justify-start md:justify-end text-sm">
              <a 
                href="/privacy" 
                className="text-white/80 hover:text-fly-accent transition-all duration-200 hover:translate-y-[-1px] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-fly-accent after:transition-all after:duration-200 hover:after:w-full"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-white/80 hover:text-fly-accent transition-all duration-200 hover:translate-y-[-1px] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-fly-accent after:transition-all after:duration-200 hover:after:w-full"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
