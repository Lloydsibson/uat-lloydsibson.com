import React from "react"

const WhatsAppWidget = () => (
  <a href="https://api.whatsapp.com/send?phone=447462944899">
    <div className="whats-app-message-btn">
      <p>Message</p>
      <img
        className="whats-app-icon"
        src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1597417847/img/whatsapp-icon-2-tp.png"
        alt="Whatsapp Icon"
        title="Click On the Whatsapp Icon to Message Me"
      />
    </div>
  </a>
)

export default WhatsAppWidget
