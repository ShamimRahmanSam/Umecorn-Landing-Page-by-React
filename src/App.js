import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import UseCasesSection from './components/UseCasesSection';
import HowCanHelpSectionLg from './components/HowCanHelpSectionLg';
import HowCanHelpSectionSm from './components/HowCanHelpSectionSm';
import IncentiveSection from './components/IncentiveSection';
import TeamSection from './components/TeamSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    // Set the body class
    document.body.classList.add('scroll-smooth', 'bg-white', 'text-black');

    // Cleanup function to remove classes on unmount
    return () => {
      document.body.classList.remove('scroll-smooth', 'bg-white', 'text-black');
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <UseCasesSection />
      <HowCanHelpSectionLg />
      <HowCanHelpSectionSm />
      <IncentiveSection />
      <TeamSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
