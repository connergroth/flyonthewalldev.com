import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <TeamSection />
        <NewsletterSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
