import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

export default function ContestHistory() {
  const contests = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: "Google Code Jam",
      achievement: "Global Finalist",
      year: "2023",
      detail: "Ranked in top 100 globally"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: "Meta Hacker Cup",
      achievement: "Round 3 Qualifier",
      year: "2023",
      detail: "Solved complex tree algorithms"
    },
    {
      icon: <Medal className="w-6 h-6 text-purple-400" />,
      title: "ICPC Regionals",
      achievement: "Gold Medalist",
      year: "2022",
      detail: "Team lead & strategist"
    }
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-xl font-bold mb-6 flex items-center">
        <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
        Contest History
      </h3>
      <div className="space-y-6">
        {contests.map((contest, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-lg">
            <div className="flex-shrink-0">{contest.icon}</div>
            <div>
              <h4 className="font-semibold text-green-400">{contest.title}</h4>
              <p className="text-white">{contest.achievement}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-gray-400">{contest.year}</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-400">{contest.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}