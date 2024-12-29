import React from 'react';
import { Terminal } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import CodingProfiles from '../components/CodingProfiles';
import CodeMemoryGame from '../components/games/CodeMemoryGame';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gray-800 rounded-full mb-6">
            <Terminal className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-mono mb-4">
            <span className="text-green-400">&lt;</span>
            Hello World
            <span className="text-green-400">/&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Competitive Programmer | Full Stack Developer
          </p>
          <div className="prose prose-invert mx-auto mb-6 max-w-2xl">
            <p className="text-gray-300">
              Transforming complex algorithmic challenges into elegant solutions. 
              Specialized in competitive programming, system design, and building 
              high-performance applications.
            </p>
          </div>
          <SocialLinks />
        </div>

        {/* Coding Profiles */}
        <CodingProfiles />

        {/* Code Stats Section */}
        {/* <CodeStats /> */}
        <ProjectsSection />
        
        {/* Code Memory Game */}
        <div className="mb-12">
          <CodeMemoryGame />
        </div>

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />
      </div>
    </div>
  );
}