import React from "react";
import "./Footer.css";
import GitHubIcon from "./image/GitHub.png";
import CodeSandboxIcon from "./image/CodeSandbox.png";

const Footer = () => {
  return (
    
    <footer className="footer">
      <section id="credit">
      <div className="members">
        <p>Credits:</p>
        <ul>
          <li>Islam Md Abirul - ID no: 20170940</li>
          <li>Jabborov Sherzod - ID no: 20170910</li>
          <li>Nosirov Jamoliddin - ID no: 20170936</li>
        </ul>
      </div>
      <div className="icons">
        <a
          href="https://github.com/abirmehmed/Rapid-Analyzer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" className="github-icon" />
        </a>
        <a
          href="https://codesandbox.io/p/sandbox/broken-mountain-sgg27t-sgg27t?file=%2Fsrc%2FSentimentAnalysis.js%3A17%2C10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={CodeSandboxIcon}
            alt="CodeSandbox"
            className="codesandbox-icon"
          />
        </a>
      </div>
      </section>
    </footer>
    
  );
};

export default Footer;
