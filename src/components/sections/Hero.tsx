'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Hi, I'm <span className="text-primary">Bhuvesh Dhiman</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 font-medium"
            >
              Senior Software Engineer
            </motion.h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300"
            >
              I'm not just a software engineer. I'm a problem solver, a system architect, and a
              force multiplier for teams. I specialize in building scalable platforms, cloud
              infrastructure, and developer tooling, crafting solutions that simplify complexity and
              drive efficiency.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg md:text-xl text-gray-300"
            >
              What truly sets me apart is my attention to detail, clarity in communication, and
              ability to bridge the gap between technical and non-technical teams. I lead by
              influence, inspiring collaboration and aligning teams toward a shared vision without
              relying on authority. My soft skills make me the person everyone loves working with. I
              break down complex ideas into clear, actionable insights, making collaboration
              seamless and ensuring projects move forward with purpose.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-primary font-semibold"
            >
              Let's build something extraordinary.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6"
          >
            <Link
              href="#about"
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Explore
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/bhuveshdhiman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/bhuveshdhiman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
