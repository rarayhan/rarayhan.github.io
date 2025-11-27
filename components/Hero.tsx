import React, { useState } from 'react';
import { User, ChevronDown } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

interface HeroProps {
  profilePicture: string;
}

const Hero: React.FC<HeroProps> = ({ profilePicture }) => {
  const [imageError, setImageError] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 scroll-mt-20 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 text-left animate-fade-in-up delay-100">
            
            <p className="text-accent font-mono text-base mb-3">
              Hi, I am
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-textLight mb-2 tracking-tight leading-none">
              {PROFILE_DATA.name}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-textDim mb-4 leading-tight">
              {PROFILE_DATA.title}
            </h2>
            
            <p className="max-w-xl text-textDim text-lg leading-relaxed mb-8">
              {PROFILE_DATA.shortBio}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full sm:w-auto px-8 py-4 border border-accent bg-accent/10 text-accent font-mono rounded hover:bg-accent/20 transition-all duration-300 text-center cursor-pointer"
              >
                Get in touch
              </a>

              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="w-full sm:w-auto px-8 py-4 border border-textDim text-textLight font-mono rounded hover:border-accent hover:text-accent transition-all duration-300 text-center cursor-pointer"
              >
                View my work
              </a>

              <a
                href={PROFILE_DATA.cvLink}
                download="cv.pdf"
                className="w-full sm:w-auto px-8 py-4 border border-textDim text-textLight font-mono rounded hover:border-accent hover:text-accent transition-all duration-300 text-center cursor-pointer"
              >
                View my CV
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="w-full max-w-xs md:max-w-sm relative group animate-fade-in-up flex-shrink-0">
             {/* Decorative Border/Shadow */}
            <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden bg-secondary shadow-xl grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-square">
               {!imageError ? (
                <img 
                  src={profilePicture} 
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary">
                  <User size={64} className="text-accent" />
                </div>
              )}
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 mix-blend-multiply"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator - Centered & Glowing */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a 
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent text-accent shadow-[0_0_10px_#64ffda] hover:shadow-[0_0_20px_#64ffda] hover:bg-accent/10 transition-all duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;