import React from 'react';
import { Github, Linkedin, FileText, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/Sujal-Rana-88"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/sujal-rana-82361b208/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="https://drive.google.com/file/d/1uQiMWMUYHhuXtOwCN17U8ajBxd51ic-x/view"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
      >
        <FileText className="w-6 h-6" />
      </a>
    </div>
  );
}