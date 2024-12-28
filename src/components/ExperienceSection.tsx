import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer",
      company: "IBACAC",
      period: "Jun 2024 - Present",
      description: "Enhanced user experience by designing a dynamic shopping cart with lazy loading, developing a real-time order tracking system, and optimizing customer management, resulting in a 25% increase in transactions and a 20% boost in search performance."
    },
    {
      title: "Software Developer Intern",
      company: "IBACAC",
      period: "Jan 2024 - Jun 2024",
      description: "Improved application performance by implementing a real-time wallet system, resolving critical bugs, and developing a high-performance search feature, resulting in reduced crash rates and faster search times."
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold font-mono mb-8">
        <span className="text-green-400">&lt;</span>
        Experience
        <span className="text-green-400">/&gt;</span>
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}