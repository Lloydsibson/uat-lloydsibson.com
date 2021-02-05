import React from "react"

class CovidApi extends React.Component {
  componentDidMount() {
    fetch(
      "https://covid-19-data.p.rapidapi.com/country/code?format=json&code=GB",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "3a302db610mshce2a0ed556c0ff5p19e6d3jsn4efe1def0de6",
        },
      }
    )
      .then(resp => resp.json()) // Transform the data into json
      .then(function (data) {
        //console.log(data);
        // console.log(data[0].confirmed)
        // console.log(data[0].critical)
        // console.log(data[0].deaths)
        // console.log(data[0].recovered)

        var arrayLength = data.length

        //console.log(arrayLength);

        if (arrayLength > 0) {
          var yoMessage = document.getElementById("yo-message")

          // console.log(randomViewer)

          var ukConfirmed = data[0].confirmed
          var ukCritical = data[0].critical
          var ukDeaths = data[0].deaths
          var ukRecovered = data[0].recovered

          yoMessage.innerHTML = `
          <p>COVID-19 (LIVE)</p> 
          Confirmed - <strong>${ukConfirmed}</strong><br> 
          Recovered - <strong>${ukRecovered}</strong><br> 
          Critical (Daily) - <strong>${ukCritical}</strong><br> 
          Deaths - <strong>${ukDeaths}</strong>`

          var yoMessageAddClass = document.querySelector(
            ".yo-notification-info"
          )

          yoMessageAddClass.classList.add("-api");

          //SETS FADE IN DELAY WITH OPACITY CSS
          // setTimeout(function () {
          //   yoMessageAddClass.classList.add("-api");
          // }, 15000)
        } else {
          // DO NOTHING
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="yo-notification-info covid">
        <div className="yo-notification-info__inner-container">
          <img
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1599516306/img/uk-flag.png"
            alt="United Kingdom Flag"
          />
          <div id="yo-message">COVID API: OFFLINE</div>
        </div>
      </div>
    )
  }
}

export default CovidApi
