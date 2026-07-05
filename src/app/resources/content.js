const person = {
  firstName: "Shiraz",
  lastName: "Yousuf",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Versatile Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata",
  languages: ["English", "Malayalam", "Hindi"],
};

const newsletter = {
  display: false,
  title: `Get in touch with ${person.firstName}`,
  description: "Send me a message and I'll get back to you as soon as possible.",
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/itsshirazhere",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shiraz-yousuf/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shirazyousuf2017@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} — MVP Engineer for Startups`,
  description:
    "I build production-ready MVPs for startup founders — fast, scalable, without the overhead of a full engineering team.",
  headline: person.name,
  subline: "Curious engineer. Versatile builder. Product-first thinker. I go deep - from frontend to cloud infrastructure - and bring the product instinct to make the right technical decisions.",
  badges: [
    "Full-Stack Web",
    "Full-Stack App",
    "AWS Infra",
  ],
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name} — the engineer founders call when they need to ship fast without compromising quality.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: "I'm Shiraz — a full-stack engineer who specializes in turning startup ideas into production-ready products. I've shipped real-time systems, booking platforms, mobile apps, payment integrations, and cloud infrastructure for early-stage companies.\n\nI work the way a startup needs: fast, no fluff, and production-quality from day one. Whether you need a web app, a mobile app, or the entire technical stack — I can own the build end-to-end, so you don't need to hire a full engineering team before you've validated your idea.\n\nWhen I'm not building products, you'll find me on the football pitch or exploring new ways to solve real-world problems with technology.",
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Finmo",
        timeframe: "May 2025 — Present",
        role: "DevOps Engineer (Intern → Full-Time)",
        achievements: [
          "Reduced monthly AWS infrastructure costs by approximately 40% through resource optimization, storage lifecycle policies, logging retention improvements, network optimization, and infrastructure cleanup.",
          "Designed, deployed, and managed production Kubernetes infrastructure on Amazon EKS serving 28+ microservices across Production and QA clusters, supporting a 40+ engineer organization.",
          "Successfully executed three production Amazon EKS version upgrades with zero downtime while ensuring platform stability during live production deployments.",
          "Modernized the observability platform by migrating from Promtail to Grafana Alloy, upgrading the Kube Prometheus Stack, and expanding monitoring with Grafana dashboards, Prometheus, Loki, Telegraf, Alertmanager, and CloudWatch.",
          "Designed secure infrastructure using HashiCorp Vault, Vault PKI, and Consul for centralized secret management, internal TLS certificate provisioning, service discovery, and secure configuration management.",
          "Developed an AI-powered Infrastructure Assistant for production troubleshooting and infrastructure diagnostics, integrating Langfuse to monitor LLM usage, traces, and operational costs.",
        ],
        images: [
          {
            src: "/images/projects/project-01/finmo.png",
            alt: "HealthFlex platform",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Healthflex",
        timeframe: "March 2025 — May 2025",
        role: "Software Engineer",
        achievements: [
          "Shipped a real-time chat system supporting thousands of concurrent sessions using WebSockets, fully integrated with the mobile app.",
          "Built an appointment booking platform with complex scheduling logic, doctor–patient matching, and calendar synchronization.",
          "Engineered a multi-channel notification system (in-app, push, email) that increased user engagement by 40%.",
          "Set up automated CI/CD pipelines that reduced deployment time by 60% and eliminated manual release errors.",
          "Owned three products end-to-end: Stance Health website, HealthFlex mobile app, and the admin dashboard.",
        ],
        images: [
          {
            src: "/images/projects/project-01/healthflex.png",
            alt: "HealthFlex platform",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fleeguide",
        timeframe: "June 2024 — July 2024",
        role: "Full-Stack Developer",
        achievements: [
          "Built the entire platform from scratch — React frontend, Node.js REST APIs, PostgreSQL database — and shipped to production in under two months.",
          "Provisioned production-grade AWS infrastructure (EC2, S3, RDS, CloudFront).",
          "Integrated Razorpay for seamless payment processing and WhatsApp Business API for automated customer messaging flows.",
          "Delivered a mobile-optimized booking UX with React, resulting in high conversion rates from day one of launch.",
        ],
        images: [
          {
            src: "/images/projects/project-01/fleeguide.png",
            alt: "Fleeguide platform",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Idea2reality",
        timeframe: "Nov 2023 — Jan 2024",
        role: "Frontend Developer",
        achievements: [
          "Delivered 4 production apps across web and mobile (React.js + React Native) within 3 months: Qrooh, AKC, Qalb, and Fits-list.",
          "Independently bootstrapped the Fits-list mobile app from zero — architecture, UI design, API integration, and app store deployment.",
          "Built complex real-time chat interfaces for two of the apps, ensuring smooth concurrent user experience.",
          "Led technical decisions on project roadmapping, API design, and deployment workflows across the team.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "IIIT Dharwad",
        description: "Electronics and Communication Engineering.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: "JavaScript, TypeScript, HTML, CSS, SQL",
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Insights on building startups",
  description: `Thoughts on shipping products, startup tech, and lessons from the field by ${person.name}`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/[locale]/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/img-01.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-02.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-03.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-04.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-05.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-06.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-07.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-08.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-09.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-10.jpg", alt: "image", orientation: "horizontal" },
  ],
};

const services = {
  label: "Services",
  title: "What I build",
  description: `From idea to production — I build across the full stack, set up cloud infrastructure, and automate what slows you down.`,
  sections: [
    {
      title: "Build",
      subtitle: "Full-stack development, from product to infrastructure",
      items: [
        {
          icon: "code",
          title: "Full-Stack Web & Mobile",
          description: "Web and mobile apps built end-to-end — clean interfaces, reliable backend APIs, and cloud hosting. Production-ready from day one.",
          tags: ["Web Apps", "Mobile Apps", "Backend APIs", "Cloud Hosting"],
        },
        {
          icon: "shop",
          title: "E-commerce Websites",
          description: "Conversion-focused online stores with product management, secure payments, order tracking, and mobile-first design. Built to sell from launch.",
          tags: ["Secure Payments", "Order Tracking", "Mobile-First"],
        },
        {
          icon: "server",
          title: "Cloud Infrastructure",
          description: "Production-grade cloud setup — secure networking, scalable servers, managed databases, and automated deployments. Releases with automatic scaling.",
          tags: ["Cloud Setup", "Scalability", "CI/CD"],
        },
      ],
    },
    {
      title: "Automate",
      subtitle: "Smart systems that work while you focus on the business",
      items: [
        {
          icon: "sparkles",
          title: "AI Workflow Automation",
          description: "Replace manual work with AI — document processing, intelligent customer support, data extraction, and automated business workflows.",
          tags: ["AI Agents", "Workflow Automation", "Customer Support", "Data Extraction"],
        },
        {
          icon: "video",
          title: "Creative AI Videos",
          description: "AI-generated video content for marketing, product demos, and social media. Fast turnaround, consistent quality — no production crew required.",
          tags: ["AI Video", "Marketing", "Social Media", "Content"],
        },
      ],
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, services };
