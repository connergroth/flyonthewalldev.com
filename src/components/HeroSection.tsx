import React from 'react';
import FlyAnimation from './FlyAnimation';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 overflow-visible">
      <div className="noise-bg absolute inset-0 z-0"></div>
      <div className="absolute inset-0 z-0">
        <FlyAnimation />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-2">
          Fly on the Wall
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-6">
          Quietly building loud ideas.
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-fly-muted leading-relaxed mb-8">
            A small studio of students building AI-powered tools that solve real problems—with craft, care, and a little chaos.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button 
            onClick={scrollToProjects} 
            className="hero-primary-button bg-[#222222] text-white hover:bg-[#333333] text-lg px-8 py-6 rounded-md font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[1px]"
            style={{ backgroundColor: '#222222', color: 'white' }}
          >
            See Our Work
          </button>
          <button 
            onClick={scrollToContact}
            className="hero-secondary-button border-2 border-[#222222] text-[#222222] hover:bg-[#222222]/10 text-lg px-8 py-6 rounded-md font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[1px] hover:border-[#222222]/80"
            style={{ borderColor: '#222222', color: '#222222' }}
          >
            Follow the Buzz
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg width="24" height="24" viewBox="0 0 24 24" className="animate-bounce opacity-60">
          <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
