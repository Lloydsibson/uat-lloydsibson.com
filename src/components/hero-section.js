import React from "react"
import ArrowDown from "./arrow-down"
import CvLightBox from "./cv-lightbox"
import $ from "jquery"

class HeroSection extends React.Component {
  componentDidMount() {
    // JQUERY - SAFARI WINDOW FIX
    $(function () {
      $(".header-container").css("height", window.innerHeight + "px")
      // JQUERY - SCROLL INTO VIEW
      $(function () {
        $("a[href*=\\#]:not([href=\\#])").on("click", function () {
          var target = $(this.hash)
          if (target.length) {
            $("html,body").animate(
              {
                scrollTop: target.offset().top - 100, //<adjust offset
              },
              750
            )
            return false
          }
        })
      })
      // JQUERY - FADE IN FOR TITLES ON PAGE LOAD
      $(".nav-static-container, .svg-arrow-down, .background-logo")
        .delay(50)
        .fadeIn(1000)
      $(".text-h, .shout-h, .skills-h").delay(500).fadeIn(1000)

      // TYPE EFFECT ON TEXT
      setTimeout(function () {
        // array with texts to type in typewriter
        let dataText = ["Developer", "Designer", "Creative"]

        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
          // check if text isn't finished yet
          if (i < text.length) {
            // add next character to ID
            document.getElementById("type-text").innerHTML =
              text.substring(0, i + 1) + '<span aria-hidden="true"></span>'

            // wait for a while and call this function again for next character
            setTimeout(function () {
              typeWriter(text, i + 1, fnCallback)
            }, 100)
          }
          // text finished, call callback if there is a callback function
          else if (typeof fnCallback == "function") {
            // call callback after timeout
            setTimeout(fnCallback, 1500)
          }
        }
        // start a typewriter animation for a text in the dataText array
        function StartTextAnimation(i) {
          if (typeof dataText[i] == "undefined") {
            // DO NOTHING
          }
          // check if dataText[i] exists
          if (i < dataText.length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
              // after callback (and whole text has been animated), start next text
              StartTextAnimation(i + 1)
            })
          }
        }
        // start the text animation
        StartTextAnimation(0)
      }, 1900)

      // CARD FADE IN ON SCROLL
      $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $(".tag")

        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i]

          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
          } else {
            // DO NOTHING
          }
        }
      })

      // IF PAGE LOADS ON HEADER AREA - HIDE UNTIL SCROLL
      if ($(document).scrollTop() == 0) {
        $(document).on("scroll", "window", function () {
          var pageTop = $(document).scrollTop()
          var pageBottom = pageTop + $(window).height()
          var tags = $(".tag")

          for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]

            if ($(tag).position().top < pageBottom) {
              $(tag).addClass("visible")
            } else {
              // DO NOTHING
            }
          }
        })
        // IF PAGE LOADS ANYWHERE BELOW THE HEADER - SHOW ALL
      } else {
        $(function () {
          var tags = $(".tag")
          for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]
            $(tag).addClass("visible")
          }
        })
      }

    }) // DOC END
  }
  render() {
    return (
      <header id="particles-js" className="header-container">
        <div className="html-video-container">
        <video
            autoPlay
            loop
            muted
            playsInline
            ref="video"
            className="videoplayer"
            id="video"
            controlslist="nodownload"
            poster="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1610816567/img/video-placeholder.png"
          >
            <source
              type="video/mp4"
              src="https://res.cloudinary.com/cloudinary-ls-images/video/upload/v1610808503/img/Sunset-hb-vimeo-2k.mp4"
            />
          </video>
          <div className="mask"></div>
        </div>

        <img
          className="background-logo lazy-load"
          src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/logo-large-tp.png"
          alt="Background Logo"
          style={{ display: "none" }}
        />
        <div className="header-items">
          <h2 className="text-h" style={{ display: "none" }}>
            Hey! I'm Lloyd
          </h2>
          <div className="title-container">
            <h2 className="shout-h" style={{ display: "none" }}>
              Front-end
            </h2>
            <h2 className="shout-h type-text" style={{ display: "none" }}>
              <span id="type-text"></span>
            </h2>
          </div>
          <h3 className="skills-h" style={{ display: "none" }}>
            <div className="select-title">Founder Of Monocode</div>
            {/* Jquery | React.js | Javascrip */}
          </h3>
        </div>
        {/* IMPORTS ARROW DOWN & LIGHTBOX COMPONENTS */}
        <ArrowDown />
        <CvLightBox />
        {/* ASH / DUST EFFECT */}
        {/* <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
          <div className="snowflake">⬤</div>
          <div className="snowflake">●</div>
        </div> */}
      </header>
    )
  }
}

// SAFARI MOBILE FULL-HEIGHT(EQUAL TO 100vh) FIX
// let iosFix = window.innerHeight + "px";

export default HeroSection
