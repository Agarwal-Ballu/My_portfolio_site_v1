import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Adani Enterprises (Adani AI Labs)',
    role: 'Data Science Intern',
    location: 'India',
    duration: 'June 2025 - Dec 2025',
    description:
      "Gained industrial experience as a Data Science Intern . Worked with real-world data, helped the team by cleaning and labeling it so that AI models can learn better. It's been a great hands-on experience that's helped me understand how data science is applied in real industry projects.",
    color: 'from-violet-600 to-purple-600',
  },
  {
    company: 'Ottox.in',
    role: 'AI Tools & Prompt Engineering',
    location: 'Remote',
    duration: 'May 2025 - July 2025',
    description:
      'Honed critical skills in AI Tools & Prompt Engineering and Content Creation & SEO, making significant contributions to the team\'s objectives.',
    color: 'from-blue-600 to-cyan-600',
  },
];

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              className="relative group"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-violet-600/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-6 h-6 text-violet-400" />
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <p className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
