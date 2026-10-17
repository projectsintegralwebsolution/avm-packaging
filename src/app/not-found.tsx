import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-slate-50">
      <div className="max-w-md w-full text-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-5">
        <span className="badge-orange text-xs">Error 404</span>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Machinery Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The packaging machinery model or page you are looking for may have been updated or moved. Browse our complete machinery catalog below.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-primary text-xs"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            href="/pouch-packaging-machine"
            className="btn-outline-dark text-xs"
          >
            <span>Browse All Machinery</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
