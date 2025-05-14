import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  funFact: string;
  avatarUrl: string;
  github?: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Conner",
    role: "Full Stack Developer",
    description: ".",
    funFact: ".",
    avatarUrl: "/images/conner.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 2,
    name: "Isaias",
    role: "Full Stack Developer",
    description: "Creates elegant systems that solve complex problems with surprising simplicity.",
    funFact: "Once optimized a database query so well it broke the monitoring tools.",
    avatarUrl: "/images/isaias.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Jake",
    role: "Legal + Product Strategy",
    description: "Translates legal jargon into human language and reshapes ideas into market opportunities.",
    funFact: "Can recite the entire script of The Social Network from memory.",
    avatarUrl: "/images/jake.jpg",
    linkedin: "https://linkedin.com"
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden border-0 shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={member.avatarUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{member.name}</CardTitle>
                <CardDescription className="text-fly-accent font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{member.description}</p>
                <p className="text-sm italic">"{member.funFact}"</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                {member.github && (
                  <a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fly-muted hover:text-fly-accent transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fly-muted hover:text-fly-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
