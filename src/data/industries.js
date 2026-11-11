export const industries = [
  [
    "healthcare",
    "Healthcare",
    "Patient experiences, care coordination and connected health workflows.",
  ],
  [
    "education",
    "Education",
    "Learning platforms, student portals and education management tools.",
  ],
  [
    "retail",
    "Retail",
    "Digital storefronts, inventory workflows and customer experiences.",
  ],
  [
    "real-estate",
    "Real Estate",
    "Property discovery, lead management and booking experiences.",
  ],
  [
    "finance",
    "Finance",
    "Secure, clear financial workflows and customer-facing platforms.",
  ],
  [
    "logistics",
    "Logistics",
    "Operations tools for tracking, coordination and visibility.",
  ],
  [
    "travel-hospitality",
    "Travel & Hospitality",
    "Booking journeys and guest-facing digital services.",
  ],
  [
    "manufacturing",
    "Manufacturing",
    "Operational systems that connect teams, processes and information.",
  ],
  [
    "startups",
    "Startups",
    "MVPs and scalable product foundations for emerging businesses.",
  ],
  [
    "enterprise",
    "Enterprise",
    "Connected platforms for complex organizational needs.",
  ],
].map(([slug, title, description]) => ({
  slug,
  title,
  description,
  challenges: [
    "Disconnected tools and manual processes",
    "Changing customer expectations",
    "The need for reliable, useful digital experiences",
  ],
  opportunities: [
    "Simplify high-friction journeys",
    "Connect information and workflows",
    "Create a foundation for iteration",
  ],
  solutions: [
    "Custom web platforms",
    "Mobile applications",
    "Workflow automation",
  ],
}));
