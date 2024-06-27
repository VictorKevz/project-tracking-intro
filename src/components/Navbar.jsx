import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

import iconClose from "../assets/images/icon-close.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import "./css/navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!isOpen);
  }

  return (
    <header className="header-wrapper">
    <nav className="nav-container">
      <figure className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </figure>
      <ul className={`nav-links-container ${isOpen ? 'open': ''}`}>
        
        <li className="nav-link">Product</li>
        <li className="nav-link">Features</li>
        <li className="nav-link">Pricing</li>
        <li className="nav-link dot"></li>
        <li className="nav-link login">Login</li>
      </ul>
      <div className="toggle-container" onClick={handleToggle}>
        <img
          src={isOpen ? iconClose : iconHamburger}
          alt={` ${isOpen ? "icon-close-menu" : "icon-hamburger-menu"}`}
        />
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
