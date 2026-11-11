export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com"
).replace(/\/$/, "");
export const companyName = "Pixelmindsolutions Pvt Ltd";
export const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "";
export const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "";
export const companyWhatsApp = process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || "";
export const companyAddress = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "";
export const companyHours = process.env.NEXT_PUBLIC_COMPANY_HOURS || "";
export const contactEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "";
export const bookingProviderUrl =
  process.env.NEXT_PUBLIC_BOOKING_PROVIDER_URL || "";
export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about", menu: "company" },
  { label: "Services", href: "/services", menu: "services" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Solutions", href: "/solutions", menu: "solutions" },
  { label: "Technologies", href: "/technologies" },
  { label: "Portfolio", href: "/portfolio", menu: "portfolio" },
  { label: "Resources", href: "/blog", menu: "resources" },
];
