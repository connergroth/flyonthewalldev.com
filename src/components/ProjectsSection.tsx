import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  className: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PulsePlan",
    description: "AI schedule optimizer for students that adapts to your energy levels and work habits. Built with React, TypeScript, and OpenAI's GPT-4, PulsePlan helps you optimize your study schedule based on your natural energy patterns, class requirements, and personal preferences.",
    className: "project-card-gradient-1",
    icon: "📅"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">From ideas to impact.</h2>
          <p className="text-xl text-fly-muted max-w-3xl mx-auto">
            Smart software that handles the details, so you don’t have to.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className={`${project.className} border-0 shadow-lg transition-all duration-300 hover:-translate-y-2`}>
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="text-4xl mb-3">{project.icon}</div>
                  <CardTitle className="text-3xl mb-4">{project.title}</CardTitle>
                  <CardDescription className="text-lg text-fly-muted">
                    {project.description}
                  </CardDescription>
                  <div className="mt-6">
                    <Button variant="outline" className="border-fly-DEFAULT text-fly-DEFAULT hover:bg-fly-accent hover:text-white hover:border-fly-accent">
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fly-accent/10 to-transparent rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">{project.icon}</div>
                  </div>
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
