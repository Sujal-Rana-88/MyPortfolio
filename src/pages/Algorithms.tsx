import React from 'react';
import { Terminal } from 'lucide-react';
import DijkstraVisualizer from '../components/visualizations/DijkstraVisualizer';

export default function Algorithms() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gray-800 rounded-full mb-6">
            <Terminal className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold font-mono mb-4">
            <span className="text-green-400">&lt;</span>
            Algorithm Visualizations
            <span className="text-green-400">/&gt;</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interactive visualizations of common algorithms used in competitive programming.
            Watch how these algorithms work step by step.
          </p>
        </div>

        <div className="space-y-12">
          <DijkstraVisualizer />
          {/* Add more visualizers here */}
        </div>
      </div>
    </div>
  );
}