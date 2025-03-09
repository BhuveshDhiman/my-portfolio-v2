'use client';

import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaCalendarAlt,
  FaCode,
  FaServer,
  FaCloud,
  FaMobileAlt,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import Image from 'next/image';

interface CompanyLink {
  url: string;
  logo?: string;
}

const companyLinks: Record<string, CompanyLink> = {
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

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer (Platform)',
      company: 'Appfire',
      period: 'October 2024 - Present',
      description: [
        'Leading the development of a product API SDK and contributing to cloud infrastructure initiatives to enhance developer productivity and streamline application deployment processes.',
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
      icon: <FaCloud className="text-primary" />,
    },
    {
      title: 'Full Stack Engineer',
      company: 'PropertyLoop',
      period: 'March 2022 - December 2023',
      description: [
        'Led the development of a property management platform, integrating with CRM systems and implementing robust data security measures.',
        'Created marketing automation tools that increased platform traffic by 80% through efficient data synchronization across multiple channels.',
      ],
      icon: <FaCode className="text-primary" />,
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
      icon: <FaServer className="text-primary" />,
    },
    {
      title: 'Software Developer Intern',
      company: 'Insnapsys',
      period: 'July 2020 - March 2021',
      description: [
        'Developed a comprehensive health and fitness mobile application integrating with popular fitness tracking platforms.',
      ],
      icon: <FaMobileAlt className="text-primary" />,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-secondary">My professional journey and work experience.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 w-10 h-10 bg-primary rounded-full border-4 border-white dark:border-dark flex items-center justify-center">
                  {exp.icon || <FaBuilding className="text-white" />}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                    <div className="flex items-center text-primary font-medium">
                      {companyLinks[exp.company]?.logo && (
                        <div className="relative w-16 h-16 mr-4">
                          <Image
                            src={companyLinks[exp.company].logo!}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain dark:invert"
                            sizes="(max-width: 768px) 48px, 64px"
                            priority
                          />
                        </div>
                      )}
                      <a
                        href={companyLinks[exp.company]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center text-lg"
                      >
                        {exp.company}
                        <FaExternalLinkAlt className="ml-2 text-sm" />
                      </a>
                    </div>
                    <div className="flex items-center text-base text-secondary">
                      <FaCalendarAlt className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  {exp.description.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-foreground text-sm md:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
