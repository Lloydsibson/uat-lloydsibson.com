/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import CookieConsent from "./cookie-consent"
import LoadingScreen from "./loading-screen"
import WhatsAppWidget from "./whatsapp-widget"
import CovidApi from "./api-covid"
// import RealTimeApi from "./api-pop-up-notification"
import HeroSection from "./hero-section"
import DropNav from "./drop-nav"
import StaticNav from "./static-nav"
import About from "./about"
import Skills from "./skills"
import Portfolio from "./portfolio"
// import Codepen from "./codepen"
import ArrowUp from "./arrow-up"
import Testimonials from "./testimonials"
import MonoContactForm from "./mono-contact-form"
// import QuoteButton from "./quote-button"
import SocialLinks from "./social-links"
import Footer from "./footer"

import "./layout.css"

const Layout = () => (
  <div className="react-root">
    <Header />
    <CookieConsent />
    <LoadingScreen />
    <WhatsAppWidget />
    <CovidApi />
    {/* <RealTimeApi /> */}
    <HeroSection/>
    <StaticNav />
    <DropNav />
    <About />
    <Skills />
    <Portfolio />
    <Testimonials />
    <MonoContactForm />
    <ArrowUp />
    <SocialLinks />
    <Footer />
  </div>
)

export default Layout