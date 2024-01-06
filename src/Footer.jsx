import React from "react";
import "./Footer.css";
import GitHubIcon from "./image/GitHub.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="github">
        <a
          href="https://github.com/abirmehmed/Rapid-Analyzer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" className="github-icon" />
        </a>
      </div>
      <div className="credit">
        <p>Credits:</p>
        <ul>
          <li>Islam Md Abirul - ID no: 20170940</li>
          <li>Jabborov Sherzod - ID no: 20170910</li>
          <li>Nosirov Jamoliddin - ID no: 20170936</li>
          <li>Takhirov Saydullo - ID no: 20170908</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
