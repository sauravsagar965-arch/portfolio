import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, TrendingUp, Award } from 'lucide-react';

interface AchievementsProps {
  achievements: any[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'metric': return <TrendingUp size={24} />;
      case 'win': return <Trophy size={24} />;
      case 'leadership': return <Target size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <section className="py-24 px-6 bg-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-sans">
            Impact & Achievements
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Measurable results and key milestones achieved throughout my career in operations and analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                {getIcon(achievement.type)}
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl font-bold text-white mb-4 font-mono group-hover:text-emerald-400 transition-colors">
                  {achievement.item}
                </div>
                <p className="text-white/60 leading-relaxed font-sans">
                  {achievement.context}
                </p>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
