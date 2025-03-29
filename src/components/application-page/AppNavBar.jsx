import { useState } from "react";
import { NavLink } from "react-router";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import NavLinkItems from "./NavLinkItems";

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className=" flex-center 
    text-white 
    border-b border-b-blue-100  "
    >
      <div
        className="w-full 
      flex justify-between items-center 
      p-4"
      >
        <NavLink to="/app/form" className="flex-center gap-2 px-3">
          <div className="flex-center gap-2">
            <div
              className="w-8 h-8 
            text-lg 
            rounded gradient-border 
            flex-center"
            >
              <span
                className=" bg-black 
              text-white 
              px-2 py-2 
              rounded-md"
              >
                F
              </span>
            </div>
          </div>

          <p className="text-xl lg:text-lg font-semibold">Fintrack</p>
        </NavLink>

        <div onClick={toggleNavbar} className=" cursor-pointer lg:hidden">
          {isOpen ? (
            <MdClose className="text-3xl " />
          ) : (
            <FiMenu className="text-3xl" onClick={toggleNavbar} />
          )}
        </div>
      </div>

      <ul
        className={`w-full h-full 
          absolute lg:static 
          top-15 
          flex lg:flex
          flex-col lg:flex-row
          lg:justify-center lg:items-center 
          gap-16 lg:gap-8 
          px-4 lg:px-8 py-10 lg:py-0 
          lg:max-w-fit lg:opacity-100
           
          ${isOpen ? "opacity-100 z-100" : "opacity-0 hidden"} 
          ${isOpen ? "fixed inset-0 w-full bg-[#030712] overflow-hidden" : ""}`}
      >
        <NavLinkItems to="/app/form" label="Form" closeNavbar={closeNavbar} />

        <NavLinkItems
          to="/app/expenses"
          label="Expenses"
          closeNavbar={closeNavbar}
        />

        <NavLinkItems
          to="/app/dashboard"
          label="Dashboard"
          closeNavbar={closeNavbar}
        />

        <NavLinkItems to="/" label="Landing Page" closeNavbar={closeNavbar} />
      </ul>
    </nav>
  );
};

export default AppNavBar;
