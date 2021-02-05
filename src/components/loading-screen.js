import React from "react"

class LoadingScreen extends React.Component {
  componentDidMount() {
    let loaComp = document.querySelector(".loading-screen")
    loaComp.classList.add("-show_page")
  }

  render() {
    return (
      <div id="loading-screen-js" className="loading-screen">
        <div className="in-development-container">
          <div className="lp-container">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <p>LOADING</p> */}
          </div>
        </div>
      </div>
    )
  }
}

export default LoadingScreen
