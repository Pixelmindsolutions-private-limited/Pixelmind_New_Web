const entries = [
  [
    "enterprise-software",
    "Enterprise Software",
    "Connect teams and operational processes in a tailored platform.",
    "A connected operational workspace that brings important business information, permissions and workflows into one coherent environment.",
    [
      "Role-based dashboards",
      "Centralized records and reporting",
      "Approval and task workflows",
      "Integration with existing systems",
    ],
    [
      "Better operational visibility",
      "Consistent processes across teams",
      "A platform that can evolve with the organization",
    ],
  ],
  [
    "crm-solutions",
    "CRM Solutions",
    "Organize customer relationships, follow-ups and sales workflows.",
    "A customer relationship platform designed to help teams manage prospects, conversations, opportunities and ongoing relationships.",
    [
      "Lead capture and assignment",
      "Customer profiles and interaction history",
      "Pipeline and follow-up reminders",
      "Activity dashboards and reporting",
    ],
    [
      "More consistent follow-up",
      "A clearer view of the customer journey",
      "Shared context across customer-facing teams",
    ],
  ],
  [
    "erp-solutions",
    "ERP Solutions",
    "Bring essential business operations into a coordinated system.",
    "A unified operational system concept connecting core functions, shared records and management visibility.",
    [
      "Centralized master data",
      "Department-level workflows",
      "Approvals and operational records",
      "Management reporting",
    ],
    [
      "Reduced information silos",
      "More consistent operational records",
      "Improved cross-team coordination",
    ],
  ],
  [
    "inventory-management",
    "Inventory Management",
    "Improve visibility into products, stock movement and operations.",
    "A stock and inventory workspace for tracking items, locations, movements and replenishment activity.",
    [
      "Product and SKU management",
      "Stock-in and stock-out records",
      "Multi-location visibility",
      "Low-stock alerts and reports",
    ],
    [
      "Clearer stock visibility",
      "More controlled inventory movement",
      "Better-informed replenishment decisions",
    ],
  ],
  [
    "booking-management",
    "Booking Management",
    "Create clearer booking, scheduling and administration journeys.",
    "A booking platform concept that coordinates availability, reservations, customer information and operational schedules.",
    [
      "Availability and slot management",
      "Online booking journeys",
      "Rescheduling and cancellation flows",
      "Admin calendar and notifications",
    ],
    [
      "A simpler booking experience",
      "Fewer manual scheduling steps",
      "Better schedule visibility",
    ],
  ],
  [
    "business-management",
    "Business Management",
    "Bring everyday workflows and business information together.",
    "A practical management workspace for organizing routine operations, people, tasks and business information.",
    [
      "Centralized business dashboard",
      "Task and team coordination",
      "Document and record management",
      "Reports and activity summaries",
    ],
    [
      "More organized daily operations",
      "Clearer ownership and accountability",
      "A shared source of operational information",
    ],
  ],
  [
    "ecommerce-solutions",
    "E-commerce Solutions",
    "Build a commerce experience aligned with your products and customers.",
    "A digital storefront and commerce operating model focused on product discovery, purchase journeys and order administration.",
    [
      "Product catalogue and collections",
      "Cart and checkout experience",
      "Order and customer management",
      "Promotions and commerce integrations",
    ],
    [
      "A smoother shopping journey",
      "Flexible merchandising",
      "Connected order operations",
    ],
  ],
  [
    "workflow-automation",
    "Workflow Automation",
    "Reduce repetitive handoffs with connected processes.",
    "A workflow layer that maps recurring tasks, routes work to the right people and makes process status easier to understand.",
    [
      "Workflow and rule configuration",
      "Task routing and approvals",
      "Notifications and escalations",
      "Process status dashboards",
    ],
    [
      "Less repetitive coordination",
      "More consistent process execution",
      "Better visibility into pending work",
    ],
  ],
];
export const solutions = entries.map(
  ([slug, title, description, overview, features, benefits]) => ({
    slug,
    title,
    description,
    overview,
    features,
    benefits,
    modules: features.map((name, i) => ({
      name,
      detail: `A configurable ${name.toLowerCase()} capability designed around your operating process, user roles and reporting needs.`,
    })),
    technologies: [
      "React / Next.js",
      "Node.js APIs",
      "MongoDB",
      "Cloud deployment",
      "Third-party integrations",
    ],
  }),
);
