import React from 'react';
import { Terminal } from 'lucide-react';

export default function FeaturedCode() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Terminal className="w-6 h-6 text-green-400 mr-2" />
        Featured Solution
      </h3>
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
        <code className="text-sm font-mono text-green-400">
{`// Segment Tree Implementation
class SegTree {
    vector<int> tree;
    int n;
    
    void build(int node, int start, int end) {
        if(start == end) {
            tree[node] = arr[start];
            return;
        }
        int mid = (start + end) / 2;
        build(2*node, start, mid);
        build(2*node+1, mid+1, end);
        tree[node] = tree[2*node] + tree[2*node+1];
    }
    
    // More implementation details...
};`}
        </code>
      </pre>
    </div>
  );
}