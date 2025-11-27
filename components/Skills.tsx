import React from 'react';
import { PROFILE_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROFILE_DATA.skills.map((skillGroup) => (
        <div key={skillGroup.category} className="bg-secondary/50 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-bold text-textLight mb-4 border-b border-gray-700 pb-2">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 bg-primary text-accent text-sm rounded-md border border-accent/20 hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;