/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

// BRINGS IN EXTERNAL SCRIPTS - AT BOTTOM OF BODY
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    // JQUERY
    <script
      key="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
      crossOrigin="anonymous"
      defer
    />,
  ])
}
