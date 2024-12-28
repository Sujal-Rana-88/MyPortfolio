import React from 'react';

export type Node = {
  id: string;
  x: number;
  y: number;
  color?: string;
  distance?: number;
};

export type Edge = {
  from: string;
  to: string;
  weight?: number;
  color?: string;
};

type GraphProps = {
  nodes: Node[];
  edges: Edge[];
  width?: number;
  height?: number;
};

export default function Graph({ nodes, edges, width = 600, height = 400 }: GraphProps) {
  return (
    <svg width={width} height={height} className="bg-gray-900 rounded-lg">
      {/* Edges */}
      {edges.map((edge) => {
        const fromNode = nodes.find((n) => n.id === edge.from);
        const toNode = nodes.find((n) => n.id === edge.to);
        if (!fromNode || !toNode) return null;

        return (
          <g key={`${edge.from}-${edge.to}`}>
            <line
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={edge.color || '#4B5563'}
              strokeWidth={2}
              className="transition-colors duration-300"
            />
            {edge.weight && (
              <text
                x={(fromNode.x + toNode.x) / 2}
                y={(fromNode.y + toNode.y) / 2}
                fill="#9CA3AF"
                className="text-sm"
                textAnchor="middle"
                dy="-5"
              >
                {edge.weight}
              </text>
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={20}
            fill={node.color || '#1F2937'}
            stroke="#374151"
            strokeWidth={2}
            className="transition-colors duration-300"
          />
          <text
            x={node.x}
            y={node.y}
            fill="#E5E7EB"
            textAnchor="middle"
            dy=".3em"
            className="text-sm font-medium"
          >
            {node.id}
          </text>
          {node.distance !== undefined && (
            <text
              x={node.x}
              y={node.y + 30}
              fill="#9CA3AF"
              textAnchor="middle"
              className="text-xs"
            >
              {node.distance === Infinity ? '∞' : node.distance}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}