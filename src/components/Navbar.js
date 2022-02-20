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
      <ul className="nav_items">
        <li className="nav_links">
          <a href="#">Features</a>
        </li>
        <li className="nav_links">
          <a href="#">Pricing</a>
        </li>
        <li className="nav_links">
          <a href="#">Contact</a>
        </li>
        <li className="nav_links">
          <a href="#">Login</a>
        </li>
      </ul>
      <div className="toggle">
        <img className="toggle__hamburger" src={Hamburger} alt="" />
        <img className="toggle__close" src={Close} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
