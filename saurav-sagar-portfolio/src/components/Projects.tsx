import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layout } from 'lucide-react';

interface ProjectsProps {
  projects: any[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

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
          Key Projects
        </h2>
        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Layout size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs font-mono border border-white/10">
                    {project.stack}
                  </span>
                </div>
                <ul className="space-y-3">
                  {project.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
