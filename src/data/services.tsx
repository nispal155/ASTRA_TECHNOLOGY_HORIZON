import React from "react";
import { Code, Megaphone, LineChart, Cloud, Search, Smartphone } from "lucide-react";

export const servicesData = [
  {
    id: "custom-web-development",
    title: "Custom Web Development",
    description: "Tailored web applications engineered to solve specific operational challenges with modern, scalable architecture.",
    icon: <Code className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    details: "We build high-performance web applications using modern frameworks. Our focus is on clean architecture, security, and exceptional user experiences. From enterprise portals to custom SaaS platforms, we deliver robust solutions.",
    keyFeatures: [
      "Custom web application development",
      "Responsive and accessible frontend design",
      "Robust backend and API development",
      "Database design and integration",
      "Performance optimization and scalability"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-focused digital strategy and content marketing to expand brand awareness and drive customer acquisition.",
    icon: <Megaphone className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    details: "Our digital marketing services are driven by data and focused on ROI. We help you reach your target audience through strategic campaigns, ensuring your brand message resonates and converts.",
    keyFeatures: [
      "Comprehensive digital strategy",
      "Search Engine Marketing (SEM)",
      "Social media management and advertising",
      "Content creation and marketing",
      "Analytics tracking and reporting"
    ],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics", "HubSpot", "Ahrefs"]
  },
  {
    id: "dashboards-analytics",
    title: "Dashboards & Analytics",
    description: "Clear data visualizations and internal admin tools that provide actionable insights for decision-makers.",
    icon: <LineChart className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    details: "We transform complex data into intuitive, real-time dashboards. Our custom analytics solutions empower your team to make informed, data-driven decisions quickly and confidently.",
    keyFeatures: [
      "Custom interactive dashboards",
      "Real-time data visualization",
      "Business Intelligence (BI) integration",
      "Automated reporting systems",
      "Secure data handling and access control"
    ],
    technologies: ["Python", "d3.js", "Tableau", "PowerBI", "AWS QuickSight"]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    description: "Reliable cloud migration, deployment automation, and server management for consistent uptime.",
    icon: <Cloud className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    details: "Modernize your IT infrastructure with our cloud services. We handle migrations, optimize costs, and build secure, scalable environments that grow with your business.",
    keyFeatures: [
      "Cloud architecture and deployment",
      "Migration from legacy systems",
      "DevOps and CI/CD automation",
      "Scalability and load balancing",
      "24/7 monitoring and maintenance"
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"]
  },
  {
    id: "seo-performance",
    title: "SEO & Performance",
    description: "Technical SEO and speed optimizations designed to improve search visibility and page load speeds.",
    icon: <Search className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    details: "Increase your organic reach with our technical SEO and performance optimization services. We fine-tune your platform to rank higher and load faster, providing a superior user experience.",
    keyFeatures: [
      "Technical SEO audits and fixes",
      "Core Web Vitals optimization",
      "On-page and off-page strategy",
      "Performance profiling and tuning",
      "Schema markup and structured data"
    ],
    technologies: ["Lighthouse", "Semrush", "Google Search Console", "Vercel Edge", "Cloudflare"]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Cross-platform iOS and Android applications crafted for responsive performance and intuitive user experiences.",
    icon: <Smartphone className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    details: "We design and build powerful mobile applications that users love. Whether native or cross-platform, our apps deliver seamless performance, offline capabilities, and secure backend integration.",
    keyFeatures: [
      "iOS and Android application development",
      "Cross-platform development",
      "User-friendly and intuitive interfaces",
      "Secure API and backend integration",
      "Comprehensive testing and App Store deployment"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  }
];
