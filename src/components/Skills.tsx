import React from 'react';
import { Code, Coffee, Wrench, GitBranch, Container, Settings, Terminal, FileText } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', percentage: 80, category: 'Programming', icon: Code },
    { name: 'C, C++', percentage: 40, category: 'Programming', icon: Code },
    { name: 'Java', percentage: 60, category: 'Programming', icon: Coffee },
    { name: 'DevOps', percentage: 65, category: 'Operations', icon: Wrench },
    { name: 'Kubernetes', percentage: 60, category: 'Operations', icon: Container },
    { name: 'Jenkins', percentage: 70, category: 'Operations', icon: Settings },
    { name: 'Git', percentage: 80, category: 'Tools', icon: GitBranch },
    { name: 'Shell Scripting', percentage: 75, category: 'Tools', icon: Terminal }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My expertise across various technologies and frameworks
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#15e37f] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-400">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-[#15e37f] font-bold text-lg">
                    {skill.percentage}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;