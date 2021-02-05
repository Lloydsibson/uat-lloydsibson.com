import React from "react"

const SocialLinks = () => (
    <section className="contact-container" id="contact-container">
        <div className="contact-title-container">
            <h2 className="heading" id="social">Links</h2>
        </div>
        <div className="contact-content-container">
            <a href="https://www.linkedin.com/in/lloyd-sibson/"><img className="linkedin-logo" loading="lazy" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597956664/img/linkedin-white-logo-tp.png" alt="Linkedin logo" title="Click to message me on Linkedin" /></a>
            <a href="https://github.com/Lloydsibson"><img loading="lazy" title="Click to see my GitHub projects" alt="Github logo" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1580417409/img/github-logo-2020.png" className="github-logo" /></a>
            <a href="https://codepen.io/lloydsibson/"><img className="codepen-logo" loading="lazy" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597340310/img/codepen-logo.png" alt="Codepen logo" title="Click to see my Codepen projects" /></a>
       </div>
    </section>
)

export default SocialLinks