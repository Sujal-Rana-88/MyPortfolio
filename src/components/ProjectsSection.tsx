import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Algorithm Visualizer",
    description: "Interactive visualization platform for common algorithms like Dijkstra's, DFS, and sorting algorithms.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128",
    tags: ["React", "TypeScript", "D3.js", "Algorithms"],
    githubUrl: "https://github.com",
    liveUrl: ""
  },
  {
    title: "Competitive Programming Timer",
    description: "A specialized timer app for competitive programming contests with problem tracking and statistics.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2069",
    tags: ["React", "Redux", "TypeScript", "PWA"],
    githubUrl: "https://github.com/"
  },
  {
    title: "Code Snippet Manager",
    description: "Save and organize your frequently used code snippets with syntax highlighting and tags.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/",
    liveUrl: ""
  }
];

export default function ProjectsSection() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold font-mono mb-4">
          <span className="text-green-400">&lt;</span>
          Projects
          <span className="text-green-400">/&gt;</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in algorithms,
          data structures, and full-stack development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}