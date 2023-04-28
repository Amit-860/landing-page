import React from "react";
import Logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={Logo} />
        </div>
        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            Career
          </a>
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        {/* Button */}
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
