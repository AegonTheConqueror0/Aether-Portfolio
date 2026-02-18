
import React from 'react';
import { motion } from 'framer-motion';

export const Connect: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-mono text-[10px] tracking-[0.8em] text-indigo-600 dark:text-indigo-400 uppercase font-black mb-12 block">Secure Interface Gateway</span>
        <h2 className="text-7xl md:text-9xl font-serif italic mb-16 text-black dark:text-white tracking-tighter leading-none">
          Initialize <br /> <span className="text-zinc-300 dark:text-indigo-300/10 not-italic font-black uppercase">Transmission.</span>
        </h2>
        
        <div className="max-w-xl mx-auto space-y-12">
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-slate-400 font-light leading-relaxed">
            AETHER PROTOCOL accepts a limited number of commissions per quarter. Connect to discuss system architecture, brand strategy, or faculty inquiries.
          </p>
          
          <div className="pt-10">
            <a 
              href="mailto:edgardorojas03@gmail.com" 
              className="group inline-flex flex-col items-center"
            >
              <span className="text-3xl md:text-5xl font-mono font-black text-black dark:text-white tracking-tighter hover:text-indigo-600 transition-colors duration-500">
                EDGARDOROJAS03@GMAIL.COM
              </span>
              <div className="w-0 group-hover:w-full h-1 bg-indigo-600 transition-all duration-700 mt-2"></div>
            </a>
          </div>
          
          <div className="pt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/5 dark:border-white/5 pt-16">
            {[
              { label: 'Layer_Github', url: 'https://github.com/AegonTheConqueror0' },
              { label: 'Layer_HCDC', url: '#' },
              { label: 'Layer_CV', url: '#' },
              { label: 'Layer_Insta', url: '#' }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-zinc-400 group-hover:text-indigo-500 transition-colors">
                  {link.label}
                </span>
                <div className="w-1 h-1 bg-zinc-200 dark:bg-slate-800 rounded-full group-hover:bg-indigo-500 group-hover:scale-150 transition-all"></div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
