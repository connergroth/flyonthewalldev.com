import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Globe } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  github?: string;
  linkedin: string;
  portfolio?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Conner",
    role: "Full-Stack Developer",
    description: "Computer Science student @ CU Boulder, Synthetic Biology Software Research Assistant, and SWE Team Lead.",
    github: "https://github.com/connergroth",
    linkedin: "https://www.linkedin.com/in/connergroth",
    portfolio: "https://connergroth.com"
  },
  {
    id: 2,
    name: "Isaias",
    role: "Full-Stack Developer",
    description: "Computer Science student @ CU Boulder and Machine Learning Research Assistant.",
    github: "https://github.com/ip-04",
    linkedin: "https://www.linkedin.com/in/isaias-perez21/",
    portfolio: "https://isaias-perez-portfolio.onrender.com/"
  },
  {
    id: 3,
    name: "Jake",
    role: "Legal + Product Strategy",
    description: "Pre-Law student @ Liberty, Legal Intern.",
    linkedin: "https://www.linkedin.com/in/jake-pechart-2516732b9/"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">3 roommates. 1 mission.</h2>
          <p className="text-xl text-fly-muted max-w-2xl mx-auto">
            We are passionate about creating real tools that solve real problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Team Photo */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/team.jpg" 
                alt="Fly on the Wall team"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Optional decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-fly-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-fly-accent/10 rounded-full blur-2xl"></div>
          </div>

          {/* Team Members Info */}
          <div className="space-y-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-fly-accent font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-fly-muted">{member.description}</p>
                  <div className="flex gap-4 pt-2">
                    {member.github && (
                      <a 
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fly-muted hover:text-fly-accent transition-all duration-200 hover:scale-110"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fly-muted hover:text-fly-accent transition-all duration-200 hover:scale-110"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                    {member.portfolio && (
                      <a 
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fly-muted hover:text-fly-accent transition-all duration-200 hover:scale-110"
                        aria-label={`${member.name}'s Portfolio`}
                      >
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
