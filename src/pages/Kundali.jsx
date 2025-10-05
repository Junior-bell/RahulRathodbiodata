import React from 'react';
import { Star, Calendar, Clock, MapPin, Sun, Moon } from 'lucide-react';
import { biodata } from '../data/biodata';

const Kundali = () => {
  const astro = biodata.astrologicalInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <section className="container-max section-padding py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-devanagari">कुंडली</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Astrological Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-devanagari text-gray-800">
                ज्योतिषीय माहिती
              </h2>
              <p className="text-devanagari text-gray-600 mt-2">
                जन्मकुंडली आणि ग्रह-नक्षत्र माहिती
              </p>
            </div>
          </div>

          {/* Main Kundali Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Birth Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-6">
                  जन्म माहिती
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="text-sm text-devanagari text-gray-600">जन्म दिनांक</p>
                      <p className="font-semibold text-devanagari text-gray-800">{astro.birthDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="text-sm text-devanagari text-gray-600">जन्म वेळ</p>
                      <p className="font-semibold text-devanagari text-gray-800">{astro.birthTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="text-sm text-devanagari text-gray-600">जन्म स्थळ</p>
                      <p className="font-semibold text-devanagari text-gray-800">{astro.birthPlace}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zodiac Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-6">
                  राशी माहिती
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                    <Sun className="w-6 h-6 text-orange-600" />
                    <div>
                      <p className="text-sm text-devanagari text-gray-600">रास</p>
                      <p className="font-semibold text-devanagari text-gray-800">{astro.zodiac}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg">
                    <Moon className="w-6 h-6 text-indigo-600" />
                    <div>
                      <p className="text-sm text-devanagari text-gray-600">गोत्र</p>
                      <p className="font-semibold text-devanagari text-gray-800">{astro.gotra}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                    <Star className="w-6 h-6 text-pink-600" />
                    <div>
                      <p className="text-sm text-devanagari text-gray-600">जन्म दिवस</p>
                      <p className="font-semibold text-devanagari text-gray-800">{astro.birthDay}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zodiac Characteristics */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-devanagari text-gray-800 mb-6 text-center">
              {astro.zodiac} राशीची वैशिष्ट्ये
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-devanagari text-gray-700 mb-4">
                  मुख्य गुणधर्म:
                </h4>
                <ul className="space-y-3">
                  {[
                    "अत्यंत महत्वाकांक्षी आणि दृढनिश्चयी",
                    "व्यावसायिक क्षेत्रात यशस्वी",
                    "शिस्तबद्ध आणि नियोजनबद्ध",
                    "कुटुंबवत्सल आणि जबाबदार",
                    "प्रामाणिक आणि विश्वासार्ह",
                    "अंतर्मुखी स्वभाव असलेला"
                  ].map((trait, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-devanagari text-gray-700">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-devanagari text-gray-700 mb-4">
                  व्यावसायिक क्षेत्र:
                </h4>
                <ul className="space-y-3">
                  {[
                    "तंत्रज्ञान आणि सॉफ्टवेअर",
                    "व्यवस्थापन आणि नेतृत्व",
                    "अभियांत्रिकी आणि रचना",
                    "वित्त आणि बँकिंग",
                    "शिक्षण आणि संशोधन",
                    "सरकारी सेवा"
                  ].map((field, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-devanagari text-gray-700">{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Compatibility */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-devanagari mb-4">
                राशी सुसंगती
              </h3>
              <p className="text-lg text-devanagari leading-relaxed max-w-3xl mx-auto mb-6">
                {astro.zodiac} राशीच्या व्यक्तींसाठी सर्वोत्तम सुसंगती असलेल्या राशी 
                वृषभ, कन्या आणि मकर आहेत. ह्या राशींच्या व्यक्तींबरोबर 
                आनंदी आणि समतोल वैवाहिक जीवन जगता येते.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {["वृषभ", "कन्या", "मकर"].map((sign, index) => (
                  <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                    <span className="text-lg font-semibold text-devanagari">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kundali;
