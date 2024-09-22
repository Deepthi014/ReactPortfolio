import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
// import logo from "../assets/DeepthiLogo.png";

const Navbar = () => {
  const sidemenuRef = useRef(null);
  const menuRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const openMenu = () => {
    if (sidemenuRef.current && menuRef.current) {
      sidemenuRef.current.style.right = "0";
      menuRef.current.style.visibility = "hidden";
    }
  };

  const closeMenu = () => {
    if (sidemenuRef.current && menuRef.current) {
      sidemenuRef.current.style.right = "-250px";
      menuRef.current.style.visibility = "visible";
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sidemenu = sidemenuRef.current;
    const menu = menuRef.current;
    sidemenu.style.right = "-250px";
    menu.style.visibility = "visible";
  }, []);

  return (
    <>
      <div className="container">
        <div className="navbar_logo">
          <a href="#home" className="logo">
            <img src="public/assets/DeepthiLogo.png" alt="D_logo" />
          </a>
        </div>

        <div className="nav_links">
          <ul id="side_menu" ref={sidemenuRef}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#education">EDUCATION</a></li>
            <li><a href="#skill">MY SKILLS</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
        
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? (
                <i className='bx bx-moon'></i>
              ) : (
                <i className='bx bx-sun'></i>
              )}
            </button>

            <i className="bx bx-message-square-x" onClick={closeMenu}></i>
          </ul>
          <i className="bx bx-menu" id="menu" ref={menuRef} onClick={openMenu}></i>
          {/* <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
