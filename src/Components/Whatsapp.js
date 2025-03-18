import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/2349013455798"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      {/* Option 1: Using react-icons */}
      <FaWhatsapp />
      
      {/* Option 2: Using a FontAwesome class (if you include the FontAwesome stylesheet in your index.html) */}
      {/* <i className="fab fa-whatsapp"></i> */}
      
      {/* Option 3: Simply using an emoji */}
      {/* 🟢 */}
    </a>
  );
};

export default WhatsappIcon;
