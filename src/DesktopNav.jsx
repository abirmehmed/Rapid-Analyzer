import React from "react";
import { Link } from "react-scroll";

const DesktopNav = () => {
  return (
    <ul className="desktop-nav">
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
  );
};

export default DesktopNav;
