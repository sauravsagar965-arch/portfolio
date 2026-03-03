import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  basics: any;
}

const Footer: React.FC<FooterProps> = ({ basics }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 bg-white/5 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-sans">
            Let's Connect
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            If you’re working on improving processes, using data to make decisions, or building something meaningful in operations, I’d love to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-4xl mb-16">
          <a
            href={`mailto:${basics.email}`}
            className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <span className="text-white/80 font-medium">{basics.email}</span>
          </a>

          <a
            href={`tel:${basics.phone}`}
            className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <span className="text-white/80 font-medium">{basics.phone}</span>
          </a>

          <a
            href={basics.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <span className="text-white/80 font-medium">LinkedIn</span>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <span className="text-white/80 font-medium">{basics.location}</span>
          </div>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full bg-emerald-500 text-black font-bold shadow-xl shadow-emerald-500/20"
        >
          <ArrowUp size={24} />
        </motion.button>

        <div className="mt-16 text-white/20 text-sm font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} {basics.name} • Built with Precision
        </div>
      </div>
    </footer>
  );
};

export default Footer;
