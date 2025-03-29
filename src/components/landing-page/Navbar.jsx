import { useState } from "react";
import { NavLink } from "react-router";

import "../../component-styles/landing-page-styles/navbar.css";

import { BsGithub } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="flex justify-between items-center
    lg:gap-8
    text-white p-3 2xl:p-4 
    border-b border-b-blue-100 
    bg-black/40 "
    >
      <div className="flex-center gap-2 px-2 lg:px-6">
        <div className="flex-center gap-2">
          <div className="w-8 2xl:w-12 h-8 2xl:h-12 text-lg 2xl:text-4xl rounded gradient-border flex-center">
            <span className=" bg-black text-white  px-2 py-1 rounded-md">
              F
            </span>
          </div>
        </div>
        <p className="text-xl 2xl:text-4xl font-bold">Fintrack</p>
      </div>

      <div
        className="nav-menu-container
      text-2xl 
      flex-center 
      w-10 h-10
      cursor-pointer
      "
        onClick={toggleNavbar}
      >
        {isOpen ? <MdClose /> : <FiMenu />}
      </div>

      <div
        className={`
      w-full h-full 
      lg:static top-16 
      flex lg:flex
      flex-col lg:flex-row
      lg:justify-between lg:items-center 
      gap-25 lg:gap-0 
      px-4 lg:px-8 py-10 lg:py-0 
      lg:opacity-100
      ${isOpen ? "opacity-100 z-100" : "opacity-0 hidden"} 
      ${isOpen ? "fixed inset-0 w-full bg-black overflow-hidden" : ""}`}
      >
        <ul
          className="lg:flex lg:justify-center lg:items-center lg:gap-8
        text-xl lg:text-[1rem] 2xl:text-3xl
        font-medium
        space-y-14 lg:space-y-0
        lg:mx-auto"
        >
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>
          </li>

          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("faq");
              }}
            >
              FAQs
            </a>
          </li>
        </ul>

        <div
          className="flex justify-between
        items-center lg:items-center
        gap-10 lg:gap-6 2xl:gap-10
        px-4"
        >
          <a href="https://github.com/vivekksahuu/Fintrack" target="_blank">
            {" "}
            <BsGithub
              className="text-4xl lg:text-2xl 2xl:text-5xl
            cursor-pointer
            hover:scale-110 
            transition-all duration-300 ease-in"
            />
          </a>

          <div className="gradient-border rounded p-0.5 2xl:p-1">
            <NavLink to="/app/form">
              <button className="nav-btn">Get Started</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
