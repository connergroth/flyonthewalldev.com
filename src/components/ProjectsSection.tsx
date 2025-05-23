import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  className: string;
  image: string;
  github: string;
  site: string;
  appstore: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PulsePlan",
    description: "AI schedule optimizer for students that adapts to your energy levels and work habits. Built with React, TypeScript, Machine Learning, and OpenAI's GPT-4, PulsePlan helps you optimize your study schedule based on your natural energy patterns, class requirements, and personal preferences.",
    className: "project-card-gradient-1",
    image: "/images/pulseplan.jpg",
    github: "https://github.com/flyonthewalldev/pulseplan",
    site: "https://pulseplan.app",
    appstore: "#"
  }
];

const AppleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline-block align-text-bottom mr-2">
    <path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.06 0-.12 0-.18-.01.01-.13.02-.26.02-.39 0-1.14.93-2.07 2.07-2.07.06 0 .12 0 .18.01-.01.13-.02.26-.02.39zm2.52 4.36c-1.39-.08-2.56.8-3.23.8-.67 0-1.7-.78-2.8-.76-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.39 6.45 1.08 8.56.72 1.04 1.58 2.2 2.71 2.16 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.68.7 2.81.68 1.16-.02 1.89-1.06 2.6-2.1.82-1.2 1.16-2.36 1.18-2.42-.03-.01-2.26-.87-2.29-3.44-.02-2.16 1.76-3.18 1.84-3.23-1.01-1.48-2.57-1.65-3.13-1.68zm-3.01-2.36c.38-.46.64-1.1.57-1.74-.55.02-1.21.37-1.6.83-.35.41-.66 1.07-.54 1.7.6.05 1.19-.31 1.57-.79z" />
  </svg>
);

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">From ideas to impact.</h2>
          <p className="text-xl text-fly-muted max-w-3xl mx-auto">
            Smart software that handles the details, so you don't have to.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className={`${project.className} border-0 shadow-md hover:shadow-lg transition-shadow duration-200`}>
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-4 flex items-center gap-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-fly-muted mb-6">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-3 mt-4 flex-wrap">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-fly-DEFAULT text-fly-DEFAULT hover:bg-fly-accent hover:text-white hover:border-fly-accent flex items-center gap-2">
                        <Github size={18} className="mr-2" /> GitHub
                      </Button>
                    </a>
                    <a href={project.site} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-fly-DEFAULT text-fly-DEFAULT hover:bg-fly-accent hover:text-white hover:border-fly-accent flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10.9A15.3 15.3 0 0 1 12 22a15.3 15.3 0 0 1-4-10.9A15.3 15.3 0 0 1 12 2z" /></svg>
                        Site
                      </Button>
                    </a>
                    <a href={project.appstore} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-fly-DEFAULT text-fly-DEFAULT hover:bg-fly-accent hover:text-white hover:border-fly-accent flex items-center gap-2">
                        <AppleLogo /> App Store
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center relative">
                  <img src={project.image} alt="PulsePlan screenshot" className="rounded-lg shadow-lg max-h-72 object-cover border border-fly-muted bg-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

