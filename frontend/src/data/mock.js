// Mock data for Ibrahim Tabash Portfolio

export const personalInfo = {
  name: "Ibrahim Tabash",
  title: "Creative Designer & Developer",
  subtitle: "I build designs that solve problems, inspire action, and drive success.",
  bio: "I am a passionate web developer specializing in backend development with Laravel and currently expanding my skills in frontend development with React. Final semester in Software Development at the Islamic University of Gaza. Motivated, eager to learn, and focused on innovative web solutions.",
  profileImage: "https://customer-assets.emergentagent.com/job_ibrahim-portfolio-4/artifacts/pt24ypqs_nano-banana-2025-09-16T22-33-13.png",
  location: "Gaza",
  email: "ibrahimtabash8@gmail.com",
  linkedin: "https://www.linkedin.com/in/ibrahim-tabash-18a0b2294",
  whatsapp: "+972567244201"
};

export const skills = [
  {
    id: 1,
    name: "Laravel / PHP",
    icon: "Code2",
    level: 90,
    category: "Backend"
  },
  {
    id: 2,
    name: "React / JavaScript",
    icon: "Monitor",
    level: 85,
    category: "Frontend"
  },
  {
    id: 3,
    name: "HTML5 / CSS3",
    icon: "Palette",
    level: 95,
    category: "Frontend"
  },
  {
    id: 4,
    name: "TailwindCSS & Bootstrap",
    icon: "Layers",
    level: 90,
    category: "Styling"
  },
  {
    id: 5,
    name: "MySQL Database",
    icon: "Database",
    level: 85,
    category: "Database"
  },
  {
    id: 6,
    name: "RESTful API Development",
    icon: "Globe",
    level: 88,
    category: "Backend"
  },
  {
    id: 7,
    name: "Web Deployment & Performance",
    icon: "Zap",
    level: 80,
    category: "DevOps"
  }
];

export const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Full-stack web applications using Laravel and React with modern development practices and responsive design.",
    features: ["Custom Web Applications", "E-commerce Solutions", "Content Management Systems", "API Integration"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centered design approach creating intuitive interfaces that enhance user experience and drive engagement.",
    features: ["Wireframing & Prototyping", "Responsive Design", "User Journey Mapping", "Design Systems"]
  },
  {
    id: 3,
    title: "Brand Design",
    description: "Comprehensive brand identity development including visual elements that communicate your brand's unique story.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"]
  },
  {
    id: 4,
    title: "CMS & Web Performance",
    description: "Content management solutions and performance optimization to ensure fast, scalable, and maintainable websites.",
    features: ["Custom CMS Development", "Performance Optimization", "SEO Implementation", "Security Enhancement"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Job Board Platform",
    category: "Graduation Project",
    description: "A comprehensive job portal featuring role-based access control, advanced job search with filters, and AI-powered candidate evaluation using ChatGPT API.",
    technologies: ["Laravel", "PHP", "MySQL", "ChatGPT API", "TailwindCSS"],
    features: [
      "Role-based access control (Job Seekers, Employers, Admins)",
      "Advanced job search with multiple filters",
      "AI-powered CV evaluation and matching",
      "Real-time notifications and messaging",
      "Application tracking system"
    ],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Photon Collective",
    category: "Design Project",
    description: "A modern creative agency website showcase featuring stunning visual design, smooth animations, and portfolio management system.",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Node.js"],
    features: [
      "Interactive portfolio gallery",
      "Smooth scroll animations",
      "Content management system",
      "Contact form integration",
      "Responsive design"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    status: "In Progress",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    category: "Web Application",
    description: "Admin dashboard for e-commerce management with real-time analytics, inventory management, and order processing.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
    features: [
      "Real-time sales analytics",
      "Inventory management",
      "Order processing system",
      "Customer management",
      "Revenue tracking"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const navItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "My Work", href: "#projects" },
  { id: 5, label: "Contact", href: "#contact" }
];

export const contactFormFields = {
  name: "",
  email: "",
  message: ""
};