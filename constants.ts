

import { Profile } from './types';

export const PROFILE_DATA: Profile = {
  name: "Rayhan Ahmed",
  title: "Undergrade student in Yangzhou University",
  
  // =========================================================================
  // INSTRUCTIONS FOR FILES:
  // 1. The "assets" folder has been created for you.
  // 2. Put your CV file there and rename it to "cv.pdf".
  // 3. Put your profile picture there and rename it to "profile.jpg".
  // 4. Then update the profilePicture line below to: "./assets/profile.jpg"
  // =========================================================================
  
  profilePicture: "./assets/profile.jpg", 
  cvLink: "./assets/cv.pdf", 
  
  shortBio: "Exploring xAI, wearable systems, and predictive modeling through research while building machine learning solutions, software systems, and data-driven insights for healthcare, sports, and enterprise applications.",
  
  about: "I'm an undergraduate student in Software Engineering at Yangzhou University with a strong foundation in machine learning, software development, and human-centered AI. My work spans explainable AI, sensor-based modeling, and predictive analytics, with applications in healthcare, sports, and beyond.\n\nThe projects I've led range from developing ML models for behavior prediction and cognitive monitoring to building cross-platform applications and backend systems for real-time data processing. My experience spans computer vision, NLP, time-series analysis, and full-stack development.\n\nI'm passionate about bridging the gap between research and real-world applications, designing AI-driven solutions that are both powerful and accessible. Whether it's optimizing sports performance, improving health outcomes, or streamlining complex workflows, I focus on creating practical, interpretable, and user-friendly technology.\n\nOutside of work, I enjoy cooking, boxing, and exploring new restaurants. I'm fluent in English and have conversational skills in Hindi and Urdu.",
  
  location: "Yangzhou, Jiangsu, China",
  email: "ahmedrayhan570@yahoo.com",
  phone: "+86-19505274557",
  
  socials: [
    {
      platform: "Instagram",
      url: "https://instagram.com/irayhanbd", // Replace with your URL
      icon: "Instagram"
    },
    {
      platform: "WeChat",
      url: "irayhanbd", // Replace with your ID or QR code link
      icon: "MessageCircle" 
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/irayhanbd", // Replace with your URL
      icon: "Facebook"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/irayhanbd", // Replace with your URL
      icon: "Linkedin"
    }
  ],

  education: [
    {
      degree: "BSc in Engineering",
      institution: "Yangzhou University, Yangzhou, Jiangsu, China",
      period: "Sept 2024 - Expected July 2028",
      description: ""
    },
    {
      degree: "Higher Secondary School Certificate (12th Standard)",
      institution: "Uttara High School and College, Uttara, Dhaka, Bangladesh",
      period: "2021 - 2023",
      description: ""
    }
  ],
  
  experience: [
    {
      role: "Research Assistant",
      company: "Yangzhou University",
      period: "Sept 2024 - Present",
      description: "Assisting in research focused on xAI, wearable systems, and predictive modeling. Contributing to data collection, analysis, and the development of machine learning models for healthcare and sports applications."
    },
    {
      role: "Teaching Assistant",
      company: "Yangzhou University",
      period: "Sept 2024 - Present",
      description: "Supporting faculty members in course delivery, grading assignments, and providing academic guidance to students in computer science and engineering modules."
    }
  ], 

  skills: [
    {
      category: "Programming Languages",
      items: ["HTML", "CSS", "JavaScript", "C", "C++", "Java", "XML", "PHP", "Python"]
    },
    {
      category: "Data Science & Machine Learning",
      items: ["NumPy", "Pandas", "PyTorch", "Scikit-learn", "SciPy", "Computer Vision", "Diffusion Models"]
    },
    {
      category: "Web Development",
      items: ["Django", "Bootstrap", "MySQL", "SQLite", "Scrapy", "BeautifulSoup", "Selenium", "Requests"]
    },
    {
      category: "Research & Specialized Skills",
      items: ["Project Management", "Research Methodology", "Technical Writing", "Canva", "Blogging", "SEO", "Google AdSense", "Amazon Affiliate"]
    }
  ],

  projects: [
    {
      title: "CoCHistory",
      description: "A player performance tracking website for Clash of Clans, offering tips and strategies based on gameplay analysis. The tool evaluates player performance and provides personalized suggestions to help users advance in the game.\n\nObjective: To assist players in improving their gameplay and achieving higher levels.",
      technologies: ["Django", "SQLite"],
      imageUrl: ""
    },
    {
      title: "JobCircularApp",
      description: "An employment portal that aggregates job listings primarily for Bangladesh, incorporating trend analysis to help users identify hiring patterns and in-demand skills. Users can browse, apply, and track job postings from major job platforms.\n\nObjective: To consolidate job postings and provide trend analysis for job seekers.",
      technologies: ["BeautifulSoup", "Django", "NumPy", "Pandas"],
      imageUrl: ""
    },
    {
      title: "XoxoAsk",
      description: "A Q&A website that identifies trends in user questions to support online advertising and targeted shopping insights. This platform leverages data analytics to understand the most common inquiries and consumer interests.\n\nObjective: To analyze question patterns and gain insights into user needs for optimized content targeting.",
      technologies: ["Python", "Pandas", "Django"],
      imageUrl: ""
    }
  ],

  publications: [
    {
      title: "DDCCR-Net: A Dual Dynamic Convolutional and Correlation-Based ResNet Model for Blood Pressure Prediction",
      authors: "Rayhan Ahmed, et al.",
      conferenceOrJournal: "CVPR 2024", 
      date: "2024",
      doiLink: "https://doi.org/10.1080/10400435.2023.2188907" // Add your paper link here
    },
    {
      title: "Integrating transfer learning with scalogram analysis for blood pressure estimation from PPG signals",
      authors: "Rayhan Ahmed, et al.",
      conferenceOrJournal: "conference",
      date: "2024",
      doiLink: "https://doi.org/10.1080/10400435.2023.2188907" // Add your paper link here
    }
  ],

  achievements: [
    {
      title: "Second Place, 10th National University Biomedical Engineering Innovation Design Contest",
      description: "",
      date: "China"
    },
    {
      title: "Jiangsu Provincial Outstanding Student Award ",
      description: "Awarded by Jiangsu Provincial Government",
      date: "Jiangsu, China"
    },
    {
      title: "3rd Prize, Yangzhou University Computer Design Competition",
      description: "",
      date: "Yangzhou, China"
    },
    {
      title: "3rd Prize, 43rd National Science and Technology Week",
      description: "Organized by the Bangladesh Government",
      date: "2020"
    }
  ]
};