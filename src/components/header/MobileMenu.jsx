import React from 'react';
import closeIcon from '../../assets/closeButton/close.svg'; // Adjust the path as necessary

const MobileMenu = ({ isOpen, toggleMenu, logo }) => {
  return (
    <div
      id="mobileMenu"
      className={`fixed inset-0 bg-white z-10 p-3 flex flex-col justify-between h-screen ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ transition: 'none' }} // Disable transition
    >
      {/* Display the logo in the center at the top */}
      <div className="flex justify-center mb-4">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      <nav className="mt-20">
        <div className="flex flex-col space-y-4 text-gray-800">
          <a href="#home" className="hover:text-[#212126]" onClick={toggleMenu}>Home</a>
          <a href="#cases" className="hover:text-[#212126]" onClick={toggleMenu}>Cases</a>
          <a href="#team" className="hover:text-[#212126]" onClick={toggleMenu}>Team</a>
          <a href="#contact" className="hover:text-[#212126]" onClick={toggleMenu}>Contact us</a>
        </div>
      </nav>

      <div className="mt-auto flex justify-center text-center items-center pb-6 sm:pb-8 w-full md:hidden">
        <a href="#" className="bg-[#2F45FF] text-white py-3 px-20 rounded-lg text-center text-sm">
          Get Started
        </a>
      </div>

      <button id="closeMenu" onClick={toggleMenu} className="absolute top-4 right-4">
        <img src={closeIcon} alt="Close Menu" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MobileMenu;
