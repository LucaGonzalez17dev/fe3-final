import React from 'react'
import { useContextGlobal } from "./utils/global.context";

const Footer = () => {

  const { theme } = useContextGlobal();

  return (
    <footer className="footer" id={theme.theme}>
      <img src="./images/DH.png" alt="DH-logo" />
      <div>
      <img className="networks" src="./images/ico-facebook.png" alt="facebook-logo" />
      <img className="networks" src="./images/ico-instagram.png" alt="instagram-logo" />
      <img className="networks" src="./images/ico-tiktok.png" alt="tiktok-logo" />
      <img className="networks" src="./images/ico-whatsapp.png" alt="whatsapp-logo" />
      </div>
    </footer>
  )
}

export default Footer
