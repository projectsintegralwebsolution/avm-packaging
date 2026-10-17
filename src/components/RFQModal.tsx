"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { products } from "@/data/products";
import { X, Send, PhoneCall, CheckCircle2, User, Phone, Mail, MapPin, FileText, Layers, ShieldCheck } from "lucide-react";

export default function RFQModal() {
  const { isOpen, selectedMachine, closeModal } = useQuoteModal();
  const [machine, setMachine] = useState(selectedMachine);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMachine(selectedMachine || (products[0]?.name ?? "Pouch Packaging Machine"));
  }, [selectedMachine]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          machine,
          city,
          notes,
          source: "RFQ Modal Popup",
        }),
      });
    } catch (err) {
      console.error("Enquiry submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeModal();
      }, 3500);
    }
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello AVM Packaging System, I am interested in getting a quotation for: ${machine}. My Name: ${name || "Client"}, Phone: ${phone || "N/A"}.`
    );
    window.open(`https://api.whatsapp.com/send?phone=918928852195&text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header with AVM Circular Emblem */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B192C] text-white">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white p-1 rounded-xl shadow-md shrink-0 flex items-center justify-center">
              <Image
                src="/images/avm-icon.png"
                alt="AVM Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 id="modal-title" className="text-base sm:text-lg font-bold text-white">
              Request Machinery Quote
            </h3>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-emerald-500 animate-bounce" />
              <h4 className="text-xl font-bold text-slate-900">Enquiry Received!</h4>
              <p className="mt-2 text-sm text-slate-600">
                Thank you, <strong>{name || "valued customer"}</strong>. Our machinery specialist will contact you on <strong>{phone}</strong> within 15 minutes with the technical quotation.
              </p>
              {email ? (
                <p className="mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-lg inline-block border border-emerald-200">
                  ✓ Confirmation email sent to {email}
                </p>
              ) : null}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#FF5E14]" />
                  <span>Selected Machinery Model</span>
                </label>
                <select
                  value={machine}
                  onChange={(e) => setMachine(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14] focus:border-transparent text-slate-800 font-medium"
                  required
                >
                  {products.map((p) => (
                    <option key={p.slug} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Mobile / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91-9876543210"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    <Mail className="w-3.5 h-3.5 text-sky-500" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sales@company.com"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>City / Country</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai, India"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  <FileText className="w-3.5 h-3.5 text-[#FF5E14]" />
                  <span>Packaging Requirements (Pouch Size / Speed / Product)</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. 50g to 200g chips pouch, speed 50-60 ppm, nitrogen flushing required"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#FF5E14] hover:bg-[#E04800] disabled:bg-slate-400 rounded-xl shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Submitting Request..." : "Submit Quotation Request"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  Instant WhatsApp
                </button>
              </div>
              <p className="text-[11px] text-center text-slate-500">
                Direct response from AVM Packaging engineers in Goregaon, Mumbai. Zero spam guaranteed.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
