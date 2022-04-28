import Logo from "../asset/logo.png";
import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li><Link to="about" smooth={true} duration={500}>
            About
          </Link></li>
        <li><Link to="skills" smooth={true} duration={500}>
            Experience
          </Link></li>
        <li><Link to="work" smooth={true} duration={500}>
            Work
          </Link></li>
      </ul>

      {/* Hambuger */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Experience
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
