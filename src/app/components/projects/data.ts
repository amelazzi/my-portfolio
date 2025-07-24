import { ProjectDetails } from "@/types/projects";

export const projects: Record<string, ProjectDetails> = {
  Emerga: {
    title: "Real-Time Emergency Platform",
    role: "Full Stack Developer",
    logo: "/icons/logo-emerga.png",
    link: "https://emerga.fr",
    summary:
      "Built a real-time platform for emergency response teams with live data streams, interactive maps, and responder coordination. Delivered a seamless UX to agents in the field.",
    overview: `Emerga is a digital coordination platform connecting citizens with emergency services. It allows users to report incidents quickly, share real-time location and camera access securely, and receive support based on urgency level.
    My work focused on building scalable backend APIs, consent workflows, and seamless frontend UX to support high-stakes, real-time interactions.`,
    stacks: {
      roleStack: ["NodeJS", "RESTful APIs", "PostgreSQL", "ReactJS"],
      projectStack: ["RESTful APIs", "NodeJS", "ExpressJS"],
    },
  },
  mdmp: {
    title: "Smart City app",
    role: "iOS Developer",
    logo: "/icons/logo-mdmp.png",
    link: "https://apps.apple.com/fr/app/ma-m%C3%A9tropole-dans-ma-poche/id1483581052?l=en-GB",
    stats: {
      nbrDownloads: "10k+",
      rate: 3.8,
      reviews: 140,
    },
    summary:
      "Developed a city-focused mobile app enabling citizens to explore events, manage agendas, and locate key services. Contributed to its launch with 10K+ downloads.",
    overview: `SmartCity MAMP is a mobile application developed for the city of Marseille (France) to centralize and simplify access to local services, events, and urban resources.
        As a core contributor, I led the iOS development of the app, focusing on user experience, performance, and feature richness.
        The app enables citizens to:
        - Explore events in list and map views
        - Save events to a personalized agenda
        - Locate points of interest like services, landmarks, and institutions
        - Access city-related updates in a mobile-friendly, modern interface`,
    stacks: {
      roleStack: ["Swift", "UIKit", "MapKit"],
      projectStack: ["RESTful APIs", "NodeJS", "ExpressJS", "Android"],
    },
  },
  kairos: {
    title: " Train Staff Scheduling Tool - SNCF",
    role: "Backend Developer",
    logo: "/icons/logo-SNCF.svg",
    summary:
      "Optimized train staff planning using constraint-based logic and improved scheduling performance by 25%. Enhanced backend efficiency and business rule enforcement.",
    overview: `Kairos is a scheduling platform built for SNCF to automate and optimize the assignment of train staff across the national network.
        As a backend contributor, I developed and optimized key APIs using Node.js, TypeScript, and PostgreSQL. I worked on implementing constraint-based scheduling logic and improved data delivery speed to the frontend team.
        This project led to a 25% improvement in planning efficiency and significantly reduced manual coordination.`,
    stacks: {
      roleStack: ["REST APIs", "Nodejs", "PostgreSQL"],
      projectStack: ["ExpressJS", "ReactJS"],
    },
  },
  charriere: {
    title: " Order & Delivery Platform",
    role: "Backend Developer",
    logo: "/icons/logo-charriere.png",
    link: "https://apps.apple.com/fr/app/charriere-distribution/id6503040552?l=en-GB",
    summary:
      "Built a centralized API and dashboards to manage delivery operations. Streamlined order flow and improved visualization of key data points for internal teams.",
    overview: `At K-ciopé, I led the development of a secure, centralized order and delivery platform used across mobile and web dashboards.
    The system supported real-time order tracking, status updates, and detailed performance reporting. I also enhanced the dashboard UX with clear, actionable visualizations enabling better decision-making for logistics teams.`,
    stacks: {
      roleStack: ["REST APIs", "Nodejs", "PostgreSQL"],
      projectStack: ["ReactJS"],
    },
  },
  krapo: {
    title: "Activity Report Web App",
    role: "Frontend Developer",
    logo: "/icons/logo-krapo.svg",
    link: "https://krapo.front.dev.qualia.fr",
    summary:
      "Improved reporting accuracy and user experience through modern UI updates and data visualization enhancements for internal stakeholders.",
    overview: `At K-ciopé, I improved an internal activity reporting web application by refining its UI and integrating clearer data visualizations.
    The updates helped users generate and interpret performance reports more efficiently, reducing friction and boosting reporting accuracy across departments.`,
    stacks: {
      roleStack: ["ReactJS"],
      projectStack: ["NodeJS", "ExpressJS"],
    },
  },
};
