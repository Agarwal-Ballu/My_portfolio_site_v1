import { motion } from 'motion/react';
import { Code2, Database, Wrench, MessageSquare, Lightbulb, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'C', 'SQL'],
    color: 'from-violet-600 to-purple-600',
  },
  {
    title: 'Data & ML',
    icon: Database,
    skills: ['Machine Learning', 'Artificial Intelligence', 'PostgreSQL', 'NumPy', 'Pandas', 'Scikit-learn','Agentic AI'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Power BI', 'MySQL', 'Microsoft Excel', 'Linux', 'Matplotlib', 'CrewAI', 'Databricks', 'Microsoft Azure','Data Bricks'],
    color: 'from-cyan-600 to-teal-600',
  },
  {
    title: 'Soft Skills',
    icon: MessageSquare,
    skills: ['Communication', 'Presentation', 'Critical Thinking', 'Time Management','Leadership'],
    color: 'from-pink-600 to-rose-600',
  },
  {
    title: 'Other Skills',
    icon: Lightbulb,
    skills: ['Data Analytics', 'Spreadsheets', 'Microsoft Office'],
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'Additional Courses',
    icon: TrendingUp,
    skills: ['Data Structures', 'Data Science'],
    color: 'from-green-600 to-emerald-600',
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`
                  }}
                />
                
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-violet-600/50 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1.5 bg-gradient-to-r ${category.color} rounded-full text-sm text-white font-medium`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
