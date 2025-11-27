import React, { useState } from 'react';
import { Experience } from '../types';

interface ExperienceTabsProps {
  experiences: Experience[];
}

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({ experiences }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!experiences || experiences.length === 0) return null;

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto min-h-[300px]">
      {/* Tab Buttons List */}
      {/* Mobile: Horizontal scroll, Desktop: Vertical list */}
      <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-secondary scrollbar-thin">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              px-5 py-4 text-left whitespace-nowrap font-mono text-sm transition-all duration-300 outline-none
              ${activeTab === index 
                ? 'text-accent bg-secondary/10 border-b-2 md:border-b-0 md:border-l-2 border-accent' 
                : 'text-textDim hover:text-accent hover:bg-secondary/5 border-b-2 md:border-b-0 md:border-l-2 border-transparent'}
              md:w-48
            `}
          >
            {exp.role}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="flex-1 mt-2 md:mt-0">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`transition-opacity duration-300 ${activeTab === index ? 'block opacity-100 animate-fade-in-up' : 'hidden opacity-0'}`}
          >
            <h3 className="text-2xl font-bold text-textLight mb-1">
              {exp.role}
            </h3>
            
            <p className="text-accent font-mono text-base mb-4">
              @ {exp.company}
            </p>
            
            <p className="text-textDim font-mono text-xs mb-6 tracking-wide">
              {exp.period}
            </p>
            
            <div className="text-textDim text-lg leading-relaxed max-w-2xl">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTabs;