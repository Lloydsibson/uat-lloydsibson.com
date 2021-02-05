import React from "react"
import { FaDownload } from 'react-icons/fa';

const StaticNav = () => (
  <nav id="top" className="nav-static-container" role="navigation" style={{display: "none"}}>
  <div id="home">
    <img
      className="nav-logo"
      src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/logo-small.png"
      alt="Website Logo"
      title="Logo"
    />
    <h1 className="logo-name">Lloyd Sibson BA (HONS)</h1>
    <p className="logo-name-mobile">Lloyd Sibson BA</p>
  </div>
  <div className="nav-links">
    <ul className="hide-nav">
      <li>
        <a href="#about" id="aboutNav">
          About
        </a>
      </li>
      <li>
        <a href="#skills" id="skillsNav">
          Skills
        </a>
      </li>
      <li>
        <a href="#portfolio" id="portNav">
          Experience
        </a>
      </li>
      <li>
        <a href="#social" id="linksNav">
          Links
        </a>
      </li>
      <li>
        <div className="cv-download cv-button">
          CV
          <FaDownload title="Download CV" />
        </div>
      </li>
    </ul>
  </div>
</nav>
)


export default StaticNav
