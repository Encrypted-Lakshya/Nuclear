import React from 'react';
import { BarChart, Eye, GitBranch, Database, Brain } from 'lucide-react';
import TechFloatingIcons from './TechFloatingIcons';

const About: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Data Analysis',
      description: 'Transforming raw data into actionable insights using statistical methods and machine learning algorithms.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Jupyter']
    },
    {
      icon: Eye,
      title: 'Data Visualization',
      description: 'Creating compelling visual stories from complex datasets to drive informed business decisions.',
      techStack: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau']
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelining',
      description: 'Building automated deployment pipelines for seamless software delivery and continuous integration.',
      techStack: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes']
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Designing and implementing robust database solutions for scalable and efficient applications.',
      techStack: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Incorporating artificial intelligence capabilities into applications for enhanced functionality and automation.',
      techStack: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face']
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        {/* About Me Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20 max-w-7xl mx-auto">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Who I Am
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Lakshya Rohra, a tech enthusiast with a keen interest in Machine Learning, MLOps, and AIOps. I enjoy building scalable, intelligent systems by combining data analytics, automation, and cloud-native tools.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience in Python, Power BI, SQL, TensorFlow, Docker, Kubernetes, and Jenkins, I specialize in bridging the gap between development and deployment.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's creating insightful dashboards or implementing CI/CD pipelines, I'm driven by the challenge of turning raw data and complex models into real-world, automated solutions.
            </p>
          </div>
          
          <div className="lg:col-span-2 flex items-center justify-center">
            <TechFloatingIcons />
          </div>
        </div>

        {/* What I Do Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] bg-clip-text text-transparent">
            What I Do
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in creating intelligent solutions that bridge the gap between data science and production systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#15e37f]/10 border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#15e37f] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-[#15e37f]/20 to-[#ab1bf3]/20 rounded-full text-sm text-[#15e37f] border border-[#15e37f]/30 hover:bg-[#15e37f]/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;