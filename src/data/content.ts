export interface CompanyLink {
  url: string;
  logo: string;
}

export const companyLinks: Record<string, CompanyLink> = {
  Appfire: {
    url: 'https://appfire.com/',
    logo: '/companies/appfire-logo.png',
  },
  PropertyLoop: {
    url: 'https://www.propertyloop.co.uk/',
    logo: '/companies/propertyloop-logo.png',
  },
  Insnapsys: {
    url: 'https://www.insnapsys.com/',
    logo: '/companies/insnapsys-logo.png',
  },
};

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  iconType?: string;
}

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Appfire',
    period: 'October 2024 - Present',
    description: [
      'Leading product oriented engineering by shaping requirements, refining solution direction, and architecting systems using natural language driven development',
      'Using AI agents for prototypes, scaffolding, and initial code generation while applying engineering review and refinement for high quality output',
      'Converting product ideas into stable and production ready systems by enforcing clarity in design, structure, and maintainability',
      'Improving developer experience by introducing AI enabled workflows and raising the standard for modern engineering practices',
      'Influencing engineering direction across teams by combining product thinking with engineering depth',
      'Designed and built scalable tools for the Atlassian Forge platform, improving reliability, security, and usability under strict rate limits',
      'Built components of a flexible platform supporting both serverless and EKS based architectures to give teams infra choice',
      'Created internal tooling and enhancements that increased developer productivity across teams',
      'Worked closely with product and platform teams to translate product goals into technical plans focused on clarity, performance, and long term maintainability',
    ],
  },
  {
    title: 'Software Engineer (Platform)',
    company: 'Appfire',
    period: 'December 2023 - October 2024',
    description: [
      'Contributed to a serverless application platform built with AWS and CDK, reducing deployment time and improving developer productivity',
      'Built major parts of a Kubernetes based platform using EKS Blueprints and integrated tools such as KEDA, Sumo Logic, Wiz, and ElastiCache',
      'Implemented secure cross account deployments with Bitbucket Pipelines using OIDC and centralized IAM roles',
      'Developed CLI tooling and infra components that streamlined platform operations for internal teams',
      'Worked with platform and product teams to evolve CI CD and operational workflows for better efficiency',
    ],
    iconType: 'cloud',
  },
  {
    title: 'Full Stack Engineer',
    company: 'PropertyLoop',
    period: 'March 2022 - December 2023',
    description: [
      'Led the development of a property management platform, integrating with CRM systems and implementing robust data security measures',
      'Created marketing automation tools that increased platform traffic by 80% through efficient data synchronization across multiple channels',
    ],
    iconType: 'code',
  },
  {
    title: 'Software Developer',
    company: 'Insnapsys',
    period: 'March 2021 - March 2022',
    description: [
      'Received company growth booster award for exceptional contributions to e-commerce solutions',
      'Built and managed an operator portal for warehouse operations and developed services to handle thousands of orders daily',
      'Improved system efficiency by 25% through enhanced documentation and testing practices',
    ],
    iconType: 'code',
  },
  {
    title: 'Software Developer Intern',
    company: 'Insnapsys',
    period: 'July 2020 - March 2021',
    description: [
      'Developed a comprehensive health and fitness mobile application integrating with popular fitness tracking platforms',
    ],
    iconType: 'mobile',
  },
];

export const heroContent = {
  greeting: "Hi, I'm",
  name: 'Bhuvesh Dhiman',
  title: 'AI-Native Senior Software Engineer with more than 5 years experience',
  paragraphs: [
    'I build scalable platforms, cloud infrastructure, and developer tooling that help teams ship faster with confidence. I specialize in turning complex product ideas into reliable, production-ready systems.',
    'I combine deep engineering fundamentals with AI-native development, using natural language, coding agents, and automation to accelerate delivery while keeping architecture, performance, and maintainability in focus.',
    'What sets me apart is clarity: I bridge the gap between product and engineering, communicate trade-offs clearly, and align teams around a shared technical direction.',
    "Let's build something extraordinary",
  ],
  ctaText: 'Explore',
};

export const aboutContent = {
  title: 'About Me',
  whoIAm: {
    title: 'Who I Am',
    paragraphs: [
      "I'm Bhuvesh Dhiman, a Senior Software Engineer and AI-native platform engineer driven by a long-standing curiosity about how systems work, from hardware to distributed applications. That curiosity led me into computer science, full-stack development, and eventually platform and infrastructure engineering.",
      "Over the years, I've built full-stack applications, designed cloud-native platforms, and worked on developer tooling that powers teams at scale. I work heavily with AWS, Kubernetes, serverless architectures, and modern TypeScript/Node.js ecosystems to create systems that are both robust and easy to work with.",
      "Today, my focus is on AI-native development: using natural language, coding agents, and automation to accelerate delivery without sacrificing architecture, reliability, or security. I don't treat AI as a shortcut; I treat it as a force multiplier paired with solid engineering fundamentals.",
      "I lead by influence, not titles. I care about alignment, clear communication, and making complex ideas simple enough that both technical and non-technical stakeholders can make good decisions together. For me, engineering isn't just about shipping features. It's about building an environment where people, systems, and ideas can scale together.",
    ],
  },
  myApproach: {
    title: 'My Approach',
    paragraphs: [
      'I build systems with a balance of speed and rigor. I rely on clean architecture, clear boundaries, and solid testing, and then layer AI-native workflows on top to move faster without losing control.',
      'In practice, that means using AI agents for prototyping, scaffolding, and boilerplate, while relying on my engineering experience for design decisions, critical paths, reviews, and production-level quality. AI accelerates the work, but it never replaces accountability.',
      'I do my best work in environments with a clear vision and high trust, where teams value thoughtful processes, honest feedback, and long-term maintainability. People enjoy working with me because I bring structure without stress. I keep discussions grounded, make trade-offs explicit, and help teams move forward with confidence.',
    ],
  },
  skillsTitle: 'My Skills',
};

export interface Skill {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: 'Platform Engineering', icon: 'FaServer' },
  { name: 'Product Engineering', icon: 'FaBox' },
  { name: 'AI-native Development', icon: 'FaBrain' },
  { name: 'LLM-powered Workflows', icon: 'FaStream' },
  { name: 'Developer Tooling', icon: 'FaTools' },
  { name: 'AWS', icon: 'FaAws' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'Node.js', icon: 'FaNodeJs' },
  { name: 'React', icon: 'FaReact' },
  { name: 'Redux', icon: 'SiRedux' },
  { name: 'React Native', icon: 'FaReact' },
  { name: 'Express.js', icon: 'SiExpress' },
  { name: 'MySQL', icon: 'SiMysql' },
  { name: 'NoSQL', icon: 'SiMongodb' },
  { name: 'Azure', icon: 'FaCloud' },
  { name: 'Docker', icon: 'FaDocker' },
  { name: 'Fargate', icon: 'FaAws' },
  { name: 'Kubernetes', icon: 'SiKubernetes' },
  { name: 'EKS', icon: 'SiAmazoneks' },
  { name: 'CDK', icon: 'FaAws' },
  { name: 'Serverless', icon: 'SiAwslambda' },
  { name: 'Infrastructure as Code', icon: 'FaAws' },
];

export const experienceContent = {
  title: 'My professional journey and work experience',
};
