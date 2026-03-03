import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Layout, Settings } from 'lucide-react';

interface SkillsProps {
  skills: any[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Core Expertise': return <Settings size={20} />;
      case 'Tools & Tech': return <Database size={20} />;
      case 'Specialized Skills': return <Code size={20} />;
      default: return <Layout size={20} />;
    }
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-sans">
          Technical Expertise
        </h2>
        <p className="text-white/60 max-w-xl mx-auto">
          A comprehensive toolkit for operations management and data-driven decision making.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-8 text-emerald-400">
              <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:scale-110 transition-transform">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {skillGroup.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white/5 text-white/70 text-sm font-medium border border-white/10 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
