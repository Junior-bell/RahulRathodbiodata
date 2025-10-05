import React from 'react';
import { Heart, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">र</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-devanagari">राहुल दादराव राठोड </h3>
                <p className="text-gray-400 text-sm">वैवाहिक माहिती</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              एक समतोल आणि आनंदी वैवाहिक जीवनाचा विचार करणारा व्यक्ती. 
              कुटुंबाच्या मूल्यांची जाण असलेल्या जीवनसाथीची शोध.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-devanagari">External Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  <span className="text-devanagari">माझ्याबद्दल</span>
                </a>
              </li>
              <li>
                <a href="#personal-details" className="text-gray-400 hover:text-white transition-colors text-sm">
                  <span className="text-devanagari">वैयक्तिक माहिती</span>
                </a>
              </li>
              <li>
                <a href="#family" className="text-gray-400 hover:text-white transition-colors text-sm">
                  <span className="text-devanagari">कुटुंब</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  <span className="text-devanagari">संपर्क</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-devanagari">संपर्क माहिती</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-devanagari">फोन:</span> +91 77759 65961
              </p>
              <p className="text-gray-400">
                <span className="text-devanagari">ईमेल:</span> rahulrathod11122@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-devanagari">ठिकाण:</span> पुणे, महाराष्ट्र
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} राहुल दादराव राठोड - वैवाहिक माहिती</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-gray-400">
                <span className="text-devanagari">Created by Shivam wagh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
