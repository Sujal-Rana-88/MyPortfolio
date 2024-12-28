import React from 'react';
import { Code2, Target, Brain, Zap } from 'lucide-react';

export default function CodeStats() {
  const stats = [
    { icon: <Code2 className="w-6 h-6" />, label: "Problems Solved", value: "1500+" },
    { icon: <Target className="w-6 h-6" />, label: "Contest Rating", value: "2100" },
    { icon: <Zap className="w-6 h-6" />, label: "Max Streak", value: "270+ days" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg text-center group hover:bg-gray-700 transition-colors">
          <div className="inline-block p-3 bg-gray-700 rounded-full text-green-400 group-hover:bg-gray-600 transition-colors">
            {stat.icon}
          </div>
          <h4 className="text-2xl font-bold mt-3 text-white">{stat.value}</h4>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}