'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaCloud } from 'react-icons/fa';
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

const About = () => {
  const skills = [
    { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-5 h-5" /> },
    { name: 'React', icon: <FaReact className="w-5 h-5" /> },
    { name: 'Redux', icon: <SiRedux className="w-5 h-5" /> },
    { name: 'React Native', icon: <FaReact className="w-5 h-5" /> },
    { name: 'Express.js', icon: <SiExpress className="w-5 h-5" /> },
    { name: 'MySQL', icon: <SiMysql className="w-5 h-5" /> },
    { name: 'NoSQL', icon: <SiMongodb className="w-5 h-5" /> },
    { name: 'Azure', icon: <FaCloud className="w-5 h-5" /> },
    { name: 'AWS', icon: <FaAws className="w-5 h-5" /> },
    { name: 'Docker', icon: <FaDocker className="w-5 h-5" /> },
    { name: 'Fargate', icon: <FaAws className="w-5 h-5" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="w-5 h-5" /> },
    { name: 'EKS', icon: <SiAmazoneks className="w-5 h-5" /> },
    { name: 'Infrastructure as Code', icon: <FaAws className="w-5 h-5" /> },
    { name: 'CDK', icon: <FaAws className="w-5 h-5" /> },
    { name: 'Serverless', icon: <SiAwslambda className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full"
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <div className="space-y-4 text-foreground">
              <p>
                I'm Bhuvesh Dhiman, a software engineer driven by a lifelong curiosity about
                technology. Ever since I was a kid, I found myself fascinated by computers and the
                internet, constantly exploring how software and hardware work. This passion led me
                to pursue computer science and grow into the engineer I am today.
              </p>
              <p>
                My journey has taken me from building full-stack applications to designing cloud
                infrastructure and developing scalable platforms. I specialize in cloud-native
                technologies like AWS, Kubernetes, and serverless architectures, always seeking to
                simplify complex systems and create solutions that are both powerful and efficient.
              </p>
              <p>
                What truly makes me stand out is how I connect with people. I lead by influence,
                guiding teams by fostering collaboration and ensuring everyone feels heard and
                aligned. I have a knack for breaking down complex ideas into simple concepts, making
                it easy for both technical and non-technical teams to work together.
              </p>
              <p>
                At heart, I believe engineering is not just about building software. It is about
                creating environments where innovation thrives, ideas flow freely, and teams succeed
                together. Every project I take on reflects this mindset.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full"
          >
            <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
            <div className="space-y-4 text-foreground">
              <p>
                My passion for clean code and adherence to best practices drives me to continuously
                improve my skills and stay up to date with the latest industry trends, including
                advancements in AI.
              </p>
              <p>
                I excel in fast-paced, stable, and process-driven environments with a clear vision,
                where I can tackle new challenges head-on and deliver tangible results. People
                genuinely enjoy collaborating with me, not just because of my technical input but
                because I bring clarity and a sense of ease to every meeting.
              </p>
              <p>
                I create a positive and productive vibe that helps teams move forward with
                confidence, ensuring everyone feels heard and aligned with our goals.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">My Skills</h3>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2"
              >
                <span className="text-primary">{skill.icon}</span>
                <span className="text-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
