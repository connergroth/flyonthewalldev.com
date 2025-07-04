import React from 'react';
import { Button } from '@/components/ui/button';
import NeuralGrid from '@/components/NeuralGrid';
import { AnimatedFly } from '@/components/AnimatedFly';
import { motion } from 'framer-motion';

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
    <div className="relative h-screen">
      {/* Neural Grid Background for Hero */}
      <div className="absolute inset-0">
        <NeuralGrid />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-10 md:pt-0 text-center">
        
        <div className="max-w-4xl mx-auto space-y-8 mt-8 md:mt-0">
          {/* Animated Fly above title */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AnimatedFly />
          </motion.div>

          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Fly on the Wall
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-60"></div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Quietly building loud ideas
            </p>
          </motion.div>

          {/* Description - Hidden on mobile */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A student-led startup building AI-powered tools that solve real problems — 
            with craft, care, and a little chaos.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
