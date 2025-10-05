import React from 'react';
import { 
  User, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  Ruler, 
  Droplets, 
  GraduationCap, 
  Briefcase, 
  Phone,
  Mail,
  Home
} from 'lucide-react';
import { biodata } from '../data/biodata';

const PersonalDetails = () => {
  const personalInfo = biodata.personalInfo;

  const detailSections = [
    {
      title: "वैयक्तिक माहिती",
      icon: User,
      color: "blue",
      details: [
        { label: "पूर्ण नाव", value: personalInfo.fullName, icon: User },
        { label: "जात", value: `${personalInfo.religion} (${personalInfo.caste})`, icon: Star },
        { label: "जन्म दिनांक", value: personalInfo.birthDate, icon: Calendar },
        { label: "जन्म वेळ", value: personalInfo.birthTime, icon: Clock },
        { label: "जन्म स्थळ", value: personalInfo.birthPlace, icon: MapPin },
        { label: "रास", value: personalInfo.zodiac, icon: Star },
        { label: "गोत्र", value: personalInfo.gotra, icon: Star },
      ]
    },
    {
      title: "शारीरिक माहिती",
      icon: Ruler,
      color: "green",
      details: [
        { label: "उंची", value: personalInfo.height, icon: Ruler },
        { label: "रक्त गट", value: personalInfo.bloodGroup, icon: Droplets },
      ]
    },
    {
      title: "शैक्षणिक आणि व्यावसायिक माहिती",
      icon: GraduationCap,
      color: "purple",
      details: [
        { label: "शिक्षण", value: personalInfo.education, icon: GraduationCap },
        { label: "नोकरी", value: personalInfo.company, icon: Briefcase },
        { label: "पद", value: personalInfo.position, icon: Briefcase },
      ]
    },
    {
      title: "संपर्क माहिती",
      icon: Phone,
      color: "orange",
      details: [
        { label: "फोन नंबर", value: biodata.contact.personal.phone, icon: Phone },
        { label: "ईमेल", value: biodata.contact.personal.email, icon: Mail },
        { label: "पत्ता", value: biodata.contact.personal.address, icon: Home },
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600",
      orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <section className="container-max section-padding py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-devanagari">वैयक्तिक माहिती</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-6xl font-bold text-white">र</span>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-devanagari text-gray-800 mb-2">
                {personalInfo.fullName}
              </h2>
              <p className="text-xl text-devanagari text-gray-600 mb-4">
                {personalInfo.education} • {personalInfo.position}
              </p>
              <p className="text-lg text-devanagari text-gray-500">
                {personalInfo.company}
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detailSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Section Header */}
                <div className={`bg-gradient-to-r ${getColorClasses(section.color)} p-6`}>
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-devanagari text-white">
                      {section.title}
                    </h3>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    {section.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                          <detail.icon className={`w-5 h-5 ${getColorClasses(section.color).split(' ')[2]}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-devanagari text-gray-600 mb-1">
                            {detail.label}
                          </p>
                          <p className="text-lg font-semibold text-devanagari text-gray-800">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-devanagari text-gray-800 mb-6 text-center">
                अतिरिक्त माहिती
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-devanagari text-gray-700 mb-4">
                    वैयक्तिक वैशिष्ट्ये:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "समजूतदार आणि धैर्यशील",
                      "कुटुंबवत्सल आणि जबाबदार",
                      "प्रगतशील विचारसरणी",
                      "सामाजिक आणि मैत्रीपूर्ण",
                      "आत्मविश्वासी आणि मेहनती"
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
                    आवडी आणि उत्सुकता:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "वाचन आणि ज्ञानार्जन",
                      "संगीत आणि कला",
                      "प्रवास आणि नवीन अनुभव",
                      "तंत्रज्ञान आणि नवकल्पना",
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
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold text-devanagari mb-4">
                अधिक माहितीसाठी संपर्क करा
              </h3>
              <p className="text-lg text-devanagari mb-6 opacity-90">
                जर तुम्हाला माझ्याबद्दल अधिक जाणून घ्यायचे असेल किंवा 
                कोणत्याही प्रश्न असतील तर माझ्याशी संपर्क साधा.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${biodata.contact.personal.phone}`}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span className="text-devanagari">फोन करा</span>
                </a>
                <a 
                  href={`mailto:${biodata.contact.personal.email}`}
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <span className="text-devanagari">ईमेल पाठवा</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalDetails;
