import React from "react"

const Skills = () => (
  <section className="skills-container tag" id="skills">
    <div className="skills-title-container">
      <h2 className="heading">Skills</h2>
    </div>
    <div className="skill-icons-container">
      <img
        loading="lazy"
        src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/hjc-logo.png"
        className="skill-icons-one"
        alt="HTML, CSS and Javascript Icons"
        title="HTML5, CSS3 and Javascript"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013440/img/jrb-logo.png"
        className="skill-icons-two"
        alt="Jquery, React js and Bootstrap Icons"
        title="jQuery, ReactJS and Bootstrap"
      />
    </div>
    <div className="skills-content-container">
      <div className="skills-text-about">
        <div className="skills-text-about__two-wide-container">
          <div className="skills-two-wide-container">
            <div className="skill-type-title">Front-end Developer</div>
            <div className="skill-type-desc">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </div>
            <div className="skill-languages-title">
              Languages, Libraries &amp; Dev Tools:
            </div>
            <h5>HTML</h5>
            <h5>CSS</h5>
            <h5>JavaScript</h5>
            <h5>Jquery</h5>
            <h5>React.js</h5>
            <h5>Flexbox</h5>
            <h5>Bootstrap</h5>
            <h5>Accessiblity</h5>
            <h5>API Integration</h5>
            <h5>Version Control</h5>
          </div>
          <div className="skills-two-wide-container">
            <div className="skill-type-title">Designer</div>
            <div className="skill-type-desc">
              I value simple structure, clean design patterns, and
              thoughtful interactions.
            </div>
            <div className="skill-languages-title">
              Design Disciplines &amp; Tools:
            </div>
            <h5>UI/UX</h5>
            <h5>Graphic Design</h5>
            <h5>Figma</h5>
            <h5>A/B Testing</h5>
            <h5>Branding</h5>
            <h5>Interactive Design</h5>
            <h5>Adobe Creative Suite</h5>
            <h5>Visual Communication</h5>
            <h5>Responsive Web Design</h5>
            <h5>typography &amp; color theory</h5>
          </div>
        </div>
        <div className="skills-text-about__one-wide-container">
          And Many More...
        </div>
      </div>
    </div>
  </section>
)

export default Skills
