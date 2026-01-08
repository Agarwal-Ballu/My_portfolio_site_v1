import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center z-10"
      >
        <motion.div
          variants={nameVariants}
          className="mb-6 relative inline-block"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
            BALRAM AGARWAL
          </h1>
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 blur-2xl rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-violet-400" />
          <p className="text-xl text-gray-300">Kolkata, India</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a
            href="tel:8910279511"
            className="flex items-center gap-2 text-gray-300 hover:text-violet-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>8910279511</span>
          </a>
          <a
            href="mailto:balramagarwal593@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-violet-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>balramagarwal593@gmail.com</span>
          </a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate software developer specializing in{' '}
          <span className="text-violet-400">AI/ML</span>,{' '}
          <span className="text-blue-400">Data Science</span>, and{' '}
          <span className="text-cyan-400">Full-Stack Development</span>. Currently interning at{' '}
          <span className="text-violet-400">Adani Enterprises</span> through PM Internship Scheme.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center gap-2 hover:from-violet-700 hover:to-blue-700 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
          <motion.a
            href="https://github.com/Agarwal-Ballu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center gap-2 hover:border-blue-500 transition-all"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
          <motion.a
            href="www.linkedin.com/in/balram-agarwal-4aba64353"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center gap-2 hover:border-cyan-500 transition-all"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-violet-500 rounded-full mx-auto flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-violet-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
