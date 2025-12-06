'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaCloud,
  FaServer,
  FaBox,
  FaBrain,
  FaStream,
  FaTools,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiAmazoneks,
  SiAwslambda,
} from 'react-icons/si';
import { skills as skillsData } from '@/data/content';

const About = () => {
  // Map icon string names to actual React icon components
  const iconMap: Record<string, React.ReactNode> = {
    SiTypescript: <SiTypescript className="w-5 h-5" />,
    SiJavascript: <SiJavascript className="w-5 h-5" />,
    FaNodeJs: <FaNodeJs className="w-5 h-5" />,
    FaReact: <FaReact className="w-5 h-5" />,
    SiRedux: <SiRedux className="w-5 h-5" />,
    SiExpress: <SiExpress className="w-5 h-5" />,
    SiMysql: <SiMysql className="w-5 h-5" />,
    SiMongodb: <SiMongodb className="w-5 h-5" />,
    FaAws: <FaAws className="w-5 h-5" />,
    FaCloud: <FaCloud className="w-5 h-5" />,
    FaDocker: <FaDocker className="w-5 h-5" />,
    SiKubernetes: <SiKubernetes className="w-5 h-5" />,
    SiAmazoneks: <SiAmazoneks className="w-5 h-5" />,
    SiAwslambda: <SiAwslambda className="w-5 h-5" />,
    FaServer: <FaServer className="w-5 h-5" />,
    FaBox: <FaBox className="w-5 h-5" />,
    FaBrain: <FaBrain className="w-5 h-5" />,
    FaStream: <FaStream className="w-5 h-5" />,
    FaTools: <FaTools className="w-5 h-5" />,
  };

  const skills = skillsData.map((skill) => ({
    name: skill.name,
    icon: iconMap[skill.icon] || <FaAws className="w-5 h-5" />,
  }));

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Who I Am</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm Bhuvesh Dhiman, a Senior Software Engineer and AI-native platform engineer
                  driven by a long-standing curiosity about how systems work, from hardware to
                  distributed applications. That curiosity led me into computer science, full-stack
                  development, and eventually platform and infrastructure engineering.
                </p>
                <p>
                  Over the years, I've built full-stack applications, designed cloud-native
                  platforms, and worked on developer tooling that powers teams at scale. I work
                  heavily with AWS, Kubernetes, serverless architectures, and modern
                  TypeScript/Node.js ecosystems to create systems that are both robust and easy to
                  work with.
                </p>
                <p>
                  Today, my focus is on AI-native development: using natural language, coding
                  agents, and automation to accelerate delivery without sacrificing architecture,
                  reliability, or security. I don't treat AI as a shortcut; I treat it as a force
                  multiplier paired with solid engineering fundamentals.
                </p>
                <p>
                  I lead by influence, not titles. I care about alignment, clear communication, and
                  making complex ideas simple enough that both technical and non-technical
                  stakeholders can make good decisions together. For me, engineering isn't just
                  about shipping features. It's about building an environment where people, systems,
                  and ideas can scale together.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">My Approach</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I build systems with a balance of speed and rigor. I rely on clean architecture,
                  clear boundaries, and solid testing, and then layer AI-native workflows on top to
                  move faster without losing control.
                </p>
                <p>
                  In practice, that means using AI agents for prototyping, scaffolding, and
                  boilerplate, while relying on my engineering experience for design decisions,
                  critical paths, reviews, and production-level quality. AI accelerates the work,
                  but it never replaces accountability.
                </p>
                <p>
                  I do my best work in environments with a clear vision and high trust, where teams
                  value thoughtful processes, honest feedback, and long-term maintainability. People
                  enjoy working with me because I bring structure without stress. I keep discussions
                  grounded, make trade-offs explicit, and help teams move forward with confidence.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-primary">{skill.icon}</span>
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
