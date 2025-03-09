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
  logo: string;
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
    <section id="experience" className="py-24 px-4 md:px-8 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">
            My professional journey and work experience
          </h2>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 w-10 h-10 bg-primary rounded-full border-4 border-gray-900 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  {exp.icon || <FaBuilding className="text-white" />}
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-4">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
                    <div className="flex items-center text-gray-300 font-medium">
                      {companyLinks[exp.company]?.logo && (
                        <div className="relative w-12 h-12 mr-4">
                          <Image
                            src={companyLinks[exp.company].logo!}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain dark:invert"
                            sizes="48px"
                            priority
                          />
                        </div>
                      )}
                      <a
                        href={companyLinks[exp.company]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary flex items-center text-lg group"
                      >
                        {exp.company}
                        <FaExternalLinkAlt className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaCalendarAlt className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  {exp.description.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-base leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
