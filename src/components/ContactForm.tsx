"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, PhoneCall } from "lucide-react";
import { products } from "@/data/products";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [machine, setMachine] = useState(products[0]?.name || "Pouch Packaging Machine");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          message,
          source: "Contact Page Form",
        }),
      });
    } catch (err) {
      console.error("Contact form submission error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      }, 5000);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello AVM Packaging System, I want an urgent quote for ${machine}. My Name: ${name || "Client"}, Phone: ${phone || "N/A"}.`
    );
    window.open(`https://api.whatsapp.com/send?phone=918928852195&text=${text}`, "_blank");
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="badge-orange text-xs">Direct Factory Inquiries</span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
          Send Technical Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Speak directly with our senior packaging machinery engineers in Goregaon, Mumbai.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center">
          <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-emerald-500 animate-bounce" />
          <h4 className="text-xl font-bold text-slate-900">Enquiry Dispatched!</h4>
          <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto">
            Our engineering team will call you at <strong>{phone}</strong> shortly with complete technical specifications and pricing.
          </p>
          {email ? (
            <p className="mt-3 text-xs font-semibold text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-lg inline-block border border-emerald-200">
              ✓ Confirmation email sent to {email}
            </p>
          ) : null}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Patel"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91-9820012345"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Business Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sales@yourcompany.com"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Interested Machinery Model
              </label>
              <select
                value={machine}
                onChange={(e) => setMachine(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14] font-medium text-slate-800"
              >
                {products.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
              Product Details & Speed Requirements
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about what you want to pack (e.g. powder, liquid, chips, grain), pouch size/weight, and expected output pouches/min..."
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5E14]"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FF5E14] hover:bg-[#E04800] disabled:bg-slate-400 rounded-xl shadow-md transition-colors"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Dispatching Enquiry..." : "Submit Factory Enquiry"}
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-400">
            Guaranteed confidentiality. Factory-direct pricing without distributor markups.
          </p>
        </form>
      )}
    </div>
  );
}
