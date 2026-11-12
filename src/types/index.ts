export interface SpecificationItem {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  h1: string;
  category: string;
  categoryId: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string;
  canonicalUrl: string;
  image: string;
  gallery?: string[];
  shortDescription: string;
  description: string;
  speed?: string;
  capacity?: string;
  power?: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  faqs?: FAQItem[];
  relatedSlugs?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featuredMachineSlugs: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  workingHours: string;
  catalogPdf: string;
}
