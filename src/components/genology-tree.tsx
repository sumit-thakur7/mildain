"use client";

import type { GenologyNodeData } from "@/lib/genology-data";
import { User } from "lucide-react";

interface GenologyNodeProps {
  node: GenologyNodeData;
}

const GenologyNode = ({ node }: GenologyNodeProps) => {
  const nodeSizeClasses = {
    large: "w-24 h-24",
    medium: "w-16 h-16",
    small: "w-12 h-12",
  };
  const iconSizeClasses = {
    large: "w-12 h-12",
    medium: "w-8 h-8",
    small: "w-6 h-6",
  }

  const size = node.level === 0 ? 'large' : node.level === 1 ? 'medium' : 'small';

  return (
    <div className="flex flex-col items-center relative">
      <div className={`relative flex items-center justify-center bg-muted rounded-full ${nodeSizeClasses[size]}`}>
        <User className={`${iconSizeClasses[size]} text-muted-foreground`} />
      </div>
      {node.children && node.children.length > 0 && (
        <>
          {/* Vertical line connecting to the horizontal line */}
          <div className="absolute top-full left-1/2 w-px h-4 bg-muted-foreground" style={{ transform: 'translateX(-50%)' }}></div>
           {/* Horizontal line */}
          <div className="absolute top-[calc(100%_+_1rem)] left-1/2 w-full h-px bg-muted-foreground" style={{ 
              width: `calc(${node.children.length * 5}rem + ${node.children.length-1} * 2rem)`, 
              transform: `translateX(calc(-50% - 0rem))`, 
              left: `calc(50% - ${ (node.children.length -1) * 3.5 }rem)`
            }}></div>

          <div className="flex justify-center gap-8 pt-12 mt-1 relative">
             {/* Lines connecting children to the horizontal line */}
             {node.children.map((_, index) => (
              <div key={index} className="absolute top-0 w-px h-4 bg-muted-foreground" style={{ left: `calc(${index * 7}rem + 3.5rem)`, transform: 'translateX(-50%)' }}></div>
            ))}
            {node.children.map((child) => (
              <GenologyNode key={child.id} node={child} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};


interface GenologyTreeProps {
    data: GenologyNodeData;
}

export function GenologyTree({ data }: GenologyTreeProps) {
  return (
    <div className="flex justify-center overflow-x-auto p-4">
      <GenologyNode node={data} />
    </div>
  );
}
