import React from "react"
import $ from "jquery"

class RealTimeApi extends React.Component {
  componentDidMount() {
    // var url = "https://www.lloydsibson.com"
    // $.getJSON(
    //   "https://api.gosquared.com/now/v3/visitors?api_key=....&site_token=.......&href=" +
    //     encodeURIComponent(url),
    //   function (data) {
    //     console.log(data)

    //     var arrayLength = data.list.length

    //     console.log(arrayLength)

    //     if (arrayLength > 0) {
    //       var yoMessage = document.getElementById("yo-message")
    //       var randomViewer =
    //         data.list[Math.floor(Math.random() * data.list.length)]

    //       console.log(randomViewer)

    //       var viewerCity = randomViewer.params.city
    //       var viewerCountry = randomViewer.params.country
    //       // var viewerPlatform = randomViewer.params.platformName;
    //       //var viewerBrowser = randomViewer.params.browserName;

    //       yoMessage.innerHTML = `Someone from ${viewerCity}, ${viewerCountry} recently viewed`

    //       //     var pageViewNumber = data.list.length;
    //       //      yoMessage.innerHTML = `Current Viewers: ${pageViewNumber}`;

    //       var yoMessageAddClass = document.querySelector(
    //         ".yo-notification-info"
    //       )

    // //SETS FADE IN DELAY WITH OPACITY CSS
    // setTimeout(function () {
    //   yoMessageAddClass.classList.add("-api");
    //   setTimeout(function () {
    //     yoMessageAddClass.classList.remove("-api");
    //   }, 10000)
    // }, 15000)

    //     } else {
    //       // DO NOTHING
    //     }
    //   }
    // )
  }

  render() {
    return (
      <div className="yo-notification-info">
        <div className="yo-notification-info__inner-container">
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/logo-small.png"
            alt="Monocode Viewer Logo"
          />
          <div id="yo-message"></div>
        </div>
      </div>
    )
  }
}

export default RealTimeApi
