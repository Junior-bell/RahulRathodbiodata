import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BanjaraBiodata from './pages/BanjaraBiodata';
import About from './pages/About';
import PersonalDetails from './pages/PersonalDetails';
import Family from './pages/Family';
import Kundali from './pages/Kundali';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'banjara-biodata':
        return <BanjaraBiodata />;
      case 'about':
        return <About />;
      case 'personal-details':
        return <PersonalDetails />;
      case 'family':
        return <Family />;
      case 'kundali':
        return <Kundali />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
