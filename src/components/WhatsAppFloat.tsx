"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleClick = () => {
    const text = encodeURIComponent("Hello AVM Packaging System, I would like to inquire about your packaging machines.");
    window.open(`https://api.whatsapp.com/send?phone=918928852195&text=${text}`, "_blank");
  };

  return (
    <aside aria-label="WhatsApp Quick Contact">
      <button
        onClick={handleClick}
        aria-label="Chat directly on WhatsApp with AVM Packaging System"
        className="fixed bottom-20 sm:bottom-24 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-wide hidden sm:inline">
          Chat with Engineer
        </span>
      </button>
    </aside>
  );
}
