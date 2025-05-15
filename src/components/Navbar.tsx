import React, { useState } from 'react';
import Logo from './Logo';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from './ui/sheet';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.history.pushState(null, '', `#${sectionId}`);
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: '/#projects', label: 'Projects', onClick: scrollToSection('projects') },
    { href: '/#team', label: 'Team', onClick: scrollToSection('team') },
    { href: '/#contact', label: 'Contact', onClick: scrollToSection('contact') }
  ];

  const NavLink = ({ href, label, onClick, className = '' }: { href: string; label: string; onClick?: (e: React.MouseEvent) => void; className?: string }) => (
    <a 
      href={href} 
      onClick={onClick || handleNavClick}
      className={`text-fly-muted hover:text-fly-DEFAULT transition-all duration-200 hover:translate-y-[-1px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-fly-accent after:transition-all after:duration-200 hover:after:w-full ${className}`}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-fly-ivory/95 backdrop-blur-md border-b border-fly-muted/20 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Logo className="text-fly-DEFAULT" size={28} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              className="md:hidden p-2 hover:bg-fly-accent/10 hover:text-fly-accent rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[280px] sm:w-[320px] bg-fly-ivory/95 backdrop-blur-md border-l border-fly-muted/20 p-0"
          >
            <SheetHeader className="px-6 py-4 border-b border-fly-muted/20">
              <SheetTitle className="text-fly-DEFAULT font-medium">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col divide-y divide-fly-muted/10">
              {navLinks.map((link) => (
                <div key={link.href} className="px-6 py-4">
                  <NavLink 
                    {...link} 
                    className="block text-base font-medium py-1"
                  />
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar; 