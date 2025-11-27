import React, { useState } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  link?: string;
  variant?: 'default' | 'card';
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  subtitle, 
  date, 
  description, 
  link, 
  variant = 'default' 
}) => {
  // Only consider description present if it has non-whitespace characters
  const hasDescription = description && description.trim().length > 0;
  
  // State for random animation delay (only used for card variant)
  const [animationDelay] = useState(Math.random() * 5);

  if (variant === 'card') {
    return (
      <div 
        className="bg-secondary/50 rounded-lg p-6 mb-6 animate-float shadow-lg border border-white/5 hover:border-accent/30 transition-all duration-300"
        style={{ animationDelay: `${animationDelay}s` }}
      >
         <h3 className="text-xl font-bold text-textLight hover:text-accent transition-colors mb-2">
            {link ? (
              <a 
                href={link} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:underline decoration-accent underline-offset-4 cursor-pointer block"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          
          {subtitle && (
            <div className="text-lg text-accent font-medium mb-1">
              {subtitle}
            </div>
          )}
          
          <div className="text-sm text-textDim font-mono mb-2">
            {date}
          </div>

          {hasDescription && (
            <p className="text-textDim leading-relaxed text-base mt-2">
              {description}
            </p>
          )}

          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-accent text-sm font-mono hover:underline mt-4"
            >
              Read Paper <span className="ml-1">↗</span>
            </a>
          )}
      </div>
    );
  }

  // Default Timeline Style
  return (
    <div className="pl-8 relative border-l border-secondary/50 pb-8 last:pb-0 group">
      {/* Dot */}
      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-secondary border border-textDim rounded-full group-hover:bg-accent group-hover:border-accent transition-colors duration-300"></div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-textLight group-hover:text-accent transition-colors mb-1">
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noreferrer" 
            className="hover:underline decoration-accent underline-offset-4 cursor-pointer block"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      
      {/* Subtitle (Institution or Authors) */}
      {subtitle && (
        <div className="text-lg text-accent font-medium mb-1">
          {subtitle}
        </div>
      )}
      
      {/* Date */}
      <div className={`text-sm text-textDim font-mono ${hasDescription || (link && !hasDescription) ? 'mb-4' : ''}`}>
        {date}
      </div>
      
      {/* Description */}
      {hasDescription && (
        <p className="text-textDim leading-relaxed text-base max-w-2xl">
          {description}
        </p>
      )}
      
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center text-accent text-sm font-mono hover:underline mt-2"
        >
          Read Paper <span className="ml-1">↗</span>
        </a>
      )}
    </div>
  );
};