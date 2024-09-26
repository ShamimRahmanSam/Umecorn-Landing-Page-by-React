import React, { useEffect } from 'react';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import AboutSection from './components/about/AboutSection';
import UseCasesSection from './components/useCase/UseCasesSection';
import HowCanHelpSectionLg from './components/howCanhelp/HowCanHelpSectionLg';
import HowCanHelpSectionSm from './components/howCanhelp/HowCanHelpSectionSm';
import IncentiveSection from './components/incentive/IncentiveSection';
import TeamSection from './components/team/TeamSection';
import ContactUs from './components/contact/ContactUs';
import Footer from './components/footer/Footer';

const App = () => {
  useEffect(() => {
    document.body.classList.add('scroll-smooth', 'bg-white', 'text-black');

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
