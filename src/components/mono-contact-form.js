import React from "react"

class MonoContactForm extends React.Component {
  componentDidMount() {
    // var monocodeNavStatus = document.querySelector(".monocode-status").innerHTML
    // var monocodeContactAreaStatus = document.querySelector(
    //   ".monocode-contact-status"
    // )

    // monocodeContactAreaStatus.innerHTML = monocodeNavStatus
  }
  render() {
    return (
      <div className="section-container testimonial contact-cta tag visible" id="contact">
        <div className="mono-contact-form-container">
          <h2 className="heading">Lets Chat</h2>
          <div className="monocode-status live">Due To Demand Client Waiting Time: <span style={{display: "block"}}><u>6-8 Weeks</u></span></div>
          <div className="monocode-form-container">
          <div className="monocode-usp-container">
            <div>Front-End Web Development</div>
            <div>UI/UX Design &amp; Consultancy</div>
            <div>Social Media Assets</div>
            <div>Graphic Design</div>
          </div>
          <form action="https://formspree.io/f/mrgorgwn" method="POST">
            <div className="mono-contact-form-container__fields-container">
              <div className="info-fields-container">
                <label>
                  Name:
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="NAME"
                  ></input>
                </label>

                <label>
                  Email:
                  <input
                    required
                    type="email"
                    name="_replyto"
                    placeholder="EMAIL"
                  ></input>
                </label>

                <label>
                  Subject:
                  <input
                    required
                    type="text"
                    name="subject"
                    placeholder="SUBJECT"
                  ></input>
                </label>
              </div>

              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <div className="message-field-container">
                <label>
                  Message:
                  <textarea
                    required
                    name="message"
                    placeholder="MESSAGE..."
                  ></textarea>
                </label>
              </div>
            </div>

            <button type="submit">Send Message</button>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default MonoContactForm
