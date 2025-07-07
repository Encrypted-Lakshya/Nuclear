import React from 'react';
import { Database, Server, Code, Cpu } from 'lucide-react';

const FloatingIcons: React.FC<{ scattered?: boolean }> = ({ scattered }) => {
  const icons = scattered
    ? [
        { Icon: Code, delay: '0s', style: 'top-2 left-1/2 -translate-x-1/2' },
        { Icon: Database, delay: '1s', style: 'top-12 right-2' },
        { Icon: Server, delay: '2s', style: 'bottom-8 right-4' },
        { Icon: Cpu, delay: '3s', style: 'bottom-2 left-8' },
      ]
    : [
        { Icon: Code, delay: '0s', style: '-top-1 -left-2' },
        { Icon: Database, delay: '1s', style: '-top-2 -left-4' },
        { Icon: Server, delay: '2s', style: '-top-3 -left-1' },
        { Icon: Cpu, delay: '3s', style: '-top-2 -left-6' },
      ];

  return (
    <div className={scattered ? "absolute inset-0 w-full h-full pointer-events-none" : "absolute -top-4 -left-8 w-40 h-40 pointer-events-none"}>
      {icons.map(({ Icon, delay, style }, index) => (
        <div
          key={index}
          className={`absolute ${style} animate-float opacity-70 hover:opacity-100 transition-opacity`}
          style={{ animationDelay: delay }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#15e37f]/30 transition-all duration-300 hover:scale-110">
            <Icon size={20} className="text-white" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;