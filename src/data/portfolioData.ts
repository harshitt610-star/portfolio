export interface ProjectPlanet {
  id: string;
  name: string;
  tagline: string;
  category: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  color: string;
  orbitRadius: number; // in px
  size: number;        // in px
  speed: string;       // css duration
  liveUrl?: string;
  githubUrl?: string;
  isCollab?: boolean;
}

export interface CollabRepo {
  name: string;
  role: string;
  description: string;
  tech: string[];
  org: string;
  repoUrl?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Harshit Tiwari",
    role: "React.js Developer & Systems Engineer",
    subRoles: ["TypeScript", "MERN Stack", "Interactive Hardware Simulators", "React Flow"],
    location: "Lucknow, India",
    phone: "+91-7080145353",
    email: "harshitt610@gmail.com",
    linkedin: "https://linkedin.com/in/harshit-tiwari02",
    github: "https://github.com/harshitt610-star",
    altGithub: "https://github.com/tiwharsh51",
    formspreeId: "xblrvvzw", // Formspree Form ID for harshitt610@gmail.com
    statusText: "Open to Opportunities · Software Developer @ Valorix Studio",
    summary:
      "React.js and TypeScript developer with 6 months of professional experience at Valorix Studio and 3 full-stack MERN projects shipped. Specializes in building high-performance simulation frontends (React Flow, AST parsers, custom SVG component models) and scalable MERN microservices.",
    credentials: {
      gate: "GATE CSE 2026 Qualified",
      degree: "B.Tech in Computer Science & Engineering",
      college: "Goel Institute of Technology and Management, Lucknow",
      score: "SGPA 8.5 / 10 (Aug 2023 – Jun 2026)"
    }
  },

  planets: [
    {
      id: "01",
      name: "Circuit Studio",
      tagline: "Browser Electronics & Hardware Simulator",
      category: "Simulation & Compiler Engine",
      role: "Software Developer @ Valorix Studio Private Limited",
      description:
        "High-performance interactive electronics simulator where engineers design virtual circuits using React Flow and execute firmware on simulated Arduino UNO, Raspberry Pi, and RP2040 boards.",
      highlights: [
        "Wrote a custom MicroPython parser & tokenizer in TypeScript (AST) to simulate RP2040 chip execution in browser",
        "Crafted 40–50 reusable sensor and component models with pixel-precise SVG artwork, interactive states & pin definitions",
        "Engineered custom React Flow simulation nodes with active current simulation and force-sensor ranges (0–10 N)"
      ],
      tech: ["React.js", "TypeScript", "React Flow", "MicroPython AST", "SVG Engine", "RP2040"],
      color: "#d8b56b", // Astral Gold
      orbitRadius: 190,
      size: 78,
      speed: "25s",
      isCollab: true
    },
    {
      id: "02",
      name: "Children's Digital Library",
      tagline: "Full-Stack Modular Monolith Monorepo",
      category: "TypeScript Monorepo Architecture",
      role: "Author & Lead Engineer",
      description:
        "Production-ready modular digital reading ecosystem comprising an Express REST API, React + Vite Admin dashboard, and Expo mobile reader application unified with shared Zod validation schemas.",
      highlights: [
        "Structured monorepo containing apps/api, apps/admin, apps/mobile and packages/shared",
        "Enforced end-to-end type safety with shared Zod schemas, Vitest test suites, and ESLint 9 audits",
        "Designed rich kids portal with 1-tap avatar login, web reading engine, and cross-viewport responsive fidelity"
      ],
      tech: ["TypeScript", "React + Vite", "Express.js", "Expo", "Zod", "Vitest", "Tailwind CSS"],
      color: "#f59e0b", // Amber Sun
      orbitRadius: 270,
      size: 70,
      speed: "32s",
      githubUrl: "https://github.com/harshitt610-star/childrens-digital-library"
    },
    {
      id: "03",
      name: "FARMIX",
      tagline: "AI-Powered Smart Precision Agriculture System",
      category: "AI & Telemetry Platform",
      role: "Full-Stack Creator",
      description:
        "Precision agricultural intelligence portal delivering real-time crop recommendations, disease detection, yield predictions, and meteorological telemetry.",
      highlights: [
        "Integrated multi-model AI recommendation APIs with live third-party weather telemetry feeds",
        "Built administrative CRUD management dashboard deployed on Vercel with responsive mobile-first views",
        "Architected complete Node.js/Express REST backend on MongoDB Atlas"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Models", "Weather APIs", "Tailwind CSS"],
      color: "#10b981", // Emerald Jade
      orbitRadius: 350,
      size: 66,
      speed: "40s",
      liveUrl: "https://farmixai.vercel.app",
      githubUrl: "https://github.com/tiwharsh51/Farmix"
    },
    {
      id: "04",
      name: "GateHub",
      tagline: "GATE CSE Self-Study & Preparation Portal",
      category: "EdTech & Video Platform",
      role: "Full-Stack Creator",
      description:
        "Dedicated examination study platform tailored for GATE CSE aspirants featuring student/admin panels, approval-gated access workflows, embedded video streaming, and PDF readers.",
      highlights: [
        "Hierarchical study organization categorizing content by Subject, Chapter, and Material Type",
        "Engineered approval-based student access control with secure JWT authentication",
        "Seamless in-app PDF document reader and embedded video lecture player"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "JWT Auth", "Express.js", "Vercel"],
      color: "#38bdf8", // Sky Cyan
      orbitRadius: 430,
      size: 62,
      speed: "48s",
      liveUrl: "https://gatehub-two.vercel.app",
      githubUrl: "https://github.com/harshitt610-star"
    },
    {
      id: "05",
      name: "Hotel Staff Management",
      tagline: "Real-Time Hospitality Operations Platform",
      category: "Enterprise Full-Stack System",
      role: "Full-Stack Engineer",
      description:
        "Comprehensive hotel operations engine coordinating real-time room turnarounds, staff shifts, service orders, and departmental permissions.",
      highlights: [
        "Built modular Express backend with TypeScript schemas, custom controllers, and seed automations",
        "Implemented real-time staff order routing, task assignment, and authentication middleware",
        "Optimized MongoDB models with indexing for high-frequency concurrent operations"
      ],
      tech: ["TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "React"],
      color: "#ec4899", // Neon Rose
      orbitRadius: 510,
      size: 58,
      speed: "56s",
      githubUrl: "https://github.com/harshitt610-star"
    },
    {
      id: "06",
      name: "ExamPrep",
      tagline: "High-Concurrency Online Examination Engine",
      category: "Assessment & Leaderboards",
      role: "MERN Stack Intern @ Softpro India",
      description:
        "Robust test-taking platform featuring timed quizzes, cryptographic password security, and real-time candidate leaderboards computed via MongoDB aggregation pipelines.",
      highlights: [
        "Designed scalable MongoDB schemas with indexing, input validation, and cloud deployment",
        "Engineered real-time leaderboard aggregation pipelines for instantaneous rank recalculations",
        "Built responsive test interface managing timed quiz states with React Hooks"
      ],
      tech: ["React.js", "Express.js", "MongoDB Aggregation", "JWT", "Bcrypt", "Tailwind CSS"],
      color: "#a855f7", // Violet Nebula
      orbitRadius: 590,
      size: 54,
      speed: "64s",
      isCollab: true
    }
  ] as ProjectPlanet[],

  collabOrganization: {
    orgName: "hrmanager-lab (Valorix Studio)",
    title: "Qubinex Hospitality & Multi-Role Platform Suite",
    description:
      "A commercial suite of multi-tier applications developed collaboratively at Valorix Studio, unifying hotel managers, on-ground staff, and resort guests.",
    repositories: [
      {
        name: "qubinex-platform",
        role: "Central Architecture & Panel Contracts",
        description: "Core ecosystem backend and shared data contracts orchestrating hotel services, coupon follow-ups, and guest outcome telemetry.",
        tech: ["TypeScript", "Express.js", "MongoDB", "Contracts"],
        org: "hrmanager-lab"
      },
      {
        name: "qubinex-hotel-manager",
        role: "Manager Control Center",
        description: "Enterprise management panel for hospitality executives with marketplace integrations, staff metrics, and revenue tracking.",
        tech: ["React.js", "TypeScript", "Tailwind CSS", "REST"],
        org: "hrmanager-lab"
      },
      {
        name: "qubinex-hotel-staff",
        role: "Staff Operations Portal",
        description: "Real-time task synchronization for hotel floor staff, housekeeping dispatch, and order fulfillment tracking.",
        tech: ["React.js", "TypeScript", "WebSockets", "REST"],
        org: "hrmanager-lab"
      },
      {
        name: "qubinex-guest",
        role: "Guest Facing Application",
        description: "Guest hospitality experience app featuring digital check-ins, marketplace service orders, and personalized coupons.",
        tech: ["React.js", "Mobile UX", "REST APIs"],
        org: "hrmanager-lab"
      }
    ] as CollabRepo[]
  },

  bentoSkills: [
    {
      id: "frontend",
      title: "Interactive Frontend & Simulation",
      subtitle: "Component Architecture & Visual Systems",
      skills: ["React.js", "React Flow", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "SVG Graphics", "Zustand"],
      highlight: "Custom canvas nodes, reactive state models & AST visualizers",
      colSpan: "col-span-12 lg:col-span-7"
    },
    {
      id: "backend",
      title: "Backend & Data Infrastructure",
      subtitle: "Scalable APIs & Persistence",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "MongoDB Schemas", "Aggregation Pipelines", "MySQL"],
      highlight: "Role-based auth, cloud database indexing & secure routing",
      colSpan: "col-span-12 lg:col-span-5"
    },
    {
      id: "simulation",
      title: "Embedded Simulation & AST",
      subtitle: "Hardware Emulation in Browser",
      skills: ["MicroPython AST Tokenizer", "RP2040 Pico Simulation", "Arduino UNO", "Raspberry Pi", "Pin Definitions & Sensors"],
      highlight: "Tokenizers, interpreters, and hardware state emulators in TypeScript",
      colSpan: "col-span-12 lg:col-span-5"
    },
    {
      id: "core",
      title: "Core CS & Verified Milestones",
      subtitle: "Engineering Rigor & Academics",
      skills: ["GATE CSE 2026 Qualified", "Data Structures & Algorithms (C++)", "Object-Oriented Programming (OOP)", "DBMS", "Git / GitHub Monorepos", "Postman", "Vercel"],
      highlight: "B.Tech CSE (SGPA 8.5/10) · Gate CSE 2026 · Google Cloud GenAI",
      colSpan: "col-span-12 lg:col-span-7"
    }
  ],

  experiences: [
    {
      role: "Software Developer",
      company: "Valorix Studio Private Limited",
      period: "May 2026 – Present",
      type: "Commercial Production Experience",
      points: [
        "Building the React and TypeScript frontend of Circuit Studio: a browser electronics simulator with React Flow, Arduino UNO, Raspberry Pi, and RP2040 boards.",
        "Developing 40–50 reusable sensor and component models, each with pixel-precise SVG artwork, pin definitions, and simulated states.",
        "Wrote a MicroPython parser and interpreter in TypeScript (tokenizer, AST) to simulate RP2040 chip behavior.",
        "Engineered custom React Flow nodes with interactive states (e.g. force sensor with 0–10 N dynamic response)."
      ]
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Softpro India Computer Technologies, Lucknow",
      period: "June – August 2025",
      type: "Internship",
      points: [
        "Built ExamPrep, an online exam platform with JWT authentication, role-based access, timed quizzes, and MongoDB aggregation leaderboards.",
        "Owned the full-stack lifecycle: React component-driven frontend, Express backend, and indexed MongoDB database.",
        "Implemented secure password hashing with bcrypt and custom React Hooks for real-time exam timers."
      ]
    }
  ],

  certifications: [
    { title: "GATE CSE 2026 Qualified", issuer: "GATE Committee", year: "2026", badge: "National Milestone" },
    { title: "Google Cloud: Introduction to Generative AI", issuer: "Google Cloud", year: "Oct 2025", badge: "AI Specialization" },
    { title: "Oracle: OCI AI Foundations Associate", issuer: "Oracle", year: "Oct 2025", badge: "Cloud & AI" },
    { title: "Virtual Labs Meet 2024", issuer: "IIT Kanpur", year: "2024", badge: "Systems & Lab Simulation" }
  ]
};
