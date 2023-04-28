import React from "react";
import FooterLogo from "../img/logo-white.svg";
import FacebookIcon from "../img/icon-facebook.svg";
import InstaIcon from "../img/icon-instagram.svg";
import PininterestIcon from "../img/icon-pinterest.svg";
import TwitterIcon from "../img/icon-twitter.svg";
import YoutubeIcon from "../img/icon-youtube.svg";

const icons = [
  FacebookIcon,
  InstaIcon,
  PininterestIcon,
  TwitterIcon,
  YoutubeIcon,
];

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950">
        <div className="container flex flex-col-reverse justify-between py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="sm:pt-12">
              <img src={FooterLogo} className="h-8" alt="" />
            </div>
            <div className="flex justify-center space-x-4">
              {icons.map((icon) => (
                <a href="#">
                  <img src={icon} className="h-8 text-brightRed" alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-around space-x-32 sm:mx-28 md:mx-6">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <form action="">
              <div className="flex sm:px-8 md:px-0 space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none py-2"
                  placeholder="Updated in your inbox."
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
      <div className="text-white bg-gray-950 flex justify-center">
        Copyright &copy; 2023
      </div>
    </>
  );
};

export default Footer;
