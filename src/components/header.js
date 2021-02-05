/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

// <HELMET> SENDS CODE TO <HEAD> COMPONENT
const Header = () => (
  <Helmet>
{/* GOSQUARED - API ANALYTICS TRACKING */}
    <script>{`!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.insertBefore(d,q)}(window,document,'script','_gs');_gs('GSN-109168-T');_gs('set', 'anonymizeIP', true);`}</script>
{/* HOTJAR TRACKING CODE FOR www.lloydsibson.com */}
<script>{`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2189120,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}</script>
{/* General Meta Tags */}
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta
      name="description"
      content="BA Front-End Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in JQuery, JavaScript and SAP. Visit website for enquiries and latest updates."
    />
    {/* Meta Tags for Social Media Sharing */}
    <meta
      property="og:title"
      content="Lloyd Sibson - Website Developer & Designer"
    />
    <meta
      property="og:description"
      content="BA Front-End Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in JQuery, JavaScript and SAP"
    />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1596712667/img/new-social-share-2020-2.jpg"
    />
    <meta property="og:url" content="https://lloydsibson.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      property="og:site_name"
      content="Lloyd Sibson - Website Developer & Designer"
    />
    <meta name="twitter:image:alt" content="Website Screenshot" />
    {/* Favicon Bundle for Website */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013673/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013673/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013673/favicon/favicon-16x16.png"
    />
    <link
      rel="manifest"
      href="https://res.cloudinary.com/cloudinary-ls-images/raw/upload/v1557013674/favicon/site.webmanifest"
    />
    <link
      rel="mask-icon"
      href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013674/favicon/safari-pinned-tab.svg"
      color="#00b5b8"
    />
    <meta name="apple-mobile-web-app-title" content="LS Portfolio" />
    <link
      rel="shortcut icon"
      href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013673/favicon/favicon.ico"
    />
    <meta name="application-name" content="LS Portfolio" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    {/* Tells Search Engines this is the main page */}
    <link rel="canonical" href="https://lloydsibson.com" />
    <title>Lloyd Sibson - Web Developer & Designer</title>
    {/* <!--
  //..........................................................................................................................
  //.IIIII..................33333....... WWW...WWWW...WWWWEEEEEEEEEEE.BBBBBBBBBB........DDDDDDDDD....EEEEEEEEEEEEVVV.....VVV..
  //.IIIII.................3333333...... WWW..WWWWWW..WWWWEEEEEEEEEEE.BBBBBBBBBBB.......DDDDDDDDDDD..EEEEEEEEEEEEVVVV...VVVV..
  //.IIIII.............<<.3333.3333..... WWW..WWWWWW..WWWWEEEEEEEEEEE.BBBBBBBBBBBB......DDDDDDDDDDDD.EEEEEEEEEEE.VVVV...VVVV..
  //.IIIII..........<<<<<.3333.3333......WWWW.WWWWWW.WWWW.EEEE........BBBB....BBBB......DDDD...DDDDD.EEEE........VVVV...VVVV..
  //.IIIII........<<<<<<<.....33333......WWWW.WWWWWWWWWWW.EEEE........BBBB....BBBB......DDDD....DDDD.EEEE........VVVV..VVVVV..
  //.IIIII......<<<<<<<<.....33333.......WWWWWWWWWWWWWWWW.EEEEEEEEEEE.BBBBBBBBBBB.......DDDD....DDDD.EEEEEEEEEEE..VVVV.VVVV...
  //.IIIII..... <<<<<........33333.......WWWWWWWWWWWWWWWW.EEEEEEEEEEE.BBBBBBBBBBB.......DDDD....DDDD.EEEEEEEEEEE..VVVV.VVVV...
  //.IIIII..... <<<<<..........3333......WWWWWWWWWWWWWWWW.EEEEEEEEEEE.BBBBBBBBBBBB......DDDD....DDDD.EEEEEEEEEEE..VVVV.VVVV...
  //.IIIII......<<<<<<<<.......3333.......WWWWWW..WWWWWW..EEEE........BBBB....BBBB......DDDD....DDDD.EEEE..........VVVVVVV....
  //.IIIII........<<<<<<<.3333.3333.......WWWWWW..WWWWWW..EEEE........BBBB....BBBB......DDDD...DDDDD.EEEE..........VVVVVVV....
  //.IIIII..........<<<<<.3333.3333.......WWWWWW..WWWWWW..EEEEEEEEEEE.BBBBBBBBBBBB......DDDDDDDDDDDD.EEEEEEEEEEE...VVVVVVV....
  //.IIIII.............<<.333333333.......WWWWWW...WWWWW..EEEEEEEEEEE.BBBBBBBBBBBB......DDDDDDDDDDD..EEEEEEEEEEE....VVVVV.....
  //.IIIII..................33333..........WWWW....WWWW...EEEEEEEEEEE.BBBBBBBBBBB.......DDDDDDDDD....EEEEEEEEEEE....VVVVV.....
  //..........................................................................................................................
    --> */}
  </Helmet>
)

export default Header
