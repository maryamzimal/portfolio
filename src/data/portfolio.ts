// ============================================================
// PORTFOLIO DATA — Single Source of Truth
// All content derived from Muhammad Taimoor Jham's CV
// ============================================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  resumePath: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  featured: boolean;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ─── Personal Information ──────────────────────────────────
export const personal: PersonalInfo = {
  name: "Muhammad Taimoor Jham",
  title: "Software Engineer — MERN Stack Developer",
  tagline: "Building modern, scalable web experiences.",
  summary:
    "A passionate Full Stack Developer specializing in the MERN stack, with hands-on experience building responsive web applications, enterprise systems, and AI-powered platforms. Currently working at HawkLogix, Lahore, delivering production-grade software across healthcare, HR, and retail domains.",
  email: "taimoorjham@gmail.com",
  phone: "+92 305 6940949",
  linkedin: "https://www.linkedin.com/in/muhammad-taimoor-jham",
  location: "Lahore, Pakistan",
  resumePath: "/resume.pdf",
};

// ─── Professional Experience ───────────────────────────────
export const experience: Experience[] = [
  {
    id: "hawklogix",
    role: "Full Stack Developer",
    company: "HawkLogix",
    location: "Lahore, Pakistan",
    startDate: "May 2025",
    endDate: "Present",
    current: true,
    responsibilities: [
      "Built a fully responsive portfolio website using React, Tailwind CSS, PostgreSQL, and Node.js, resulting in a modern and professional web presence.",
      "Developed HRMS — a comprehensive Human Resource Management System with modules for employee records, attendance, leave management, and payroll.",
      "Contributed to EHR360.AI — an AI-powered Electronic Health Record platform with advanced patient management, clinical workflow automation, and intelligent data processing.",
      "Built POS — a feature-rich Point of Sale system supporting inventory management, real-time sales tracking, and reporting dashboards.",
    ],
    technologies: ["React", "Node.js", "Tailwind CSS", "PostgreSQL", "MongoDB"],
  },
  {
    id: "rocktech",
    role: "Front End Developer",
    company: "RockTech Digital",
    location: "Lahore, Pakistan",
    startDate: "May 2024",
    endDate: "January 2025",
    current: false,
    responsibilities: [
      "Developed a responsive portfolio website using HTML, CSS, and Bootstrap, ensuring cross-browser compatibility and mobile-first design.",
      "Built a dynamic To-Do List application with full task management functionality, including add, edit, delete, and completion toggling.",
      "Developed an e-commerce product page featuring comprehensive filtering, sorting, and cart management capabilities.",
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  },
];

// ─── Skills ────────────────────────────────────────────────
export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "jQuery", "React.js"],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Node.js"],
  },
  {
    category: "Database",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: ["Git"],
  },
  {
    category: "Design",
    icon: "Palette",
    skills: ["Graphic Designing"],
  },
];

// ─── Projects ──────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "hrms",
    title: "HRMS",
    category: "Enterprise Web App",
    description:
      "A comprehensive Human Resource Management System designed to streamline and automate core HR operations within an organization.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Employee records management",
      "Attendance tracking",
      "Leave management module",
      "Payroll processing",
    ],
    featured: true,
  },
  {
    id: "ehr360",
    title: "EHR360.AI",
    category: "AI-Powered Healthcare Platform",
    description:
      "An AI-powered Electronic Health Record platform with advanced patient management, clinical workflow automation, and intelligent data processing capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
    features: [
      "Advanced patient management",
      "Clinical workflow automation",
      "AI-driven data processing",
      "Electronic health records",
    ],
    featured: true,
  },
  {
    id: "pos",
    title: "POS",
    category: "Point of Sale System",
    description:
      "A feature-rich Point of Sale system built to handle day-to-day retail operations with real-time data and reporting.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: [
      "Inventory management",
      "Real-time sales tracking",
      "Reporting dashboards",
      "Transaction processing",
    ],
    featured: true,
  },
  {
    id: "todo",
    title: "To-Do List Application",
    category: "Frontend Application",
    description:
      "A dynamic task management application with full CRUD functionality for organizing and tracking daily tasks.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Add, edit, and delete tasks",
      "Task completion toggling",
      "Clean and responsive UI",
    ],
    featured: false,
  },
  {
    id: "calculator",
    title: "Calculator",
    category: "Frontend Application",
    description:
      "A clean, functional calculator application built with vanilla JavaScript, supporting standard arithmetic operations.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Standard arithmetic operations",
      "Keyboard support",
      "Responsive layout",
    ],
    featured: false,
  },
  {
    id: "landing",
    title: "Startup Landing Page",
    category: "Web Design",
    description:
      "A visually compelling and conversion-optimized landing page designed for a startup, showcasing modern layout and responsive design principles.",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    features: [
      "Mobile-first responsive layout",
      "Modern UI/UX design",
      "Cross-browser compatibility",
    ],
    featured: false,
  },
  {
    id: "blog",
    title: "Blog Website",
    category: "Web Application",
    description:
      "A structured blog website with clean content hierarchy, category-based navigation, and a polished reading experience.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Article listing and detail pages",
      "Category navigation",
      "Responsive typography",
    ],
    featured: false,
  },
];

// ─── Education ─────────────────────────────────────────────
export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Government College University Faisalabad",
    location: "Faisalabad, Pakistan",
    startDate: "August 2019",
    endDate: "August 2023",
  },
];

// ─── Social Links ──────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-taimoor-jham",
    icon: "Linkedin",
  },
  {
    platform: "Email",
    url: "mailto:taimoorjham@gmail.com",
    icon: "Mail",
  },
];
