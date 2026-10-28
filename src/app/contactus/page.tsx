import React from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - AVM Packaging System Mumbai India",
  description: "Contact AVM Packaging System in Goregaon East, Mumbai for automatic pouch packing machines, sealing machinery, and filling equipment. Direct phone: +91-8928852195.",
  keywords: "Contact AVM Packaging, Packaging Machine Manufacturer Mumbai, Packaging Machine Enquiry Mumbai, Goregaon Packaging Machinery",
  alternates: {
    canonical: "https://avmpackagingsystem.com/contactus.php",
  },
  openGraph: {
    title: "Contact Us - AVM Packaging System Mumbai India",
    description: "Contact AVM Packaging System in Goregaon East, Mumbai for automatic pouch packing machines, sealing machinery, and filling equipment.",
    url: "https://avmpackagingsystem.com/contactus.php",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Header Banner */}
      <section className="py-14 bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <span className="badge-orange mb-2">Connect Directly With Our Engineers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact AVM Packaging System
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Request an equipment quote, schedule a factory machine trial, or speak directly with our senior application technicians.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E14]">
                    Headquarters & Plant Location
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">Mumbai Manufacturing Facility</h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#FF5E14]" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Factory Address:</span>
                      <span>C Wing, Gala No 13, Sanjay Nagar, Near Cama Estate, Opp. Kusum Masala, Goregaon East, Mumbai - 400063, Maharashtra, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Phone Lines (Direct):</span>
                      <a href="tel:+918928852195" className="hover:text-[#FF5E14] block">+91-8928852195</a>
                      <a href="tel:+919029174133" className="hover:text-[#FF5E14] block">+91-9029174133</a>
                      <a href="tel:+919321485450" className="hover:text-[#FF5E14] block">+91-9321485450</a>
                      <a href="tel:+919869911733" className="hover:text-[#FF5E14] block">+91-9869911733</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-sky-600" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Email:</span>
                      <a href="mailto:avmsystems2016@gmail.com" className="hover:text-[#FF5E14] block">avmsystems2016@gmail.com</a>
                      <a href="mailto:salesavmpackaging@gmail.com" className="hover:text-[#FF5E14] block">salesavmpackaging@gmail.com</a>
                      <a href="mailto:info@avmpackagingsystem.com" className="hover:text-[#FF5E14] block">info@avmpackagingsystem.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-slate-700" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Plant Operational Hours:</span>
                      <span>Monday to Saturday: 9:00 AM – 7:00 PM IST</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Demonstrations and trial runs available on appointment.</span>
                </div>
              </div>

              {/* Instant WhatsApp Quick Banner */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Need Immediate Pricing?</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Chat directly with a sales engineer on WhatsApp.</p>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=918928852195&text=Hello%20AVM%20Packaging%20System%2C%20I%20want%20to%20inquire%20about%20packaging%20machines."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
                >
                  WhatsApp Now
                </a>
              </div>

            </div>

            {/* Right: Contact Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="px-5 py-3.5 sm:py-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E14]">Factory Navigation Map</span>
              <span className="text-xs text-slate-300 font-medium">Goregaon East, Mumbai, Maharashtra</span>
            </div>
            <div className="w-full h-[300px] sm:h-[340px] md:h-[360px]">
              <iframe
                title="AVM Packaging Systems Factory Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.5138934965403!2d72.8553337!3d19.1576389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7da2c7ee2cf%3A0xb19d4b2522946139!2sAVM%20PACKAGING%20SYSTEMS!5e1!3m2!1sen!2sin!4v1792736789652!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
