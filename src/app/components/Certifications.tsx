import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Academy Cloud Foundation and Machine Learning Foundation',
    issuer: 'AWS',
    description: 'Completed intensive AWS Academy training, encompassing Cloud Foundation principles and Machine Learning Foundation with practical introduction to ML pipelines.',
    color: 'from-orange-600 to-amber-600',
  },
  {
    title: 'Data Science Orientation',
    issuer: 'Coursera',
    description: 'Gained introductory knowledge of the data science lifecycle, including data analysis, visualization, and basic machine learning concepts.',
    color: 'from-violet-600 to-purple-600',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Infosys Springboard',
    description: 'Gained foundational understanding in data science principles, techniques, and practical applications.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Microsoft Power BI',
    issuer: 'Jobaaj Learnings and Newton School',
    description: 'Data Visualization and Analysis using Power BI.',
    color: 'from-yellow-600 to-orange-600',
  },
  {
    title: 'MySQL',
    issuer: 'Newton School',
    description: 'Comprehensive course covering SQL fundamentals, complex queries, joins, subqueries, and database design.',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'Website UI/UX',
    issuer: 'Simplilearn',
    description: 'Using tools like Midjourney for visuals, ChatGPT for content and UX ideas, and Editor X, Figma for building responsive designs.',
    color: 'from-pink-600 to-rose-600',
  },
  {
    title: 'ChatGPT and AI Tools',
    issuer: 'Be10x',
    description: 'Using AI tools effectively for various applications.',
    color: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Project Management Professional (PMP)',
    issuer: 'Upgrad',
    description: 'Project Management fundamentals and best practices.',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'Method of Space Science Research and Space Exploration Theory',
    issuer: 'IIRS - ISRO',
    description: 'Space science research methodologies and exploration theory.',
    color: 'from-blue-600 to-indigo-600',
  },
];

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="certifications" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Certifications
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
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl -z-10"
                style={{
                  background: `linear-gradient(135deg, ${cert.color.split(' ')[1]}, ${cert.color.split(' ')[3]})`
                }}
              />
              
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-violet-600/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-violet-400 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-3`}>
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
