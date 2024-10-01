import React from 'react';

const Navbar = ({ isScrolled }) => {
  return (
    <nav id="navLinks" className="hidden lg:flex space-x-16 mt-4 mr-5"> 
      <a href="#home" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>Home</a>
      <a href="#cases" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>Cases</a>
      <a href="#team" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>Team</a>
      <a href="#contact" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>Contact us</a> 
    </nav>

  );
};

export default Navbar;
