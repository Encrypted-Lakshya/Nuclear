import React from 'react';
import { Database, Server, Code, Cpu, Cloud, Container, Settings, Coffee, Terminal } from 'lucide-react';

const TechFloatingIcons: React.FC = () => {
  const techIcons = [
    { Icon: Code, name: 'Python', delay: '0s', position: 'top-8 left-12' },
    { Icon: Coffee, name: 'Java', delay: '0.5s', position: 'top-20 right-8' },
    { Icon: Terminal, name: 'Linux', delay: '1s', position: 'top-32 left-4' },
    { Icon: Database, name: 'MySQL', delay: '1.5s', position: 'bottom-24 right-16' },
    { Icon: Cloud, name: 'AWS', delay: '2s', position: 'bottom-8 left-20' },
    { Icon: Cloud, name: 'Azure', delay: '2.5s', position: 'top-4 right-20' },
    { Icon: Container, name: 'Docker', delay: '3s', position: 'bottom-16 right-4' },
    { Icon: Server, name: 'Kubernetes', delay: '3.5s', position: 'top-24 left-24' },
    { Icon: Settings, name: 'Jenkins', delay: '4s', position: 'bottom-32 left-8' },
  ];

  return (
    <div className="relative w-96 h-96 mx-auto">
      {techIcons.map(({ Icon, name, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float opacity-80 hover:opacity-100 transition-all duration-300 group cursor-pointer`}
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
      
      {/* Central glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#15e37f]/10 to-[#ab1bf3]/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default TechFloatingIcons;