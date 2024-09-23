import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Adjust the path as necessary
import MobileMenu from './MobileMenu'; // Import the MobileMenu component
import defaultLogo from '../assets/Logo-Generic.svg'; // Adjust the path as necessary
import secondLogo from '../assets/Logo-Generic-2.svg'; // Adjust the path as necessary
import menuIcon from '../assets/menu.svg'; // Adjust the path as necessary
import closeIcon from '../assets/close.svg'; // Adjust the path as necessary
import menu2Icon from '../assets/menu-2.svg'; // Import the menu-2 SVG

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [burgerIcon, setBurgerIcon] = useState(menuIcon);
  const [topBtnColor, setTopBtnColor] = useState('#2F45FF');
  const [logo, setLogo] = useState(defaultLogo);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    if (newState) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      setLogo(secondLogo); // Set logo for mobile menu open
      setTopBtnColor('#f7f7f7'); // Set background color for the top button
      setBurgerIcon(closeIcon); // Change to close icon when menu opens
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling
      setLogo(isScrolled ? secondLogo : defaultLogo); // Reset logo based on scroll state
      setTopBtnColor('#2F45FF'); // Reset button color
      setBurgerIcon(menuIcon); // Change back to menu icon when menu closes
    }
  };

  // Scroll event handling to update header styles and burger icon
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      setTopBtnColor('#f7f7f7');
      setLogo(secondLogo); // Use second logo when scrolled
      setBurgerIcon(menu2Icon); // Use the imported menu2Icon
    } else {
      setIsScrolled(false);
      setTopBtnColor('#2F45FF');
      setLogo(defaultLogo); // Use default logo when not scrolled
      setBurgerIcon(menuIcon); // Reset to default icon
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Ensure body scroll is enabled
    };
  }, []);

  return (
    <header
      id="mainHeader"
      className={`fixed w-full top-0 left-0 z-50 py-4 md:py-3 lg:py-4 2xl:py-6 px-3 2xl:px-44 text-white transition-all duration-300 ${
        isScrolled ? 'bg-white text-black border-b border-gray-300' : 'border-transparent'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logos */}
        <div className="flex items-center">
          <img
            id="logo"
            src={logo}
            alt="Logo"
            className="h-10 transition-all duration-300 lg:h-12 md:px-8"
          />
        </div>

        {/* Navbar */}
        <Navbar isScrolled={isScrolled} />

        {/* Get Started Button and Burger Menu */}
        <div className="flex items-center space-x-4 md:px-8">
          <a
            id="getStartedBtn"
            href="#"
            className={`hidden md:block font-bold py-4 px-4 rounded-lg text-sm ${
              isScrolled ? 'bg-[#2F45FF] text-white' : 'bg-white text-[#2F45FF]'
            }`}
          >
            Get Started
          </a>
          <div
            id="topBtnColor"
            className="relative flex items-center rounded-lg p-2 md:p-3 lg:hidden"
            style={{ backgroundColor: topBtnColor }}
          >
            <button id="burger" className="focus:outline-none" onClick={toggleMobileMenu}>
              <img src={burgerIcon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} logo={logo} />
    </header>
  );
};

export default Header;
