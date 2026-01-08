import { motion } from 'motion/react';
import { Trophy, Users, Award, Target } from 'lucide-react';

const activities = [
  {
    title: 'Team Lead & Runner-Up',
    event: 'Smart India Hackathon (SIH) 2025',
    description: 'Led team AI Amigos 2.0 to a runner-up finish, showcasing leadership in developing an innovative solution.',
    icon: Trophy,
    color: 'from-yellow-600 to-orange-600',
  },
  {
    title: 'Winning Team Member',
    event: 'Smart India Hackathon (SIH) 2024',
    description: 'Contributed to the winning AI Amigos team for an AI-based solution recognized for innovation and strong teamwork.',
    icon: Award,
    color: 'from-violet-600 to-purple-600',
  },
  {
    title: 'Two-Time Tug of War Captain & Champion',
    event: 'College Sports Meet',
    description: 'Led the college team as Captain for two consecutive years, securing championship titles in both annual sports meets.',
    icon: Target,
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Winning College Cricket Team Member',
    event: 'Internal Tournaments',
    description: "Active player contributing to the college cricket team's consecutive winning performance in internal tournaments.",
    icon: Users,
    color: 'from-green-600 to-emerald-600',
  },
];

export function Activities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="activities" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Activities & Achievements
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${activity.color.split(' ')[1]}, ${activity.color.split(' ')[3]})`
                  }}
                />
                
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-violet-600/50 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${activity.color} bg-clip-text text-transparent mb-3`}>
                    {activity.event}
                  </p>
                  <p className="text-gray-400 leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
