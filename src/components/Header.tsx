import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo in top-left corner with left-to-right rotation animation */}
          <div className="flex items-center">
            <div className="logo-triangle-glow w-20 h-20 flex items-center justify-center relative">
              <img id="logo" src="/Logo.png" alt="Logo" className="w-20 h-20 object-contain logo-glow" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#15e37f] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#15e37f] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-[#15e37f] transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-[#15e37f] transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-[#15e37f] transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#15e37f] transition-colors">
              Contact
            </button>
            <a
              href="https://drive.google.com/file/d/1xWJZyxvJuI5LHD6UvL9DqwtaupEmI4H9/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#15e37f] px-8 py-2 rounded-full font-semibold hover:bg-[#15e37f] hover:text-black transition-all duration-300 hover:scale-105 transform flex items-center"
            >
              <Download size={16} />
              <span className="ml-2">Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-[#15e37f] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-[#15e37f] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-[#15e37f] transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-[#15e37f] transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-left hover:text-[#15e37f] transition-colors">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-[#15e37f] transition-colors">
                Contact
              </button>
              <a
                href="https://drive.google.com/file/d/1xWJZyxvJuI5LHD6UvL9DqwtaupEmI4H9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#15e37f] px-8 py-4 rounded-full font-semibold hover:bg-[#15e37f] hover:text-black transition-all duration-300 hover:scale-105 transform flex items-center"
              >
                <Download size={16} />
                <span className="ml-2">Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;