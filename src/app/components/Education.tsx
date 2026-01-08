import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    institution: 'Techno Engineering College Banipur',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    score: '8.1 CGPA',
    duration: '2022 - 2026',
    color: 'from-violet-600 to-purple-600',
  },
  {
    institution: 'Khalsa Model Senior Secondary School',
    degree: 'Intermediate',
    field: 'Class XII',
    score: '75%',
    duration: '2021 - 2022',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    institution: 'Narayana Schools',
    degree: 'Matriculation',
    field: 'Class X',
    score: '82%',
    duration: '2019 - 2020',
    color: 'from-cyan-600 to-teal-600',
  },
];

export function Education() {
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
    hidden: { opacity: 0, x: 50 },
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
    <section id="education" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Education
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
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: -10 }}
              className="relative group"
            >
              <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-violet-600/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-6 h-6 text-violet-400" />
                      <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                    </div>
                    <p className={`text-xl font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                      {edu.degree} - {edu.field}
                    </p>
                    <p className="text-gray-400">{edu.duration}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-xl font-bold text-yellow-400">{edu.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
