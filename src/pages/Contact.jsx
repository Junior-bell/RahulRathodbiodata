import React, { useState } from 'react';
import { Phone, Mail, MapPin, User, Send, MessageCircle, X } from 'lucide-react';
import { biodata } from '../data/biodata';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // State for phone popup
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  // Phone button click handler
  const handlePhoneClick = () => {
    setShowPhonePopup(true);
  };

  // Close popup handler
  const closePhonePopup = () => {
    setShowPhonePopup(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('संदेश पाठवला गेला! आपले आभार.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <section className="container-max section-padding py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-devanagari">संपर्क</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-devanagari text-gray-800 mb-2">
                माझ्याशी संपर्क साधा
              </h2>
              <p className="text-devanagari text-gray-600">
                कोणत्याही प्रश्नासाठी किंवा अधिक माहितीसाठी
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Personal Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-6">
                  व्यक्तिगत संपर्क
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-devanagari text-gray-800">
                        {biodata.contact.personal.name}
                      </p>
                      <p className="text-sm text-devanagari text-gray-600">
                        व्यक्तिगत संपर्क
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-devanagari text-gray-800">
                        {biodata.contact.personal.phone}
                      </p>
                      <p className="text-sm text-devanagari text-gray-600">
                        मोबाइल नंबर
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {biodata.contact.personal.email}
                      </p>
                      <p className="text-sm text-devanagari text-gray-600">
                        ईमेल पत्ता
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-devanagari text-gray-800">
                        {biodata.contact.personal.address}
                      </p>
                      <p className="text-sm text-devanagari text-gray-600">
                        पत्ता
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-6">
                  कुटुंबाचा संपर्क
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-devanagari text-gray-800">
                        {biodata.contact.family.father.name}
                      </p>
                      <p className="text-devanagari text-gray-600">
                        {biodata.contact.family.father.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-devanagari text-gray-800">
                        {biodata.contact.family.mother.name}
                      </p>
                      <p className="text-devanagari text-gray-600">
                        {biodata.contact.family.mother.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-6">
                संदेश पाठवा
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-devanagari text-gray-700 mb-2">
                    नाव
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="आपले नाव प्रविष्ट करा"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-devanagari text-gray-700 mb-2">
                    ईमेल
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="आपला ईमेल प्रविष्ट करा"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-devanagari text-gray-700 mb-2">
                    फोन नंबर
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="आपला फोन नंबर प्रविष्ट करा"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-devanagari text-gray-700 mb-2">
                    संदेश
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="आपला संदेश प्रविष्ट करा"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span className="text-devanagari">संदेश पाठवा</span>
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold text-devanagari mb-4">
                आजच संपर्क साधा!
              </h3>
              <p className="text-lg text-devanagari mb-6 opacity-90">
                वैवाहिक संबंधांसाठी किंवा कोणत्याही प्रश्नासाठी 
                आम्ही नेहमी उपलब्ध आहोत.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Updated Phone Button with Popup */}
                <button 
                  onClick={handlePhoneClick}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-devanagari">फोन करा</span>
                </button>
                
                <a 
                  href={`https://wa.me/917775965961`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-devanagari">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Popup Modal */}
        {showPhonePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 m-4 max-w-sm w-full shadow-2xl">
              <div className="text-center">
                <button 
                  onClick={closePhonePopup}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-4">
                  संपर्क करा
                </h3>
                
                <div className="mb-8">
                  <p className="text-devanagari text-gray-600 mb-3">कॉल करण्यासाठी:</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-2xl font-bold text-blue-600">
                      +91 7759 65961
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-center">
                  <a
                    href="tel:+917759665961"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-devanagari">कॉल करा</span>
                  </a>
                  <button
                    onClick={closePhonePopup}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <span className="text-devanagari">बंद करा</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
