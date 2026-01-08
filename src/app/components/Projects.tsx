import { motion } from 'motion/react';
import { Code, Cpu, BarChart3, Zap, Brain, FileCode } from 'lucide-react';

const projects = [
  {
    title: 'Proactive Care',
    subtitle: 'Solar and Wind Analysis using AI/ML',
    description:
      "Worked on a project at Adani Enterprises focused on using AI to analyze real-time time series data from industrial systems to predict anomalies, identify maintenance needs, and monitor system health in advance. Contributing to AI model development, experimentation and data annotation to improve prediction accuracy.",
    icon: Cpu,
    tech: ['AI/ML', 'Time Series', 'Data Annotation', 'Predictive Analytics'],
    color: 'from-violet-600 to-purple-600',
  },
  {
    title: 'Amazon Sales Report Visualization',
    subtitle: 'Data Analytics & Visualization',
    description:
      'Analyzed and visualized Amazon sales data using Power BI and Excel, performing comprehensive data cleaning and analysis to derive actionable insights.',
    icon: BarChart3,
    tech: ['Power BI', 'Excel', 'Data Visualization', 'Analytics'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Data Connectors',
    subtitle: 'Professional Internship Project',
    description:
      'Completed a professional internship project at Adani Enterprise Ltd. Designed and implemented a modular data ingestion and integration pipeline to connect disparate data sources.',
    icon: Zap,
    tech: ['Data Integration', 'ETL', 'Pipeline Design', 'Azure'],
    color: 'from-cyan-600 to-teal-600',
  },
  {
    title: 'AI-Based Drone Image Analytics',
    subtitle: 'Computer Vision System',
    description:
      'Developed and managed an AI-based drone image analytics system for automated electrical tower monitoring, utilizing an end-to-end Computer Vision pipeline. Involved dataset creation, critical component annotation, and training a YOLO object detection model.',
    icon: Brain,
    tech: ['Computer Vision', 'YOLO', 'Object Detection', 'Image Processing'],
    color: 'from-pink-600 to-rose-600',
  },
  {
    title: 'PRISM',
    subtitle: 'Platform for Real-time Internship Selection & Matching',
    description:
      'Developed an AI/ML powered internship allocation system using Collaborative filtering and cosine matching to personalize content and services. Project submitted under SIH.',
    icon: Code,
    tech: ['AI/ML', 'Collaborative Filtering', 'Recommendation System', 'Python'],
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'AI Code Evaluator',
    subtitle: 'Final Year Project (In Development)',
    description:
      'Developing an intelligent code evaluation platform that automatically assesses programming for correctness, efficiency, and style using Machine Learning and Generative AI.',
    icon: FileCode,
    tech: ['GenAI', 'Machine Learning', 'Code Analysis', 'NLP'],
    color: 'from-green-600 to-emerald-600',
  },
];

export function Projects() {
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Projects
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
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`
                  }}
                />
                
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-violet-600/50 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-3`}>
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
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
