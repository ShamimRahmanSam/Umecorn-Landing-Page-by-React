import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import UseCasesSection from './components/UseCasesSection';
import HowCanHelpSection from './components/HowCanHelpSection';
import IncentiveSection from './components/IncentiveSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <UseCasesSection />
      <HowCanHelpSection />
      <IncentiveSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
