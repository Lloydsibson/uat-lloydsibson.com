import React from "react"
import WosStockApi from "./api-stocks-wos"
import GoogleNewsApi from "./api-google-news"

class AppleWatch extends React.Component {
  componentDidMount() {

    var dateAndTime = new Date();
    
    var currentDay = dateAndTime.getDay();
    var currentDate = dateAndTime.getDate().toString();
  
    // WATCH DAY

    var watchDay = document.querySelector(".smart-watch__date-container__day");
    
    switch(currentDay) {
    
        case 0:
        // code block
        watchDay.innerText = "Sun";
        break;
    
        case 1:
        // code block
        watchDay.innerText = "Mon";
        break;
    
        case 2:
        // code block
        watchDay.innerText = "Tue";
        break;
    
        case 3:
        // code block
        watchDay.innerText = "Wed";
        break;
    
        case 4:
        // code block
        watchDay.innerText = "Thur";
        break;
    
        case 5:
        // code block
        watchDay.innerText = "Fri";
        break; 
    
        case 6:
        // code block
        watchDay.innerText = "Sat";
        break; 
             
      default:
        // code block
        // DO NOTHING
    }
    
    
    // WATCH DATE
    var watchDate = document.querySelector(".smart-watch__date-container__date");
    watchDate.innerText = currentDate;

    // WATCH TIME
    var watchTime = document.querySelector(".smart-watch__date-container__time");
    // UPDATES EVERY 1 SECOND
    setInterval(function(){
        var dateAndTime = new Date();
        var currentHour = dateAndTime.getHours();
        var currentMinutes = dateAndTime.getMinutes();
        currentMinutes = ("0" + currentMinutes).slice(-2);
        var watchTimeAndMinutes = `${currentHour}:${currentMinutes}`;
        watchTime.innerText = watchTimeAndMinutes;
    }, 1000);

  }

  render() {
    return (
      <div className="smart-watch-container">
        <div className="smart-watch-container__inner-container">
          <img loading="lazy" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1609536150/img/apple-watch-mock-up.png" alt="Watch Face" title="Smart Watch"/>
          <div className="smart-watch-widgets"> 
          <div className="smart-watch__date-container">
              <div className="smart-watch__date-container__day">Day</div>
              <div className="smart-watch__date-container__date">Date</div>
          </div>
          <div className="smart-watch__date-container__time">00:00</div>
            <GoogleNewsApi />
            <WosStockApi />
          </div>  
          </div>
      </div>
    )
  }
}

export default AppleWatch
