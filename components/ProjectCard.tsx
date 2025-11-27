import React, { useState } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Use state to keep the random delay constant across re-renders
  const [animationDelay] = useState(Math.random() * 5);
  const projectLink = project.liveUrl || project.githubUrl;

  return (
    <div 
      className="bg-secondary/50 rounded-lg p-8 animate-float shadow-xl group hover:shadow-2xl flex flex-col h-full border border-white/5"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="flex justify-between items-center mb-6">
        <Folder className="text-accent" size={40} />
        <div className="flex space-x-4">
           {project.githubUrl && (
             <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-textLight hover:text-accent transition-colors">
               <Github size={20} />
             </a>
           )}
           {project.liveUrl && (
             <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-textLight hover:text-accent transition-colors">
               <ExternalLink size={20} />
             </a>
           )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-textLight mb-4 group-hover:text-accent transition-colors">
        {projectLink ? (
          <a href={projectLink} target="_blank" rel="noreferrer" className="hover:underline decoration-accent underline-offset-4">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      
      <div className="text-textDim text-base mb-6 leading-relaxed whitespace-pre-line">
        {project.description}
      </div>
      
      <ul className="flex flex-wrap gap-3 mt-auto">
        {project.technologies.map((tech) => (
          <li key={tech} className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;