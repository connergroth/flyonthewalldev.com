import React from 'react';
import { Button } from '@/components/ui/button';
import NeuralGrid from '@/components/NeuralGrid';
import { AnimatedFly } from '@/components/AnimatedFly';

const HeroContent: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Neural Grid Background for Hero */}
      <NeuralGrid />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Animated Fly above title */}
          <div className="animate-fade-in flex justify-center">
            <AnimatedFly />
          </div>

          {/* Logo/Brand */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Fly on the Wall
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-60"></div>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Quietly building loud ideas
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A student-led startup building AI-powered tools that solve real problems — 
            with craft, care, and a little chaos.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center pt-8" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-3 text-lg font-medium hover-scale"
              onClick={() => scrollToSection('project')}
            >
              See our Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-800 text-white bg-gray-900/50 hover:bg-gray-800 hover:text-white transition-all duration-300 px-8 py-3 text-lg font-medium hover-scale"
              onClick={() => scrollToSection('contact')}
            >
              Follow the Buzz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
