import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy - AVM Packaging System",
  description: "Privacy policy and client data protection guidelines of AVM Packaging System Mumbai India.",
  alternates: {
    canonical: "https://avmpackagingsystem.com/privacy-policy.php",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <div className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <span className="badge-orange text-xs">Legal & Compliance</span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <div className="prose prose-slate text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              At <strong>AVM Packaging System</strong>, we respect your privacy regarding any information we may collect while operating our website (https://avmpackagingsystem.com). This Privacy Policy applies to our website and governs data collection and usage across our online services and customer communications.
            </p>
            <h3 className="text-lg font-bold text-slate-900">1. Information We Collect</h3>
            <p>
              When you submit an enquiry form or request a machinery quotation, we may collect personally identifiable information such as your name, corporate email address, contact telephone or WhatsApp number, company name, and specific packaging machinery requirements.
            </p>
            <h3 className="text-lg font-bold text-slate-900">2. How We Use Information</h3>
            <p>
              We use the collected information solely to provide accurate machinery quotations, technical specifications, dispatch updates, and after-sales service support. We do not sell, rent, or lease your personal information to third parties.
            </p>
            <h3 className="text-lg font-bold text-slate-900">3. Contact Us</h3>
            <p>
              For questions concerning this Privacy Policy, contact us at: <strong>info@avmpackagingsystem.com</strong> or visit our office at C Wing, Gala No 13, Sanjay Nagar, Near Cama Estate, Opp. Kusum Masala, Goregaon East, Mumbai - 400063, India.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
