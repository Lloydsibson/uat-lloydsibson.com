import React from "react"

let reviewCard = {
  review: [
    "Awesome team to work with, have done an incredible job on my website and the ongoing design. Would 10/10 recomend!!",
    "Such creative and perfectionist team, Lloyd has been doing a great job with my website, highly recommend to anyone.",
  ],
  name: ["Cameron Hamilton", "Beatriz Meireles"],
  companyName: ["Arclight Promotions", "Bea Sports Injury Clinic"],
  companyImg: [
    "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1595526500/img/arclight-logo.png",
    "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597538805/img/bea-sports-logo.png",
  ],
}

const Testimonials = () => (
  <div className="section-container -testimonial tag">
    <div className="testimonial-card" style={{border: "1px solid #404040"}}>
      <div className="testimonial-card__inner-container">
        <img
          className="card-comma"
          src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1598608828/img/quote-icon-tp.png"
          alt="comma icon 1"
       />
        <p className="card-review">{reviewCard.review[0]}</p>
        <p className="card-name">{reviewCard.name[0]}</p>
        <p className="card-company">{reviewCard.companyName[0]}</p>
        <div
          className="card-company-image"
          style={{ backgroundImage: `url(${reviewCard.companyImg[0]})` }}
        ></div>
      </div>
    </div>


    <div className="testimonial-card">
      <div className="testimonial-card__inner-container">
        <img
          className="card-comma"
          src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1598608828/img/quote-icon-tp.png"
          alt="comma icon 2"
        />
        <p className="card-review">{reviewCard.review[1]}</p>
        <p className="card-name">{reviewCard.name[1]}</p>
        <p className="card-company">{reviewCard.companyName[1]}</p>
        <div
          className="card-company-image"
          style={{ backgroundImage: `url(${reviewCard.companyImg[1]})` }}
        ></div>
      </div>
    </div>
  </div>
)

export default Testimonials
