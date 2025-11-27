import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, centered = false, className = "", children }) => {
  return (
    // scroll-mt-28 adds margin to the top when scrolled to via ID, preventing the navbar from covering content
    <section id={id} className={`py-24 scroll-mt-28 ${className}`}>
      <div className="container mx-auto px-6">
        {centered ? (
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-textLight mb-4">
              <span className="text-accent mr-2">/</span>
              {title}
            </h2>
            {subtitle && <p className="text-textDim text-lg">{subtitle}</p>}
          </div>
        ) : (
          <div className="flex items-center mb-16">
            <h2 className="text-3xl font-bold text-textLight mr-6">
              <span className="text-accent mr-2">/</span>
              {title}
            </h2>
            <div className="h-px bg-secondary flex-grow max-w-xs"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;