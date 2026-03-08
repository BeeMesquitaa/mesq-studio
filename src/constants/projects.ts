import { PROJECTS_IMAGES, SERVICES_IMAGES } from "./images";

export const PROJECTS: IProjects[] = [
  {
    name: "Apex",
    year: "2026",
    image: PROJECTS_IMAGES[0],
  },
  {
    name: "Wild",
    year: "2026",
    image: PROJECTS_IMAGES[2],
  },
  {
    name: "Forge",
    year: "2026",
    image: PROJECTS_IMAGES[1],
  },
  {
    name: "Blaze",
    year: "2026",
    image: PROJECTS_IMAGES[3],
  },
];

export const SERVICES: IServices[] = [
  {
    title: ["Back", "Developer"],
    description:
      "Robust server-side architecture with Laravel and Node.js for scalable applications.",
    details: {
      title: "Backend Services",
      services: [
        "API Development",
        "Database Design",
        "Authentication & Security",
        "Third-party Integrations",
      ],
    },
    image: SERVICES_IMAGES[0],
  },
  {
    title: ["Frontend", "Development"],
    description:
      "Modern, responsive interfaces built with React, Next.js, and advanced animations.",
    details: {
      title: "Frontend Services",
      services: [
        "React & Next.js Apps",
        "GSAP Animations",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    image: SERVICES_IMAGES[1],
  },
  {
    title: ["Full-Stack", "Solutions"],
    description:
      "Complete web applications combining powerful backends with engaging user experiences.",
    details: {
      title: "Full-Stack Services",
      services: [
        "CRM Platforms",
        "Management Systems",
        "Real-time Features",
        "Analytics Dashboards",
      ],
    },
    image: SERVICES_IMAGES[2],
  },
];