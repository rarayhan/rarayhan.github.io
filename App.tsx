import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import { TimelineItem } from './components/Timeline';
import ExperienceTabs from './components/ExperienceTabs';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { PROFILE_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main>
        {/* Home Section */}
        <Hero profilePicture={PROFILE_DATA.profilePicture} />

        {/* About Section (Bio + Education) */}
        <Section 
          id="about" 
          title="About Me" 
          centered 
          subtitle="Learn more about my background, education, and interests."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            
            {/* Left Column: Who I am */}
            <div>
              <h3 className="text-2xl font-bold text-textLight mb-6">Who I am</h3>
              <div className="text-textDim text-lg leading-relaxed space-y-4">
                {PROFILE_DATA.about.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Right Column: Education */}
            <div>
              <h3 className="text-2xl font-bold text-textLight mb-6">Education</h3>
              <div className="space-y-2">
                {PROFILE_DATA.education.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    title={edu.degree}
                    subtitle={edu.institution}
                    date={edu.period}
                    description={edu.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Professional Experiences Section */}
        <Section id="experience" title="Professional Experiences">
          {PROFILE_DATA.experience.length > 0 ? (
            <ExperienceTabs experiences={PROFILE_DATA.experience} />
          ) : (
            <p className="text-textDim italic">Experiences to be added.</p>
          )}
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROFILE_DATA.projects.length > 0 ? (
              PROFILE_DATA.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : (
              <p className="text-textDim italic col-span-full">Projects to be added.</p>
            )}
          </div>
        </Section>

        {/* Publications Section */}
        <Section id="publications" title="Publications">
          <div className="max-w-4xl">
            {PROFILE_DATA.publications.length > 0 ? (
               PROFILE_DATA.publications.map((pub, index) => (
                <TimelineItem
                  key={index}
                  title={pub.title}
                  subtitle={pub.authors} // Display authors as the subtitle
                  // Display Year • Journal Name
                  date={pub.conferenceOrJournal ? `${pub.date} • ${pub.conferenceOrJournal}` : pub.date}
                  link={pub.doiLink || pub.link} // Use doiLink if available, fallback to link
                  variant="card" // Use floating card style
                  // description prop removed to hide abstract/venue
                />
              ))
            ) : (
               <p className="text-textDim italic">Publications to be added.</p>
            )}
          </div>
        </Section>

        {/* Achievements Section */}
        <Section id="achievements" title="Achievements">
           <div className="max-w-4xl">
            {PROFILE_DATA.achievements.length > 0 ? (
              PROFILE_DATA.achievements.map((ach, index) => (
                <TimelineItem
                  key={index}
                  title={ach.title}
                  subtitle=""
                  date={ach.date}
                  description={ach.description}
                  variant="card"
                />
              ))
            ) : (
              <p className="text-textDim italic">Achievements to be added.</p>
            )}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>

      <footer className="bg-primary py-8 text-center text-textDim text-sm font-mono">
        <p>Designed & Built by {PROFILE_DATA.name || "Rayhan Ahmed"}</p>
      </footer>
    </div>
  );
};

export default App;