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
    title: 'Senior Software Engineer (Platform)',
    company: 'Appfire',
    period: 'October 2024 - Present',
    description: [
      'Leading the development of a product API SDK and contributing to cloud infrastructure initiatives to enhance developer productivity and streamline application deployment processes.',
      'Won an internal hackathon for developing an innovative tunnel solution for internal use.',
    ],
  },
  {
    title: 'Software Engineer (Platform)',
    company: 'Appfire',
    period: 'December 2023 - October 2024',
    description: [
      'Developed a serverless application platform, significantly reducing deployment times and improving developer productivity.',
      'Implemented secure cross-account deployment architecture for efficient resource management across multiple cloud environments.',
    ],
    iconType: 'cloud',
  },
  {
    title: 'Full Stack Engineer',
    company: 'PropertyLoop',
    period: 'March 2022 - December 2023',
    description: [
      'Led the development of a property management platform, integrating with CRM systems and implementing robust data security measures.',
      'Created marketing automation tools that increased platform traffic by 80% through efficient data synchronization across multiple channels.',
    ],
    iconType: 'code',
  },
  {
    title: 'Software Developer',
    company: 'Insnapsys',
    period: 'March 2021 - March 2022',
    description: [
      'Received company growth booster award for exceptional contributions to e-commerce solutions.',
      'Built and managed an operator portal for warehouse operations and developed services to handle thousands of orders daily.',
      'Improved system efficiency by 25% through enhanced documentation and testing practices.',
    ],
    iconType: 'code',
  },
  {
    title: 'Software Developer Intern',
    company: 'Insnapsys',
    period: 'July 2020 - March 2021',
    description: [
      'Developed a comprehensive health and fitness mobile application integrating with popular fitness tracking platforms.',
    ],
    iconType: 'mobile',
  },
];

export const heroContent = {
  greeting: "Hi, I'm",
  name: 'Bhuvesh Dhiman',
  title: 'Senior Software Engineer',
  paragraphs: [
    "I'm not just a software engineer. I'm a problem solver, a system architect, and a force multiplier for teams. I specialize in building scalable platforms, cloud infrastructure, and developer tooling, crafting solutions that simplify complexity and drive efficiency.",
    'What truly sets me apart is my attention to detail, clarity in communication, and ability to bridge the gap between technical and non-technical teams. I lead by influence, inspiring collaboration and aligning teams toward a shared vision.',
    "Let's build something extraordinary.",
  ],
  ctaText: 'Explore',
};

export const aboutContent = {
  title: 'About Me',
  whoIAm: {
    title: 'Who I Am',
    paragraphs: [
      "I'm Bhuvesh Dhiman, a software engineer driven by a lifelong curiosity about technology. Ever since I was a kid, I found myself fascinated by computers and the internet, constantly exploring how software and hardware work. This passion led me to pursue computer science and grow into the engineer I am today.",
      'My journey has taken me from building full-stack applications to designing cloud infrastructure and developing scalable platforms. I specialize in cloud-native technologies like AWS, Kubernetes, and serverless architectures, always seeking to simplify complex systems and create solutions that are both powerful and efficient.',
      'What truly makes me stand out is how I connect with people. I lead by influence, guiding teams by fostering collaboration and ensuring everyone feels heard and aligned. I have a knack for breaking down complex ideas into simple concepts, making it easy for both technical and non-technical teams to work together.',
      'At heart, I believe engineering is not just about building software. It is about creating environments where innovation thrives, ideas flow freely, and teams succeed together. Every project I take on reflects this mindset.',
    ],
  },
  myApproach: {
    title: 'My Approach',
    paragraphs: [
      'My passion for clean code and adherence to best practices drives me to continuously improve my skills and stay up to date with the latest industry trends, including advancements in AI.',
      'I excel in positive, stable, and process-driven environments with a clear vision, where I can tackle new challenges head-on and deliver tangible results. People genuinely enjoy collaborating with me, not just because of my technical input but because I bring clarity and a sense of ease to every meeting.',
      'I create a positive and productive vibe that helps teams move forward with confidence, ensuring everyone feels heard and aligned with our goals.',
    ],
  },
  skillsTitle: 'My Skills',
};

export interface Skill {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
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
  { name: 'AWS', icon: 'FaAws' },
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
