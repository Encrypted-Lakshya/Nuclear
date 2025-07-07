import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] bg-clip-text text-transparent mb-2">
              Lakshya Rohra
            </h3>
            <p className="text-gray-400">
              Machine Learning & DevOps Engineer
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Building intelligent systems for tomorrow
            </p>
          </div>

          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/encrypted-lakshya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#15e37f] transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Encrypted-Lakshya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#15e37f] transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:lakshyarohra29@gmail.com"
              className="text-gray-400 hover:text-[#15e37f] transition-colors hover:scale-110 transform duration-200"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#15e37f]/25 transition-all duration-300 hover:scale-105"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center flex-wrap">
            <span className="flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-2 animate-pulse" /> by Lakshya Rohra
            </span>
            <span className="mx-2 hidden sm:inline">•</span>
            <span className="mt-2 sm:mt-0">
              © {currentYear} All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;