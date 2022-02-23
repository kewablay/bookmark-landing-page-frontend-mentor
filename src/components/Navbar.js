import React from "react";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
import Logo from "../images/logo-bookmark.svg";

function Navbar() {
  return (
    <nav className="container">
      <div className="brand">
        <img src={Logo} alt="" />
      </div>
      <div className="nav_items">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
      </div>
      <div className="toggle">
        <img className="toggle__hamburger" src={Hamburger} alt="" />
        <img className="toggle__close" src={Close} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
