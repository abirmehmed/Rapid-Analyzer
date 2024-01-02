import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logo from "./image/LoGo.jpg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Application Logo" />
        <h1 className="app-name">Rapid Analyzer</h1>
      </div>
      <nav className={`navigation ${showMenu ? "show-menu" : ""}`}>
        <DesktopNav />
        <MobileNav showMenu={showMenu} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
