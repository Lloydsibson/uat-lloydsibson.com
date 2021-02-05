import React from "react"

const theDate = new Date()
let footerDate = theDate.getFullYear()

const Footer = () => (
  <footer className="footer-container" id="footer-container">
        <p className="footer-text">
          <svg
            className="svg-inline--fa fa-copyright fa-w-16"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="copyright"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"
            ></path>
          </svg>
&nbsp;Lloyd Sibson <span>{ footerDate }</span>
        </p>
        <div className="stack-container">
          <p className="footer-text stack">Built with Gatsby &amp; React.js</p>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013441/img/react-logo.png"
            alt="react logo"
          />
        </div>
      </footer>
)


export default Footer
