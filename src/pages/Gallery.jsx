import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import { biodata } from '../data/biodata';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = biodata.photos;

  const openModal = (index) => {
    setSelectedImage(photos[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(photos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(photos[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <section className="container-max section-padding py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-devanagari">फोटो गॅलरी</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Gallery Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-devanagari text-gray-800 mb-2">
                माझे फोटो
              </h2>
              <p className="text-devanagari text-gray-600">
                विविध प्रसंगीचे आठवणीचे क्षण
              </p>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => openModal(index)}
              >
                {/* Placeholder for actual image */}
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">र</span>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-devanagari text-gray-800 mb-1">
                    {photo.alt}
                  </h3>
                  <p className="text-sm text-gray-600">
                    क्लिक करून मोठे पहा
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Photos Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-devanagari text-gray-800 mb-6 text-center">
              अधिक फोटो
            </h3>
            <p className="text-devanagari text-gray-600 text-center mb-8">
              अधिक फोटो पाहण्यासाठी किंवा कोणत्याही प्रश्नासाठी संपर्क करा
            </p>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="text-devanagari">संपर्क करा</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Image Viewing */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">र</span>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-devanagari text-gray-800 mb-2">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-gray-600">
                    {currentIndex + 1} / {photos.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
