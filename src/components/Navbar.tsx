import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fly-ivory/80 backdrop-blur-sm border-b border-fly-muted/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="text-fly-DEFAULT" size={28} />
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-fly-muted hover:text-fly-DEFAULT transition-colors">Projects</a>
          <a href="#team" className="text-fly-muted hover:text-fly-DEFAULT transition-colors">Team</a>
          <Button variant="outline" className="border-fly-muted text-fly-muted hover:bg-fly-accent hover:text-white hover:border-fly-accent">
            Get in Touch
          </Button>
        </nav>
        
        <Button variant="ghost" className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar; 