import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import defaultLogo from '../../assets/header/Logo-Generic.svg';
import secondLogo from '../../assets/header/Logo-Generic-2.svg';
import menuIcon from '../../assets/header/menu.svg';
import closeIcon from '../../assets/closeButton/close.svg';
import menu2Icon from '../../assets/header/menu-2.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [topBtnColor, setTopBtnColor] = useState('#2F45FF');
  const [logo, setLogo] = useState(defaultLogo);
  const [burgerIcon, setBurgerIcon] = useState(menuIcon);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) {
        document.body.classList.add('no-scroll');
        setLogo(secondLogo); 
      } else {
        document.body.classList.remove('no-scroll');
        setLogo(isScrolled ? secondLogo : defaultLogo); 
      }
      return !prev;
    });
  };
  
  
  useEffect(() => {
    const smoothScrollHandler = (event) => {
      if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
        
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }        
      }
    };
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', smoothScrollHandler);
    });
  
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', smoothScrollHandler);
      });
    };
  }, []);
  

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      setTopBtnColor('#f7f7f7');
      setLogo(secondLogo);
      setBurgerIcon(menu2Icon);
    } else {
      setIsScrolled(false);
      setTopBtnColor('#2F45FF');
      setLogo(defaultLogo);
      setBurgerIcon(menuIcon);
    }
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('no-scroll');
    };
  }, []);
  

  return (
    <header
      id="mainHeader"
      className={`fixed w-full top-0 left-0 z-50 py-4 md:py-3 lg:py-4 2xl:py-6 px-3 2xl:px-40 text-white transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white text-black border-b border-gray-300' : 'bg-transparent text-white border-transparent'
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
            href="#"
            id="getStartedBtn" 
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
