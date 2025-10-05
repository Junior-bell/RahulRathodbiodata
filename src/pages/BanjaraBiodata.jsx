import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Heart, User, Users, GraduationCap, Home } from 'lucide-react';

function DetailRow({ label, value, highlight = false }) {
  return (
    <div className={`${highlight ? 'md:col-span-2 bg-yellow-50 p-3 rounded-lg border-2 border-yellow-200' : ''}`}>
      <div className="text-sm font-semibold text-gray-600 mb-1">{label}</div>
      <div className={`text-gray-900 ${highlight ? 'text-lg font-bold text-orange-700' : ''}`}>
        {value}
      </div>
    </div>
  );
}

export default function BanjaraBiodata() {
  const [language, setLanguage] = useState('marathi');

  const content = {
    marathi: {
      title: 'विवाह माहिती पत्रक',
      subtitle: 'श्री गणेशाय नमः',
      personalDetails: 'वैयक्तिक माहिती',
      familyDetails: 'कौटुंबिक माहिती',
      contactDetails: 'संपर्क माहिती',
      name: 'मुलाचे नाव',
      dob: 'जन्म दिनांक',
      birthTime: 'जन्म वेळ',
      birthDay: 'जन्मवार',
      birthPlace: 'जन्मस्थळ',
      height: 'उंची',
      complexion: 'वर्ण',
      bloodGroup: 'रक्तगट',
      caste: 'जात',
      education: 'शिक्षण',
      gotra: 'गोत्र',
      fatherName: 'वडिलांचे नाव',
      motherName: 'आईचे नाव',
      brotherName: 'भावाचे नाव',
      address: 'पत्ता',
      village: 'गाव',
      contact: 'संपर्क',
    },
    english: {
      title: 'Marriage Biodata',
      subtitle: 'Shri Ganeshay Namah',
      personalDetails: 'Personal Details',
      familyDetails: 'Family Details',
      contactDetails: 'Contact Information',
      name: 'Name',
      dob: 'Date of Birth',
      birthTime: 'Birth Time',
      birthDay: 'Birth Day',
      birthPlace: 'Birth Place',
      height: 'Height',
      complexion: 'Complexion',
      bloodGroup: 'Blood Group',
      caste: 'Caste',
      education: 'Education',
      gotra: 'Gotra',
      fatherName: "Father's Name",
      motherName: "Mother's Name",
      brotherName: "Brother's Name",
      address: 'Address',
      village: 'Village',
      contact: 'Contact',
    }
  };

  const t = content[language];

  const personalInfo = {
    marathi: {
      name: 'राहुल दादराव राठोड',
      dob: '२६/१२/२००१',
      birthTime: 'सायं. ०४:४५ वा.',
      birthDay: 'बुधवार',
      birthPlace: 'राजुरा तांडा, नांदेड',
      height: '५ फूट ४ इंच',
      complexion: 'गोरा',
      bloodGroup: 'B+',
      caste: 'हिंदू बंजारा',
      education: 'B.Sc. Statistics',
      gotra: 'कडावत'
    },
    english: {
      name: 'Rahul Dadrao Rathod',
      dob: '26/12/2001',
      birthTime: '04:45 PM',
      birthDay: 'Wednesday',
      birthPlace: 'Rajura Tanda, Nanded',
      height: "5' 4\"",
      complexion: 'Fair',
      bloodGroup: 'B+',
      caste: 'Hindu Banjara',
      education: 'B.Sc. Statistics',
      gotra: 'Kadavat'
    }
  };

  const familyInfo = {
    marathi: {
      father: 'श्री. दादराव रामराव राठोड (Labour Contractor)',
      mother: 'श्रीमती. सिताबाई राठोड (गृहिणी)',
      brother: 'रंजित दादराव राठोड',
      address: 'सोनाई निवास, गुजरवाडी, कात्रज, पुणे – ४११०४६',
      village: 'राजुरा तांडा, ता. मुखेड, जि. नांदेड',
      contact: '७७७५९६५९६१ / ९७६३९०८८९४'
    },
    english: {
      father: 'Shri. Dadrao Ramrao Rathod (Labour Contractor)',
      mother: 'Smt. Sitabai Rathod (Homemaker)',
      brother: 'Ranjit Dadrao Rathod',
      address: 'Sonai Nivas, Gujarwadi, Katraj, Pune – 411046',
      village: 'Rajura Tanda, Tal. Mukhed, Dist. Nanded',
      contact: '7775965961 / 9763908894'
    }
  };

  const personal = personalInfo[language];
  const family = familyInfo[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Traditional Border Pattern */}
      <div className="border-t-8 border-orange-600" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #ea580c 0px, #ea580c 20px, #dc2626 20px, #dc2626 40px, #ca8a04 40px, #ca8a04 60px)'
      }}></div>

      {/* Header with Traditional Motifs */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-12 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="flex justify-around items-center h-full text-6xl">
            <span>॥</span><span>ॐ</span><span>॥</span><span>ॐ</span><span>॥</span>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="text-4xl mb-2">॥ {t.subtitle} ॥</div>
          <h1 className="text-5xl font-bold mb-2 mt-4">{t.title}</h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Heart className="w-8 h-8 fill-current animate-pulse" />
            <div className="text-xl font-semibold tracking-wider"></div>
            <Heart className="w-8 h-8 fill-current animate-pulse" />
          </div>
        </div>

        {/* Language Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setLanguage(language === 'marathi' ? 'english' : 'marathi')}
            className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors"
          >
            {language === 'marathi' ? 'English' : 'मराठी'}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Photo Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-orange-200">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 font-bold">
                <User className="w-6 h-6 inline-block mr-2" />
                {personal.name}
              </div>
              
              {/* Photo Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center border-4 border-white">
                <div className="text-center text-gray-400">
                <img src="/Rahul rathod.jpg" />
                  <p className="text-sm"></p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-4 bg-orange-50 space-y-2 text-center">
                <div className="flex items-center justify-center gap-2 text-orange-800">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">{personal.dob}</span>
                </div>
                <div className="text-sm text-gray-700">{personal.birthDay}</div>
                <div className="flex items-center justify-center gap-2 text-red-800">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-semibold">{personal.education}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Personal Details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-orange-500">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <User className="w-6 h-6" />
                  {t.personalDetails}
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <DetailRow label={t.name} value={personal.name} />
                  <DetailRow label={t.dob} value={personal.dob} />
                  <DetailRow label={t.birthTime} value={personal.birthTime} />
                  <DetailRow label={t.birthDay} value={personal.birthDay} />
                  <DetailRow label={t.birthPlace} value={personal.birthPlace} />
                  <DetailRow label={t.height} value={personal.height} />
                  <DetailRow label={t.complexion} value={personal.complexion} />
                  <DetailRow label={t.bloodGroup} value={personal.bloodGroup} />
                  <DetailRow label={t.caste} value={personal.caste} />
                  <DetailRow label={t.education} value={personal.education} />
                  <DetailRow label={t.gotra} value={personal.gotra} highlight />
                </div>
              </div>
            </div>

            {/* Family Details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-red-500">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  {t.familyDetails}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <DetailRow label={t.fatherName} value={family.father} />
                  <DetailRow label={t.motherName} value={family.mother} />
                  <DetailRow label={t.brotherName} value={family.brother} />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-yellow-600">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  {t.contactDetails}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                    <Home className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">{t.address}:</div>
                      <div className="text-gray-800">{family.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">{t.village}:</div>
                      <div className="text-gray-800">{family.village}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Phone className="w-5 h-5 text-yellow-700 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">{t.contact}:</div>
                      <div className="text-gray-800 font-mono">{family.contact}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Footer */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="text-2xl mb-2">॥ जय सेवालाल महाराज ॥</div>
          <div className="text-lg opacity-90">जय भवानी जय शिवाजी</div>
          <div className="mt-4 text-sm opacity-75">
          ||  please Contact us for more details ||
          </div>
        </div>
      </div>

      {/* Bottom Border Pattern */}
      <div className="border-b-8 border-orange-600" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #ea580c 0px, #ea580c 20px, #dc2626 20px, #dc2626 40px, #ca8a04 40px, #ca8a04 60px)'
      }}></div>
    </div>
  );
}