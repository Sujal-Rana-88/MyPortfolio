import React from 'react';
import { Code2, Database, Globe, Terminal, Cpu, GitBranch } from 'lucide-react';
import SkillCard from './SkillCard';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      Icon: Code2,
      iconColor: "text-blue-400",
      skills: ["C++", "Dart", "JavaScript/TypeScript", "Java", "Python"]
    },
    {
      title: "Databases",
      Icon: Database,
      iconColor: "text-green-400",
      skills: ["MongoDB", "Firebase", "MySQL"]
    },
    {
      title: "Web Technologies",
      Icon: Globe,
      iconColor: "text-purple-400",
      skills: ["React", "Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Developer Tools",
      Icon: Terminal,
      iconColor: "text-yellow-400",
      skills: ["Android Studio", "Postman", "Github", "VS Code"]
    },
    {
      title: "System Design",
      Icon: Cpu,
      iconColor: "text-red-400",
      skills: ["Distributed Systems", "System Architecture", "Scalability", "Performance"]
    },
    {
      title: "Version Control",
      Icon: GitBranch,
      iconColor: "text-orange-400",
      skills: ["Git Flow", "Code Review", "CI/CD", "Branching Strategies"]
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold font-mono mb-8">
        <span className="text-green-400">&lt;</span>
        Skills
        <span className="text-green-400">/&gt;</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
}