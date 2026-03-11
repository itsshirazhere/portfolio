import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shiraz",
  lastName: "Yousuf",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Builder & Entrepreneur",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Connect with {person.firstName}</>,
  description: (
    <>
      You can send me your messahe or ask me anything. I'll get back to you as
      soon as possible.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shirazyousuf2017@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} — Builder & Entrepreneur`,
  description: `Shiraz builds scalable software, automates business workflows, and helps founders ship faster.`,
  headline: <>Engineer. Builder. Problem Solver.</>,
  subline: (
    <>
      Hi, I'm Shiraz — I build scalable software and help businesses grow
      through smart technology. From full-stack apps and AWS infrastructure to
      Meta Ads and AI automation, I turn ideas into results.
    </>
  ),
  badges: [
    "Full-Stack Dev",
    "AI Automation",
    "Meta Ads",
    "AWS Infra Setup",
    // "AWS Infra Cost Optimization",
  ],
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name} — a builder and entrepreneur who turns ideas into scalable products.`,
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
    description: (
      <>
        I'm Shiraz — an entrepreneur who lives to build. Whether it's a software
        product or a business strategy, I thrive on the process of creating
        something from nothing. My core drive is to help people achieve their
        goals faster and more efficiently through smart technology and efficient
        processes. When I'm not building, you'll likely find me on the football
        pitch, hitting the gym, or exploring new ways to solve real-world
        problems.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Healthflex",
        timeframe: "March 2025 - Present",
        role: "SDE",
        achievements: [
          <>Built and optimized a real-time chat system.</>,
          <>
            Developed a seamless appointment booking system with scheduling
            logic.
          </>,
          <>
            Engineered a robust notification system supporting in-app and push
            notifications.
          </>,
          <>
            Implemented CI/CD pipelines to automate deployment for faster
            delivery cycles.Built and optimized a real-time chat system.
          </>,
          <>
            Contributed to three different projects: Stance Health website,
            HealthFlex mobile app, and the Admin Dashboard.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/healthflex.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fleeguide",
        timeframe: "June 2024 - July 2024",
        role: "Full stack developer",
        achievements: [
          <>
            Created and implemented user interfaces, enhancing user engagement
            and experience.
          </>,
          <>Developed and integrated backend APIs with database connections.</>,
          <>
            Deployed frontend and backend services on AWS, achieving
            scalability.
          </>,
          <>Automated deployment processes using Terraform scripts.</>,
          <>Integrated the Meta WhatsApp API for automating messages.</>,
          <>
            Integrated the Razorpay API to enable seamless payment processing.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/fleeguide.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Idea2reality",
        timeframe: "Nov 2023 - Jan 2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Participated in the development of two React and two React Native
            projects (Qrooh, AKC, Qalb, and Fits-list).
          </>,
          <>
            Bootstrapped the Fits-list app independently and took a leadership
            role in its development.
          </>,
          <>
            Designed user interfaces, managed project roadmapping, integrated
            APIs, and streamlined deployment workflows.
          </>,
          <>
            Collaborated with team members to maintain best practices while
            delivering high-quality user experiences.
          </>,
          <>Built complex chat interfaces ensuring a smooth user experience.</>,
        ],

        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "IIIT Dharwad",
        description: <>Studied Electronics and communication engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "HTML, CSS, JavaScript, TypeScript, SQL",
        description: (
          <>
            Proficient in front-end and back-end web development using HTML,
            CSS, JavaScript, TypeScript, and SQL.
          </>
        ),
        images: [], // no images needed here, so this is empty
      },
      {
        title: "React.js, ReactNative, Expo, Redux.js",
        description: (
          <>
            Experienced in building modern web and mobile applications with
            React.js, React Native, Expo, and Redux.js.
          </>
        ),
        images: [], // no images here either
      },
      {
        title: "UI/UX Design",
        description: (
          <>
            Skilled in UI/UX design, creating seamless, user-friendly
            interfaces.
          </>
        ),
        images: [], // add images if required
      },
      {
        title: "Express.js, RESTful APIs",
        description: (
          <>
            Developed back-end applications using Express.js and RESTful APIs.
          </>
        ),
        images: [], // no images needed here
      },
      {
        title: "MongoDB, MySQL",
        description: (
          <>
            Experienced with MongoDB and MySQL for database management and
            optimization.
          </>
        ),
        images: [], // no images
      },
      {
        title: "Git version control, CI/CD",
        description: (
          <>
            Proficient in using Git for version control and setting up CI/CD
            pipelines for automated deployments.
          </>
        ),
        images: [], // no images
      },
      {
        title: "AWS, Docker",
        description: (
          <>
            Experienced in deploying applications on AWS and utilizing Docker
            for containerization.
          </>
        ),
        images: [], // no images
      },
      {
        title: "Next.js, Tailwind CSS, Node.js",
        description: (
          <>
            Specialized in building applications with Next.js, styling with
            Tailwind CSS, and backend development with Node.js.
          </>
        ),
        images: [], // no images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // {
    //   src: "/images/gallery/img-11.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-12.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-13.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-14.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
  ],
};

const services = {
  label: "Services",
  title: "Services & Solutions",
  description: `Work with ${person.name} — tech & business services tailored to your needs`,
  sections: [
    {
      title: "Tech & Development",
      subtitle: "End-to-end software engineering services",
      items: [
        {
          icon: "code",
          title: "Full-Stack Web Development",
          description:
            "Build fast, scalable web applications using React, Next.js, and Node.js. From MVPs to production-grade platforms.",
          tags: ["React", "Next.js", "Node.js", "TypeScript"],
        },
        {
          icon: "smartphone",
          title: "Mobile App Development",
          description:
            "Cross-platform iOS and Android apps with React Native and Expo — clean UX, real-time features, and app store ready.",
          tags: ["React Native", "Expo", "iOS", "Android"],
        },
        // {
        //   icon: "shield",
        //   title: "Infrastructure Cost Optimization",
        //   description:
        //       "Audit your cloud spend, eliminate waste, right-size resources, and implement reserved/spot strategies to cut AWS bills significantly.",
        //   tags: ["AWS", "Cost Analysis", "Reserved Instances"],
        // },
        {
          icon: "server",
          title: "AWS Infrastructure Setup",
          description:
              "Design and deploy production-ready AWS environments — VPCs, EC2, RDS, S3, IAM, load balancers, and full CI/CD pipelines.",
          tags: ["AWS", "Terraform", "Docker", "CI/CD", "Kubernetes"],
        },
      ],
    },
    {
      title: "Business & Growth",
      subtitle: "Technology-driven services to scale your business",
      items: [
        {
          icon: "barChart",
          title: "Meta Ads Setup & Management",
          description:
            "End-to-end Facebook and Instagram ad campaigns — audience research, creative strategy, A/B testing, and performance reporting.",
          tags: ["Facebook Ads", "Instagram Ads", "Retargeting", "ROAS"],
        },
        {
          icon: "chat",
          title: "WhatsApp Automation",
          description:
            "Automate customer conversations, order updates, and support flows using the WhatsApp Business API and custom workflows.",
          tags: ["WhatsApp API", "Chatbots", "Meta API", "Automation"],
        },
        {
          icon: "refresh",
          title: "AI Automation",
          description:
            "Leverage LLMs and AI agents to automate repetitive tasks, extract data from documents, and enhance customer support with intelligent responses.",
          tags: ["LLMs", "AI Agents", "OpenAI", "Workflow Automation"],
        },
      ],
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, services };
