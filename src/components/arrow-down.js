import React from "react"

const ArrowDown = () => (
  <a href="#about" id="arrowDown">
    <img     
      className="svg-arrow-down"
      src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1595496685/img/arrow_down.svg"
      aria-label="Click To Move Down The Page"
      title="Arrow Down"
      style={{display: "none"}}
    />
  </a>
)

// SCROLL INTO VIEW
// function arrowDown() {
//   const options = {
//     block: "start",
//     behavior: "smooth",
//     inline: "nearest",
//   }
//   document.getElementById("about-container").scrollIntoView(options)
// }

export default ArrowDown
