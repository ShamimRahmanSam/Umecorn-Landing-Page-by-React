import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import defaultLogo from '../../assets/header/Logo-Generic.svg';
import secondLogoPath from '../../assets/header/Logo-Generic-2.svg';
import menuIcon from '../../assets/header/menu.svg';
import closeIcon from '../../assets/closeButton/close.svg';
import menu2IconPath from '../../assets/header/menu-2.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [topBtnColor, setTopBtnColor] = useState('#2F45FF');
  const [logo, setLogo] = useState(defaultLogo);
  const [burgerIcon, setBurgerIcon] = useState(menuIcon);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      setTopBtnColor('#f7f7f7');
      setLogo(secondLogoPath);
      setBurgerIcon(menu2IconPath);
    } else {
      setIsScrolled(false);
      setTopBtnColor('#2F45FF');
      setLogo(defaultLogo);
      setBurgerIcon(menuIcon);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) {
        document.body.classList.add('no-scroll'); // Disable scrolling
      } else {
        document.body.classList.remove('no-scroll'); // Enable scrolling
      }
      return !prev;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('no-scroll'); // Clean up on unmount
    };
  }, []);

  return (
    <header
      id="mainHeader"
      className={`fixed w-full top-0 left-0 z-50 py-4 md:py-3 lg:py-4 2xl:py-6 px-3 2xl:px-44 text-white transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white text-black'
          : 'bg-transparent text-white'
      } ${
        isScrolled || (isMobileMenuOpen && window.innerWidth <= 768)
          ? 'border-b border-gray-300'
          : 'border-transparent'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            id="logo"
            src={logo}
            alt="Logo"
            className="h-10 transition-all duration-300 lg:h-12 md:px-8"
          />
        </div>

        <Navbar isScrolled={isScrolled} />

        <div className="flex items-center space-x-4 md:px-8">
          <a
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
      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        logo={logo}
        closeIcon={closeIcon}
        isScrolled={isScrolled}
      />
    </header>
  );
};

export default Header;
