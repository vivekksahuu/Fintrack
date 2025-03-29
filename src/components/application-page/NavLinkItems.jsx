import { NavLink } from "react-router"; // Ensure correct import

const NavLinkItems = ({ to, label, closeNavbar }) => {
  const handleMouseEnter = (e) => {
    e.target.style.border = "1px solid white";
    e.target.style.transition = "border 0.3s ease-in-out";
  };

  const handleMouseLeave = (e) => {
    e.target.style.border = "1px solid transparent";
  };

  return (
    <li>
      <NavLink
        to={to}
        onClick={closeNavbar}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-xl lg:text-[1rem] 
        rounded 
        px-3 py-1.5 
        lg:font-semibold 
        transition-all duration-300 ease-in-out"
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavLinkItems;
