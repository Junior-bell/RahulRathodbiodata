import React from 'react';
import { Users, Phone, MapPin, User, UserCheck } from 'lucide-react';
import { biodata } from '../data/biodata';

const Family = () => {
  const family = biodata.family;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <section className="container-max section-padding py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-devanagari">कुटुंब</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Family Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-devanagari text-gray-800">
                माझे कुटुंब
              </h2>
              <p className="text-devanagari text-gray-600 mt-2">
                एक आदरशील, सुसंस्कृत आणि प्रेमळ कुटुंब
              </p>
            </div>
          </div>

          {/* Family Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Father */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <div className="flex items-center space-x-3">
                  <User className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-devanagari text-white">
                    वडील
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-devanagari text-gray-800 mb-2">
                        {family.father.name}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-devanagari text-gray-600">
                            {family.father.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-green-600" />
                          <span className="text-devanagari font-semibold text-gray-800">
                            {family.father.contact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mother */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6">
                <div className="flex items-center space-x-3">
                  <User className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-devanagari text-white">
                    आई
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-devanagari text-gray-800 mb-2">
                        {family.mother.name}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-green-600" />
                          <span className="text-devanagari font-semibold text-gray-800">
                            {family.mother.contact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Siblings */}
          {family.siblings && family.siblings.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-devanagari text-gray-800 mb-6 text-center">
                भावंडे
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {family.siblings.map((sibling, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <UserCheck className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-devanagari text-gray-800 mb-1">
                          {sibling.name}
                        </h4>
                        <p className="text-devanagari text-gray-600 mb-2">
                          {sibling.relation}
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-devanagari text-gray-600">
                              {sibling.location}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <span className="text-devanagari font-semibold text-gray-800">
                              {sibling.contact}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Relatives */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-devanagari text-gray-800 mb-6 text-center">
              नातेवाईक
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {family.relatives.map((relative, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 text-center">
                  <span className="text-devanagari font-semibold text-gray-800">
                    {relative}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Family Values */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-devanagari mb-4">
                  कुटुंबाची मूल्ये
                </h3>
                <p className="text-lg text-devanagari leading-relaxed max-w-3xl mx-auto">
                  आमचे कुटुंब पारंपरिक मूल्ये, आदर, प्रेम आणि एकमेकांची काळजी 
                  घेण्याच्या तत्त्वांवर आधारित आहे. आम्ही शिक्षण, कर्तव्यनिष्ठा 
                  आणि सामाजिक जबाबदारीला महत्त्व देतो.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Family;
