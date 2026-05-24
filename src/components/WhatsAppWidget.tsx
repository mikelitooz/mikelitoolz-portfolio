"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  const phoneNumber = "2348102654479";
  const message = encodeURIComponent(
    "Hey Israel, I just visited your site. I'm looking to [build an MVP / automate my workflow] and need a partner who moves fast. Are you available to chat?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#20b857] focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppWidget;
