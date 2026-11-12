export const categories = ["Website", "App", "Digital Marketing", "Others"];

const BASE = "https://www.pixelmindsolutions.com";
const url = (path) => `${path}`;

export const projects = [
  // ───────────── WEBSITES ─────────────
  {
    slug: "pixelmindsolutions",
    title: "Pixelmindsolutions – IT Services Website",
    category: "Website",
    type: "Client project",
    industry: "IT Services",
    description:
      "Pixelmind Solutions is a leading IT services provider, offering innovative solutions in website development, mobile application design, and digital marketing.",
    stack: ["React", "Node.js", "MongoDB", "AWS", "Figma", "Tailwind CSS"],
    challenge:
      "Integrating multiple third-party services while maintaining performance.",
    solution: "Implemented a microservices architecture with a React frontend.",
    image: url("/images/portfolio/pixelmind.jpg"),
    icon: url("/images/portfolio/pixelmind.jpg"),
    links: { website: "https://www.pixelmindsolutions.com/" },
    highlights: ["Responsive design", "SEO optimized", "Content management"],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "6", label: "Technologies used" },
      { value: "3", label: "Core services showcased" },
    ],
  },
  {
    slug: "bingenjoy",
    title: "BingeNJoy – Private Theatre Booking & Celebration Platform",
    category: "Website",
    type: "Client project",
    industry: "Entertainment & Events",
    description:
      "A private theatre booking platform offering exclusive movie screening experiences for birthdays, anniversaries, proposals, family gatherings and other special occasions.",
    stack: ["React", "Express", "PostgreSQL", "Stripe", "Cloudinary"],
    challenge:
      "Traditional theatres lack privacy, and planning a celebration means managing venue, decoration, food and entertainment separately.",
    solution:
      "An all-in-one platform where users book a private theatre together with decorations, cakes, food and photography in a single online booking.",
    image: url("/images/portfolio/binenjoy.jpg"),
    icon: url("/images/portfolio/binenjoy.jpg"),
    links: { website: "https://bingenjoy.com/" },
    highlights: [
      "Private theatre booking with 4K projection and Dolby Atmos",
      "Birthday, anniversary and proposal packages",
      "Customized decoration, cake and food add-ons",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "4K", label: "Screening quality" },
    ],
  },
  {
    slug: "carnival-castle",
    title: "Carnival Castle – Private Theatre & Celebration Booking Platform",
    category: "Website",
    type: "Client project",
    industry: "Entertainment & Events",
    description:
      "A premium private theatre and celebration platform in Hyderabad for birthdays, anniversaries, proposals, baby showers and kids' parties.",
    stack: ["React", "Firebase", "Tailwind", "Stripe", "SendGrid"],
    challenge:
      "Traditional theatres offer no privacy for personal celebrations, and coordinating decorations, food and photography with multiple vendors is time-consuming.",
    solution:
      "A single booking platform for exclusive theatre spaces with customized decorations, cakes, food, photography and surprise add-ons.",
    image: url("/images/portfolio/carnival.jpg"),
    icon: url("/images/portfolio/carnival.jpg"),
    links: { website: "https://carnivalcastle.com/" },
    highlights: [
      "Online private theatre booking across Hyderabad locations",
      "15+ themed decoration options",
      "Secure online payment and WhatsApp assistance",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "15+", label: "Decoration themes" },
    ],
  },
  {
    slug: "techsterker",
    title: "Techsterker – IT Training & Career Development Platform",
    category: "Website",
    type: "Client project",
    industry: "EdTech",
    description:
      "An online IT training platform with industry-focused courses in Data Science, Full Stack Python, Generative AI and Data Analytics, backed by mentorship and placement support.",
    stack: ["React", "Node.js", "MongoDB", "AWS", "Zoom API"],
    challenge:
      "A gap between academic learning and industry requirements, with limited practical exposure and career guidance.",
    solution:
      "Project-based training with live classes, one-to-one mentoring, mock interviews, resume support and placement assistance.",
    image: url("/images/portfolio/tech.png"),
    icon: url("/images/portfolio/techlogo.png"),
    links: { website: "https://techsterker.com/" },
    highlights: [
      "Instructor-led live classes and hands-on projects",
      "Integrated learning management system",
      "Mock interviews and placement support",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "4", label: "Course tracks" },
      { value: "5", label: "Technologies used" },
    ],
  },
  {
    slug: "simcurarx",
    title: "SimcuraRX – Integrated Healthcare & IT Solutions Platform",
    category: "Website",
    type: "Client project",
    industry: "HealthTech",
    description:
      "A healthcare and technology company combining doctor consultations, medicine delivery and diagnostics with software, mobile app and digital marketing services.",
    stack: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
    challenge:
      "Fragmented healthcare and technology services, with manual workflows and limited access to integrated digital solutions.",
    solution:
      "An integrated ecosystem combining healthcare services with custom software, mobile apps and enterprise IT solutions.",
    image: url("/images/portfolio/clynixlogo.png"),
    icon: url("/images/portfolio/clynixlogo.png"),
    links: { website: "https://www.simcurarx.com/" },
    highlights: [
      "Doctor consultation and medicine delivery services",
      "Custom healthcare software and app development",
      "Secure, scalable cloud-based solutions",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "Health + IT", label: "Combined services" },
    ],
  },
  {
    slug: "editezy-design-platform",
    title: "EditEZY – Online Graphic Design Platform",
    category: "Website",
    type: "Client project",
    industry: "Creative Tools",
    description:
      "An easy-to-use poster and graphic design platform helping users create eye-catching posters, banners and social media creatives in minutes.",
    stack: ["React", "Node.js", "Canvas API", "AWS S3", "Tailwind CSS"],
    challenge:
      "Professional design software is complex and expensive, and mobile apps often lack the features needed for desktop workflows.",
    solution:
      "A web-based design editor with pre-sized templates, drag-and-drop tools and cloud project storage.",
    image: url("/images/portfolio/editezy.png"),
    icon: url("/images/portfolio/editezy.png"),
    links: { website: "https://editezy.com/" },
    highlights: [
      "Drag-and-drop editor with ready-made templates",
      "Social media size presets and high-resolution exports",
      "Brand kit and cloud storage for projects",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "Any browser", label: "No install needed" },
    ],
  },
  {
    slug: "varahi-self-drive-cars-website",
    title: "Varahi SelfDriveCars – Official Website",
    category: "Website",
    type: "Client project",
    industry: "Travel & Mobility",
    description:
      "The official website of a premier self-drive car rental service in Hyderabad, offering hatchbacks, sedans, SUVs and luxury cars.",
    stack: ["React", "Node.js", "MongoDB", "Google Maps API", "Stripe"],
    challenge:
      "Customers need detailed information and trust before booking, and a mobile-only app limits access for desktop users.",
    solution:
      "A transparent, informative booking website with detailed vehicle info, clear pricing and a secure online booking system.",
    image: url("/images/portfolio/carrentlogo.png"),
    icon: url("/images/portfolio/carrentlogo.png"),
    links: { website: "https://varahiselfdrivecars.com/" },
    highlights: [
      "Vehicle catalog with real-time availability",
      "Online booking with secure payments",
      "Pricing, insurance and rental policy information",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "4", label: "Vehicle categories" },
    ],
  },
  {
    slug: "vegiffy-website",
    title: "Vegiffyy – Vegetarian Food Delivery Website",
    category: "Website",
    type: "Client project",
    industry: "Food Delivery",
    description:
      "The website of a 100% pure vegetarian food delivery brand, serving as an informational hub and ordering platform for desktop users.",
    stack: ["React", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
    challenge:
      "Desktop users want a full browsing experience, and the brand needs to attract vendors and delivery partners while building trust in food purity.",
    solution:
      "A specialized, trustworthy platform highlighting verification processes, easy vendor onboarding and a smooth ordering experience.",
    image: url("/images/portfolio/veg.jpeg"),
    icon: url("/images/portfolio/veglogo.png"),
    links: { website: "https://vegiffy.com/" },
    highlights: [
      "Restaurant listings and menus",
      "Vendor and delivery partner sign-up portals",
      "Hygiene and quality standards information",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "100%", label: "Pure vegetarian" },
    ],
  },
  {
    slug: "redemly-website",
    title: "Redemly – Rewards Platform Website",
    category: "Website",
    type: "Client project",
    industry: "Rewards & Loyalty",
    description:
      "The central hub for Redemly's gamified rewards ecosystem, explaining how users earn coins and redeem them at local businesses.",
    stack: ["React", "Firebase", "Node.js", "GraphQL"],
    challenge:
      "Explaining a gamified model clearly, attracting local businesses and driving app downloads from web traffic.",
    solution:
      "A clear, engaging website with interactive elements and easy access for both users and merchants.",
    image: url("/images/portfolio/redemly.png"),
    icon: url("/images/portfolio/redemlylogo.png"),
    links: { website: "https://redemly.com/" },
    highlights: [
      "How-it-works guide and interactive coin calculator",
      "Participating business directory",
      "Merchant onboarding portal and Redemly Pro information",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "4", label: "Technologies used" },
      { value: "2", label: "Audiences: users & merchants" },
    ],
  },
  {
    slug: "editezy-services-website",
    title: "EditEZY – Professional Design Services Website",
    category: "Website",
    type: "Client project",
    industry: "Creative Services",
    description:
      "A website focused on EditEZY's professional design and bulk editing services for e-commerce brands and agencies.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    challenge:
      "Convincing enterprises of quality and security while handling large-volume requests and diverse e-commerce integrations.",
    solution:
      "Builds credibility through transparent processes, proven case studies and tailored enterprise solutions with dedicated support.",
    image: url("/images/portfolio/editezy.png"),
    icon: url("/images/portfolio/editezy.png"),
    links: { website: "https://editezy.com/" },
    highlights: [
      "B2B service packages and enterprise pricing",
      "Case studies and portfolio",
      "Bulk upload tool and client dashboard",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "4", label: "Technologies used" },
      { value: "B2B", label: "Target audience" },
    ],
  },
  {
    slug: "varahi-corporate-fleet",
    title: "Varahi SelfDriveCars – Corporate & Fleet Solutions",
    category: "Website",
    type: "Client project",
    industry: "Travel & Mobility",
    description:
      "A section of the Varahi website built for corporate clients and fleet managers, covering business travel, employee transport and long-term leasing.",
    stack: ["React", "Node.js", "MongoDB", "Excel Export"],
    challenge:
      "Meeting diverse corporate compliance requirements, detailed reporting and bulk-booking availability.",
    solution:
      "A corporate portal with automated reporting, flexible billing and dedicated support for business rentals.",
    image: url("/images/portfolio/carrentlogo.png"),
    icon: url("/images/portfolio/carrentlogo.png"),
    links: { website: "https://varahiselfdrivecars.com/" },
    highlights: [
      "Corporate account management and centralized billing",
      "Monthly usage reports and invoice generation",
      "Long-term leasing and priority booking",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "4", label: "Technologies used" },
      { value: "B2B", label: "Target audience" },
    ],
  },
  {
    slug: "nupura-car-service",
    title: "Nupura Car Service – Official Website",
    category: "Website",
    type: "Client project",
    industry: "Travel & Mobility",
    description:
      "A reliable and affordable car service provider's website covering self-drive rentals, chauffeur-driven cars and maintenance packages.",
    stack: ["React", "Vercel", "Node.js", "MongoDB"],
    challenge:
      "Standing out in a crowded market and building trust with new customers.",
    solution:
      "A clean, professional site that makes booking easy and service information accessible.",
    image: url("/images/portfolio/carservicelogo.png"),
    icon: url("/images/portfolio/carservicelogo.png"),
    links: { website: "https://nupuraselfdrivecars.vercel.app/" },
    highlights: [
      "Service catalog and fleet gallery",
      "Online booking system",
      "Transparent pricing and customer reviews",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "4", label: "Technologies used" },
      { value: "3", label: "Service types" },
    ],
  },
  {
    slug: "dharmadhwajam-website",
    title: "Dharmadwajam – News & Media Website",
    category: "Website",
    type: "Client project",
    industry: "News & Media",
    description:
      "A digital news portal delivering updates on culture, society, politics and current affairs, with a regional focus on Telangana and Andhra Pradesh.",
    stack: ["Next.js", "Firebase", "Node.js", "MongoDB"],
    challenge:
      "Maintaining editorial integrity, keeping up with real-time news and engaging readers.",
    solution:
      "A fast, engaging platform focused on quality content, visual storytelling and user experience.",
    image: url("/images/portfolio/news.png"),
    icon: url("/images/portfolio/news.png"),
    links: { website: "https://dharmadhwajam.vercel.app/" },
    highlights: [
      "Category-based browsing and search",
      "Video news and poster gallery",
      "Subscription plans and newsletter signup",
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "4", label: "Technologies used" },
      { value: "2", label: "Regional focus: TS & AP" },
    ],
  },

  // ───────────── APPS ─────────────
  {
    slug: "vegiffy-app",
    title: "VEGIFFY – 100% Pure Vegetarian Food Delivery Platform",
    category: "App",
    type: "Client project",
    industry: "Food Delivery",
    description:
      "A dedicated food delivery platform connecting customers with verified vegetarian restaurants, cloud kitchens, sweet shops and delivery partners.",
    stack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Google Maps",
      "Stripe",
    ],
    challenge:
      "Difficulty finding trusted 100% vegetarian restaurants, with concerns about food purity and cross-contamination.",
    solution:
      "A platform exclusively for pure vegetarian food with verified partners, fast delivery and growth opportunities for vendors and delivery partners.",
    image: url("/images/portfolio/veg.jpeg"),
    icon: url("/images/portfolio/veglogo.png"),
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.veggify.veegify",
      appStore: "https://apps.apple.com/in/app/vegiffy/id6757138352",
      video: "TafWxd87uUs",
    },
    highlights: [
      "Verified vegetarian restaurants and vendors",
      "Real-time order tracking",
      "Vendor, delivery partner and campus ambassador programs",
    ],
    metrics: [
      { value: "Android & iOS", label: "Platform" },
      { value: "6", label: "Technologies used" },
      { value: "100%", label: "Pure vegetarian" },
    ],
  },
  {
    slug: "redemly-app",
    title: "Redemly – Earn Coins, Redeem Local Rewards",
    category: "App",
    type: "Client project",
    industry: "Rewards & Loyalty",
    description:
      "A rewards platform where users earn coins through walking, quizzes, reading and a daily spin wheel, then redeem them for offers at local businesses.",
    stack: ["Flutter", "Firebase", "Node.js", "PostgreSQL", "Redis"],
    challenge:
      "Low customer engagement for local businesses, and no easy way for users to discover neighborhood offers.",
    solution:
      "Combines gamification with local commerce so users save money while merchants gain engagement, loyalty and repeat visits.",
    image: url("/images/portfolio/redemly.png"),
    icon: url("/images/portfolio/redemlylogo.png"),
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.srikanth.redeemly",
      appStore: "https://apps.apple.com/in/app/redemly/id6755115759",
      video: "QcvN_Pc4ue8",
    },
    highlights: [
      "Earn coins through steps, quizzes and daily spins",
      "Redeem coins at local businesses",
      "Redemly Pro for merchant coupons and loyalty",
    ],
    metrics: [
      { value: "Android & iOS", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "4", label: "Ways to earn coins" },
    ],
  },
  {
    slug: "editezy-photo-editing-app",
    title: "Editesy – Professional Photo Editing & Image Retouching Services",
    category: "App",
    type: "Client project",
    industry: "Creative Services",
    description:
      "A professional photo editing and retouching service for eCommerce businesses, photographers, brands and agencies.",
    stack: ["React Native", "Node.js", "MongoDB", "AWS S3", "WebGL", "Canvas"],
    challenge:
      "Low-quality product images reduce trust and conversions, and in-house editing is slow and expensive at scale.",
    solution:
      "Human-powered editing with fast turnaround and consistent quality, from background removal to retouching and shadows.",
    image: url("/images/portfolio/editezy.png"),
    icon: url("/images/portfolio/editezy.png"),
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.posternova.posternova",
      appStore: "https://apps.apple.com/in/app/editezy/id6753908761",
      video: "F_8uNhi-_n4",
    },
    highlights: [
      "Background removal, clipping paths and masking",
      "Ghost mannequin, color correction and retouching",
      "Bulk editing with fast turnaround",
    ],
    metrics: [
      { value: "Android & iOS", label: "Platform" },
      { value: "6", label: "Technologies used" },
      { value: "10+", label: "Editing services" },
    ],
  },
  {
    slug: "varahi-self-drive-cars-app",
    title: "Varahi Self Drive Cars – Self-Drive Car Rental Platform",
    category: "App",
    type: "Client project",
    industry: "Travel & Mobility",
    description:
      "A premium self-drive car rental platform in Hyderabad with hatchbacks, sedans, SUVs and luxury vehicles for daily, weekly or monthly rental.",
    stack: ["React Native", "Firebase", "Node.js", "MongoDB", "Google Maps"],
    challenge:
      "Limited flexibility with chauffeur-driven rentals, hidden charges and slow offline booking.",
    solution:
      "A fully digital rental platform with a diverse fleet, transparent pricing, flexible plans and simple online booking.",
    image: url("/images/portfolio/carrentlogo.png"),
    icon: url("/images/portfolio/carrentlogo.png"),
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.self_drive_cars",
      appStore:
        "https://apps.apple.com/in/app/varahi-self-drive-cars/id6753347255",
      video: "QcvN_Pc4ue8",
    },
    highlights: [
      "Daily, weekly and monthly rental plans",
      "Real-time vehicle availability",
      "Secure online booking and payments",
    ],
    metrics: [
      { value: "Android & iOS", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "3", label: "Rental plan types" },
    ],
  },
  {
    slug: "dharmadhwajam-app",
    title: "Dharmadhwajam – Digital News & Media Platform",
    category: "App",
    type: "Client project",
    industry: "News & Media",
    description:
      "A digital news app delivering fast, accurate coverage across Telangana, Andhra Pradesh, India and the world through articles, videos, posters and infographics.",
    stack: ["React Native", "Firebase", "Node.js", "MongoDB"],
    challenge:
      "Misinformation and unreliable sources, with verified regional and national news scattered across platforms.",
    solution:
      "Verified journalism in engaging formats, with bookmarks, premium plans and an intuitive reading experience.",
    image: url("/images/portfolio/news.png"),
    icon: url("/images/portfolio/news.png"),
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.dhama.dharmadhvajam",
      appStore: "https://apps.apple.com/in/app/dharmadhwajam/id6756093088",
      video: "ObYJ9K53HEA",
    },
    highlights: [
      "Breaking, regional, national and international news",
      "Video news, posters and infographics",
      "Bookmarks and premium subscription plans",
    ],
    metrics: [
      { value: "Android & iOS", label: "Platform" },
      { value: "4", label: "Technologies used" },
      { value: "3", label: "Content formats" },
    ],
  },
  {
    slug: "backup-ticket",
    title: "Backup Ticket – Ticket Resale & Marketplace Platform",
    category: "App",
    type: "Client project",
    industry: "Marketplace",
    description:
      "A secure peer-to-peer marketplace for buying and selling unused movie and bus tickets through verified transactions.",
    stack: ["Flutter", "Firebase", "Node.js", "PostgreSQL", "Stripe"],
    challenge:
      "Unused tickets go to waste, and informal resale channels lack trust, secure payments and fraud protection.",
    solution:
      "A dedicated marketplace with verified accounts, secure Razorpay payments, transparent listings and fraud prevention.",
    image: url("/images/portfolio/atoz.png"),
    icon: url("/images/portfolio/atoz.png"),
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.backup.backup_ticket",
      video: "fPOW_YzYiIc",
    },
    highlights: [
      "Buy and sell movie and bus tickets",
      "Secure Razorpay payments with transaction history",
      "Verified user accounts and fraud prevention",
    ],
    metrics: [
      { value: "Android", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "2", label: "Ticket types supported" },
    ],
  },
  {
    slug: "clynix-app",
    title: "CLYNIX – Online Medicine Delivery & Pharmacy Platform",
    category: "App",
    type: "Client project",
    industry: "HealthTech",
    description:
      "An online pharmacy app connecting users with verified, licensed pharmacies to order medicines, upload prescriptions and schedule recurring deliveries.",
    stack: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe"],
    challenge:
      "Slow access to trusted pharmacies, manual prescription handling and forgotten refills for recurring medication.",
    solution:
      "A secure platform with prescription upload, pharmacist verification, recurring delivery plans and doorstep delivery.",
    image: url("/images/portfolio/clynixlogo.png"),
    icon: url("/images/portfolio/clynixlogo.png"),
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.clynix.clynix",
    },
    highlights: [
      "Prescription upload with pharmacist verification",
      "Weekly and monthly recurring medicine plans",
      "Online payments and Cash on Delivery",
    ],
    metrics: [
      { value: "Android", label: "Platform" },
      { value: "5", label: "Technologies used" },
      { value: "2", label: "Payment options" },
    ],
  },

  // ───────────── DIGITAL MARKETING ─────────────
  {
    slug: "ss-air-conditioners",
    title: "SS Air Conditioners – Commercial & Industrial HVAC Solutions",
    category: "Digital Marketing",
    type: "Client project",
    industry: "HVAC Services",
    description:
      "Digital marketing for an HVAC solutions provider specializing in commercial, industrial and residential air conditioning design, installation and maintenance.",
    stack: ["SEO", "Google Ads", "Social Media", "Content Marketing"],
    challenge:
      "Reaching businesses searching for reliable commercial HVAC contractors in a competitive local market.",
    solution:
      "A multi-channel campaign combining SEO, Google Ads, social media and content marketing to showcase HVAC expertise.",
    image: url("/images/portfolio/ss.png"),
    icon: url("/images/portfolio/sslogo.png"),
    links: { website: "https://www.ssairconditioners.com/" },
    highlights: [
      "Search engine optimization",
      "Google Ads campaigns",
      "Social media and content marketing",
    ],
    metrics: [
      { value: "4", label: "Marketing channels" },
      { value: "SEO + Ads", label: "Core focus" },
      { value: "20+ yrs", label: "Client's industry experience" },
    ],
  },
];
