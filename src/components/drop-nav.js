import React from "react"
import { FaDownload } from "react-icons/fa"

class DropNav extends React.Component {
  componentDidMount() {
    const navDropDown = document.querySelector(".nav-dropdown-container")
    const whatsAppButton = document.querySelector(".whats-app-message-btn")
    const yoNotification = document.querySelector(".yo-notification-info")

    var PREVIOUS_scroll_position = window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    window.onscroll = function () {
      var CURRENT_scroll_position = this.document.documentElement.scrollTop
      if (CURRENT_scroll_position > 600) {
        if (CURRENT_scroll_position > PREVIOUS_scroll_position) {
          navDropDown.classList.add("nav-down")
          whatsAppButton.classList.add("-show")
          yoNotification.classList.add("-show")
        } else {
          navDropDown.classList.remove("nav-down")
        }
      } else {
        navDropDown.classList.remove("nav-down")
        whatsAppButton.classList.remove("-show")
        yoNotification.classList.remove("-show")
      }
      PREVIOUS_scroll_position = CURRENT_scroll_position
    }
  }
  render() {
    return (
      <section className="nav-dropdown-container" id="nav-dropdown-container">
        <div className="nav-job-info-container">
          <a href="#home">
            <img
              loading="lazy"
              className="nav-logo"
              src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/logo-small.png"
              alt="Website Logo"
              title="Logo"
            />
          </a>
          {/*  <!-- <a href="#home" className="logo-name">Lloyd Sibson BA (HONS)</a> -->  */}
          <div className="logo-name-mobile">
            <div className="personal-status live">Open to Job Offers</div>
            <div className="personal-status offline">Not Open To Work/New Clients</div>
          </div>
        </div>
        <div className="nav-links">
          <ul className="hide-nav">
            <li>
              <a id="aboutDropNav" href="#about">
                About
              </a>
            </li>
            <li>
              <a id="skillsDropNav" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a id="portDropNav" href="#portfolio">
                Experience
              </a>
            </li>
            <li>
              <a id="linksDropNav" href="#social">
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
      </section>
    )
  }
}

export default DropNav
