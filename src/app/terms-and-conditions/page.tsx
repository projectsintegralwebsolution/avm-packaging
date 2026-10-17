import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions - AVM Packaging System",
  description: "Terms and conditions for packaging machinery orders, commissioning, and services by AVM Packaging System Mumbai.",
  alternates: {
    canonical: "https://avmpackagingsystem.com/terms-and-conditions.php",
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
      <div className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <span className="badge-orange text-xs">Legal & Compliance</span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>
          <div className="prose prose-slate text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              Welcome to <strong>AVM Packaging System</strong>. By accessing this website or purchasing packaging machinery, sealing systems, or spare components, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h3 className="text-lg font-bold text-slate-900">1. Quotations and Orders</h3>
            <p>
              All machine quotations, specifications, and delivery schedules provided via our website, email, or WhatsApp are valid for the duration indicated in the formal quotation document. Final machinery specifications, pouch dimensions, and electrical requirements must be approved prior to fabrication.
            </p>
            <h3 className="text-lg font-bold text-slate-900">2. Warranty and Commissioning</h3>
            <p>
              Machinery manufactured by AVM Packaging System includes warranty coverage against manufacturing defects in accordance with the signed commercial agreement. Consumable parts (such as teflon belts, heating elements, and silicone rubbers) are excluded from standard mechanical warranties.
            </p>
            <h3 className="text-lg font-bold text-slate-900">3. Jurisdiction</h3>
            <p>
              Any disputes arising out of the purchase of packaging machinery or use of this website shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
