import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Contact: React.FC = () => {
  const iconMap: { [key: string]: React.ElementType } = {
    Instagram,
    Facebook,
    Linkedin,
    MessageCircle
  };

  return (
    <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-textLight mb-6">Get In Touch</h3>
      <p className="text-textDim mb-8 text-lg">
        I am currently looking for new opportunities and research collaborations. Whether you have a question or just want to discuss a project, feel free to reach out!
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 flex-wrap">
        <div className="flex items-center text-textDim group">
          <Mail className="text-accent mr-3 group-hover:scale-110 transition-transform" size={20} />
          <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-accent transition-colors">
            {PROFILE_DATA.email}
          </a>
        </div>
        
        {PROFILE_DATA.phone && (
          <div className="flex items-center text-textDim group">
            <Phone className="text-accent mr-3 group-hover:scale-110 transition-transform" size={20} />
            <a href={`tel:${PROFILE_DATA.phone}`} className="hover:text-accent transition-colors">
              {PROFILE_DATA.phone}
            </a>
          </div>
        )}

        <div className="flex items-center text-textDim group">
          <MapPin className="text-accent mr-3 group-hover:scale-110 transition-transform" size={20} />
          <span>{PROFILE_DATA.location}</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-8">
        <a 
          href={`mailto:${PROFILE_DATA.email}`}
          className="px-8 py-4 bg-transparent border border-accent text-accent rounded font-bold hover:bg-accent/10 transition-all inline-block"
        >
          Say Hello
        </a>

        {PROFILE_DATA.socials.length > 0 && (
          <div className="flex items-center justify-center gap-6 mt-4">
            {PROFILE_DATA.socials.map((social) => {
              const Icon = iconMap[social.icon] || ExternalLink;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-textDim hover:text-accent transition-colors duration-300 transform hover:-translate-y-1"
                  aria-label={social.platform}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;