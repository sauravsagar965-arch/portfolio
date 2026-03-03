import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

interface EducationProps {
  education: any[];
  certifications: string[];
}

const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
            <GraduationCap size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white font-sans">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l border-white/10 group">
              <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#020205] group-hover:scale-125 transition-transform" />
              <div className="mb-1 text-emerald-400 font-mono text-sm">{edu.dates}</div>
              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-white/60">{edu.institution}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
            <Award size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white font-sans">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-white/80 font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
