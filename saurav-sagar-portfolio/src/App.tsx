import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import resumeData from './data/resume.json';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020205] text-white selection:bg-emerald-500 selection:text-black">
      <AnimatePresence>
        {loading ? (
          <Splash
            key="splash"
            initials={resumeData.basics.initials}
            onComplete={() => setLoading(false)}
          />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Sticky Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
              <motion.div
                className="h-full bg-emerald-500"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            <AnimatedBackground />
            
            <Hero basics={resumeData.basics} achievements={resumeData.achievements} fullData={resumeData} />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Experience experience={resumeData.experience} />
              <Achievements achievements={resumeData.achievements} />
              <Skills skills={resumeData.skills} />
              <Projects projects={resumeData.projects} />
              <Education education={resumeData.education} certifications={resumeData.certifications} />
              <Footer basics={resumeData.basics} />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
