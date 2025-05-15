import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-fly-ivory/95 backdrop-blur-md border-b border-fly-muted/20 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Logo className="text-fly-DEFAULT" size={28} />
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#projects" 
            className="text-fly-muted hover:text-fly-DEFAULT transition-all duration-200 hover:translate-y-[-1px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-fly-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Projects
          </a>
          <a 
            href="#team" 
            className="text-fly-muted hover:text-fly-DEFAULT transition-all duration-200 hover:translate-y-[-1px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-fly-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Team
          </a>
          <a 
            href="#contact"
            onClick={scrollToContact}
            className="text-fly-muted hover:text-fly-DEFAULT transition-all duration-200 hover:translate-y-[-1px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-fly-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Contact
          </a>
        </nav>
        
        <button 
          className="md:hidden hover:bg-fly-accent/10 hover:text-fly-accent"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200 group-hover:scale-110"
          >
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar; 