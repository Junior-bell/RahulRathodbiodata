import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Header = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', marathi: 'होम' },
    { id: 'banjara-biodata', label: 'Traditional Biodata', marathi: 'पारंपरिक बायोडाटा' },
    { id: 'about', label: 'About', marathi: 'माझ्याबद्दल' },
    { id: 'personal-details', label: 'Personal Details', marathi: 'वैयक्तिक माहिती' },
    { id: 'family', label: 'Family', marathi: 'कुटुंब' },
    { id: 'kundali', label: 'Kundali', marathi: 'कुंडली' },
    { id: 'gallery', label: 'Gallery', marathi: 'फोटो गॅलरी' },
    { id: 'contact', label: 'Contact', marathi: 'संपर्क' }
  ];

  const handleNavigation = (sectionId) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 text-devanagari">राहुल राठोड</h1>
              <p className="text-sm text-gray-600">Rahul Rathod</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-devanagari">{item.marathi}</span>
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`px-4 py-3 rounded-md text-left font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-devanagari">{item.marathi}</span>
                </button>
              ))}
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
