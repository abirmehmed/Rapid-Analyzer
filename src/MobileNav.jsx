import React from "react";
import { Link } from "react-scroll";

const MobileNav = ({ showMenu, toggleMenu }) => {
  return (
    <div className="mobile-nav">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? "open" : ""}`}></div>
        <div className={`bar ${showMenu ? "open" : ""}`}></div>
        <div className={`bar ${showMenu ? "open" : ""}`}></div>
      </div>
      {showMenu && (
        <ul className="mobile-menu">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="chart" smooth={true} duration={500}>
              Analyze
            </Link>
          </li>
          <li>
            <Link to="credit" smooth={true} duration={500}>
              Credit
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
