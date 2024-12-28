import React from 'react';
import { LucideIcon } from 'lucide-react';

type SkillProps = {
  title: string;
  Icon: LucideIcon;
  skills: string[];
  iconColor: string;
};

export default function SkillCard({ title, Icon, skills, iconColor }: SkillProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center space-x-4 mb-4">
        <Icon className={`w-8 h-8 ${iconColor}`} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2 text-gray-300">
        {skills.map((skill, index) => (
          <li key={index}>• {skill}</li>
        ))}
      </ul>
    </div>
  );
}