import {
  BriefcaseBusiness,
  CircleCheck,
  FileText,
  Flower2,
  Hammer,
  Lightbulb,
  SearchCheck,
  WalletMinimal
} from "lucide-react";
import { media } from "@/data/media";

export const navigationItems = [
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Jobs", href: "/jobs" },
  { label: "About Us", href: "/about" }
];

export const supportDetails = {
  address: "Ibukun House Plot 1637, Adetokunbo Ademola Street, Victoria Island Lagos.",
  email: "info@og-repair.com",
  phones: ["+234 802 897 3881", "+234 802 616 9018"],
  whatsapp: "Whatsapp"
};

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Twitter", href: "#", icon: "twitter" }
];

export const footerColumns = [
  {
    title: "Links",
    links: [
      { label: "Jobs", href: "/jobs" },
      { label: "Sign Up", href: "/signup" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Terms of Use", href: "#" },
      { label: "Enquiry", href: "#contact" }
    ]
  },
  {
    title: "Contact",
    links: [
      { label: supportDetails.email, href: `mailto:${supportDetails.email}` },
      { label: supportDetails.phones[0], href: `tel:${supportDetails.phones[0]}` },
      { label: supportDetails.phones[1], href: `tel:${supportDetails.phones[1]}` },
      { label: supportDetails.whatsapp, href: "#", external: true }
    ]
  }
];

export const homeServices = [
  {
    title: "Electrical",
    description: "Certified electricians available for all electrical repairs.",
    icon: Lightbulb
  },
  {
    title: "Plumbing",
    description: "Expert plumbers ready to assist you with any plumbing issues.",
    icon: BriefcaseBusiness,
    featured: true
  },
  {
    title: "Gardening",
    description: "Experienced gardeners to help maintain your outdoor space.",
    icon: Flower2
  },
  {
    title: "Carpentry",
    description: "Skilled carpenters for your furniture and repair needs.",
    icon: Hammer,
    featured: true
  }
];

export const homeNationwideThumbs = [
  { title: "Electrical repair", image: media.nationElectrician },
  { title: "Woodworking", image: media.nationWoodworker },
  { title: "Plumbing", image: media.nationPlumber },
  { title: "Gardening", image: media.nationGardener }
];

export const jobsList = [
  {
    slug: "forward-ac-repair",
    title: "Forward Ac Repair",
    company: "Fola ward",
    category: "Ac Repair Services",
    employmentType: null,
    salary: "$40000-$42000",
    location: "Lagos, Nigeria",
    posted: "10 min ago",
    service: "ac-repair-services",
    experienceLevel: "expert",
    datePosted: "last-24-hours",
    tags: ["engineering", "management"]
  },
  {
    slug: "integration-carpentry-workshop",
    title: "Integration Capentry workshop",
    company: "Mraz fin",
    category: "Capentry Services",
    employmentType: "Full time",
    salary: "$48000-$50000",
    location: "Abuja, Nigeria",
    posted: "15 min ago",
    service: "construction",
    experienceLevel: "intermediate",
    datePosted: "last-hour",
    tags: ["design", "ui-ux"]
  },
  {
    slug: "p-plumbing-and-co",
    title: "P Plumbing and Co",
    company: "paul P Samson",
    category: "Plumbing Services",
    employmentType: null,
    salary: "$38000-$40000",
    location: "Oyo, Nigeria",
    posted: "26 min ago",
    service: "financial-services",
    experienceLevel: "fresher",
    datePosted: "all",
    tags: ["soft", "construction"]
  },
  {
    slug: "ea-electrical-consultants",
    title: "E.A Electrical Consultants",
    company: "E. Adeboyega",
    category: "Electrical services",
    employmentType: null,
    salary: "$45000-$48000",
    location: "Lagos, Nigeria",
    posted: "30 min ago",
    service: "construction",
    experienceLevel: "expert",
    datePosted: "all",
    tags: ["engineering", "marketing"]
  }
];

export const jobDetail = {
  description:
    "Skilled and certified electrician with hands-on experience installing, maintaining, and repairing electrical systems in residential, commercial, and industrial environments. Adept at reading blueprints, diagnosing complex electrical issues, and ensuring all work meets current safety regulations and electrical codes.",
  responsibilities: [
    "Installed and upgraded wiring, lighting, and circuit systems according to client specifications and code standards",
    "Troubleshot electrical malfunctions and provided timely repairs to reduce downtime...",
    "Conducted routine maintenance checks on electrical systems to ensure reliability and safety",
    "Interpreted technical diagrams, electrical layouts, and building blueprints for accurate system planning",
    "Ensured all projects were completed on time and within budget, maintaining a high level of client satisfaction",
    "Maintained up-to-date knowledge of local electrical codes and safety regulations"
  ],
  certifications: [
    "Licensed Electrician – [Include License Number and State if applicable]...",
    "OSHA Safety Certification (if applicable)...",
    "[Add any additional certifications]..."
  ]
};

export const jobFilterGroups = [
  {
    label: "Category",
    value: "service",
    showMore: true,
    options: [
      { label: "Commerce", value: "commerce", count: 10 },
      { label: "Hotels & Tourism", value: "hotels-tourism", count: 10 },
      { label: "Construction", value: "construction", count: 10 },
      { label: "Financial Services", value: "financial-services", count: 10 }
    ]
  },
  {
    label: "Experience Level",
    value: "experienceLevel",
    options: [
      { label: "No-experience", value: "no-experience", count: 10 },
      { label: "Fresher", value: "fresher", count: 10 },
      { label: "Intermediate", value: "intermediate", count: 10 },
      { label: "Expert", value: "expert", count: 10 }
    ]
  },
  {
    label: "Date Posted",
    value: "datePosted",
    options: [
      { label: "All", value: "all", count: 10 },
      { label: "Last Hour", value: "last-hour", count: 10 },
      { label: "Last 24 Hours", value: "last-24-hours", count: 10 }
    ]
  },
  {
    label: "Tags",
    value: "tags",
    type: "tags",
    options: [
      { label: "engineering", value: "engineering" },
      { label: "design", value: "design" },
      { label: "ui/ux", value: "ui-ux" },
      { label: "marketing", value: "marketing" },
      { label: "management", value: "management" },
      { label: "soft", value: "soft" },
      { label: "construction", value: "construction" }
    ]
  }
];

export const aboutFeatures = [
  {
    title: "Transparent Pricing",
    description: "No surprises, just honest rates.",
    icon: WalletMinimal
  },
  {
    title: "Nationwide Coverage",
    description: "Serving homes and offices across Nigeria",
    icon: FileText
  },
  {
    title: "Find Professionals",
    description: "Skilled, background-checked, and experienced.",
    icon: SearchCheck
  },
  {
    title: "Customer Support",
    description: "Real people ready to assist when you need help.",
    icon: CircleCheck
  }
];

export const aboutTestimonials = [
  {
    title: "Repair Services",
    quote:
      "The team at Oga Repair did an outstanding job fixing my device. Their service was fast, reliable, and affordable. I highly recommend them to anyone looking for top-notch repair services.",
    author: "Marco Kihn",
    role: "Happy Client"
  },
  {
    title: "Repair Services",
    quote:
      "The team at Oga Repair did an outstanding job fixing my device. Their service was fast, reliable, and affordable. I highly recommend them to anyone looking for top-notch repair services.",
    author: "Marco Kihn",
    role: "Happy Client"
  },
  {
    title: "Repair Services",
    quote:
      "The team at Oga Repair did an outstanding job fixing my device. Their service was fast, reliable, and affordable. I highly recommend them to anyone looking for top-notch repair services.",
    author: "Marco Kihn",
    role: "Happy Client"
  }
];

export const faqItems = [
  {
    id: "upload",
    index: "01",
    question: "What kind of information can i upload",
    answer: "lorem lorem im tired of typing"
  },
  {
    id: "search-time",
    index: "02",
    question: "How long will the search process take?",
    answer:
      "Searches typically surface qualified repair professionals in moments, while final matching depends on your location and service type."
  },
  {
    id: "graduates",
    index: "04",
    question: "Do you recommend Graduates, Apprentices and Students?",
    answer:
      "We recommend professionals based on verified experience, background checks, and the fit for the kind of repair work being requested."
  },
  {
    id: "selection",
    index: "03",
    question: "What does the selection process involve?",
    answer:
      "Every professional profile goes through service verification, safety checks, and customer support review before appearing on the platform."
  },
  {
    id: "notifications",
    index: "05",
    question: "Can I receive notifications for any future Professionals that may interest me?",
    answer:
      "Yes. Once notifications are enabled, we can surface new professionals and service matches as they become available."
  }
];
