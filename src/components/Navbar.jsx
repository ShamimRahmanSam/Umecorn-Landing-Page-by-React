import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">Umecom</div>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#usecases" className="text-gray-300 hover:text-white">Use Cases</a>
          <a href="#team" className="text-gray-300 hover:text-white">Team</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;