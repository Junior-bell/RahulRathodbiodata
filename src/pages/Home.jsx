import React from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase, Phone, Mail } from 'lucide-react';
import { biodata } from '../data/biodata';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="container-max section-padding py-16">
        <div className="text-center">
          {/* Spiritual Greeting */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-bold text-devanagari text-gray-800 mb-2">
              || श्री स्वामी समर्थ ||
            </p>
            <p className="text-lg md:text-xl text-devanagari text-gray-700">
              || श्री शिवाय नमस्तुभ्यं ||
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            <span className="text-devanagari">{biodata.personalInfo.fullName}</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-700 mb-8">
            <p className="mb-2">
              <span className="text-devanagari">{biodata.personalInfo.education}</span> • 
              <span className="text-devanagari"> {biodata.personalInfo.position}</span>
            </p>
            <p className="text-lg text-devanagari text-gray-600">
              {biodata.personalInfo.company}
            </p>
          </div>

          {/* Contact Button */}
          <div className="mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="text-devanagari">संपर्क करा</span>
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Profile Image */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-600">र</span>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  {/* Basic Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 text-devanagari">जन्म दिनांक</p>
                        <p className="font-semibold text-devanagari">{biodata.personalInfo.birthDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 text-devanagari">जन्म स्थळ</p>
                        <p className="font-semibold text-devanagari">{biodata.personalInfo.birthPlace}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 text-devanagari">शिक्षण</p>
                        <p className="font-semibold text-devanagari">{biodata.personalInfo.education}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 text-devanagari">व्यवसाय</p>
                        <p className="font-semibold text-devanagari">{biodata.personalInfo.position}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 text-devanagari">रास</p>
                      <p className="font-semibold text-devanagari">{biodata.personalInfo.zodiac}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 text-devanagari">उंची</p>
                      <p className="font-semibold text-devanagari">{biodata.personalInfo.height}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 text-devanagari">रक्त गट</p>
                      <p className="font-semibold text-devanagari">{biodata.personalInfo.bloodGroup}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 text-devanagari">गोत्र</p>
                      <p className="font-semibold text-devanagari">{biodata.personalInfo.gotra}</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span className="text-devanagari font-semibold">{biodata.contact.personal.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">{biodata.contact.personal.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container-max section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">24</p>
            <p className="text-devanagari text-gray-600">वर्षे</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">B.S.C Statistics</p>
            <p className="text-devanagari text-gray-600">शिक्षण</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">3+</p>
            <p className="text-devanagari text-gray-600">वर्षे अनुभव</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">पुणे</p>
            <p className="text-devanagari text-gray-600">ठिकाण</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
