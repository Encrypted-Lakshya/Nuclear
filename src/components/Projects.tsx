import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'ConnectX',
      subtitle: 'Multi-Communication App',
      description: 'ConnectX is a powerful and beginner-friendly Streamlit-based application that allows you to communicate across multiple platforms — including Email, SMS, WhatsApp, Instagram, LinkedIn, and Voice Calls — all from one unified dashboard.',
      techStack: ['Python', 'Streamlit', 'Twilio', 'SMTP', 'APIs', 'SQLite'],
      githubUrl: 'https://github.com/Encrypted-Lakshya/ConnectX.git',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Multi-platform communication',
        'Unified dashboard interface',
        'Voice call integration',
        'Social media connectivity'
      ]
    },
    {
      title: 'Contact Manager',
      subtitle: 'Contact Management App',
      description: 'A desktop application for managing personal and business contacts, built using Python, Tkinter, and MySQL. It offers a graphical user interface to create, update, delete, and search contact information.',
      techStack: ['Python', 'Tkinter', 'MySQL', 'SQLAlchemy', 'GUI', 'CRUD'],
      githubUrl: 'https://github.com/Encrypted-Lakshya/Contact-Manager-Gui.git',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Contact CRUD operations',
        'Advanced search functionality',
        'Database integration',
        'User-friendly GUI'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my latest work in machine learning, web development, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#15e37f]/10 border border-white/10 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <ExternalLink size={20} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#15e37f] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#ab1bf3] font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-[#15e37f]/20 to-[#ab1bf3]/20 rounded-full text-sm text-[#15e37f] border border-[#15e37f]/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Click to view details</span>
                  <div className="w-2 h-2 bg-[#15e37f] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6">
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
              <div className="relative">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] bg-clip-text text-transparent">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-[#ab1bf3] font-medium mb-6 text-lg">
                  {projects[selectedProject].subtitle}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {projects[selectedProject].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {projects[selectedProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-[#15e37f] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-white">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[selectedProject].techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-[#15e37f]/20 to-[#ab1bf3]/20 rounded-full text-[#15e37f] border border-[#15e37f]/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={projects[selectedProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#15e37f]/25 transition-all duration-300 hover:scale-105"
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;