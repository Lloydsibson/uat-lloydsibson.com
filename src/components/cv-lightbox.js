import React from "react"
// import CvOnePage from '../static/ba-lloyd-sibson-front-end-developer-2020-1p.pdf';
import CvTwoPage from '../static/ba-lloyd-sibson-front-end-developer-2021-2p.pdf';


class CvLightBox extends React.Component {
    componentDidMount() {

        //const windowBodyEle = document.querySelector('body');
        //windowBodyEle.classList.add("cv-lightbox-lock");
        //windowBodyEle.classList.remove("cv-lightbox-lock");
        const cvCo = document.querySelector('.cv-lightbox-component');
        const cvBtn = document.querySelectorAll('.cv-button');

        for (let i = 0; i < cvBtn.length; i++) {
            cvBtn[i].addEventListener("click", function () {
                cvCo.classList.add("-open");
            });
        }
        document.querySelector('.cv-card-img').addEventListener("click", function () {
            cvCo.classList.remove("-open");
        });

    }

    render() {
        return (
            <div className="cv-lightbox-component">
                <div className="cv-lightbox-component__inner-container">
                    <div className="cv-card-container">
                        <div className="cv-card">
                            <img className="cv-card-img" loading="lazy" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597340310/img/close-button-tp.png" alt="Close Button"/>
                            <div className="cv-card__header">
                                <img loading="lazy" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1607887117/img/lk-photo-2020.jpg" alt="cv profile" title="CV Photo" />
                                <h2>Lloyd Sibson BA</h2>
                                <h3>Front End Developer</h3>
                                <h4>Watches of Switzerland Group</h4>
                                <h5>JQuery | React | JavaScript | UI/UX</h5>
                                <div className="cv-links">
                                    <a href="https://www.linkedin.com/in/lloyd-sibson/"><img loading="lazy" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597956664/img/linkedin-white-logo-tp.png" alt="cv linkedin logo" title="Linkedin" /></a>
                                    <a href="https://github.com/Lloydsibson"><img loading="lazy" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1580417409/img/github-logo-2020.png" alt="cv github logo" title="Github" /></a>
                                    <a href="https://codepen.io/lloydsibson/"><img loading="lazy" src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597340310/img/codepen-logo.png" alt="cv codepen logo" title="CodePen" /></a>
                                </div>
                            </div>
                            {/* <a href={CvOnePage} download>One-Page.pdf</a> */}
                            <a href={CvTwoPage} download>Two-Page.pdf</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default CvLightBox