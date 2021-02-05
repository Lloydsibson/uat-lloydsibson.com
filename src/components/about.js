import React from "react"

const About = () => (
  <section className="about-container tag" id="about">
    {/* <div className="grunge-border-bottom"></div> */}
    <h2 className="heading">About Me</h2>
    <img
      loading="lazy"
      src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1607887117/img/lk-photo-2020.jpg"
      className="about-me-photo lazy-load"
      alt="Head and shoulder portrait of Lloyd Sibson"
      title="Lloyd Sibson"
    />
    <h3 className="text-about">
        I'm a innovative developer with a design background. By combining both these
        worlds my employers, or clients save time and have a truly consistent
        bespoke solution.
    </h3>
    <img
      loading="lazy"
      className="time-line"
      src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597340310/img/new-time-line-tp.png"
      alt="Career timeline: University from 2009 until 2012, Freelance from 2012 until 2018, Eduspot from 2015 until 2018, AMO online from 2016 until 2017, and The Watches of Switzerland Group from 2018 until present."
      title="Career Timeline"
    />
    <img
      loading="lazy"
      className="time-line-vertical"
      src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597340310/img/new-time-line-vertical-tp.png"
      alt="Career timeline: University from 2009 until 2012, Freelance from 2012 until 2018, Eduspot from 2015 until 2018, AMO online from 2016 until 2017, and The Watches of Switzerland Group from 2018 until present."
      title="Career Timeline"
    />
  </section>
)

export default About
