import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-4">
              Balram Agarwal
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate software developer specializing in AI/ML, Data Science, and Full-Stack Development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:balramagarwal593@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">balramagarwal593@gmail.com</span>
              </a>
              <a
                href="tel:8910279511"
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">8910279511</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kolkata, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Experience', 'Projects', 'Skills', 'Education'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-violet-400 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Balram Agarwal © 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
