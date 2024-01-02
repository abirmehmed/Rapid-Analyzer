import React from "react";

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
          <li>About</li>
          <li>Chart</li>
          <li>Credit</li>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
