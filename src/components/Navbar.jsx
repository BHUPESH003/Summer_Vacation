import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { PAGES } from "../constants";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Logo from "../assets/images/logo.jpg.png";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <nav
      ref={navbarRef}
      className="text-black p-4 flex justify-between items-center NavBar"
      style={{ backgroundColor: "#ffff" }}
    >
      <div className="flex items-center">
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-2xl focus:outline-none mr-4"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <NavLink to={"/"}>
          <img
            src={Logo}
            alt="Logo"
            className={`h-12 ${isMenuOpen ? "hidden md:block" : ""}`}
          />
        </NavLink>
      </div>

      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="nav-menu"
        unmountOnExit
      >
        <ul className="flex flex-col items-center md:flex md:flex-row md:items-center">
          {PAGES.map((page) => (
            <li
              key={page.name}
              className="font-semibold text-base md:text-xl mr-4 transition duration-300 ease-in-out hover:opacity-75"
            >
              <NavLink
                to={page.path}
                onClick={handleCloseMenu} // Close menu on menu item click
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </CSSTransition>

      {!isMenuOpen && (
        <div className="flex items-center">
          <ul className="flex flex-col items-center md:flex md:flex-row md:items-center mobile">
            {PAGES.map((page) => (
              <li
                key={page.name}
                className="font-semibold text-base md:text-xl mr-4 transition duration-300 ease-in-out hover:opacity-75"
              >
                <NavLink
                  to={page.path}
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/*
          <NavLink to={"/profile"}>
            <FaUserCircle className="text-2xl md:text-xl ml-4" />
          </NavLink> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
