import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import Graph, { Node, Edge } from './Graph';

const INITIAL_NODES: Node[] = [
  { id: 'A', x: 100, y: 100 },
  { id: 'B', x: 250, y: 50 },
  { id: 'C', x: 400, y: 100 },
  { id: 'D', x: 100, y: 250 },
  { id: 'E', x: 250, y: 300 },
  { id: 'F', x: 400, y: 250 },
];

const INITIAL_EDGES: Edge[] = [
  { from: 'A', to: 'B', weight: 4 },
  { from: 'A', to: 'D', weight: 2 },
  { from: 'B', to: 'C', weight: 3 },
  { from: 'B', to: 'E', weight: 1 },
  { from: 'C', to: 'F', weight: 2 },
  { from: 'D', to: 'E', weight: 3 },
  { from: 'E', to: 'F', weight: 4 },
];

export default function DijkstraVisualizer() {
  const [nodes, setNodes] = useState<Node[]>(INITIAL_NODES.map(n => ({ ...n, distance: Infinity })));
  const [edges, setEdges] = useState<Edge[]>(INITIAL_EDGES);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [visited, setVisited] = useState<Set<string>>(new Set());

  const resetVisualization = () => {
    setNodes(INITIAL_NODES.map(n => ({ ...n, distance: Infinity, color: undefined })));
    setEdges(INITIAL_EDGES.map(e => ({ ...e, color: undefined })));
    setVisited(new Set());
    setCurrentStep(0);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep((step) => {
        if (step >= nodes.length) {
          setIsPlaying(false);
          return step;
        }
        return step + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, nodes.length]);

  useEffect(() => {
    if (currentStep === 0) {
      setNodes(nodes.map(n => 
        n.id === 'A' ? { ...n, distance: 0, color: '#10B981' } : { ...n, distance: Infinity }
      ));
      return;
    }

    const dijkstraStep = () => {
      const unvisited = nodes.filter(n => !visited.has(n.id));
      if (unvisited.length === 0) return;

      const current = unvisited.reduce((min, node) => 
        (node.distance || Infinity) < (min.distance || Infinity) ? node : min
      );

      const newVisited = new Set(visited);
      newVisited.add(current.id);

      const adjacentEdges = edges.filter(e => e.from === current.id || e.to === current.id);
      
      setNodes(nodes.map(node => {
        if (visited.has(node.id)) return node;
        
        const edge = adjacentEdges.find(e => 
          (e.from === current.id && e.to === node.id) ||
          (e.to === current.id && e.from === node.id)
        );

        if (!edge) return node;

        const newDistance = (current.distance || 0) + (edge.weight || 0);
        if (newDistance < (node.distance || Infinity)) {
          return {
            ...node,
            distance: newDistance,
            color: '#10B981'
          };
        }
        return node;
      }));

      setEdges(edges.map(edge => {
        if (edge.from === current.id || edge.to === current.id) {
          return { ...edge, color: '#10B981' };
        }
        return edge;
      }));

      setVisited(newVisited);
    };

    dijkstraStep();
  }, [currentStep]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Dijkstra's Algorithm</h3>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-green-400" />
            ) : (
              <Play className="w-5 h-5 text-green-400" />
            )}
          </button>
          <button
            onClick={resetVisualization}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-green-400" />
          </button>
        </div>
      </div>
      <Graph nodes={nodes} edges={edges} />
      <div className="mt-4 text-gray-300 text-sm">
        <p>Finding shortest paths from node A to all other nodes</p>
        <p className="mt-2">
          Visited nodes: {Array.from(visited).join(', ')}
        </p>
      </div>
    </div>
  );
}