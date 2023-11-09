import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">Logo</div>
          <div className="hidden md:flex ml-auto space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Services</a>
            <a href="#" className="text-white">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className onClick={toggleNavbar}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block text-white py-2 px-4">Home</a>
        <a href="#" className="block text-white py-2 px-4">About</a>
        <a href="#" className="block text-white py-2 px-4">Services</a>
        <a href="#" className="block text-white py-2 px-4">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
