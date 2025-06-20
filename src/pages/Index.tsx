import React from 'react';
import Navigation from '@/components/Navigation';
import HeroContent from '@/components/HeroContent';
import CompanySection from '@/components/CompanySection';
import ProjectShowcase from '@/components/ProjectShowcase';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToHashElement from '@/components/ScrollToHashElement';

const Index = () => {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Hash-based scroll handling */}
      <ScrollToHashElement />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Content */}
      <HeroContent />
      
      {/* Company Section */}
      <CompanySection />
      
      {/* Project Showcase Section */}
      <ProjectShowcase />
      
      {/* Meet the Team Section */}
      <Team />
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
