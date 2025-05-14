import React from 'react';
import { Github, Linkedin, ArrowRight } from "lucide-react";
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-fly-DEFAULT text-white py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4 text-left">
              <div className="inline-flex items-center text-white">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="white" />
                  <path d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="#222222" />
                  <path d="M15 15C15 16.1046 13.6569 17 12 17C10.3431 17 9 16.1046 9 15C9 13.8954 10.3431 13 12 13C13.6569 13 15 13.8954 15 15Z" fill="#222222" />
                </svg>
                <span className="font-display font-bold text-white">Fly on the Wall</span>
              </div>
            </div>
            <div className="mb-6 text-left">
              <p className="text-white">© {currentYear} Fly on the Wall, LLC</p>
              <p className="text-white text-sm mt-1">Built with React, Python, and friendship</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-start md:justify-end items-start md:items-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-fly-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-fly-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://connergroth.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-fly-accent group transition-colors"
              aria-label="Conner Groth's website"
            >
              <span>connergroth.com</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
