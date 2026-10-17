"use client";

import React from "react";
import { Phone, MessageCircle, FileText, Send } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function MobileBottomBar() {
  const { openModal } = useQuoteModal();

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello AVM Packaging System, I want to inquire about packaging machinery.");
    window.open(`https://api.whatsapp.com/send?phone=918928852195&text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-900 border-t border-slate-800 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-4 gap-1 text-center">
        <a
          href="tel:+918928852195"
          className="flex flex-col items-center justify-center text-slate-300 hover:text-white py-1"
        >
          <Phone className="w-5 h-5 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Call Now</span>
        </a>
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center text-slate-300 hover:text-white py-1"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">WhatsApp</span>
        </button>
        <button
          onClick={() => openModal()}
          className="flex flex-col items-center justify-center text-white bg-[#FF5E14] hover:bg-[#E04800] rounded-lg py-1 shadow-sm"
        >
          <Send className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Get Quote</span>
        </button>
        <a
          href="/avmpackagingsystem.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-slate-300 hover:text-white py-1"
        >
          <FileText className="w-5 h-5 text-sky-400 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Catalog</span>
        </a>
      </div>
    </div>
  );
}
