export const company = {
  name: "Pixelmindsolutions Pvt Ltd",
  tagline: "Ideas engineered into digital impact.",
  headline: "Transforming Ideas Into Powerful Digital Solutions",
  description:
    "We help ambitious businesses turn complex ideas into thoughtful digital products, modern applications and scalable software solutions.",
  overview:
    "Pixelmindsolutions partners with organizations to plan, design and build digital experiences that solve real business challenges. From first concept to continuous improvement, we bring product thinking and engineering together.",
  mission:
    "Make useful technology more accessible through thoughtful design and dependable engineering.",
  vision:
    "Build digital experiences that help businesses move forward with clarity and confidence.",
  values: [
    "Clarity over complexity",
    "People-first collaboration",
    "Thoughtful engineering",
    "Continuous improvement",
  ],
  contact: {
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "",
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "",
    whatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || "",
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "",
    hours: process.env.NEXT_PUBLIC_COMPANY_HOURS || "",
  },
  social: { linkedin: "", instagram: "", facebook: "", github: "" },
};
