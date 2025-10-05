import React from 'react';
import { User, Heart, BookOpen, Globe, Users } from 'lucide-react';
import { biodata } from '../data/biodata';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <section className="container-max section-padding py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-devanagari">About Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main About Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-devanagari text-gray-800">
                  {biodata.about.name}
                </h2>
                <p className="text-lg text-devanagari text-gray-600">
                  {biodata.about.greeting}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-devanagari whitespace-pre-line">
                {biodata.about.description}
              </p>
            </div>
          </div>

          {/* Values & Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Family Values */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-3">
                कुटुंबवत्सल
              </h3>
              <p className="text-gray-600 text-devanagari">
                कुटुंब हे माझ्या जीवनातील सर्वात महत्त्वाचे आहे. 
                पारंपरिक मूल्ये आणि आधुनिक विचारसरणीचा समतोल.
              </p>
            </div>

            {/* Learning */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-3">
                सतत शिकणे
              </h3>
              <p className="text-gray-600 text-devanagari">
                नवीन गोष्टी शिकण्याची आवड. तंत्रज्ञान, संस्कृती आणि 
                जीवनाच्या वेगवेगळ्या पैलूंबद्दल उत्सुकता.
              </p>
            </div>

            {/* Travel & Exploration */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-3">
                प्रवास आणि अनुभव
              </h3>
              <p className="text-gray-600 text-devanagari">
                नवीन ठिकाणे पाहण्याची आवड. विविध संस्कृतींचा 
                अनुभव घेणे आणि जीवनाच्या नवीन अर्थ शोधणे.
              </p>
            </div>
          </div>

          {/* Personal Qualities */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-devanagari text-gray-800 mb-6 text-center">
              वैयक्तिक गुणधर्म
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-devanagari text-gray-700 mb-4">
                  माझे गुणधर्म:
                </h4>
                <ul className="space-y-3">
                  {[
                    "समजूतदार आणि धैर्यशील",
                    "कुटुंबवत्सल आणि जबाबदार",
                    "प्रगतशील विचारसरणी",
                    "सामाजिक आणि मैत्रीपूर्ण",
                    "साहसी आणि उत्साही",
                    "सांस्कृतिक मूल्यांची कदर"
                  ].map((quality, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-devanagari text-gray-700">{quality}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-devanagari text-gray-700 mb-4">
                  आवडी आणि उत्सुकता:
                </h4>
                <ul className="space-y-3">
                  {[
                    "वाचन आणि ज्ञानार्जन",
                    "संगीत आणि कला",
                    "प्रवास आणि नवीन अनुभव",
                    "तंत्रज्ञान आणि नवकल्पना",
                    "सामाजिक कार्य",
                    "खेळ आणि व्यायाम"
                  ].map((interest, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-devanagari text-gray-700">{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Life Philosophy */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-devanagari mb-4">
                जीवनाचे तत्त्वज्ञान
              </h3>
              <p className="text-lg text-devanagari leading-relaxed max-w-3xl mx-auto">
                "जीवनातील सर्वात महत्त्वाची गोष्ट म्हणजे प्रामाणिकपणा, 
                प्रेम आणि आपल्या जवळच्या लोकांची काळजी घेणे. 
                समतोल आणि आनंदी वैवाहिक जीवनाची इच्छा असलेल्या 
                जीवनसाथीची शोधात आहे."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
