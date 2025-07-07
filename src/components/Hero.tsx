import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Database, Server, Cpu } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const floatingIconPositions = [
  { style: 'top-0 left-0' },
  { style: 'top-16 left-40' },
  { style: 'top-40 left-64' },
  { style: 'top-32 left-80' },
];

const floatingIcons = [
  { Icon: Code, name: 'Code', delay: '0s' },
  { Icon: Database, name: 'Database', delay: '1s' },
  { Icon: Server, name: 'Server', delay: '2s' },
  { Icon: Cpu, name: 'Cpu', delay: '3s' },
];

const Hero: React.FC = () => {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const workAreas = [
    'Data Analysis',
    'Data Visualization', 
    'CI/CD Pipelining',
    'Database Integration',
    'AI Integration'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkIndex((prev) => (prev + 1) % workAreas.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [workAreas.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen w-screen h-screen overflow-hidden px-0 py-0">
      <div className="container mx-auto flex flex-col justify-center items-center h-full w-full p-0 m-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-full m-0">
          
          {/* Left Pane - Information */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 w-full max-w-xl mx-auto h-full flex flex-col justify-center">
            <div>
              <p className="text-2xl text-gray-300 mb-4">Hi I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] bg-clip-text text-transparent animate-fade-in">
                Lakshya Rohra
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Machine Learning and DevOps enthusiast passionate about building intelligent systems and streamlined workflows
              </p>
            </div>

            {/* Animated Work Areas with Fade Transition */}
            <div className="h-20 mb-8">
              <p className="text-lg text-gray-400 mb-3">Specializing in:</p>
              <div className="relative h-12 overflow-hidden">
                {workAreas.map((work, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center text-2xl md:text-3xl font-semibold text-[#15e37f] transition-all duration-1000 transform ${
                      index === currentWorkIndex 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {work}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href="https://www.linkedin.com/in/encrypted-lakshya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#15e37f]/20"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Encrypted-Lakshya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#15e37f]/20"
              >
                <Github size={20} />
                <span>Github</span>
              </a>
              <a
                href="mailto:lakshyarohra29@gmail.com"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#15e37f]/20"
              >
                <Mail size={20} />
                <span>Mail</span>
              </a>
            </div>

            {/* CTA Buttons - Both with same style */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-[#15e37f] px-8 py-4 rounded-full font-semibold hover:bg-[#15e37f] hover:text-black transition-all duration-300 hover:scale-105 transform"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="border-2 border-[#15e37f] px-8 py-4 rounded-full font-semibold hover:bg-[#15e37f] hover:text-black transition-all duration-300 hover:scale-105 transform"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Pane - Profile Image only, no logo or floating icons */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full h-full items-center">
            <div className="relative flex justify-center items-center w-full h-full">
              <div className="relative w-[28.5rem] h-[28.5rem] mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] p-1 glow-strong"></div>
                <div className="absolute inset-0 rounded-full bg-gray-900 flex items-center justify-center shadow-inner overflow-hidden z-10">
                  <img src="/Profile_2.png" alt="Profile" className="w-full h-full object-cover rounded-full z-20" />
                </div>
                {/* Floating Tech Icons - Scattered around top-left quadrant */}
                {[
                  { Icon: Code, name: 'Code', delay: '0s', style: 'top-2 left-4' },
                  { Icon: Database, name: 'Database', delay: '1s', style: 'top-10 left-16' },
                  { Icon: Server, name: 'Server', delay: '2s', style: 'top-20 left-8' },
                  { Icon: Cpu, name: 'Cpu', delay: '3s', style: 'top-14 left-24' },
                ].map(({ Icon, name, delay, style }, index) => (
                  <div
                    key={index}
                    className={`absolute ${style} z-30 animate-float opacity-80 hover:opacity-100 transition-all duration-700 group cursor-pointer`}
                    style={{ animationDelay: delay }}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#15e37f]/30 transition-all duration-300 hover:scale-110">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')}>
            <ChevronDown size={32} className="text-[#15e37f] hover:text-[#ab1bf3] transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;