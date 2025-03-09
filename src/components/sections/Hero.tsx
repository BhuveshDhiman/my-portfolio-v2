'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-center"
            >
              Hi, I'm <span className="text-primary">Bhuvesh Dhiman</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-secondary mb-8 text-center"
            >
              Senior Software Engineer
            </motion.h2>
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base md:text-lg text-foreground mx-auto"
              >
                Hi, I'm Bhuvesh Dhiman. I'm not just a software engineer. I'm a problem solver, a
                system architect, and a force multiplier for teams. I specialize in building
                scalable platforms, cloud infrastructure, and developer tooling, crafting solutions
                that simplify complexity and drive efficiency. Whether it's designing serverless
                architectures, optimizing Kubernetes deployments, or creating intuitive SDKs, I
                ensure technology works smarter, not harder.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-base md:text-lg text-foreground mx-auto"
              >
                What truly sets me apart is my attention to detail, clarity in communication, and
                ability to bridge the gap between technical and non-technical teams. I lead by
                influence, inspiring collaboration and aligning teams toward a shared vision without
                relying on authority. My soft skills make me the person everyone loves working with.
                I break down complex ideas into clear, actionable insights, making collaboration
                seamless and ensuring projects move forward with purpose.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base md:text-lg text-foreground mx-auto"
              >
                Let's build something extraordinary.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex space-x-4 pt-4 justify-center"
          >
            <a
              href="https://github.com/bhuveshdhiman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/bhuveshdhiman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
