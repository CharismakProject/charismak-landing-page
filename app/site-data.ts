import type { LucideIcon } from "lucide-react";

import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  Hammer,
  HardHat,
  Home,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

export const brand = {
  navy: "#0D3B66",
  charcoal: "#151B22",
  orange: "#8B1E00",
  gold: "#C8A45D",
  warm: "#F5F7FA",
};

export const mediaRules = {
  maxImagesPerProject: 30,
  maxVideosPerProject: 3,
};

export const company = {
  name: "Charismak Project Nigeria Limited",
  shortName: "Charismak",
  tagline: "Design, Cost & Build",
  rcNumber: "RC No: 1982890",

  email: "charismakprojectnigltd@gmail.com",

  phones: [
    "+234 706 661 9598",
    "+234 701 378 4027",
  ],

  addresses: [
    "Abuja, Nigeria",
    "No. 268, Kajola Street, Ikere-Ekiti, Ekiti State",
  ],

  about:
    "Charismak Project Nigeria Limited is a registered Nigerian construction company specializing in civil and building works, supply and installation, fabrication and fixing, consultancy, project and construction management, renovation, interior finishing, and professional construction services.",

  overview:
    "Charismak Project Nigeria Limited delivers building construction, civil engineering, project consultancy, renovation, steel fabrication, architectural finishing, and technical project management with a strong focus on quality supervision, transparency, and disciplined execution.",

  vision:
    "To become a leading benchmark for engineering excellence and construction delivery across Africa through quality craftsmanship, innovation, professionalism, and trusted project execution.",

  mission:
    "To deliver reliable construction, engineering, and project management solutions that consistently exceed client expectations through technical excellence, integrity, accountability, and structured delivery systems.",

  values: [
    "Integrity",
    "Transparency",
    "Professionalism",
    "Technical Excellence",
    "Client Satisfaction",
  ],
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  rate: number;
  unit: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  cover: string;
  images: string[];
  videos: string[];
  services: string[];
  location: string;
  status: string;
  featured?: boolean;

  mediaLimit: {
    maxImages: number;
    maxVideos: number;
  };

  adminEditable: boolean;
};

export type Person = {
  name: string;
  role: string;
  image: string;
  group: string;
  category: string;
  bio: string;
};

function projectImages(
  folder: string,
  count: number,
  extension: string = "jpg"
) {
  return Array.from({ length: count }, (_, index) => {
    return `/Images/Projects/${folder}/${index + 1}.${extension}`;
  });
}

function projectVideos(folder: string, count: number) {
  return Array.from({ length: count }, (_, index) => {
    return `/videos/${folder}/${index + 1}.mp4`;
  });
}

const defaultProjectMedia = {
  maxImages: mediaRules.maxImagesPerProject,
  maxVideos: mediaRules.maxVideosPerProject,
};

export const services: Service[] = [
  {
    title: "Building Construction",
    description:
      "Residential and commercial construction delivered through disciplined planning, quality supervision, controlled execution, and professional site management.",
    icon: Building2,
    rate: 185000,
    unit: "per sqm",
  },

  {
    title: "Civil Engineering",
    description:
      "Infrastructure construction including reinforced concrete systems, retaining structures, drainage systems, external works, and technical site development.",
    icon: HardHat,
    rate: 125000,
    unit: "per scope unit",
  },

  {
    title: "Renovation & Interior Design",
    description:
      "Modern renovation and interior transformation services including ceilings, wall finishes, lighting coordination, fittings installation, and finishing upgrades.",
    icon: Hammer,
    rate: 95000,
    unit: "per sqm",
  },

  {
    title: "Project Management",
    description:
      "Professional construction planning, project coordination, budget control, procurement management, contractor supervision, and delivery monitoring.",
    icon: ClipboardCheck,
    rate: 8,
    unit: "% of project value",
  },

  {
    title: "Steel Fabrication",
    description:
      "Steel fabrication and installation services for gates, structural frames, roofing systems, railings, metal support systems, and custom steel solutions.",
    icon: Factory,
    rate: 780000,
    unit: "per tonne",
  },

  {
    title: "Facility Maintenance",
    description:
      "Technical maintenance services covering inspections, repairs, operational support, preventive maintenance, and facility management solutions.",
    icon: Wrench,
    rate: 450000,
    unit: "monthly retainership",
  },

  {
    title: "Architectural Finishing",
    description:
      "Premium finishing services including tiling, screeding, painting, ceiling installation, facade detailing, fittings, and project handover finishing.",
    icon: DraftingCompass,
    rate: 72000,
    unit: "per sqm",
  },

  {
    title: "Residential Development",
    description:
      "Private residential development focused on durability, structural integrity, efficient planning, quality construction, and long-term property value.",
    icon: Home,
    rate: 210000,
    unit: "per sqm",
  },
];

export const workflow = [
  {
    title: "Planning & Consultation",
    text:
      "Every project begins with detailed planning, technical consultation, feasibility evaluation, and structured execution strategy.",
  },

  {
    title: "Design Coordination",
    text:
      "Integrated technical coordination ensures functionality, cost awareness, construction efficiency, and project buildability.",
  },

  {
    title: "Construction Execution",
    text:
      "Professional supervision and disciplined project coordination drive reliable construction delivery from inception to completion.",
  },

  {
    title: "Quality Handover",
    text:
      "Projects are completed with detailed inspections, finishing quality checks, documentation review, and structured handover processes.",
  },
];

export const projects: Project[] = [
  {
    slug: "coco-gwarimpa-project",

    title: "COCO Gwarimpa Project",

    category: "Direct Contract Construction",

    location: "Gwarimpa, Abuja",

    status: "Completed",

    featured: true,

    cover: "/Images/Projects/Coco-Gwarimpa/1.jpg",

    summary:
      "Premium residential construction project delivered directly under Charismak Project Nigeria Limited with detailed supervision, quality finishing, disciplined coordination, and structured project execution.",

    services: [
      "Building Construction",
      "Project Management",
      "Interior Finishing",
      "Quality Supervision",
      "Site Coordination",
    ],

    images: projectImages("Coco-Gwarimpa", 13, "jpg"),

    videos: projectVideos("Coco-Gwarimpa", 1),

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },

  {
    slug: "djibouti-residential-estate",

    title: "Djibouti Residential Estate",

    category: "Expatriate Consultancy",

    location: "Djibouti, East Africa",

    status: "Completed",

    featured: true,

    cover: "/Images/Projects/Djibouti/1.jpg",

    summary:
      "International residential development project involving expatriate consultancy, construction coordination, technical supervision, finishing oversight, and large-scale project execution.",

    services: [
      "Project Consultancy",
      "Site Supervision",
      "Technical Coordination",
      "Finishing Supervision",
      "Construction Monitoring",
    ],

    images: projectImages("Djibouti", 27, "jpg"),

    videos: projectVideos("Djibouti", 2),

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },

  {
    slug: "office-renovation-project",

    title: "Office Renovation Project",

    category: "Subcontract Renovation Works",

    location: "Abuja, Nigeria",

    status: "Completed",

    featured: true,

    cover: "/Images/Projects/Office-Renovation/1.jpg",

    summary:
      "Commercial office renovation and finishing project executed through coordinated subcontract delivery, interior transformation, quality finishing, and controlled execution.",

    services: [
      "Renovation",
      "Interior Finishing",
      "Painting",
      "Ceiling Installation",
      "Project Coordination",
    ],

    images: projectImages("Office-Renovation", 27, "jpg"),

    videos: projectVideos("Office-Renovation", 2),

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },

  {
    slug: "jahi-project-development",

    title: "Jahi Project Development",

    category: "Project Consultancy & Supervision",

    location: "Jahi, Abuja",

    status: "Ongoing",

    featured: true,

    cover: "/Images/Projects/Jahi/1.jpg",

    summary:
      "Residential building development involving project consultancy, structural supervision, technical coordination, finishing monitoring, and staged construction delivery.",

    services: [
      "Project Supervision",
      "Construction Consultancy",
      "Site Coordination",
      "Technical Inspection",
      "Quality Monitoring",
    ],

    images: projectImages("Jahi", 9, "jpg"),

    videos: projectVideos("Jahi", 1),

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },

  {
    slug: "flawless-spa-renovation",

    title: "Flawless Spa Renovation",

    category: "Subcontract Renovation Works",

    location: "Abuja, Nigeria",

    status: "Completed",

    cover: "/Images/Projects/Flawless-Spa/1.jpg",

    summary:
      "Interior renovation and finishing project executed directly under Charismak Project Nigeria Limited with emphasis on detailing, lighting coordination, premium finishing, and modern interior transformation.",

    services: [
      "Interior Renovation",
      "Architectural Finishing",
      "Lighting Coordination",
      "Premium Finishing",
      "Project Delivery",
    ],

    images: projectImages("Flawless-Spa", 27, "jpg"),

    videos: [],

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },

  {
    slug: "new-york-park-garden-estate-keffi",

    title: "New York Park & Garden Estate, Keffi",

    category: "Project Consultancy & Supervision",

    location: "Keffi, Nasarawa State",

    status: "Completed",

    cover: "/Images/Projects/Gate-House-Fence/1.jpg",

    summary:
      "Gate house and fence construction consultancy/project supervision for Adron Homes & Properties estate development works involving external works, masonry supervision, and coordinated construction delivery.",

    services: [
      "Project Consultancy",
      "Construction Supervision",
      "External Works",
      "Security Architecture",
      "Site Coordination",
    ],

    images: projectImages("Gate-House-Fence", 12, "jpg"),

    videos: [],

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },

  {
    slug: "other-project-supervision",

    title: "Project Supervision & Consultancy",

    category: "Project Consultancy",

    location: "Nigeria",

    status: "Ongoing",

    cover: "/Images/Projects/Other-Projects/1.jpg",

    summary:
      "Construction supervision, consultancy, inspection, and coordinated project monitoring across multiple active construction and engineering sites.",

    services: [
      "Construction Supervision",
      "Project Consultancy",
      "Inspection",
      "Site Monitoring",
      "Technical Advisory",
    ],

    images: projectImages("Other-Projects", 11, "jpg"),

    videos: projectVideos("Other-Projects", 2),

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },

  {
    slug: "residential-development",

    title: "Residential Development",

    category: "Direct Contract Construction",

    location: "Ikere-Ekiti, Ekiti State",

    status: "Completed",

    cover: "/Images/Projects/Residential/1.png",

    summary:
      "Private residential carcass construction project delivered directly under Charismak Project Nigeria Limited with focus on structural integrity, durability, and controlled construction execution.",

    services: [
      "Residential Construction",
      "Structural Works",
      "Concrete Works",
      "Site Supervision",
      "Project Delivery",
    ],

    images: projectImages("Residential", 6, "png"),

    videos: [],

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },

  {
    slug: "steel-fabrication-civil-works",

    title: "Steel Fabrication & Civil Works",

    category: "Subcontract Structural Works",

    location: "Abuja, Nigeria",

    status: "Ongoing",

    cover: "/Images/Projects/Steel-Fabrication/1.jpg",

    summary:
      "Steel fabrication and civil works project involving structural coordination, installation supervision, reinforced construction support, and engineering execution.",

    services: [
      "Steel Fabrication",
      "Civil Engineering",
      "Structural Installation",
      "Project Coordination",
      "Construction Support",
    ],

    images: projectImages("Steel-Fabrication", 30, "jpg"),

    videos: [],

    mediaLimit: defaultProjectMedia,

    adminEditable: true,
  },
];

export const people: Person[] = [
  {
    name: "Abiodun Christopher Akinola",

    role: "Executive Director / CEO & Project Director",

    image: "/Images/Team/CEO-HELMET.png",

    group: "Board of Directors",

    category: "Executive Leadership",

    bio:
      "A result-driven construction professional leading project execution, engineering coordination, technical supervision, and operational delivery across multiple construction disciplines.",
  },

  {
    name: "Adetiloye O. Adesida",

    role: "Non-Executive Director",

    image: "/Images/Team/ADESIDA.png",

    group: "Board of Directors",

    category: "Board Leadership",

    bio:
      "Provides strategic oversight and advisory support focused on operational growth, project governance, and institutional development.",
  },

  {
    name: "Ifeanyi E. Agada",

    role: "Non-Executive Director",

    image: "/Images/Team/AGADA.png",

    group: "Board of Directors",

    category: "Board Leadership",

    bio:
      "Supports governance structure, planning strategy, and long-term corporate development through professional advisory contributions.",
  },

  {
    name: "Seyi V. Fituyi",

    role: "Executive Director / Operations Lead",

    image: "/Images/Team/FITUYI.png",

    group: "Operational Leadership",

    category: "Executive Leadership",

    bio:
      "Leads operational coordination, project supervision, construction delivery, and site execution activities.",
  },

  {
    name: "Lawal Mamman",

    role: "Site Manager",

    image: "/Images/Team/LAWAL.png",

    group: "Project Delivery Team",

    category: "Project Operations",

    bio:
      "Coordinates workforce management, site logistics, and construction operations to ensure organized project execution.",
  },

  {
    name: "Paul Chukwudi Amiarah",

    role: "Project Supervisor",

    image: "/Images/Team/CHUKS.png",

    group: "Project Delivery Team",

    category: "Project Operations",

    bio:
      "Supports construction supervision, technical inspections, and coordinated field execution activities.",
  },

  {
    name: "Hammed K. Hamzat",

    role: "Contract Manager / Project Lead",

    image: "/Images/Team/HAMMED.png",

    group: "Project Delivery Team",

    category: "Technical Associates",

    bio:
      "Contributes to contract management, engineering supervision, and structured project coordination.",
  },

  {
    name: "Jude",

    role: "Construction Supervision",

    image: "/Images/Team/JUDE.png",

    group: "Project Delivery Team",

    category: "Technical Associates",

    bio:
      "Supports field supervision, operational coordination, and construction monitoring activities.",
  },

  {
    name: "Princebell",

    role: "Technical Coordination",

    image: "/Images/Team/PRINCEBELL.png",

    group: "Project Delivery Team",

    category: "Technical Associates",

    bio:
      "Supports technical coordination, reporting, documentation, and project administration.",
  },

  {
    name: "Samuel",

    role: "Design & Documentation",

    image: "/Images/Team/SAMUEL.png",

    group: "Project Delivery Team",

    category: "Technical Associates",

    bio:
      "Handles project documentation, design support, and operational coordination tasks.",
  },

  {
    name: "Toyin B. Akinola",

    role: "Client Relations",

    image: "/Images/Team/TOYIN.png",

    group: "Project Delivery Team",

    category: "Technical Associates",

    bio:
      "Supports communication management, client coordination, and project relationship operations.",
  },

  {
    name: "Wonder",

    role: "Quality Control Support",

    image: "/Images/Team/WONDER.png",

    group: "Project Delivery Team",

    category: "Technical Associates",

    bio:
      "Provides support for quality inspections, monitoring systems, and construction process control.",
  },
];

export const trustItems = [
  {
    title: "Quality Assurance",

    icon: ShieldCheck,

    text:
      "Routine inspections and technical checks maintain structural standards, workmanship quality, and finishing excellence.",
  },

  {
    title: "Skilled Workforce",

    icon: Users,

    text:
      "Experienced construction professionals coordinate project execution, supervision, procurement, and technical operations.",
  },

  {
    title: "Controlled Delivery",

    icon: BadgeCheck,

    text:
      "Structured supervision ensures transparency, accountability, cost awareness, and project discipline.",
  },
];
