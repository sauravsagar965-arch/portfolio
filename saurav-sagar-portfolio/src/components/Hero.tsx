import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Linkedin, Mail, Phone } from 'lucide-react';
import ResumeModal from './ResumeModal';

interface HeroProps {
  basics: any;
  achievements: any[];
  fullData: any;
}

const Hero: React.FC<HeroProps> = ({ basics, achievements, fullData }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 font-sans">
            {basics.name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-emerald-400 mb-8 tracking-wide uppercase font-mono">
            {basics.title}
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
            {basics.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-full overflow-hidden transition-all hover:bg-emerald-400 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => setIsResumeOpen(true)}
            className="group px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 transition-all hover:bg-white/10 active:scale-95 flex items-center gap-2"
          >
            Download Resume <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Top Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto"
        >
          {achievements.slice(0, 3).map((achievement, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group hover:border-emerald-500/50 transition-all"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2 font-mono">
                {achievement.item}
              </div>
              <p className="text-sm text-white/60 font-sans">
                {achievement.context}
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 text-white/40">
        <a href={`mailto:${basics.email}`} className="hover:text-emerald-400 transition-colors">
          <Mail size={20} />
        </a>
        <a href={basics.links[0].url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href={`tel:${basics.phone}`} className="hover:text-emerald-400 transition-colors">
          <Phone size={20} />
        </a>
      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={fullData}
      />
    </section>
  );
};

export default Hero;
