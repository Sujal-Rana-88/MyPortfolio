import React from 'react';
import { Code2, Binary, BookOpen } from 'lucide-react';

type ProfileLink = {
  name: string;
  icon: React.ReactNode;
  username: string;
  rating?: string;
  solved?: string;
  link: string;
};

export default function CodingProfiles() {
  const profiles: ProfileLink[] = [
    {
      name: "LeetCode",
      icon: <Code2 className="w-6 h-6" />,
      username: "sujalranaop",
      rating: "1500+",
      solved: "600",
      link: "https://leetcode.com/u/sujalranaop/"
    },
    {
      name: "Codeforces",
      icon: <Binary className="w-6 h-6" />,
      username: "Sujal_Rana",
      solved: "100+",
      rating: "1100+",
      link: "https://codeforces.com/profile/Sujal_Rana"
    },
    {
      name: "GeeksforGeeks",
      icon: <BookOpen className="w-6 h-6" />,
      username: "sujalrana",
      solved: "500+",
      rating: "1700+",
      link: "https://www.geeksforgeeks.org/user/sujalrana"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      {profiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-700 rounded-full text-green-400 group-hover:bg-gray-600">
              {profile.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{profile.name}</h3>
              <p className="text-gray-400">@{profile.username}</p>
              <div className="mt-2 space-y-1">
                {profile.rating && (
                  <p className="text-sm text-green-400">Rating: {profile.rating}</p>
                )}
                {profile.solved && (
                  <p className="text-sm text-green-400">Problems: {profile.solved}</p>
                )}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}