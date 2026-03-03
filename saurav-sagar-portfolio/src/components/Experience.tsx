import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Calendar, Briefcase } from 'lucide-react';

interface ExperienceProps {
  experience: any[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const [expandedId, setExpandedId] = useState<string | null>(experience[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-sans">
          Experience
        </h2>
        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative p-6 rounded-2xl border transition-all cursor-pointer ${
              expandedId === exp.id
                ? 'bg-white/10 border-emerald-500/50 shadow-2xl shadow-emerald-500/10'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
            onClick={() => toggleExpand(exp.id)}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-white/60 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{exp.dates}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    expandedId === exp.id ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </div>
            </div>

            <AnimatePresence>
              {expandedId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 pb-4 space-y-4">
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 leading-relaxed">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.metrics.map((metric: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
