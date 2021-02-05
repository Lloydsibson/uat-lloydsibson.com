import React from "react"

class AjaxPortfolioLinks extends React.Component {
  componentDidMount() {
    let pLinksContainer = document.querySelector(
      ".portfolio-container.-wos-links"
    )

    function loadMoreLinks() {
      
      // INSERTS LOADING ICON
      document.getElementById("more-button").innerHTML = '<img class="load-more-spinner" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013441/img/loading-icon.gif"/>'
      
      // REMOVES EVENT LISTERNER SO LOAD BUTTON DOESNT FIRE AGAIN ON SECOND CLICK
      document.getElementById("more-button").removeEventListener("click",loadMoreLinks);

      fetch(
        // *NOTE - EXISTS IN SEPERATE GITHUB REPO (SELECT RAW VERSION & GRAB URL)
        "https://raw.githubusercontent.com/Lloydsibson/json-data-repo/master/wos-links.json",
        {
          method: "GET",
        }
      )
        .then(resp => resp.json()) // Transform the data into json
        .then(function (data) {
          console.log(data)

          let testArray = data.links

          var result = ""

          for (let i = 0; i < testArray.length; i++) {
            //console.log("Looped")
            var elemArray = `<a href="${testArray[i][3]}">
              <div class="wos-most-recent-page-container">
                <img
                  class="most-recent-company-logo"
                  loading="lazy"
                  src="${testArray[i][0]}"
                  alt="${testArray[i][4]}"
                  title="${testArray[i][5]}"
                />
                <span>${testArray[i][1]}</span>
                <p>${testArray[i][2]}</p>
              </div>
            </a>`
            result += elemArray

            //console.log(testArray[i]);
            //IMAGE URL
            //console.log(testArray[i][0]);
            // TITLE
            //console.log(testArray[i][1]);
            // TECHNOLOGY
            //console.log(testArray[i][2]);
            // HREF URL
            //console.log(testArray[i][3]);
            // ALT
            //console.log(testArray[i][4]);
            // TITLE
            //console.log(testArray[i][5]);
          }
          // LOOP ENDS

          if (result.length > 0) {
            //setTimeout(function () {        
            //console.log("STEPPED IN")
            pLinksContainer.innerHTML =
              pLinksContainer.innerHTML +
              '<div class="portfolio-container -wos-links json-link tag"><div class="wos-portfolio-links">' +
              result +
              "</div></div>"
            setTimeout(function () {
              document.querySelector(".json-link").classList.add("visible")
              document.querySelector(".more-links").classList.add("-complete");
              document.getElementById("more-button").innerHTML = "Max Reached"

            }, 10)
          //}, 5000)
            //console.log(result);
          } else {
            // DO NOTHING
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

    document
      .getElementById("more-button")
      .addEventListener("click", loadMoreLinks)
  }

  render() {
    return (
      <div className="more-links">
        <div id="more-button">Show More</div>
      </div>
    )
  }
}

export default AjaxPortfolioLinks
