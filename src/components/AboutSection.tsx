import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-fly-ivory/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-fly-muted max-w-2xl mx-auto">
            We're a team of students who believe in building tools that make a real difference.
          </p>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-fly-muted leading-relaxed">
            We're passionate about creating AI-powered tools that solve real problems. Our goal is to build software that’s not just intelligent—but also intuitive, approachable, and genuinely useful in everyday life.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Approach</h3>
            <p className="text-fly-muted leading-relaxed">
            We blend cutting-edge technology with thoughtful design to craft tools that feel effortless to use. Every project starts by listening to real user needs and ends with a solution that makes a tangible impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 