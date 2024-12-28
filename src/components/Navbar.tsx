import React from 'react';
import { Code2, Home, Mail, Share2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-green-400" />
            <span className="font-mono text-xl font-bold">Sujal Rana</span>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 hover:text-green-400 transition-colors ${
                location.pathname === '/' ? 'text-green-400' : ''
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/algorithms"
              className={`flex items-center space-x-1 hover:text-green-400 transition-colors ${
                location.pathname === '/algorithms' ? 'text-green-400' : ''
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>Algorithms</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-1 hover:text-green-400 transition-colors ${
                location.pathname === '/contact' ? 'text-green-400' : ''
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}