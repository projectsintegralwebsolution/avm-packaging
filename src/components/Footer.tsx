import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, Clock, FileText } from "lucide-react";
import { categories } from "@/data/categories";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800">
      {/* Upper Pre-footer Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-12 h-12 rounded-lg bg-[#FF5E14]/10 border border-[#FF5E14]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#FF5E14]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Industrial Grade Quality</h4>
              <p className="text-xs text-slate-400 mt-0.5">Heavy-duty SS 304/316 contact parts & PLC automation.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Rapid Pan-India Support</h4>
              <p className="text-xs text-slate-400 mt-0.5">On-site installation, operator training & ready spare parts.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Official Machine Catalog</h4>
              <p className="text-xs text-slate-400 mt-0.5">Download full engineering specifications and layouts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white/95 hover:bg-white px-3 py-2 rounded-xl border border-slate-700/80 shadow-md inline-flex items-center transition-colors">
                <div className="relative w-44 sm:w-48 h-10">
                  <Image
                    src="/images/avmlogo.png"
                    alt="AVM Packaging System"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              AVM Packaging System is a recognized manufacturer, trader, supplier, and exporter of automatic packaging machines, sealing systems, powder/liquid fillers, and batch coders headquartered in Mumbai, India.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                <span>C Wing, Gala No 13, Sanjay Nagar, Near Cama Estate, Opp. Kusum Masala, Goregaon East, Mumbai - 400063, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+918928852195" className="hover:text-white transition-colors">+91-8928852195</a> / <a href="tel:+919029174133" className="hover:text-white transition-colors">+91-9029174133</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@avmpackagingsystem.com" className="hover:text-white transition-colors">info@avmpackagingsystem.com</a>
              </div>
            </div>
          </div>

          {/* Machinery Categories */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#FF5E14] pl-2">
              Machinery Lines
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link href={`/${c.slug}`} className="hover:text-[#FF5E14] transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Machines */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#FF5E14] pl-2">
              Featured Machinery
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/potato-chips-packing-machine" className="hover:text-[#FF5E14] transition-colors">
                  Potato Chips Packing Machine
                </Link>
              </li>
              <li>
                <Link href="/pouch-packaging-machine" className="hover:text-[#FF5E14] transition-colors">
                  Pouch Packaging Machine
                </Link>
              </li>
              <li>
                <Link href="/continuous-sealing-machine" className="hover:text-[#FF5E14] transition-colors">
                  Continuous Band Sealer
                </Link>
              </li>
              <li>
                <Link href="/vacuum-sealing-machine" className="hover:text-[#FF5E14] transition-colors">
                  Vacuum Sealing Machine
                </Link>
              </li>
              <li>
                <Link href="/auger-filling-machine" className="hover:text-[#FF5E14] transition-colors">
                  Auger Powder Filler
                </Link>
              </li>
              <li>
                <Link href="/carton-taping-machine" className="hover:text-[#FF5E14] transition-colors">
                  Carton Taping Machine
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#FF5E14] pl-2">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/aboutus" className="hover:text-[#FF5E14] transition-colors">
                  About AVM Packaging
                </Link>
              </li>
              <li>
                <Link href="/videogallery" className="hover:text-[#FF5E14] transition-colors">
                  Operational Video Demos
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="hover:text-[#FF5E14] transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <a href="/avmpackagingsystem.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5E14] transition-colors">
                  Download Catalog PDF
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#FF5E14] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#FF5E14] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclamier" className="hover:text-[#FF5E14] transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} AVM Packaging System. All Rights Reserved. Mumbai, Maharashtra, India.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-[11px] text-slate-600">
            <p>Engineered for high-throughput packaging automation.</p>
            <span className="hidden sm:inline text-slate-700">·</span>
            <p>
              Developed by{" "}
              <a
                href="https://integralwebsolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#FF5E14] transition-colors font-medium"
              >
                Integral Web Solution
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
