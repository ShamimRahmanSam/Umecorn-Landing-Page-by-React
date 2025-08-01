import React from 'react';
import closeIcon from '../../assets/closeButton/close.svg'; 

const MobileMenu = ({ isOpen, toggleMenu, logo }) => {
  const handleNavLinkClick = () => {
    toggleMenu();
  };

  return (
    <div
      id="mobileMenu"
      className={`lg:hidden fixed inset-0 bg-white z-10 py-4 md:py-3 flex flex-col h-screen ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ transition: 'none' }}
    >
      <div className="flex justify-between items-center mb-4 px-3 md:px-11 md:mb-3.5 md:mt-0.5">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <button
          id="closeMenu"
          onClick={toggleMenu}
          className="bg-[#f7f7f7] p-2 rounded-lg md:p-3"
        >
          <img src={closeIcon} alt="Close Menu" className="w-6 h-6" />
        </button>
      </div>

      {isOpen && (
        <div className="border-b border-gray-300 mb-4 px-0" />
      )}

      <nav className="mt-5 px-6">
        <div className="flex flex-col space-y-8 text-gray-800">
          <a href="#home" className="hover:text-[#212126]" onClick={handleNavLinkClick}>Home</a>
          <a href="#cases" className="hover:text-[#212126]" onClick={handleNavLinkClick}>Cases</a>
          <a href="#team" className="hover:text-[#212126]" onClick={handleNavLinkClick}>Team</a>
          <a href="#contact" className="hover:text-[#212126]" onClick={handleNavLinkClick}>Contact us</a>
        </div>
      </nav>

      <div className="mt-auto flex justify-center text-center items-center pb-6 sm:pb-8 w-full">
        <a
          href="#"
          id="getStartedBtn"
          className="bg-[#2F45FF] text-white py-3 px-[6.4rem] rounded-lg text-center text-sm"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
