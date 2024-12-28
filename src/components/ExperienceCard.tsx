import React from 'react';
import { Briefcase } from 'lucide-react';

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard({ title, company, period, description }: ExperienceProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center space-x-4 mb-4">
        <Briefcase className="w-6 h-6 text-green-400 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-300">{company}</p>
          <p className="text-sm text-gray-400">{period}</p>
        </div>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}